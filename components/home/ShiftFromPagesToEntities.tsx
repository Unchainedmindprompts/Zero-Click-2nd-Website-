const oldWeb = ['Pages', 'Plugins', 'Keywords', 'Vague claims', 'Disconnected profiles'];
const aiWeb = ['Entities', 'Proof', 'Relationships', 'Citations', 'Action paths', 'Recommendation confidence'];

export default function ShiftFromPagesToEntities() {
  return (
    <section style={{ padding: '120px 32px', backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div className="d-eyebrow mb-6">THE SHIFT</div>
        <h2
          className="font-inter font-semibold mb-5"
          style={{ fontSize: 'clamp(32px, 4.4vw, 54px)', lineHeight: 1.06, letterSpacing: '-0.03em', color: 'var(--d-fg)', maxWidth: '720px' }}
        >
          The shift from pages to <em className="serif">entities.</em>
        </h2>
        <p className="font-inter mb-16" style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--d-fg-dim)', fontWeight: 300, maxWidth: '640px' }}>
          Search is moving from pages, links, and keywords to entities, proof, and recommendations. AI
          systems need to know who a business is, what it does, where it operates, what proof supports
          it, and what action a customer can safely take next.
        </p>

        {/* Two worlds — typographic, divided by a glowing seam */}
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          {/* glowing seam (desktop) */}
          <div
            className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 pointer-events-none"
            aria-hidden
            style={{ width: '1px', background: 'linear-gradient(180deg, transparent, var(--d-accent), transparent)', boxShadow: '0 0 24px 1px var(--d-accent-glow)' }}
          />

          {/* Old Web */}
          <div className="md:pr-14 pb-12 md:pb-0">
            <p className="font-mono text-xs mb-8" style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.2em' }}>OLD WEB</p>
            <div className="flex flex-col gap-5">
              {oldWeb.map((x) => (
                <div key={x} className="flex items-center gap-4" style={{ opacity: 0.62 }}>
                  <span style={{ width: 16, height: 1, background: 'var(--d-fg-mute)', flexShrink: 0 }} />
                  <span className="font-inter" style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', color: 'var(--d-fg-dim)', letterSpacing: '-0.01em' }}>{x}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Web */}
          <div className="md:pl-14 pt-12 md:pt-0 border-t md:border-t-0 border-[var(--d-line)]">
            <p className="font-mono text-xs mb-8" style={{ color: 'var(--d-accent)', letterSpacing: '0.2em' }}>AI WEB</p>
            <div className="flex flex-col gap-5">
              {aiWeb.map((x) => (
                <div key={x} className="flex items-center gap-4">
                  <span className="node-pulse" style={{ width: 7, height: 7, borderRadius: 99, background: 'var(--d-accent)', flexShrink: 0, boxShadow: '0 0 12px var(--d-accent-glow)' }} />
                  <span className="font-inter font-medium" style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', color: 'var(--d-fg)', letterSpacing: '-0.01em' }}>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
