const oldWeb = ['Pages', 'Keywords', 'Backlinks', 'Plugins'];
const aiWeb = ['Organization', 'Provider', 'Services', 'Places', 'Reviews', 'Agent path'];

export default function ShiftSection() {
  return (
    <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="flex-1 min-w-0">
            <div className="d-eyebrow mb-6">THE SHIFT</div>
            <h2
              className="font-inter font-semibold mb-5"
              style={{ fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: 'var(--d-fg)' }}
            >
              Search is moving from pages to{' '}
              <em className="serif">recommendations.</em>
            </h2>
            <p className="font-inter" style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--d-fg-dim)', fontWeight: 300, maxWidth: '520px' }}>
              AI systems no longer only rank pages. They verify businesses, compare proof, connect
              services to locations, and decide what can be safely recommended.
            </p>
          </div>

          {/* Visual: page stack collapsing into an entity graph */}
          <div className="flex-1 w-full">
            <div
              className="flex items-center gap-4 sm:gap-8"
              style={{ background: 'var(--d-bg-3)', border: '1px solid var(--d-line)', borderRadius: '18px', padding: '32px 28px' }}
            >
              {/* old web: stacked pages */}
              <div className="flex flex-col gap-2 flex-shrink-0">
                {oldWeb.map((p) => (
                  <div
                    key={p}
                    className="font-mono text-[11px]"
                    style={{ color: 'var(--d-fg-mute)', background: 'rgba(140,160,255,0.04)', border: '1px solid var(--d-line)', borderRadius: '6px', padding: '7px 10px', letterSpacing: '0.04em' }}
                  >
                    {p}
                  </div>
                ))}
              </div>

              <div className="flex-shrink-0" style={{ color: 'var(--d-accent)', fontSize: 22 }}>→</div>

              {/* ai web: entity chips around a core */}
              <div className="flex flex-wrap gap-2 content-center">
                <span
                  className="font-inter text-xs font-semibold node-pulse"
                  style={{ color: 'var(--d-bg)', background: 'var(--d-accent)', borderRadius: '99px', padding: '6px 14px' }}
                >
                  Business
                </span>
                {aiWeb.map((n) => (
                  <span
                    key={n}
                    className="font-inter text-xs"
                    style={{ color: 'var(--d-accent)', background: 'rgba(93,213,255,0.08)', border: '1px solid rgba(93,213,255,0.3)', borderRadius: '99px', padding: '6px 12px' }}
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
