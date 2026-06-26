const traditional = ['Pages & keywords', 'Plugin schema', 'Generic LocalBusiness type', 'Disconnected proof', 'AI has to guess'];
const kodecite = ['Connected entity graph', 'Stable @id anchors', 'Verified external profiles', 'Service & location relationships', 'Source-backed claims', 'Agent action rules', 'AI recommends with confidence'];

export default function DifferenceCompare() {
  return (
    <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div className="d-eyebrow mb-6">THE DIFFERENCE</div>
        <h2
          className="font-inter font-semibold mb-12"
          style={{ fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: 'var(--d-fg)', maxWidth: '760px' }}
        >
          Traditional websites describe your business.{' '}
          <em className="serif">KodeCite makes it machine-verifiable.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Traditional */}
          <div style={{ background: 'var(--d-bg-3)', border: '1px solid var(--d-line)', borderRadius: '18px', padding: '32px 34px' }}>
            <p className="font-mono text-xs mb-6" style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.14em' }}>TRADITIONAL WEBSITE</p>
            <div className="flex flex-col gap-3">
              {traditional.map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span style={{ color: 'var(--d-warn)', flexShrink: 0, fontSize: 13 }}>✕</span>
                  <span className="font-inter text-sm" style={{ color: 'var(--d-fg-dim)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* KodeCite */}
          <div
            className="soft-glow"
            style={{ background: 'linear-gradient(180deg, var(--d-bg-3), var(--d-bg-2))', border: '1px solid rgba(93,213,255,0.3)', borderRadius: '18px', padding: '32px 34px' }}
          >
            <p className="font-mono text-xs mb-6" style={{ color: 'var(--d-accent)', letterSpacing: '0.14em' }}>KODECITE FOUNDATION</p>
            <div className="flex flex-col gap-3">
              {kodecite.map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span style={{ color: 'var(--d-ok)', flexShrink: 0, fontSize: 13 }}>✓</span>
                  <span className="font-inter text-sm" style={{ color: 'var(--d-fg)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
