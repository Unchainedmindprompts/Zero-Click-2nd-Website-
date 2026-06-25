import Link from 'next/link';

// Page → Signals → Entity → Verified.
// Six curated signals emerge from a flat page and converge into one entity core.
// Geometry is hand-placed against a 440×540 viewBox; core sits at (220, 400).
const CORE = { x: 220, y: 400 };
const PAGE_OUT = { x: 220, y: 116 }; // where signal lines leave the page

const SIGNALS: {
  label: string;
  dot: [number, number];
  text: [number, number];
  anchor: 'start' | 'middle' | 'end';
}[] = [
  { label: 'Identity',    dot: [191, 284], text: [191, 245], anchor: 'middle' },
  { label: 'Services',    dot: [249, 284], text: [249, 245], anchor: 'middle' },
  { label: 'Location',    dot: [143, 308], text: [117, 277], anchor: 'end' },
  { label: 'Reviews',     dot: [297, 308], text: [323, 277], anchor: 'start' },
  { label: 'Credentials', dot: [109, 355], text: [72, 340],  anchor: 'end' },
  { label: 'FAQs',        dot: [331, 355], text: [368, 340], anchor: 'start' },
];

function emergePath([dx, dy]: [number, number]) {
  const cx = PAGE_OUT.x + (dx - PAGE_OUT.x) * 0.4;
  const cy = PAGE_OUT.y + (dy - PAGE_OUT.y) * 0.55;
  return `M ${PAGE_OUT.x} ${PAGE_OUT.y} Q ${cx} ${cy} ${dx} ${dy}`;
}
function convergePath([dx, dy]: [number, number]) {
  const cx = dx + (CORE.x - dx) * 0.55;
  const cy = dy + (CORE.y - dy) * 0.25;
  return `M ${dx} ${dy} Q ${cx} ${cy} ${CORE.x} ${CORE.y}`;
}

