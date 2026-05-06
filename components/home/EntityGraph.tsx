// Colorized entity graph — matches hero visual style, CSS-only animation

type Anchor = 'middle' | 'start' | 'end';

const CSS = `
.eg2-edge{stroke-dasharray:300;stroke-dashoffset:300;animation:eg2Draw 1s ease-out forwards}
@keyframes eg2Draw{to{stroke-dashoffset:0}}
.eg2-glow{animation:eg2Pulse 5s ease-in-out infinite}
@keyframes eg2Pulse{0%,100%{opacity:.65}50%{opacity:1}}
@media(prefers-reduced-motion:reduce){
  .eg2-edge{stroke-dasharray:none;stroke-dashoffset:0;animation:none}
  .eg2-glow{animation:none;opacity:1}
}
`;

const cx = 240, cy = 240;

const midNodes = [
  { x: 240, y: 135, r: 18, color: '#8a90c4', label: 'SCHEMA.ORG', delay: '0.2s',  pulse: '0s'   },
  { x: 340, y: 207, r: 18, color: '#7af0c2', label: 'INFRA',       delay: '0.5s',  pulse: '1s'   },
  { x: 302, y: 325, r: 18, color: '#b89bff', label: 'CONTENT',     delay: '0.8s',  pulse: '2s'   },
  { x: 178, y: 325, r: 18, color: '#8ab4ff', label: 'IDENTITY',    delay: '1.1s',  pulse: '3s'   },
  { x: 140, y: 207, r: 18, color: '#ff9b8a', label: 'SIGNALS',     delay: '1.4s',  pulse: '4s'   },
];

const outerNodes = [
  { x: 316, y:  58, r: 12, color: '#5dd5ff', label: 'CHATGPT',    delay: '0.4s', pulse: '0.5s', tx:   0, ty: -20, anchor: 'middle' as Anchor },
  { x: 445, y: 200, r: 12, color: '#7af0c2', label: 'PERPLEXITY', delay: '1.0s', pulse: '1.5s', tx:  17, ty:   4, anchor: 'start'  as Anchor },
  { x: 430, y: 368, r: 12, color: '#ff9b8a', label: 'GOOGLE AI',  delay: '1.6s', pulse: '2.5s', tx:  17, ty:   4, anchor: 'start'  as Anchor },
];

const edges = [
  { x1: cx,  y1: cy,  x2: 240, y2: 135, delay: '0s'    },
  { x1: cx,  y1: cy,  x2: 340, y2: 207, delay: '0.15s' },
  { x1: cx,  y1: cy,  x2: 302, y2: 325, delay: '0.3s'  },
  { x1: cx,  y1: cy,  x2: 178, y2: 325, delay: '0.45s' },
  { x1: cx,  y1: cy,  x2: 140, y2: 207, delay: '0.6s'  },
  { x1: 240, y1: 135, x2: 316, y2:  58, delay: '0.75s' },
  { x1: 240, y1: 135, x2: 445, y2: 200, delay: '0.9s'  },
  { x1: 340, y1: 207, x2: 445, y2: 200, delay: '1.05s' },
  { x1: 340, y1: 207, x2: 430, y2: 368, delay: '1.2s'  },
  { x1: 302, y1: 325, x2: 430, y2: 368, delay: '1.35s' },
  { x1: 178, y1: 325, x2: 430, y2: 368, delay: '1.5s'  },
];

export default function EntityGraph() {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      aria-hidden="true"
      style={{ width: '100%', maxWidth: '480px', display: 'block' }}
    >
      <style>{CSS}</style>

      <defs>
        <radialGradient id="eg2Bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#5dd5ff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#5dd5ff" stopOpacity="0"    />
        </radialGradient>
      </defs>

      {/* Ambient glow */}
      <ellipse cx={cx} cy={cy} rx="210" ry="210" fill="url(#eg2Bg)" style={{ filter: 'blur(30px)' }} />

      {/* Guide rings — dashed */}
      <circle cx={cx} cy={cy} r="107" stroke="rgba(93,213,255,0.08)"  strokeWidth="1" strokeDasharray="4 7" />
      <circle cx={cx} cy={cy} r="200" stroke="rgba(138,180,255,0.05)" strokeWidth="1" strokeDasharray="3 9" />

      {/* Edges */}
      {edges.map((e, i) => (
        <line
          key={i}
          x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
          stroke="#5dd5ff" strokeOpacity="0.40" strokeWidth="0.85"
          className="eg2-edge"
          style={{ animationDelay: e.delay }}
        />
      ))}

      {/* Outer nodes */}
      {outerNodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r={n.r + 9} fill={n.color} fillOpacity="0.06" />
          <circle
            cx={n.x} cy={n.y} r={n.r + 4}
            fill={n.color} fillOpacity="0.10"
            className="eg2-glow"
            style={{ animationDelay: n.pulse }}
          />
          <circle
            cx={n.x} cy={n.y} r={n.r}
            stroke={n.color} strokeWidth="1.5"
            fill={n.color} fillOpacity="0.13"
          />
          <text
            x={n.x + n.tx} y={n.y + n.ty}
            textAnchor={n.anchor}
            fontFamily="var(--font-mono)"
            fontSize="8" letterSpacing="0.12em"
            fill={n.color} fillOpacity="0.82"
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* Mid ring nodes */}
      {midNodes.map((n) => {
        const textY  = n.y < cy ? n.y - 27 : n.y + 31;
        const textX  = n.x < cx - 20 ? n.x - 6 : n.x > cx + 20 ? n.x + 6 : n.x;
        const anchor: Anchor = n.x < cx - 20 ? 'end' : n.x > cx + 20 ? 'start' : 'middle';
        return (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r={n.r + 10} fill={n.color} fillOpacity="0.06" />
            <circle
              cx={n.x} cy={n.y} r={n.r + 4}
              fill={n.color} fillOpacity="0.11"
              className="eg2-glow"
              style={{ animationDelay: n.pulse }}
            />
            <circle
              cx={n.x} cy={n.y} r={n.r}
              stroke={n.color} strokeWidth="1.5"
              fill={n.color} fillOpacity="0.14"
            />
            <text
              x={textX} y={textY}
              textAnchor={anchor}
              fontFamily="var(--font-mono)"
              fontSize="8" letterSpacing="0.12em"
              fill={n.color} fillOpacity="0.82"
            >
              {n.label}
            </text>
          </g>
        );
      })}

      {/* Center node — 3-layer treatment */}
      <circle cx={cx} cy={cy} r="42" fill="#5dd5ff" fillOpacity="0.05" />
      <circle
        cx={cx} cy={cy} r="34"
        fill="#5dd5ff" fillOpacity="0.09"
        className="eg2-glow"
        style={{ animationDelay: '2s' }}
      />
      <circle
        cx={cx} cy={cy} r="26"
        stroke="#5dd5ff" strokeWidth="2"
        fill="#5dd5ff" fillOpacity="0.16"
      />
      <text
        x={cx} y={cy - 4}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8.5" letterSpacing="0.10em"
        fill="#5dd5ff" fillOpacity="0.95"
      >
        ENTITY
      </text>
      <text
        x={cx} y={cy + 8}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8.5" letterSpacing="0.10em"
        fill="#5dd5ff" fillOpacity="0.95"
      >
        GRAPH
      </text>
    </svg>
  );
}
