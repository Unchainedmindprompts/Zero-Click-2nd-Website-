// Pure server component — CSS-only animations, no JS needed
export default function EntityGraph() {
  const accent = 'rgba(93,213,255,';
  const dim    = 'rgba(138,180,255,';

  // Node positions
  const cx = 240;
  const cy = 240;
  // Middle ring (r≈105)
  const mid = [
    { x: 240, y: 135, label: 'SCHEMA.ORG',   delay: '0s'    },
    { x: 340, y: 207, label: 'INFRA',         delay: '0.4s'  },
    { x: 302, y: 325, label: 'CONTENT',       delay: '0.8s'  },
    { x: 178, y: 325, label: 'IDENTITY',      delay: '1.2s'  },
    { x: 140, y: 207, label: 'SIGNALS',       delay: '1.6s'  },
  ];
  // Outer nodes (AI citation destinations)
  const outer = [
    { x: 316, y: 58,  label: 'CHATGPT',    anchor: 'middle', delay: '0.2s' },
    { x: 445, y: 200, label: 'PERPLEXITY', anchor: 'start',  delay: '0.9s' },
    { x: 430, y: 368, label: 'GOOGLE AI',  anchor: 'start',  delay: '1.4s' },
  ];
  // Edges: [x1,y1,x2,y2,delay]
  const edges: [number,number,number,number,string][] = [
    // center → middle
    [cx, cy, 240, 135, '0s'],
    [cx, cy, 340, 207, '0.15s'],
    [cx, cy, 302, 325, '0.3s'],
    [cx, cy, 178, 325, '0.45s'],
    [cx, cy, 140, 207, '0.6s'],
    // middle → outer
    [240, 135, 316,  58, '0.75s'],
    [240, 135, 445, 200, '0.9s'],
    [340, 207, 445, 200, '1.05s'],
    [340, 207, 430, 368, '1.2s'],
    [302, 325, 430, 368, '1.35s'],
    [178, 325, 430, 368, '1.5s'],
  ];

  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      aria-hidden="true"
      style={{ width: '100%', maxWidth: '480px', display: 'block' }}
    >
      {/* Subtle guide ring */}
      <circle cx={cx} cy={cy} r="107" stroke={`${accent}0.06)`} strokeWidth="1" />
      <circle cx={cx} cy={cy} r="200" stroke={`${dim}0.04)`} strokeWidth="1" />

      {/* Edges */}
      {edges.map(([x1, y1, x2, y2, delay], i) => (
        <line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={`${accent}0.28)`}
          strokeWidth="1"
          pathLength="100"
          className="svg-edge"
          style={{ animationDelay: delay }}
        />
      ))}

      {/* Outer nodes */}
      {outer.map((n) => (
        <g key={n.label}>
          <circle
            cx={n.x} cy={n.y} r="11"
            fill={`${dim}0.1)`}
            stroke={`${dim}0.45)`}
            strokeWidth="1"
            className="svg-node"
            style={{ animationDelay: n.delay }}
          />
          <text
            x={n.x + (n.anchor === 'start' ? 16 : 0)}
            y={n.anchor === 'middle' ? n.y - 18 : n.y + 4}
            textAnchor={n.anchor === 'start' ? 'start' : 'middle'}
            fill={`${dim}0.6)`}
            fontSize="8"
            fontFamily="monospace"
            letterSpacing="0.1em"
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* Middle ring nodes */}
      {mid.map((n, i) => {
        const textY   = n.y < cy ? n.y - 22 : n.y + 26;
        const textX   = n.x < cx - 20 ? n.x - 8 : n.x > cx + 20 ? n.x + 8 : n.x;
        const anchor  = n.x < cx - 20 ? 'end' : n.x > cx + 20 ? 'start' : 'middle';
        return (
          <g key={n.label}>
            <circle
              cx={n.x} cy={n.y} r="17"
              fill={`${accent}0.08)`}
              stroke={`${accent}0.4)`}
              strokeWidth="1.5"
              className="svg-node"
              style={{ animationDelay: n.delay }}
            />
            <text
              x={textX} y={textY}
              textAnchor={anchor}
              fill={`${accent}0.6)`}
              fontSize="8"
              fontFamily="monospace"
              letterSpacing="0.1em"
            >
              {n.label}
            </text>
          </g>
        );
      })}

      {/* Center node */}
      <circle cx={cx} cy={cy} r="36" fill={`${accent}0.06)`} stroke={`${accent}0.25)`} strokeWidth="1" />
      <circle
        cx={cx} cy={cy} r="24"
        fill={`${accent}0.14)`}
        stroke={`${accent}0.55)`}
        strokeWidth="1.5"
        className="svg-node"
        style={{ animationDelay: '0.5s' }}
      />
      <text x={cx} y={cy - 4} textAnchor="middle" fill={`${accent}0.9)`} fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">ENTITY</text>
      <text x={cx} y={cy + 7} textAnchor="middle" fill={`${accent}0.9)`} fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">GRAPH</text>
    </svg>
  );
}
