// Animated schema.org entity graph — hero visual, server component, CSS-only animation

type Anchor = 'left' | 'right' | 'above' | 'below';

interface GNode {
  id: string;
  x: number;
  y: number;
  r: number;
  color: string;
  label: string;
  anchor: Anchor;
  pulseDelay: string;
}

const NODES: GNode[] = [
  { id: 'org',    x: 240, y: 258, r: 14, color: '#5dd5ff', label: 'ORGANIZATION', anchor: 'below',  pulseDelay: '0s'   },
  { id: 'person', x: 148, y: 168, r: 10, color: '#8ab4ff', label: 'PERSON',       anchor: 'left',   pulseDelay: '0.5s' },
  { id: 'svc1',   x: 335, y: 170, r: 10, color: '#7af0c2', label: 'SERVICE',      anchor: 'right',  pulseDelay: '1.0s' },
  { id: 'svc2',   x: 362, y: 318, r: 10, color: '#7af0c2', label: 'SERVICE',      anchor: 'right',  pulseDelay: '1.5s' },
  { id: 'place',  x: 128, y: 318, r: 10, color: '#ff9b8a', label: 'PLACE',        anchor: 'left',   pulseDelay: '2.0s' },
  { id: 'art1',   x: 200, y: 415, r:  9, color: '#b89bff', label: 'ARTICLE',      anchor: 'below',  pulseDelay: '2.5s' },
  { id: 'art2',   x: 322, y: 408, r:  9, color: '#b89bff', label: 'ARTICLE',      anchor: 'right',  pulseDelay: '3.0s' },
  { id: 'art3',   x:  78, y: 238, r:  9, color: '#b89bff', label: 'ARTICLE',      anchor: 'left',   pulseDelay: '3.5s' },
  { id: 'offer1', x: 392, y: 232, r:  9, color: '#5dd5ff', label: 'OFFER',        anchor: 'right',  pulseDelay: '4.0s' },
  { id: 'offer2', x: 380, y: 395, r:  9, color: '#5dd5ff', label: 'OFFER',        anchor: 'right',  pulseDelay: '4.5s' },
  { id: 'faq',    x: 110, y: 442, r:  8, color: '#8a90c4', label: 'FAQPAGE',      anchor: 'left',   pulseDelay: '5.0s' },
  { id: 'web',    x: 275, y: 110, r:  8, color: '#8a90c4', label: 'WEBSITE',      anchor: 'above',  pulseDelay: '5.5s' },
];

// [fromId, toId, ctrlX, ctrlY, hasArrow]
type EdgeDef = [string, string, number, number, boolean];

const EDGE_DEFS: EdgeDef[] = [
  ['web',    'org',    250, 200, true ],
  ['person', 'org',    175, 230, true ],
  ['svc1',   'org',    300, 220, true ],
  ['svc2',   'org',    320, 290, true ],
  ['place',  'org',    170, 290, true ],
  ['art1',   'org',    215, 340, true ],
  ['svc1',   'offer1', 380, 190, true ],
  ['svc2',   'offer2', 390, 355, true ],
  ['org',    'art2',   310, 350, false],
  ['org',    'art3',   150, 230, false],
  ['person', 'art3',    95, 195, false],
  ['art1',   'faq',    145, 425, false],
  ['web',    'svc1',   325, 130, false],
  ['place',  'art2',   230, 390, false],
  ['art2',   'faq',    210, 460, false],
];

function getNode(id: string): GNode {
  return NODES.find(n => n.id === id)!;
}

function buildPath(fromId: string, toId: string, cx: number, cy: number, arrow: boolean): string {
  const f = getNode(fromId), t = getNode(toId);
  if (arrow) {
    const dx = t.x - cx, dy = t.y - cy;
    const len = Math.hypot(dx, dy) || 1;
    const ex = +(t.x - (dx / len) * (t.r + 4)).toFixed(1);
    const ey = +(t.y - (dy / len) * (t.r + 4)).toFixed(1);
    return `M${f.x} ${f.y} Q${cx} ${cy} ${ex} ${ey}`;
  }
  return `M${f.x} ${f.y} Q${cx} ${cy} ${t.x} ${t.y}`;
}

const EDGES = EDGE_DEFS.map(([from, to, cx, cy, arrow], i) => ({
  d: buildPath(from, to, cx, cy, arrow),
  arrow,
  delay: `${(i * 0.2).toFixed(1)}s`,
}));

type TextAnchor = 'end' | 'start' | 'middle';

