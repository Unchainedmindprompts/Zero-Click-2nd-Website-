import Link from 'next/link';

export default function EditorialHero() {
  return (
    <section className="relative overflow-hidden flex items-center" style={{ minHeight: '94vh', backgroundColor: 'var(--d-bg)' }}>
      {/* Atmosphere — drifting light + a faint entity halo, no diagram */}
      <div
        className="pointer-events-none absolute inset-0 hero-aura"
        aria-hidden
        style={{
          background:
            'radial-gradient(46% 52% at 78% 36%, rgba(93,213,255,0.16), transparent 70%), radial-gradient(40% 46% at 16% 88%, rgba(124,120,255,0.14), transparent 72%)',
        }}
      />
      <div
        className="pointer-events-none absolute hero-aura"
        aria-hidden
        style={{
          top: '-14%', right: '-8%', width: '760px', height: '760px', borderRadius: '50%',
          border: '1px solid rgba(93,213,255,0.16)', boxShadow: '0 0 120px 8px rgba(93,213,255,0.06) inset',
          opacity: 0.6, filter: 'blur(0.5px)',
        }}
      />

      <div className="relative w-full mx-auto px-8" style={{ maxWidth: '1320px', paddingTop: '120px', paddingBottom: '96px' }}>
        <div className="d-eyebrow mb-9">AI-READABLE BUSINESS INFRASTRUCTURE</div>

        <h1
          className="font-inter font-semibold"
          style={{ fontSize: 'clamp(44px, 8.2vw, 108px)', lineHeight: 0.99, letterSpacing: '-0.045em', color: 'var(--d-fg)', maxWidth: '15ch' }}
        >
          The web is becoming machine-readable.{' '}
          <em className="serif" style={{ color: 'var(--d-accent-2)' }}>Most businesses are not.</em>
        </h1>

        <p
          className="font-inter mt-9 mb-10"
          style={{ fontSize: 'clamp(17px, 2vw, 21px)', lineHeight: 1.55, color: 'var(--d-fg-dim)', fontWeight: 300, maxWidth: '540px' }}
        >
          KodeCite rebuilds your website into a structured, source-backed entity that AI search engines
          and future agents can understand, trust, and recommend.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact" className="d-btn d-btn-primary">Run My Free Machine Read →</Link>
          <Link href="#foundation" className="d-btn d-btn-ghost">See the Foundation</Link>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute left-0 right-0 flex justify-center" style={{ bottom: '34px' }} aria-hidden>
        <span className="scroll-cue font-mono" style={{ fontSize: '11px', letterSpacing: '0.24em', color: 'var(--d-fg-mute)' }}>SCROLL</span>
      </div>
    </section>
  );
}
