import Link from 'next/link';

const included = [
  'Custom Next.js website',
  'Structured entity graph',
  'Custom JSON-LD per page',
  'Service & location architecture',
  'Answer-ready content',
  'Verification cleanup',
  'llms.txt & llms-full.txt',
  'agent.json / agents.json',
  'Quote, booking & consultation clarity',
  'GitHub & Vercel owned by you',
];

export default function FoundationOffer() {
  return (
    <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div className="flex flex-col lg:flex-row gap-16">

          <div className="flex-1">
            <div className="d-eyebrow mb-6">THE OFFER</div>
            <h2
              className="font-inter font-semibold mb-5"
              style={{ fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.07, letterSpacing: '-0.025em', color: 'var(--d-fg)' }}
            >
              The Foundation Build.<br />
              <em className="serif">Built once. Owned forever.</em>
            </h2>
            <p className="font-inter mb-8" style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300, maxWidth: '440px' }}>
              A defined-scope engagement that gives your business a complete, AI-readable foundation —
              then hands you the keys.
            </p>
            <div
              className="inline-flex flex-col gap-1.5 mb-8"
              style={{ background: 'var(--d-bg-3)', border: '1px solid rgba(93,213,255,0.25)', borderRadius: '14px', padding: '18px 22px' }}
            >
              {['No retainer.', 'No platform rent.', 'No lock-in.'].map((x) => (
                <span key={x} className="font-inter font-semibold" style={{ fontSize: '15px', color: 'var(--d-fg)' }}>{x}</span>
              ))}
            </div>
            <div>
              <Link href="/contact" className="d-btn d-btn-primary">Run My Free Machine Read →</Link>
            </div>
          </div>

          <div className="flex-1">
            <div style={{ background: 'var(--d-bg-3)', border: '1px solid var(--d-line)', borderRadius: '16px', padding: '34px 38px' }}>
              <p className="font-mono text-xs mb-6" style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.12em' }}>WHAT&apos;S INCLUDED</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span style={{ color: 'var(--d-ok)', flexShrink: 0, marginTop: '2px', fontSize: '13px' }}>✓</span>
                    <span className="font-inter text-sm" style={{ color: 'var(--d-fg-dim)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
