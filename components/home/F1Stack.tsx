'use client';

import { useEffect, useRef, useState } from 'react';

const layers = [
  {
    num: '01',
    name: 'CHASSIS',
    label: 'Infrastructure',
    color: '#5dd5ff',
    desc: 'Next.js on Vercel edge — server-side rendered, sub-1s load globally, cold-crawl readable. AI systems see your complete content on the first request. No JavaScript execution required.',
  },
  {
    num: '02',
    name: 'ENGINE',
    label: 'Entity Graph',
    color: '#8ab4ff',
    desc: 'Schema.org deployed correctly — every element of your business connected through stable @id anchors into a single machine-readable identity. Not a plugin output. A real entity graph AI systems can traverse and verify.',
  },
  {
    num: '03',
    name: 'AERO',
    label: 'Answer-First Content',
    color: '#7af0c2',
    desc: 'Content structured for extraction: answer-first H1s, FAQ schema wired to FAQPage markup, short extractable paragraphs, internal linking that reinforces entity relationships. Each page answers one question clearly.',
  },
  {
    num: '04',
    name: 'GRAPHICS',
    label: 'Authority Signals',
    color: '#a78bfa',
    desc: 'Off-site trust: llms.txt, agent.json, consistent NAP data across directories, citations in industry sources. The layer that tells AI you\'re real, established, and worth recommending.',
  },
];

export default function F1Stack() {
  const ref     = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVis(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.15 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)' }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div className="d-eyebrow mb-6">THE FRAMEWORK</div>

        <h2
          className="font-inter font-semibold mb-16"
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: 'var(--d-fg)',
            maxWidth: '600px',
          }}
        >
          Four layers. One{' '}
          <em className="serif">compounding</em> foundation.
        </h2>

        <div className="flex flex-col gap-4">
          {layers.map((layer, i) => (
            <div
              key={layer.num}
              style={{
                background: 'var(--d-bg-3)',
                border: `1px solid var(--d-line)`,
                borderLeft: `3px solid ${layer.color}`,
                borderRadius: '14px',
                padding: '32px 36px',
                opacity: vis ? 1 : 0,
                transform: vis ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Layer label */}
                <div className="flex-shrink-0 md:w-56">
                  <p
                    className="font-mono text-xs mb-2"
                    style={{ color: layer.color, letterSpacing: '0.15em' }}
                  >
                    LAYER {layer.num}
                  </p>
                  <p
                    className="font-inter font-semibold text-2xl mb-1"
                    style={{ color: 'var(--d-fg)', letterSpacing: '-0.01em' }}
                  >
                    {layer.name}
                  </p>
                  <p
                    className="font-mono text-xs uppercase"
                    style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.12em' }}
                  >
                    {layer.label}
                  </p>
                </div>

                {/* Description */}
                <p
                  className="font-inter"
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.65,
                    color: 'var(--d-fg-dim)',
                    fontWeight: 300,
                  }}
                >
                  {layer.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