export default function EditorialHero() {
  return (
    <section
      className="kc-hero relative overflow-hidden"
      style={{ minHeight: '100svh', backgroundColor: 'var(--d-bg)' }}
    >
      {/* Atmosphere — drifting light, no diagram */}
      <div
        className="pointer-events-none absolute inset-0 hero-aura"
        aria-hidden
        style={{
          background:
            'radial-gradient(44% 50% at 80% 38%, rgba(93,213,255,0.16), transparent 70%), radial-gradient(40% 46% at 14% 90%, rgba(124,120,255,0.13), transparent 72%)',
        }}
      />

      <div
        className="relative w-full mx-auto px-8 grid items-center gap-x-12 gap-y-14 lg:grid-cols-[1.04fr_0.96fr]"
        style={{ maxWidth: '1320px', paddingTop: '120px', paddingBottom: '104px' }}
      >
        {/* ── Copy ─────────────────────────────────────────────────────────── */}
        <div className="max-w-[640px]">
          <div className="d-eyebrow mb-8 kc-materialize kc-delay-1">
            AI-READABLE BUSINESS INFRASTRUCTURE
          </div>

          <h1
            className="font-inter font-semibold kc-materialize kc-delay-2"
            style={{
              fontSize: 'clamp(40px, 7vw, 92px)',
              lineHeight: 1.01,
              letterSpacing: '-0.045em',
              color: 'var(--d-fg)',
              maxWidth: '16ch',
            }}
          >
            The next web won’t search pages.{' '}
            <em className="serif" style={{ color: 'var(--d-accent-2)', fontStyle: 'italic' }}>
              It will verify entities.
            </em>
          </h1>

          <p
            className="font-inter mt-8 mb-10 kc-materialize kc-delay-3"
            style={{
              fontSize: 'clamp(17px, 2vw, 21px)',
              lineHeight: 1.55,
              color: 'var(--d-fg-dim)',
              fontWeight: 300,
              maxWidth: '540px',
            }}
          >
            KodeCite rebuilds your website into a structured, source-backed entity foundation that
            AI search engines and future agents can understand, trust, and recommend.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 kc-materialize kc-delay-4">
            <Link href="/contact" className="d-btn d-btn-primary">
              Run My Free Machine Read →
            </Link>
            <Link href="#foundation" className="d-btn d-btn-ghost">
              See the Foundation
            </Link>
          </div>
        </div>

        {/* ── Transformation visual ───────────────────────────────────────── */}
        <div className="kc-focus-in flex justify-center lg:justify-end">
          <svg
            viewBox="0 0 440 540"
            className="w-full"
            style={{ maxWidth: '440px', height: 'auto' }}
            role="img"
            aria-label="A flat website transforming into structured signals — identity, services, location, reviews, credentials and FAQs — that converge into one verified, recommendable business entity."
          >
            <defs>
              <radialGradient id="kcCoreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(93,213,255,0.55)" />
                <stop offset="45%" stopColor="rgba(93,213,255,0.18)" />
                <stop offset="100%" stopColor="rgba(93,213,255,0)" />
              </radialGradient>
              <linearGradient id="kcPageFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(20,24,69,0.55)" />
                <stop offset="100%" stopColor="rgba(14,17,48,0.25)" />
              </linearGradient>
            </defs>

            {/* Stage 1 — the flat page */}
            <g aria-hidden>
              <rect
                x="160" y="26" width="120" height="86" rx="10"
                fill="url(#kcPageFill)" stroke="var(--d-line-s)" strokeWidth="1"
              />
              <circle cx="174" cy="42" r="2" fill="var(--d-fg-mute)" />
              <circle cx="183" cy="42" r="2" fill="var(--d-fg-mute)" />
              <circle cx="192" cy="42" r="2" fill="var(--d-fg-mute)" />
              <rect x="174" y="58" width="64" height="6" rx="3" fill="rgba(138,180,255,0.30)" />
              <rect x="174" y="72" width="92" height="4" rx="2" fill="rgba(138,144,196,0.20)" />
              <rect x="174" y="82" width="74" height="4" rx="2" fill="rgba(138,144,196,0.18)" />
              <rect x="174" y="92" width="84" height="4" rx="2" fill="rgba(138,144,196,0.16)" />
            </g>

            {/* Emergence — page to each signal (faint, static) */}
            <g fill="none" stroke="var(--d-accent)" strokeWidth="1" aria-hidden>
              {SIGNALS.map((s) => (
                <path key={`e-${s.label}`} d={emergePath(s.dot)} opacity="0.14" />
              ))}
            </g>

            {/* Convergence — signals into the entity core */}
            <g fill="none" aria-hidden>
              {SIGNALS.map((s, i) => (
                <g key={`c-${s.label}`}>
                  <path d={convergePath(s.dot)} stroke="var(--d-accent)" strokeWidth="1" opacity="0.18" />
                  <path
                    d={convergePath(s.dot)}
                    pathLength={100}
                    stroke="var(--d-accent)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    opacity="0.9"
                    className="kc-sig-pulse"
                    style={{ animationDelay: `${-(i * 0.52).toFixed(2)}s` }}
                  />
                </g>
              ))}
            </g>

            {/* Signal nodes + labels */}
            <g aria-hidden>
              {SIGNALS.map((s) => (
                <g key={`n-${s.label}`}>
                  <circle cx={s.dot[0]} cy={s.dot[1]} r="6" fill="var(--d-accent)" opacity="0.14" />
                  <circle cx={s.dot[0]} cy={s.dot[1]} r="2.6" fill="var(--d-accent)" />
                  <text
                    x={s.text[0]}
                    y={s.text[1]}
                    textAnchor={s.anchor}
                    fontFamily="var(--font-inter)"
                    fontSize="10.5"
                    letterSpacing="0.14em"
                    fill="var(--d-fg-dim)"
                    style={{ textTransform: 'uppercase' }}
                  >
                    {s.label}
                  </text>
                </g>
              ))}
            </g>

            {/* Stage 3 — the entity core */}
            <g aria-hidden>
              <circle cx={CORE.x} cy={CORE.y} r="48" fill="url(#kcCoreGlow)" />
              <g className="kc-core-pulse">
                <circle cx={CORE.x} cy={CORE.y} r="40" fill="none" stroke="var(--d-accent)" strokeWidth="1" opacity="0.35" />
                <circle cx={CORE.x} cy={CORE.y} r="27" fill="none" stroke="var(--d-accent)" strokeWidth="1" opacity="0.5" />
              </g>
              <circle cx={CORE.x} cy={CORE.y} r="9" fill="var(--d-accent)" />
              <circle cx={CORE.x} cy={CORE.y} r="3.5" fill="#eaffff" opacity="0.9" />
            </g>

            {/* Stage 4 — verified · recommendable */}
            <g aria-hidden>
              <path
                d="M 196 482 l 5 5 l 9 -11"
                fill="none" stroke="var(--d-ok)" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round"
                pathLength={1} className="kc-draw-in"
                style={{ animationDelay: '1.2s' }}
              />
              <text
                x="234" y="487" textAnchor="middle"
                fontFamily="var(--font-inter)" fontSize="11.5"
                letterSpacing="0.18em" style={{ textTransform: 'uppercase' }}
              >
                <tspan fill="var(--d-ok)">Verified</tspan>
                <tspan fill="var(--d-fg-mute)"> · </tspan>
                <tspan fill="var(--d-fg-dim)">Recommendable</tspan>
              </text>
              <line
                x1="150" y1="503" x2="290" y2="503"
                stroke="var(--d-ok)" strokeWidth="1" opacity="0.4"
                pathLength={1} className="kc-draw-in"
                style={{ animationDelay: '1.45s' }}
              />
            </g>
          </svg>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute left-0 right-0 flex justify-center" style={{ bottom: '32px' }} aria-hidden>
        <span
          className="scroll-cue font-mono"
          style={{ fontSize: '11px', letterSpacing: '0.24em', color: 'var(--d-fg-mute)' }}
        >
          SCROLL
        </span>
      </div>
    </section>
  );
}
