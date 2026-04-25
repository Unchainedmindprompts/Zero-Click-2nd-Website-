// Pure server component — CSS-only 3D cube, no JS required
export default function HeroCube() {
  const S  = 220;       // outer face size px  (space-diagonal ≈ 381px, fits in 480px scene)
  const H  = S  / 2;    // 110px
  const IS = 132;       // inner face size (60%)
  const IH = IS / 2;    // 66px

  const gridBg = [
    'linear-gradient(rgba(93,213,255,0.12) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(93,213,255,0.12) 1px, transparent 1px)',
  ].join(', ');

  const outerFace: React.CSSProperties = {
    position:          'absolute',
    width:             S,
    height:            S,
    background:        'rgba(20,24,69,0.4)',
    backdropFilter:    'blur(2px)',
    WebkitBackdropFilter: 'blur(2px)',
    border:            '1px solid rgba(93,213,255,0.35)',
    backgroundImage:   gridBg,
    backgroundSize:    '25% 25%',
  };

  const innerFace: React.CSSProperties = {
    position:          'absolute',
    width:             IS,
    height:            IS,
    background:        'rgba(20,24,69,0.25)',
    backdropFilter:    'blur(1px)',
    WebkitBackdropFilter: 'blur(1px)',
    border:            '1px solid rgba(93,213,255,0.2)',
    backgroundImage:   gridBg,
    backgroundSize:    '33.33% 33.33%',
  };

  const outerTransforms = [
    `translateZ(${H}px)`,
    `rotateY(180deg) translateZ(${H}px)`,
    `rotateY(90deg)  translateZ(${H}px)`,
    `rotateY(-90deg) translateZ(${H}px)`,
    `rotateX(-90deg) translateZ(${H}px)`,
    `rotateX(90deg)  translateZ(${H}px)`,
  ];

  const innerTransforms = [
    `translateZ(${IH}px)`,
    `rotateY(180deg) translateZ(${IH}px)`,
    `rotateY(90deg)  translateZ(${IH}px)`,
    `rotateY(-90deg) translateZ(${IH}px)`,
    `rotateX(-90deg) translateZ(${IH}px)`,
    `rotateX(90deg)  translateZ(${IH}px)`,
  ];

  return (
    <div
      aria-hidden="true"
      style={{
        width:           'min(100%, 480px)',
        aspectRatio:     '1 / 1',
        perspective:     '1200px',
        perspectiveOrigin: '50% 40%',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        filter:          'drop-shadow(0 0 48px rgba(93,213,255,0.12)) drop-shadow(0 0 12px rgba(93,213,255,0.08))',
      }}
    >
      {/* Outer cube */}
      <div
        className="hero-cube-outer"
        style={{
          width:          S,
          height:         S,
          transformStyle: 'preserve-3d',
          // reduced-motion fallback — most flattering static angle
          transform:      'rotateX(-15deg) rotateY(25deg)',
        }}
      >
        {outerTransforms.map((t, i) => (
          <div key={i} style={{ ...outerFace, transform: t }} />
        ))}

        {/* Inner counter-rotating cube */}
        <div
          className="hero-cube-inner"
          style={{
            position:       'absolute',
            top:            (S - IS) / 2,
            left:           (S - IS) / 2,
            width:          IS,
            height:         IS,
            transformStyle: 'preserve-3d',
            // reduced-motion fallback
            transform:      'rotateX(15deg) rotateY(-25deg)',
          }}
        >
          {innerTransforms.map((t, i) => (
            <div key={i} style={{ ...innerFace, transform: t }} />
          ))}
        </div>
      </div>
    </div>
  );
}
