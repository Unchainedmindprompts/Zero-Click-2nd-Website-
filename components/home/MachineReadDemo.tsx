import Link from 'next/link';

const scores = [
  { label: 'Business Identity', pct: 72, color: 'var(--d-accent)' },
  { label: 'Entity Graph', pct: 38, color: 'var(--d-warn)' },
  { label: 'Verification Layer', pct: 54, color: '#f59e0b' },
  { label: 'Answer Architecture', pct: 61, color: 'var(--d-accent-2)' },
  { label: 'Agent Readiness', pct: 22, color: 'var(--d-warn)' },
];

export default function MachineReadDemo() {
  return (
    <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <div className="d-eyebrow mb-6">THE MACHINE READ</div>
        <h2
          className="font-inter font-semibold mb-10"
          style={{ fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: 'var(--d-fg)' }}
        >
          See what AI can <em className="serif">verify about you.</em>
        </h2>

        <div style={{ background: 'linear-gradient(180deg, var(--d-bg-3), var(--d-bg-2))', border: '1px solid var(--d-line-s)', borderRadius: '18px', padding: '28px 30px' }}>
          {/* URL field */}
          <div
            className="flex items-center justify-between mb-7"
            style={{ background: 'var(--d-bg)', border: '1px solid var(--d-line-s)', borderRadius: '100px', padding: '12px 12px 12px 22px' }}
          >
            <span className="font-mono text-sm truncate" style={{ color: 'var(--d-fg-dim)' }}>examplebusiness.com</span>
            <span className="font-mono text-[10px] flex-shrink-0" style={{ color: 'var(--d-accent)', letterSpacing: '0.12em', background: 'rgba(93,213,255,0.08)', borderRadius: 99, padding: '6px 14px' }}>
              SAMPLE
            </span>
          </div>

          {/* score bars */}
          <div className="flex flex-col gap-4 mb-7">
            {scores.map((s) => (
              <div key={s.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-inter text-sm" style={{ color: 'var(--d-fg-dim)' }}>{s.label}</span>
                  <span className="font-inter font-semibold text-sm" style={{ color: s.color }}>{s.pct}%</span>
                </div>
                <div style={{ height: 6, borderRadius: 99, background: 'var(--d-bg)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${s.pct}%`, borderRadius: 99, background: s.color, opacity: 0.85 }} />
                </div>
              </div>
            ))}
          </div>

          {/* top issue + next step */}
          <div style={{ background: 'rgba(255,107,138,0.06)', border: '1px solid rgba(255,107,138,0.25)', borderRadius: '12px', padding: '16px 18px', marginBottom: '14px' }}>
            <p className="font-mono text-[10px] mb-1" style={{ color: 'var(--d-warn)', letterSpacing: '0.14em' }}>TOP ISSUE</p>
            <p className="font-inter text-sm" style={{ color: 'var(--d-fg-dim)', lineHeight: 1.55 }}>
              Your services, locations, and proof sources aren&apos;t connected in a way AI systems can verify.
            </p>
          </div>
          <div style={{ background: 'rgba(93,213,255,0.05)', border: '1px solid rgba(93,213,255,0.25)', borderRadius: '12px', padding: '16px 18px' }}>
            <p className="font-mono text-[10px] mb-1" style={{ color: 'var(--d-accent)', letterSpacing: '0.14em' }}>RECOMMENDED NEXT STEP</p>
            <p className="font-inter text-sm" style={{ color: 'var(--d-fg)', lineHeight: 1.55 }}>Build a structured entity foundation.</p>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/machine-read" className="d-btn d-btn-primary">Run My Free Machine Read →</Link>
        </div>
      </div>
    </section>
  );
}
