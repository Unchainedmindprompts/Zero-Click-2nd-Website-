const rows = [
  ['Identity', 'Verified'],
  ['Organization', 'Detected'],
  ['Provider entity', 'Connected'],
  ['Services', 'Mapped'],
  ['Locations', 'Verified'],
  ['Reviews', 'Matched'],
  ['Profiles', 'Aligned'],
  ['FAQ / schema', 'Present'],
  ['Agent action path', 'Clear'],
];

export default function MachineReadScan() {
  return (
    <div className="glass glass-accent relative overflow-hidden" style={{ borderRadius: '16px', padding: '16px 18px' }}>
      <div className="mr-scanline" />
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 min-w-0">
          <span className="node-pulse" style={{ width: 7, height: 7, borderRadius: 99, background: 'var(--d-ok)', flexShrink: 0 }} />
          <span className="font-mono text-[11px] truncate" style={{ color: 'var(--d-fg-dim)', letterSpacing: '0.02em' }}>
            Scanning <span style={{ color: 'var(--d-fg)' }}>examplebusiness.com</span>
          </span>
        </div>
        <span className="font-mono text-[9px]" style={{ color: 'var(--d-accent)', letterSpacing: '0.18em' }}>MACHINE&nbsp;READ</span>
      </div>

      <div className="flex flex-col gap-1.5">
        {rows.map(([label, status], i) => (
          <div key={label} className="mr-row flex items-baseline gap-2" style={{ animationDelay: `${0.25 + i * 0.11}s` }}>
            <span className="font-mono text-[11px]" style={{ color: 'var(--d-fg-dim)', whiteSpace: 'nowrap' }}>{label}</span>
            <span className="flex-1" style={{ borderBottom: '1px dotted var(--d-line-s)', transform: 'translateY(-3px)' }} />
            <span className="font-mono text-[11px] flex items-center gap-1" style={{ color: 'var(--d-ok)', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: 9 }}>✓</span>{status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
