const checks = [
  'Business identity',
  'Provider entity',
  'Service match',
  'Location match',
  'Review proof',
  'External profiles',
  'FAQ support',
  'Safe next action',
];

export default function RecommendationPath() {
  return (
    <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <div className="d-eyebrow mb-6">THE RECOMMENDATION PATH</div>
        <h2
          className="font-inter font-semibold mb-10"
          style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: 'var(--d-fg)' }}
        >
          What happens when someone <em className="serif">asks AI for a provider.</em>
        </h2>

        <div style={{ background: 'var(--d-bg-3)', border: '1px solid var(--d-line)', borderRadius: '18px', padding: '28px 30px' }}>
          {/* prompt */}
          <div
            className="mb-6"
            style={{ background: 'var(--d-bg)', border: '1px solid var(--d-line-s)', borderRadius: '12px', padding: '16px 20px' }}
          >
            <span className="font-mono text-[10px]" style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.14em' }}>PROMPT</span>
            <p className="font-inter mt-1" style={{ fontSize: '17px', color: 'var(--d-fg)', fontWeight: 500 }}>
              &ldquo;Find a cosmetic dentist in Bend with strong reviews.&rdquo;
            </p>
          </div>

          {/* checks grid */}
          <p className="font-mono text-[10px] mb-3" style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.14em' }}>AI VERIFIES</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
            {checks.map((c, i) => (
              <div
                key={c}
                style={{ background: 'rgba(122,240,194,0.05)', border: '1px solid var(--d-line)', borderRadius: '10px', padding: '12px 12px' }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span style={{ color: 'var(--d-ok)', fontSize: 11 }}>✓</span>
                  <span className="font-mono text-[10px]" style={{ color: 'var(--d-fg-mute)' }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <span className="font-inter text-xs" style={{ color: 'var(--d-fg-dim)', lineHeight: 1.4 }}>{c}</span>
              </div>
            ))}
          </div>

          {/* output */}
          <div style={{ background: 'rgba(93,213,255,0.05)', border: '1px solid rgba(93,213,255,0.3)', borderRadius: '12px', padding: '18px 20px' }}>
            <div className="flex items-center justify-between mb-1">
              <span className="font-inter text-sm" style={{ color: 'var(--d-fg-dim)' }}>Recommendation Confidence</span>
              <span className="font-mono text-[11px]" style={{ color: 'var(--d-ok)', letterSpacing: '0.08em', background: 'rgba(122,240,194,0.1)', borderRadius: 99, padding: '3px 10px' }}>HIGH</span>
            </div>
            <p className="font-inter text-sm" style={{ color: 'var(--d-fg-mute)', lineHeight: 1.55 }}>
              Entity verified across website, schema, reviews, service pages, and trusted profiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
