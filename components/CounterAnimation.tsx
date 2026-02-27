'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterAnimationProps {
  end: number;
  duration?: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export default function CounterAnimation({
  end,
  duration = 2000,
  label,
  prefix = '',
  suffix = '',
}: CounterAnimationProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress >= 1) {
        setCount(end);
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-7xl md:text-8xl font-bold text-[#D4A94A] font-poppins leading-none">
        {prefix}{count}{suffix}
      </div>
      <p className="text-[#8A9BB5] text-lg mt-4 font-poppins font-medium max-w-xs mx-auto">
        {label}
      </p>
    </div>
  );
}
