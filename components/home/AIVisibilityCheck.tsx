'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

type State = 'idle' | 'scanning' | 'results';

const grades = [
  {
    layer: 'CHASSIS',
    label: 'Infrastructure',
    grade: 'D',
    color: 'var(--d-warn)',
    note: 'Client-side rendering detected on cold load. AI crawlers likely receive an empty shell before JavaScript executes.',
  },
  {
    layer: 'ENGINE',
    label: 'Entity Graph',
    grade: 'F',
    color: '#ff4d6d',
    note: 'No structured entity graph found. The business has no machine-readable identity — AI systems cannot verify who you are.',
  },
  {
    layer: 'AERO',
    label: 'Content Structure',
    grade: 'C+',
    color: '#f59e0b',
    note: 'Content exists but lacks answer-first structure and FAQPage schema. AI can read it but not easily extract cited answers.',
  },
  {
    layer: 'GRAPHICS',
    label: 'Authority Signals',
    grade: 'D+',
    color: 'var(--d-warn)',
    note: 'Partial off-site presence. llms.txt and agent.json not detected. NAP consistency across directories is incomplete.',
  },
];

function Spinner() {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      className="animate-spin"
      style={{ animationDuration: '0.8s' }}
    >
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2"
        strokeDasharray="28" strokeDashoffset="10" />
    </svg>
  );
}

export default function AIVisibilityCheck() {
  const [url, setUrl]     = useState('');
  const [phase, setPhase] = useState<State>('idle');
  const [err, setErr]     = useState('');
  const resultsRef        = useRef<HTMLDivElement>(null);

  const valid = (v: string) => /^https?:\/\/.+\..+/.test(v.trim());

  const scan = () => {
    if (!valid(url)) { setErr('Please enter a full URL — e.g. https://yourdomain.com'); return; }
    setErr('');
    setPhase('scanning');
    setTimeout(() => {
      setPhase('results');
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80);
    }, 1600);
  };

  const reset = () => { setPhase('idle'); setUrl(''); setErr(''); };

  return (
    <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div className="d-eyebrow mb-6">MACHINE READ — SAMPLE</div>

        <h2
          className="font-inter font-semibold mb-4"
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: 'var(--d-fg)',
          }}
        >
          See where you<br />
          <em className="serif">actually stand.</em>
        </h2>

        <p
          className="font-inter mb-10"
          style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300 }}
        >
          Paste your URL. We&apos;ll show you a simulated grade card across the four F1 layers.
          Want the real audit? Run a Machine Read.
        </p>

        {/* Input row */}
        {phase !== 'results' && (
          <div className="mb-3">
            <div className="flex flex-col sm:flex-row gap-3 mb-2">
              <input
                type="url"
                value={url}
                onChange={(e) => { setUrl(e.target.value); setErr(''); }}
                onKeyDown={(e) => e.key === 'Enter' && scan()}
                placeholder="https://yourdomain.com"
                disabled={phase === 'scanning'}
                className="font-inter flex-1"
                style={{
                  background: 'var(--d-bg-3)',
                  border: `1px solid ${err ? 'var(--d-warn)' : 'var(--d-line-s)'}`,
                  borderRadius: '100px',
                  padding: '12px 24px',
                  fontSize: '15px',
                  color: 'var(--d-fg)',
                  outline: 'none',
                }}
              />
              <button
                onClick={scan}
                disabled={phase === 'scanning'}
                className="d-btn d-btn-primary flex-shrink-0"
                style={{ opacity: phase === 'scanning' ? 0.75 : 1 }}
              >
                {phase === 'scanning'
                  ? <span className="flex items-center gap-2"><Spinner />Scanning…</span>
                  : 'Check Visibility →'}
              </button>
            </div>
            {err && (
              <p className="font-mono text-xs" style={{ color: 'var(--d-warn)', letterSpacing: '0.05em', paddingLeft: '24px' }}>
                {err}
              </p>
            )}
          </div>
        )}

        {/* Scan progress */}
        {phase === 'scanning' && (
          <div
            style={{
              background: 'var(--d-bg-3)',
              border: '1px solid var(--d-line)',
              borderRadius: '14px',
              padding: '24px 28px',
            }}
          >
            <p className="font-mono text-xs mb-4" style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.12em' }}>
              RUNNING SIMULATED AUDIT
            </p>
            <p className="font-inter text-sm" style={{ color: 'var(--d-fg-dim)' }}>
              Checking{' '}
              <span style={{ color: 'var(--d-accent)' }}>{url}</span>
              {' '}across all four F1 layers…
            </p>
          </div>
        )}

        {/* Results */}
        {phase === 'results' && (
          <div ref={resultsRef}>
            <p className="font-mono text-xs mb-5" style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.12em' }}>
              AUDIT COMPLETE — {url}
            </p>
            <div className="flex flex-col gap-3 mb-6">
              {grades.map((g) => (
                <div
                  key={g.layer}
                  style={{
                    background: 'var(--d-bg-3)',
                    border: '1px solid var(--d-line)',
                    borderRadius: '14px',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                  }}
                >
                  {/* Grade */}
                  <div
                    className="font-inter font-semibold flex-shrink-0"
                    style={{
                      fontSize: '30px',
                      letterSpacing: '-0.02em',
                      color: g.color,
                      width: '52px',
                      textAlign: 'center',
                      lineHeight: 1,
                      paddingTop: '2px',
                    }}
                  >
                    {g.grade}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="font-mono text-xs" style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.15em' }}>
                        {g.layer}
                      </span>
                      <span className="font-inter text-xs" style={{ color: 'var(--d-fg-dim)' }}>
                        {g.label}
                      </span>
                    </div>
                    <p className="font-inter text-sm" style={{ color: 'var(--d-fg-dim)', lineHeight: 1.55 }}>
                      {g.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer + CTA */}
            <div
              style={{
                background: 'rgba(93,213,255,0.04)',
                border: '1px solid rgba(93,213,255,0.25)',
                borderRadius: '16px',
                padding: '28px 32px',
              }}
            >
              <p
                className="font-inter mb-5"
                style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--d-fg-dim)' }}
              >
                These are{' '}
                <strong style={{ color: 'var(--d-fg)', fontWeight: 600 }}>
                  simulated grades based on platform patterns
                </strong>
                {' '}— not a live crawl. The real Machine Read checks ChatGPT, Perplexity, and Google AI
                Overviews directly and gives you specific, actionable findings. No pitch. Just data.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/contact?url=${encodeURIComponent(url)}`}
                  className="d-btn d-btn-primary"
                >
                  Get My Real Machine Read →
                </Link>
                <button onClick={reset} className="d-btn d-btn-ghost">
                  Try another URL
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
