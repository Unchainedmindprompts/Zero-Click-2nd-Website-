// Hero "Machine Read" scan dashboard. Pure server component — all content is in
// the DOM (crawler-readable); only the entrance/scan effects are CSS animations.

const checks = [
  'Organization detected',
  'Provider entity connected',
  'Services mapped',
  'Service areas verified',
  'Reviews & profiles connected',
  'FAQ schema present',
  'Agent action path clear',
];

export default function MachineReadPanel() {
  return (
    <div
      className="relative w-full overflow-hidden soft-glow"
      style={{
        maxWidth: '460px',
        background: 'linear-gradient(180deg, var(--d-bg-3), var(--d-bg-2))',
        border: '1px solid var(--d-line-s)',
        borderRadius: '18px',
        padding: '22px 24px 24px',
      }}
    >
      <div className="mr-scanline" />

      {/* Header — scanned URL + live status */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="node-pulse"
            style={{ width: 8, height: 8, borderRadius: 99, background: 'var(--d-ok)', flexShrink: 0 }}
          />
          <span className="font-mono text-xs truncate" style={{ color: 'var(--d-fg-dim)', letterSpacing: '0.04em' }}>
            Scanning: <span style={{ color: 'var(--d-fg)' }}>examplebusiness.com</span>
          </span>
        </div>
        <span className="font-mono text-[10px]" style={{ color: 'var(--d-accent)', letterSpacing: '0.18em' }}>
          MACHINE READ
        </span>
      </div>

      {/* Scan rows */}
      <div className="flex flex-col gap-2.5 mb-6">
        {checks.map((c, i) => (
          <div
            key={c}
            className={`mr-row mr-row-${i + 1} flex items-center gap-3`}
            style={{
              background: 'rgba(140,160,255,0.05)',
              border: '1px solid var(--d-line)',
              borderRadius: '10px',
              padding: '10px 14px',
            }}
          >
            <span style={{ color: 'var(--d-ok)', fontSize: 13, flexShrink: 0 }}>✓</span>
            <span className="font-inter text-sm" style={{ color: 'var(--d-fg-dim)' }}>{c}</span>
          </div>
        ))}
      </div>

      {/* Score + confidence */}
      <div
        style={{
          background: 'rgba(93,213,255,0.05)',
          border: '1px solid rgba(93,213,255,0.25)',
          borderRadius: '12px',
          padding: '16px 18px',
        }}
      >
        <div className="flex items-end justify-between mb-2">
          <span className="font-mono text-[10px]" style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.14em' }}>
            AI READINESS
          </span>
          <span className="font-inter font-semibold" style={{ fontSize: 28, lineHeight: 1, color: 'var(--d-accent)' }}>
            87%
          </span>
        </div>
        <div style={{ height: 6, borderRadius: 99, background: 'var(--d-bg)', overflow: 'hidden' }}>
          <div
            className="mr-bar-fill"
            style={{ height: '100%', width: '87%', borderRadius: 99, background: 'linear-gradient(90deg, var(--d-accent-2), var(--d-accent))' }}
          />
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="font-inter text-xs" style={{ color: 'var(--d-fg-dim)' }}>Recommendation Confidence</span>
          <span
            className="font-mono text-[11px]"
            style={{ color: 'var(--d-ok)', letterSpacing: '0.08em', background: 'rgba(122,240,194,0.1)', borderRadius: 99, padding: '3px 10px' }}
          >
            HIGH
          </span>
        </div>
      </div>
    </div>
  );
}
