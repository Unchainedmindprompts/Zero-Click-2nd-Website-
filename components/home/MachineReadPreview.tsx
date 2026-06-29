import Link from 'next/link';

const dims = [
  { label: 'Identity clarity', pct: 72 },
  { label: 'Service / location structure', pct: 58 },
  { label: 'Proof consistency', pct: 49 },
  { label: 'Entity graph completeness', pct: 36 },
  { label: 'Agent action readiness', pct: 24 },
];

export default function MachineReadPreview() {
  return (
    <section style={{ padding: '120px 32px', backgroundColor: 'var(--d-bg)' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <div className="d-eyebrow mb-6">THE MACHINE READ</div>
        <h2
          className="font-inter font-semibold mb-4"
          style={{ fontSize: 'clamp(32px, 4.4vw, 54px)', lineHeight: 1.06, letterSpacing: '-0.03em', color: 'var(--d-fg)' }}
        >
          See what AI can <em className="serif">verify about you.</em>
        </h2>
        <p className="font-inter mb-12" style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--d-fg-dim)', fontWeight: 300, maxWidth: '520px' }}>
          A free diagnostic of how clearly AI systems can read, verify, and recommend your business
          today — and where the gaps are.
        </p>

        <div className="glass" style={{ borderRadius: '20px', padding: '36px 40px' }}>
          <div className="flex items-center justify-between mb-9">
            <span className="font-mono text-sm" style={{ color: 'var(--d-fg-dim)' }}>examplebusiness.com</span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.16em' }}>SAMPLE READ</span>
          </div>

          <div className="flex flex-col gap-7">
            {dims.map((d) => (
              <div key={d.label}>
                <div className="flex items-baseline justify-between mb-2.5">
                  <span className="font-inter" style={{ fontSize: '15px', color: 'var(--d-fg)' }}>{d.label}</span>
                  <span className="font-mono text-xs" style={{ color: 'var(--d-fg-dim)' }}>{d.pct}%</span>
                </div>
                <div style={{ height: 3, borderRadius: 99, background: 'rgba(140,160,255,0.12)', overflow: 'hidden' }}>
                  <div className="mr-bar-fill" style={{ height: '100%', width: `${d.pct}%`, borderRadius: 99, background: 'linear-gradient(90deg, var(--d-accent-2), var(--d-accent))' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9">
          <Link href="/machine-read" className="d-btn d-btn-primary">Run My Free Machine Read →</Link>
        </div>
      </div>
    </section>
  );
}
