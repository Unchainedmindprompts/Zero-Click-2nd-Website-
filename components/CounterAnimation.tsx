'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterAnimationProps {
  end: number;
  duration?: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function CounterAnimation({
  end,
  duration = 2000,
  label,
  prefix = '',
  suffix = '',
  decimals = 0,
}: CounterAnimationProps) {
  const factor = Math.pow(10, decimals);
  const internalEnd = Math.round(end * factor);
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
      setCount(Math.floor(eased * internalEnd));

      if (progress >= 1) {
        setCount(internalEnd);
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, internalEnd, duration]);

  const display = decimals > 0 ? (count / factor).toFixed(decimals) : count;

  return (
    <div ref={ref} className="text-center">
      <div className="font-playfair leading-none" style={{ fontSize: '52px', color: '#f8f5f0' }}>
        {prefix}{display}<span style={{ color: '#1a56db' }}>{suffix}</span>
      </div>
      <p className="font-poppins font-medium max-w-xs mx-auto mt-4" style={{ fontSize: '12px', color: 'rgba(240,232,216,0.35)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        {label}
      </p>
    </div>
  );
}
