const layers = [
  { n: 'LAYER 01', t: 'Infrastructure', s: 'Built on Next.js, not plugin stacks.', d: 'Server-rendered, edge-deployed pages AI crawlers read on the first request.' },
  { n: 'LAYER 02', t: 'Entity Graph', s: 'The source of truth for your business.', d: 'Business, people, services, locations, reviews, and profiles connected through stable @id anchors.' },
  { n: 'LAYER 03', t: 'Answer Architecture', s: 'Content built for extraction and citation.', d: 'Answer-first pages, visible FAQs, and source-backed claims AI can quote with confidence.' },
  { n: 'LAYER 04', t: 'Agent Readiness', s: 'The next step beyond visibility.', d: 'Action rules that tell AI agents what a customer can do — and what must not be assumed.' },
];

export default function FrameworkLayers() {
  return (
    <section id="how-it-works" style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div className="d-eyebrow mb-6">THE FRAMEWORK</div>
        <h2
          className="font-inter font-semibold mb-12"
          style={{ fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: 'var(--d-fg)' }}
        >
          Four layers. <em className="serif">One compounding foundation.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {layers.map((l) => (
            <div
              key={l.n}
              style={{ background: 'var(--d-bg-2)', border: '1px solid var(--d-line)', borderLeft: '3px solid var(--d-accent)', borderRadius: '16px', padding: '30px 34px' }}
            >
              <p className="font-mono text-xs mb-3" style={{ color: 'var(--d-accent)', letterSpacing: '0.14em' }}>{l.n}</p>
              <h3 className="font-inter font-semibold mb-1" style={{ fontSize: '21px', color: 'var(--d-fg)', letterSpacing: '-0.02em' }}>{l.t}</h3>
              <p className="font-inter mb-3" style={{ fontSize: '14px', color: 'var(--d-fg)', fontWeight: 500 }}>{l.s}</p>
              <p className="font-inter" style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--d-fg-dim)', fontWeight: 300 }}>{l.d}</p>
            </div>
          ))}
        </div>

        {/* Verification layer — full width underneath */}
        <div
          className="mt-5"
          style={{ background: 'var(--d-bg-3)', border: '1px solid rgba(93,213,255,0.25)', borderRadius: '16px', padding: '26px 34px' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="font-mono text-xs flex-shrink-0" style={{ color: 'var(--d-accent)', letterSpacing: '0.14em' }}>VERIFICATION LAYER</p>
            <p className="font-inter text-sm" style={{ color: 'var(--d-fg-dim)', lineHeight: 1.6 }}>
              Consistent signals across website, schema, Google Business Profile, Apple Maps, Bing, BBB,
              Yelp, citations, credentials, and trusted profiles — the difference between schema and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
