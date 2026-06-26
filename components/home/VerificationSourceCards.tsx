const sources = [
  'Google Business Profile',
  'Apple Maps',
  'Bing Places',
  'BBB',
  'Yelp',
  'Licensing / credentials',
  'Website schema',
  'FAQs',
];

export default function VerificationSourceCards() {
  return (
    <div className="glass" style={{ borderRadius: '14px', padding: '14px 16px' }}>
      <p className="font-mono text-[9px] mb-3" style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.16em' }}>VERIFICATION SOURCES</p>
      <div className="flex flex-col gap-1.5">
        {sources.map((s, i) => (
          <div key={s} className="mr-row flex items-center gap-2" style={{ animationDelay: `${0.5 + i * 0.08}s` }}>
            <span style={{ color: 'var(--d-ok)', fontSize: 10, flexShrink: 0 }}>✓</span>
            <span className="font-mono text-[10.5px] truncate" style={{ color: 'var(--d-fg-dim)' }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
