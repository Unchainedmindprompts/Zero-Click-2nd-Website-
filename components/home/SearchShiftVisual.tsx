import type { CSSProperties } from 'react';

const oldItems = ['Pages', 'Keywords', 'Plugins', 'Vague claims'];
const aiItems = ['Entities', 'Proof', 'Graph relationships', 'Action paths'];

// A small disconnected "page card"
function PageCard({ style }: { style?: CSSProperties }) {
  return (
    <div
      style={{
        background: 'var(--d-bg-2)',
        border: '1px solid var(--d-line)',
        borderRadius: '8px',
        padding: '8px 9px',
        width: '78px',
        ...style,
      }}
    >
      <div className="flex gap-1 mb-2">
        {[0, 1, 2].map((d) => (
          <span key={d} style={{ width: 4, height: 4, borderRadius: 99, background: 'var(--d-fg-mute)', opacity: 0.6 }} />
        ))}
      </div>
      {[0, 1, 2].map((l) => (
        <div key={l} style={{ height: 3, borderRadius: 99, background: 'var(--d-line-s)', marginBottom: 4, width: l === 2 ? '60%' : '100%' }} />
      ))}
    </div>
  );
}

export default function SearchShiftVisual() {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
      {/* OLD WEB — disconnected pages */}
      <div className="flex-1 relative" style={{ background: 'var(--d-bg-3)', border: '1px solid var(--d-line)', borderRadius: '18px', padding: '26px 28px', opacity: 0.82 }}>
        <p className="font-mono text-xs mb-5" style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.14em' }}>OLD WEB</p>
        <div className="relative h-[120px] mb-5">
          <div className="absolute" style={{ top: 0, left: 4, transform: 'rotate(-5deg)' }}><PageCard /></div>
          <div className="absolute" style={{ top: 18, left: 86, transform: 'rotate(4deg)' }}><PageCard /></div>
          <div className="absolute" style={{ top: 56, left: 38, transform: 'rotate(-2deg)' }}><PageCard /></div>
          {/* broken/disconnected hint */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
            <line x1="50" y1="50" x2="120" y2="40" stroke="var(--d-line-s)" strokeWidth="1" strokeDasharray="2 4" />
            <line x1="90" y1="90" x2="120" y2="55" stroke="var(--d-line-s)" strokeWidth="1" strokeDasharray="2 4" />
          </svg>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {oldItems.map((x) => (
            <span key={x} className="font-mono text-[11px]" style={{ color: 'var(--d-fg-mute)', background: 'rgba(140,160,255,0.04)', border: '1px solid var(--d-line)', borderRadius: '7px', padding: '6px 10px' }}>{x}</span>
          ))}
        </div>
        <p className="font-inter text-sm flex items-center gap-2" style={{ color: 'var(--d-warn)' }}>
          <span style={{ fontSize: 13 }}>?</span> AI has to guess
        </p>
      </div>

      {/* Arrow */}
      <div className="flex items-center justify-center flex-shrink-0 md:px-7" style={{ color: 'var(--d-accent)' }}>
        <span className="md:hidden" style={{ fontSize: 24 }}>↓</span>
        <span className="hidden md:inline" style={{ fontSize: 28 }}>→</span>
      </div>

      {/* AI WEB — connected graph */}
      <div className="flex-1 soft-glow" style={{ background: 'linear-gradient(180deg, var(--d-bg-3), var(--d-bg-2))', border: '1px solid rgba(93,213,255,0.3)', borderRadius: '18px', padding: '26px 28px' }}>
        <p className="font-mono text-xs mb-5" style={{ color: 'var(--d-accent)', letterSpacing: '0.14em' }}>AI WEB</p>
        <div className="h-[120px] mb-5 flex items-center justify-center">
          <svg viewBox="0 0 220 120" width="100%" height="120" role="img" aria-label="A connected entity graph: a business linked to entity, proof, service, place, and review" style={{ overflow: 'visible' }}>
            {[[44, 26], [176, 26], [30, 94], [190, 94], [110, 12]].map(([x, y], i) => (
              <line key={i} x1="110" y1="60" x2={x} y2={y} stroke="var(--d-accent)" strokeWidth="1.25" className="conn-flow" strokeOpacity="0.7" />
            ))}
            {[[44, 26], [176, 26], [30, 94], [190, 94], [110, 12]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="9" fill="var(--d-bg-3)" stroke="var(--d-line-s)" className="node-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
            <circle cx="110" cy="60" r="16" fill="var(--d-accent)" fillOpacity="0.15" stroke="var(--d-accent)" strokeWidth="1.5" />
            <circle cx="110" cy="60" r="5" fill="var(--d-accent)" className="node-pulse" />
          </svg>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {aiItems.map((x) => (
            <span key={x} className="font-mono text-[11px]" style={{ color: 'var(--d-accent)', background: 'rgba(93,213,255,0.08)', border: '1px solid rgba(93,213,255,0.3)', borderRadius: '7px', padding: '6px 10px' }}>{x}</span>
          ))}
        </div>
        <p className="font-inter text-sm flex items-center gap-2" style={{ color: 'var(--d-ok)' }}>
          <span style={{ fontSize: 13 }}>✓</span> AI can verify
        </p>
      </div>
    </div>
  );
}
