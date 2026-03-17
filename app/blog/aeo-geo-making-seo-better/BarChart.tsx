'use client';

import { useEffect, useRef, useState } from 'react';

const bars = [
  { label: 'AI Overview Sources from Top Organic Results', value: 99, source: 'BrightEdge 2025' },
  { label: 'AEO-Optimized Sites Gain Rich Snippets', value: 87, source: 'Semrush AI Report' },
  { label: 'Structured Sites Cited by AI Agents', value: 91, source: 'Gartner Digital Markets' },
  { label: 'Improvement in Rankings with Schema', value: 74, source: 'Semrush AI Report' },
];

export default function BarChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [animated]);

  return (
    <div ref={ref} className="my-8 p-6 rounded-xl" style={{ background: '#f2ede4', border: '1px solid rgba(160,114,58,0.25)' }}>
      <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#a0723a' }}>
        THE DATA SPEAKS CLEARLY
      </p>
      <div className="space-y-5">
        {bars.map((bar) => (
          <div key={bar.label}>
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-sm font-semibold" style={{ color: '#0a0806', fontFamily: 'var(--font-poppins)' }}>
                {bar.label}
              </span>
              <span className="text-sm font-bold ml-4 flex-shrink-0" style={{ color: '#a0723a' }}>
                {bar.value}%
              </span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(160,114,58,0.15)' }}>
              <div
                className="h-full rounded-full transition-all ease-out"
                style={{
                  width: animated ? `${bar.value}%` : '0%',
                  transitionDuration: '1.2s',
                  background: 'linear-gradient(90deg, #a0723a, #c9913e)',
                }}
              />
            </div>
            <p className="text-xs mt-1" style={{ color: '#9a8a78' }}>Source: {bar.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
