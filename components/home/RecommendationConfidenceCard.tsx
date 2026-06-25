export default function RecommendationConfidenceCard() {
  return (
    <div className="glass glass-ok" style={{ borderRadius: '16px', padding: '18px 20px' }}>
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-[9px]" style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.16em' }}>AI RECOMMENDATION CONFIDENCE</span>
      </div>
      <div className="flex items-end justify-between mb-2.5">
        <span className="font-inter font-semibold" style={{ fontSize: 30, lineHeight: 1, color: 'var(--d-ok)', letterSpacing: '-0.02em' }}>HIGH</span>
        <span className="font-inter text-sm flex items-center gap-1.5" style={{ color: 'var(--d-ok)' }}>
          <span style={{ fontSize: 13 }}>✓</span>Safe to recommend
        </span>
      </div>
      <div style={{ height: 7, borderRadius: 99, background: 'var(--d-bg)', overflow: 'hidden', marginBottom: '12px' }}>
        <div className="mr-bar-fill" style={{ height: '100%', width: '92%', borderRadius: 99, background: 'linear-gradient(90deg, var(--d-accent-2), var(--d-ok))' }} />
      </div>
      <p className="font-inter text-xs" style={{ color: 'var(--d-fg-mute)', lineHeight: 1.5 }}>
        <span style={{ color: 'var(--d-fg-dim)' }}>Reason:</span> Entity verified across website, schema, services, locations, reviews, and trusted profiles.
      </p>
    </div>
  );
}
