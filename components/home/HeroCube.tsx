// Foundation cross-section blueprint — pure SVG, server component, CSS-only animation
// Coordinates:  viewBox 0 0 480 480
//   y=0–88   sky band
//   y=88–222 house elevation (grade line at y=222)
//   y=222–400 foundation rectangle
//   y=400–432 footing trapezoid
//   y=432–480 earth below footing

const ac = 'rgba(93,213,255,';  // cyan accent helper

// Rebar grid — 4 cols × 6 rows inside foundation rect (x=98–382, y=222–400)
const RX = [155, 212, 269, 326];
const RY = [247, 272, 298, 323, 349, 374];

export default function HeroCube() {
  // Dots ordered left-to-right, top-to-bottom (reading order) for sequential pulse
  const dots = RY.flatMap((y, row) =>
    RX.map((x, col) => ({ x, y, idx: row * RX.length + col })),
  );

  return (
    <div
      aria-hidden="true"
      style={{ width: 'min(100%, 480px)', aspectRatio: '1 / 1' }}
    >
      <svg
        viewBox="0 0 480 480"
        fill="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <defs>
          {/* 45° earth hatching */}
          <pattern
            id="bp-hatch" width="8" height="8"
            patternUnits="userSpaceOnUse" patternTransform="rotate(45 0 0)"
          >
            <line x1="0" y1="0" x2="0" y2="8"
              stroke={`${ac}0.2)`} strokeWidth="0.5" />
          </pattern>

          {/* Concrete stipple — two staggered dot positions per tile */}
          <pattern id="bp-concrete" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.7" fill={`${ac}0.08)`} />
            <circle cx="6" cy="6" r="0.7" fill={`${ac}0.08)`} />
          </pattern>
        </defs>

        {/* ── Sky horizon lines ────────────────────────── */}
        <line className="bp-fade" style={{ animationDelay: '0.3s' }}
          x1="24" y1="32" x2="456" y2="32"
          stroke={`${ac}0.14)`} strokeWidth="0.5" />
        <line className="bp-fade" style={{ animationDelay: '0.36s' }}
          x1="24" y1="52" x2="456" y2="52"
          stroke={`${ac}0.09)`} strokeWidth="0.5" />

        {/* ── Earth hatching — left zone, right zone, below footing ── */}
        <rect className="bp-fade" style={{ animationDelay: '0.7s' }}
          x="0" y="222" width="98" height="258" fill="url(#bp-hatch)" />
        <rect className="bp-fade" style={{ animationDelay: '0.7s' }}
          x="382" y="222" width="98" height="258" fill="url(#bp-hatch)" />
        <rect className="bp-fade" style={{ animationDelay: '1.1s' }}
          x="0" y="432" width="480" height="48" fill="url(#bp-hatch)" />

        {/* ── Grade line — dashes rendered as presentation attr,
               CSS .bp-draw overrides to solid during animation  ── */}
        <line className="bp-draw bp-grade-line"
          style={{ animationDelay: '0s', animationDuration: '0.8s' }}
          x1="0" y1="222" x2="480" y2="222"
          stroke={`${ac}0.5)`} strokeWidth="1.5"
          strokeDasharray="8 5"
          pathLength="100" />

        {/* ── House outline ─────────────────────────── */}
        {/* Left roof slope */}
        <line className="bp-draw" style={{ animationDelay: '0.4s', animationDuration: '0.4s' }}
          x1="108" y1="152" x2="240" y2="90"
          stroke={`${ac}0.7)`} strokeWidth="1.5" pathLength="100" />
        {/* Right roof slope */}
        <line className="bp-draw" style={{ animationDelay: '0.5s', animationDuration: '0.4s' }}
          x1="240" y1="90" x2="372" y2="152"
          stroke={`${ac}0.7)`} strokeWidth="1.5" pathLength="100" />
        {/* Wall body */}
        <rect className="bp-draw" style={{ animationDelay: '0.6s', animationDuration: '0.65s' }}
          x="114" y="152" width="252" height="70"
          stroke={`${ac}0.7)`} strokeWidth="1.5" pathLength="100" />
        {/* Door */}
        <rect className="bp-draw" style={{ animationDelay: '0.78s', animationDuration: '0.28s' }}
          x="211" y="187" width="36" height="35"
          stroke={`${ac}0.7)`} strokeWidth="1.5" pathLength="100" />
        {/* Left window */}
        <rect className="bp-draw" style={{ animationDelay: '0.82s', animationDuration: '0.25s' }}
          x="137" y="169" width="32" height="24"
          stroke={`${ac}0.7)`} strokeWidth="1.5" pathLength="100" />
        {/* Right window */}
        <rect className="bp-draw" style={{ animationDelay: '0.87s', animationDuration: '0.25s' }}
          x="311" y="169" width="32" height="24"
          stroke={`${ac}0.7)`} strokeWidth="1.5" pathLength="100" />

        {/* ── Concrete fill (no animation — texture behind rebar) ── */}
        <rect x="98" y="222" width="284" height="178" fill="url(#bp-concrete)" />

        {/* ── Foundation perimeter rectangle ──────────── */}
        <rect className="bp-draw" style={{ animationDelay: '0.7s', animationDuration: '0.9s' }}
          x="98" y="222" width="284" height="178"
          stroke={`${ac}0.85)`} strokeWidth="2" pathLength="100" />

        {/* ── Footing trapezoid ────────────────────────── */}
        <polygon className="bp-draw" style={{ animationDelay: '1.1s', animationDuration: '0.55s' }}
          points="83,400 397,400 418,432 62,432"
          stroke={`${ac}0.85)`} strokeWidth="2" pathLength="100" />

        {/* ── Rebar grid connecting lines ──────────────── */}
        {/* Horizontal */}
        {RY.map((y, ri) => (
          <line key={`rh${ri}`}
            className="bp-fade" style={{ animationDelay: `${1.0 + ri * 0.04}s` }}
            x1="155" y1={y} x2="326" y2={y}
            stroke={`${ac}0.22)`} strokeWidth="0.5" />
        ))}
        {/* Vertical */}
        {RX.map((x, ci) => (
          <line key={`rv${ci}`}
            className="bp-fade" style={{ animationDelay: `${1.08 + ci * 0.04}s` }}
            x1={x} y1="247" x2={x} y2="374"
            stroke={`${ac}0.22)`} strokeWidth="0.5" />
        ))}

        {/* ── Rebar dots (cross-section circles) ─────── */}
        {dots.map(({ x, y, idx }) => (
          <circle key={`rd${idx}`}
            className="bp-rebar"
            style={{
              animationDelay: `${1.2 + idx * 0.08}s, ${3.5 + idx * 0.25}s`,
            }}
            cx={x} cy={y} r="3"
            fill={`${ac}0.6)`}
            stroke={`${ac}0.35)`} strokeWidth="0.5" />
        ))}

        {/* ── Dimension bracket — STRUCTURE (house top → grade) ── */}
        <g className="bp-fade" style={{ animationDelay: '1.8s' }}>
          <line x1="92" y1="90"  x2="84" y2="90"  stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <line x1="92" y1="222" x2="84" y2="222" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <line x1="86" y1="90"  x2="86" y2="222" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          {/* Arrow ticks — top */}
          <line x1="82" y1="95"  x2="86" y2="90"  stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <line x1="90" y1="95"  x2="86" y2="90"  stroke={`${ac}0.38)`} strokeWidth="0.75" />
          {/* Arrow ticks — bottom */}
          <line x1="82" y1="217" x2="86" y2="222" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <line x1="90" y1="217" x2="86" y2="222" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <text
            transform="rotate(-90 68 156)" x="68" y="156"
            textAnchor="middle" fontFamily="var(--font-mono)"
            fontSize="8" letterSpacing="0.18em" fill="var(--d-fg-mute)"
          >
            STRUCTURE
          </text>
        </g>

        {/* ── Dimension bracket — FOUNDATION (grade → footing top) ── */}
        <g className="bp-fade" style={{ animationDelay: '1.9s' }}>
          <line x1="76" y1="222" x2="68" y2="222" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <line x1="76" y1="400" x2="68" y2="400" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <line x1="70" y1="222" x2="70" y2="400" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <line x1="66" y1="227" x2="70" y2="222" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <line x1="74" y1="227" x2="70" y2="222" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <line x1="66" y1="395" x2="70" y2="400" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <line x1="74" y1="395" x2="70" y2="400" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <text
            transform="rotate(-90 52 311)" x="52" y="311"
            textAnchor="middle" fontFamily="var(--font-mono)"
            fontSize="8" letterSpacing="0.18em" fill="var(--d-fg-mute)"
          >
            FOUNDATION
          </text>
        </g>

        {/* ── Dimension bracket — FOOTING ─────────────── */}
        <g className="bp-fade" style={{ animationDelay: '2.0s' }}>
          <line x1="58" y1="400" x2="52" y2="400" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <line x1="58" y1="432" x2="52" y2="432" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <line x1="54" y1="400" x2="54" y2="432" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <line x1="50" y1="404" x2="54" y2="400" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <line x1="58" y1="404" x2="54" y2="400" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <line x1="50" y1="428" x2="54" y2="432" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <line x1="58" y1="428" x2="54" y2="432" stroke={`${ac}0.38)`} strokeWidth="0.75" />
          <text
            transform="rotate(-90 36 416)" x="36" y="416"
            textAnchor="middle" fontFamily="var(--font-mono)"
            fontSize="7.5" letterSpacing="0.16em" fill="var(--d-fg-mute)"
          >
            FOOTING
          </text>
        </g>

        {/* ── Title block ─────────────────────────────── */}
        <g className="bp-fade" style={{ animationDelay: '2.1s' }}>
          <rect x="378" y="435" width="96" height="42"
            stroke={`${ac}0.35)`} strokeWidth="1" />
          <line x1="378" y1="449" x2="474" y2="449"
            stroke={`${ac}0.2)`} strokeWidth="0.5" />
          <line x1="378" y1="462" x2="474" y2="462"
            stroke={`${ac}0.2)`} strokeWidth="0.5" />
          <text x="426" y="445" textAnchor="middle"
            fontFamily="var(--font-mono)" fontSize="7" letterSpacing="0.14em"
            fill="var(--d-fg-dim)">REV 01</text>
          <text x="426" y="458" textAnchor="middle"
            fontFamily="var(--font-mono)" fontSize="6.5" letterSpacing="0.1em"
            fill="var(--d-fg-dim)">FOUNDATION DETAIL</text>
          <text x="426" y="471" textAnchor="middle"
            fontFamily="var(--font-mono)" fontSize="6.5" letterSpacing="0.14em"
            fill={`${ac}0.55)`}>KODECITE.AI</text>
        </g>
      </svg>
    </div>
  );
}
