import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import EntityGraph from '@/components/home/EntityGraph';
import MachineReadPanel from '@/components/home/MachineReadPanel';
import ShiftSection from '@/components/home/ShiftSection';
import ProblemCards from '@/components/home/ProblemCards';
import DifferenceCompare from '@/components/home/DifferenceCompare';
import FrameworkLayers from '@/components/home/FrameworkLayers';
import MachineReadDemo from '@/components/home/MachineReadDemo';
import RecommendationPath from '@/components/home/RecommendationPath';
import UseCaseCards from '@/components/home/UseCaseCards';
import FoundationOffer from '@/components/home/FoundationOffer';

export const metadata = {
  alternates: {
    canonical: 'https://www.kodecite.ai/',
  },
};

// Homepage WebPage entity — connected by @id to the site-wide entity graph
// defined in app/layout.tsx (#website, #business).
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.kodecite.ai/#webpage',
  url: 'https://www.kodecite.ai/',
  name: 'KodeCite.ai — Entity Infrastructure for the AI Web',
  description:
    'KodeCite turns established local businesses into structured, verifiable entities that AI search engines, answer engines, and future agents can understand, trust, and recommend.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://www.kodecite.ai/#website' },
  about: { '@id': 'https://www.kodecite.ai/#business' },
  primaryImageOfPage: { '@id': 'https://www.kodecite.ai/#logo' },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* ─── 1. Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ padding: '150px 32px 110px', backgroundColor: 'var(--d-bg)' }}>
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="relative" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left: text + CTA (first on mobile — CTA visible early) */}
            <div className="flex-1 min-w-0">
              <div className="d-eyebrow mb-6">ENTITY INFRASTRUCTURE FOR THE AI WEB</div>

              <h1
                className="font-inter font-semibold mb-6"
                style={{ fontSize: 'clamp(40px, 5.4vw, 70px)', lineHeight: 1.06, letterSpacing: '-0.035em', color: 'var(--d-fg)' }}
              >
                Make your business{' '}
                <em className="serif">machine-readable</em> to AI.
              </h1>

              <p
                className="font-inter mb-9"
                style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300, maxWidth: '500px' }}
              >
                KodeCite turns established local businesses into structured, verifiable entities that AI
                search engines and future agents can understand, trust, and recommend.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="d-btn d-btn-primary">Run My Free Machine Read →</Link>
                <Link href="#how-it-works" className="d-btn d-btn-ghost">See How It Works</Link>
              </div>
            </div>

            {/* Right: Machine Read panel → entity graph */}
            <div className="flex-shrink-0 w-full lg:w-auto flex flex-col items-center gap-8">
              <MachineReadPanel />
              <div className="hidden lg:block" style={{ width: 'min(100%, 460px)' }}>
                <EntityGraph />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 2–9. Sections ───────────────────────────────────── */}
      <ScrollReveal><ShiftSection /></ScrollReveal>
      <ScrollReveal><ProblemCards /></ScrollReveal>
      <ScrollReveal><DifferenceCompare /></ScrollReveal>
      <ScrollReveal><FrameworkLayers /></ScrollReveal>
      <ScrollReveal><MachineReadDemo /></ScrollReveal>
      <ScrollReveal><RecommendationPath /></ScrollReveal>
      <ScrollReveal><UseCaseCards /></ScrollReveal>
      <ScrollReveal><FoundationOffer /></ScrollReveal>

      {/* ─── 10. Final CTA ───────────────────────────────────── */}
      <section style={{ padding: '120px 32px', backgroundColor: 'var(--d-bg)', borderTop: '1px solid var(--d-line)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">GET STARTED</div>
          <h2
            className="font-inter font-semibold mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--d-fg)' }}
          >
            See what AI can verify<br />
            <em className="serif">about your business.</em>
          </h2>
          <p
            className="font-inter mb-10"
            style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300 }}
          >
            A free Machine Read shows what&apos;s clear, what&apos;s missing, what&apos;s inconsistent,
            what competitors may be doing better, and what to fix first.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="d-btn d-btn-primary">Run My Free Machine Read →</Link>
            <Link href="/services" className="d-btn d-btn-ghost">See the Foundation Build</Link>
          </div>
        </div>
      </section>
    </>
  );
}
