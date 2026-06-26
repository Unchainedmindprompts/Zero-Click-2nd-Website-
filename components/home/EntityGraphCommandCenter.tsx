const C = { x: 220, y: 220 };
const nodes = [
  { label: 'Person', x: 220, y: 62 },
  { label: 'Service', x: 322, y: 99 },
  { label: 'Place', x: 376, y: 193 },
  { label: 'Offer', x: 357, y: 299 },
  { label: 'FAQ', x: 274, y: 369 },
  { label: 'Website', x: 166, y: 369 },
  { label: 'Reviews', x: 83, y: 299 },
  { label: 'Profiles', x: 64, y: 193 },
  { label: 'Articles', x: 118, y: 99 },
];

export default function EntityGraphCommandCenter() {
  return (
    <svg
      viewBox="0 0 440 440"
      width="100%"
      role="img"
      aria-label="Entity graph command center: an Organization connected to Person, Service, Place, Offer, FAQ, Website, Reviews, Profiles, and Articles"
      style={{ display: 'block', overflow: 'visible' }}
    >
      <defs>
        <radialGradient id="orgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--d-accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--d-accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--d-accent-2)" />
          <stop offset="100%" stopColor="var(--d-accent)" />
        </linearGradient>
      </defs>

      {/* edges */}
      {nodes.map((n, i) => (
        <line
          key={`e-${n.label}`}
          x1={C.x} y1={C.y} x2={n.x} y2={n.y}
          className="svg-edge"
          stroke="url(#edgeGrad)" strokeWidth="1.25" strokeOpacity="0.55"
          strokeDasharray="240" style={{ animationDelay: `${0.3 + i * 0.1}s` }}
        />
      ))}

      {/* outer nodes */}
      {nodes.map((n, i) => (
        <g key={`n-${n.label}`}>
          <g className="svg-node node-pulse" style={{ animationDelay: `${0.55 + i * 0.1}s` }}>
            <circle cx={n.x} cy={n.y} r="23" fill="var(--d-bg-3)" stroke="var(--d-line-s)" strokeWidth="1.25" />
            <circle cx={n.x} cy={n.y} r="4.5" fill="var(--d-accent)" />
          </g>
          <text x={n.x} y={n.y + 38} textAnchor="middle" className="font-mono" fontSize="11" fill="var(--d-fg-dim)" letterSpacing="0.4">{n.label}</text>
        </g>
      ))}

      {/* center: Organization */}
      <circle cx={C.x} cy={C.y} r="80" fill="url(#orgGlow)" />
      <circle cx={C.x} cy={C.y} r="40" fill="var(--d-bg-3)" stroke="var(--d-accent)" strokeWidth="1.75" />
      <circle cx={C.x} cy={C.y} r="9" fill="var(--d-accent)" className="node-pulse" />
      <text x={C.x} y={C.y + 60} textAnchor="middle" className="font-mono" fontSize="12" fontWeight="600" fill="var(--d-accent)" letterSpacing="0.5">ORGANIZATION</text>
    </svg>
  );
}
