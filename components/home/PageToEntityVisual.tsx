// One cinematic transformation: a flat page dissolves into structured signals,
// the signals flow into a central entity core, and the core resolves into a
// verified, recommendable entity. Pure SVG + CSS — readable, server-rendered.

const signals = [
  { label: 'Identity', cy: 96 },
  { label: 'Services', cy: 154 },
  { label: 'Location', cy: 212 },
  { label: 'Reviews', cy: 270 },
  { label: 'Credentials', cy: 328 },
  { label: 'FAQs', cy: 386 },
  { label: 'Profiles', cy: 444 },
  { label: 'Action paths', cy: 502 },
];

const PILL_X = 250;
const PILL_W = 132;
const CORE = { x: 610, y: 300 };

export default function PageToEntityVisual() {
  return (
    <svg
      viewBox="0 0 760 600"
      width="100%"
      role="img"
      aria-label="A flat website page dissolves into structured signals — identity, services, location, reviews, credentials, FAQs, profiles, and action paths — that flow into a central entity core, which becomes a verified, recommendable entity."
      style={{ display: 'block', overflow: 'visible' }}
    >
      <defs>
        <radialGradient id="aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--d-accent)" stopOpacity="0.34" />
          <stop offset="55%" stopColor="#7c78ff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--d-accent)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orb" cx="42%" cy="38%" r="65%">
          <stop offset="0%" stopColor="#bfeeff" />
          <stop offset="45%" stopColor="var(--d-accent)" />
          <stop offset="100%" stopColor="#3aa0d6" />
        </radialGradient>
        <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--d-accent-2)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--d-accent)" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="pageFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--d-bg-2)" />
          <stop offset="100%" stopColor="var(--d-bg-2)" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {/* aura behind the core */}
      <circle className="hero-aura" cx={CORE.x} cy={CORE.y} r="185" fill="url(#aura)" style={{ transformOrigin: '610px 300px' }} />

      {/* ── Old page (left), dissolving at its right edge ── */}
      <g>
        <rect x="36" y="196" width="168" height="208" rx="12" fill="url(#pageFade)" stroke="var(--d-line)" strokeWidth="1" />
        <g opacity="0.7">
          <circle cx="52" cy="212" r="3" fill="var(--d-fg-mute)" />
          <circle cx="62" cy="212" r="3" fill="var(--d-fg-mute)" />
          <circle cx="72" cy="212" r="3" fill="var(--d-fg-mute)" />
        </g>
        {[238, 256, 274, 300, 318, 336].map((y, i) => (
          <rect key={y} x="52" y={y} width={i % 3 === 2 ? 70 : 124} height="5" rx="2.5" fill="var(--d-line-s)" opacity={1 - i * 0.08} />
        ))}
        {/* fragments peeling off the right edge */}
        {[
          { x: 196, y: 224, o: 0.55 },
          { x: 214, y: 262, o: 0.4 },
          { x: 206, y: 320, o: 0.45 },
          { x: 226, y: 352, o: 0.28 },
        ].map((f) => (
          <rect key={`${f.x}-${f.y}`} x={f.x} y={f.y} width="14" height="14" rx="3" fill="var(--d-accent)" opacity={f.o} />
        ))}
      </g>

      {/* ── Emit lines: page -> signals ── */}
      {signals.map((s) => (
        <path key={`emit-${s.label}`} d={`M 206 300 C 226 300, 236 ${s.cy}, ${PILL_X} ${s.cy}`} fill="none" stroke="var(--d-line-s)" strokeWidth="1" strokeOpacity="0.45" />
      ))}

      {/* ── Flow lines: signals -> core ── */}
      {signals.map((s, i) => (
        <path key={`flow-${s.label}`} d={`M ${PILL_X + PILL_W} ${s.cy} C ${PILL_X + PILL_W + 70} ${s.cy}, 520 300, 565 300`} fill="none" stroke="url(#flow)" strokeWidth="1.4" className="conn-flow" style={{ animationDelay: `${i * 0.12}s` }} />
      ))}

      {/* ── Signal pills (readable) ── */}
      {signals.map((s, i) => (
        <g key={`pill-${s.label}`} className="signal-pill" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
          <rect x={PILL_X} y={s.cy - 15} width={PILL_W} height="30" rx="15" fill="var(--d-bg-3)" stroke="var(--d-line-s)" strokeWidth="1" />
          <circle cx={PILL_X + 16} cy={s.cy} r="3.5" fill="var(--d-accent)" />
          <text x={PILL_X + 30} y={s.cy + 4} className="font-mono" fontSize="13" fill="var(--d-fg-dim)" letterSpacing="0.2">{s.label}</text>
        </g>
      ))}

      {/* ── Entity core ── */}
      <g>
        {/* rotating verification rings */}
        <circle className="verify-ring" cx={CORE.x} cy={CORE.y} r="118" fill="none" stroke="var(--d-accent)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 12" />
        <circle className="verify-ring2" cx={CORE.x} cy={CORE.y} r="92" fill="none" stroke="var(--d-accent-2)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 9" />
        {/* confidence arc (~88%, green) */}
        <circle cx={CORE.x} cy={CORE.y} r="78" fill="none" stroke="var(--d-ok)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="490 562" strokeDashoffset="0" transform={`rotate(-90 ${CORE.x} ${CORE.y})`} opacity="0.85" />
        {/* orb */}
        <circle className="core-breathe" cx={CORE.x} cy={CORE.y} r="58" fill="var(--d-accent)" opacity="0.12" />
        <circle cx={CORE.x} cy={CORE.y} r="44" fill="url(#orb)" />
        {/* condensed entity graph inside the orb */}
        {[[-22, -8], [20, -14], [24, 12], [-6, 22], [-24, 12]].map(([dx, dy], i) => (
          <line key={`il-${i}`} x1={CORE.x} y1={CORE.y} x2={CORE.x + dx} y2={CORE.y + dy} stroke="#0a2233" strokeWidth="1" strokeOpacity="0.55" />
        ))}
        {[[-22, -8], [20, -14], [24, 12], [-6, 22], [-24, 12]].map(([dx, dy], i) => (
          <circle key={`id-${i}`} cx={CORE.x + dx} cy={CORE.y + dy} r="3.2" fill="#0a2233" fillOpacity="0.7" />
        ))}
        <circle cx={CORE.x} cy={CORE.y} r="5" fill="#082030" />
        {/* labels */}
        <text x={CORE.x} y={CORE.y - 96} textAnchor="middle" className="font-mono" fontSize="11" fill="var(--d-fg-mute)" letterSpacing="2.5">ENTITY CORE</text>
        <text x={CORE.x} y={CORE.y + 118} textAnchor="middle" className="font-mono" fontSize="12" fontWeight="600" fill="var(--d-ok)" letterSpacing="2">VERIFIED · RECOMMENDABLE</text>
      </g>
    </svg>
  );
}
