import Link from 'next/link';
import PageToEntityVisual from '@/components/home/PageToEntityVisual';

export default function TransformationHero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--d-bg)' }}>
      {/* cinematic depth — soft auras, no busy grid */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(50% 55% at 72% 42%, rgba(93,213,255,0.14), transparent 70%), radial-gradient(40% 45% at 20% 78%, rgba(124,120,255,0.12), transparent 72%)',
        }}
      />

      <div className="relative mx-auto px-8" style={{ maxWidth: '1320px' }}>
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-6" style={{ minHeight: '88vh', paddingTop: '128px', paddingBottom: '88px' }}>

          {/* Copy */}
          <div className="w-full lg:w-[44%] lg:flex-shrink-0 relative z-10">
            <div className="d-eyebrow mb-7">THE AI WEB</div>

            <h1
              className="font-inter font-semibold mb-7"
              style={{ fontSize: 'clamp(42px, 5.4vw, 72px)', lineHeight: 1.02, letterSpacing: '-0.04em', color: 'var(--d-fg)' }}
            >
              The next web won&apos;t search pages.<br />
              <em className="serif">It will verify entities.</em>
            </h1>

            <p
              className="font-inter mb-9"
              style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--d-fg-dim)', fontWeight: 300, maxWidth: '460px' }}
            >
              KodeCite rebuilds your website into a structured, source-backed entity foundation that AI
              search engines and future agents can understand, trust, and recommend.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/machine-read" className="d-btn d-btn-primary">Run My Free Machine Read →</Link>
              <Link href="#foundation" className="d-btn d-btn-ghost">See the Foundation</Link>
            </div>
          </div>

          {/* Transformation visual */}
          <div className="w-full lg:w-[56%] lg:-mr-8">
            <div className="mx-auto" style={{ maxWidth: '680px' }}>
              <PageToEntityVisual />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