function labelPos(n: GNode): { x: number; y: number; textAnchor: TextAnchor } {
  switch (n.anchor) {
    case 'left':  return { x: n.x - n.r - 6, y: n.y + 3.5,      textAnchor: 'end'    };
    case 'right': return { x: n.x + n.r + 6, y: n.y + 3.5,      textAnchor: 'start'  };
    case 'above': return { x: n.x,            y: n.y - n.r - 8,  textAnchor: 'middle' };
    case 'below': return { x: n.x,            y: n.y + n.r + 14, textAnchor: 'middle' };
  }
}

const CSS = `
.eg-edge{stroke-dasharray:200;stroke-dashoffset:200;animation:egDraw 0.9s ease-out forwards}
@keyframes egDraw{to{stroke-dashoffset:0}}
.eg-glow{animation:egPulse 6s ease-in-out infinite}
@keyframes egPulse{0%,100%{opacity:.7}50%{opacity:1}}
.eg-chip{animation:egDrift 8s ease-in-out infinite}
@keyframes egDrift{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
@media(prefers-reduced-motion:reduce){
  .eg-edge{stroke-dasharray:none;stroke-dashoffset:0;animation:none}
  .eg-glow{animation:none;opacity:1}
  .eg-chip{animation:none}
}
`;

export default function HeroCube() {
  return (
    <div aria-hidden="true" style={{ width: '100%', maxWidth: '540px' }}>
      <svg
        viewBox="0 0 480 500"
        fill="none"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <style>{CSS}</style>

        <defs>
          <radialGradient id="egBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#5dd5ff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#5dd5ff" stopOpacity="0"    />
          </radialGradient>
          <marker id="egArr" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
            <path d="M0 0 L6 2 L0 4 Z" fill="#5dd5ff" fillOpacity="0.55" />
          </marker>
        </defs>

        {/* Background ambient glow */}
        <ellipse
          cx="240" cy="270" rx="220" ry="200"
          fill="url(#egBg)"
          style={{ filter: 'blur(32px)' }}
        />

        {/* Edges */}
        {EDGES.map((e, i) => (
          <path
            key={i}
            className="eg-edge"
            d={e.d}
            stroke="#5dd5ff"
            strokeOpacity="0.38"
            strokeWidth="0.75"
            markerEnd={e.arrow ? 'url(#egArr)' : undefined}
            style={{ animationDelay: e.delay }}
          />
        ))}

        {/* Nodes */}
        {NODES.map((n) => {
          const lp = labelPos(n);
          return (
            <g key={n.id}>
              <circle cx={n.x} cy={n.y} r={n.r + 8} fill={n.color} fillOpacity="0.07" />
              <circle
                cx={n.x} cy={n.y} r={n.r + 3}
                fill={n.color} fillOpacity="0.10"
                className="eg-glow"
                style={{ animationDelay: n.pulseDelay }}
              />
              <circle
                cx={n.x} cy={n.y} r={n.r}
                stroke={n.color} strokeWidth="1.5"
                fill={n.color} fillOpacity="0.12"
              />
              <text
                x={lp.x} y={lp.y}
                textAnchor={lp.textAnchor}
                fontFamily="var(--font-mono)"
                fontSize="7.5"
                letterSpacing="0.14em"
                fill={n.color}
                fillOpacity="0.75"
              >
                {n.label}
              </text>
            </g>
          );
        })}

        {/* Schema chips — phase-offset drift */}
        <g className="eg-chip" style={{ animationDelay: '0s' }} opacity="0.5">
          <rect x="305" y="56" width="156" height="20" rx="4"
            fill="none" stroke="rgba(93,213,255,0.35)" strokeWidth="0.75" />
          <text x="383" y="70" textAnchor="middle"
            fontFamily="var(--font-mono)" fontSize="7.5" letterSpacing="0.10em"
            fill="rgba(93,213,255,0.7)">@type: Organization</text>
        </g>

        <g className="eg-chip" style={{ animationDelay: '-2.5s' }} opacity="0.5">
          <rect x="18" y="136" width="110" height="20" rx="4"
            fill="none" stroke="rgba(93,213,255,0.35)" strokeWidth="0.75" />
          <text x="73" y="150" textAnchor="middle"
            fontFamily="var(--font-mono)" fontSize="7.5" letterSpacing="0.10em"
            fill="rgba(93,213,255,0.7)">@id: #founder</text>
        </g>

        <g className="eg-chip" style={{ animationDelay: '-5s' }} opacity="0.5">
          <rect x="312" y="438" width="136" height="20" rx="4"
            fill="none" stroke="rgba(93,213,255,0.35)" strokeWidth="0.75" />
          <text x="380" y="452" textAnchor="middle"
            fontFamily="var(--font-mono)" fontSize="7.5" letterSpacing="0.10em"
            fill="rgba(93,213,255,0.7)">schema.org/Service</text>
        </g>
      </svg>
    </div>
  );
}
