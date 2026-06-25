const oldWeb = ['Pages', 'Keywords', 'Plugins', 'Vague claims'];
const aiWeb = ['Entities', 'Proof', 'Graph relationships', 'Action paths'];

export default function ShiftSection() {
  return (
    <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div className="d-eyebrow mb-6">THE SHIFT</div>
        <h2
          className="font-inter font-semibold mb-4"
          style={{ fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: 'var(--d-fg)', maxWidth: '760px' }}
        >
          Search is moving from websites to <em className="serif">recommendations.</em>
        </h2>
        <p className="font-inter mb-12" style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--d-fg-dim)', fontWeight: 300, maxWidth: '600px' }}>
          AI systems don&apos;t just rank pages. They verify entities, compare proof, connect services
          to locations, and decide what can be safely recommended.
        </p>

        {/* Transition: old web → AI web */}
        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
          {/* Old web */}
          <div
            className="flex-1"
            style={{ background: 'var(--d-bg-3)', border: '1px solid var(--d-line)', borderRadius: '16px', padding: '28px 30px', opacity: 0.78 }}
          >
            <p className="font-mono text-xs mb-5" style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.14em' }}>OLD WEB</p>
            <div className="flex flex-wrap gap-2">
              {oldWeb.map((x) => (
                <span key={x} className="font-mono text-xs" style={{ color: 'var(--d-fg-mute)', background: 'rgba(140,160,255,0.04)', border: '1px solid var(--d-line)', borderRadius: '7px', padding: '8px 12px' }}>{x}</span>
              ))}
            </div>
            <p className="font-inter text-sm mt-5" style={{ color: 'var(--d-fg-mute)', lineHeight: 1.55 }}>Built for humans scanning a list of links.</p>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center flex-shrink-0 md:px-6" style={{ color: 'var(--d-accent)' }}>
            <span className="md:hidden" style={{ fontSize: 24 }}>↓</span>
            <span className="hidden md:inline" style={{ fontSize: 26 }}>→</span>
          </div>

          {/* AI web */}
          <div
            className="flex-1 soft-glow"
            style={{ background: 'linear-gradient(180deg, var(--d-bg-3), var(--d-bg-2))', border: '1px solid rgba(93,213,255,0.3)', borderRadius: '16px', padding: '28px 30px' }}
          >
            <p className="font-mono text-xs mb-5" style={{ color: 'var(--d-accent)', letterSpacing: '0.14em' }}>AI WEB</p>
            <div className="flex flex-wrap gap-2">
              {aiWeb.map((x) => (
                <span key={x} className="font-mono text-xs" style={{ color: 'var(--d-accent)', background: 'rgba(93,213,255,0.08)', border: '1px solid rgba(93,213,255,0.3)', borderRadius: '7px', padding: '8px 12px' }}>{x}</span>
              ))}
            </div>
            <p className="font-inter text-sm mt-5" style={{ color: 'var(--d-fg-dim)', lineHeight: 1.55 }}>Built for machines verifying who to recommend.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
