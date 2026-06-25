import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import HeroVerificationSystem from '@/components/home/HeroVerificationSystem';
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
      <section className="relative overflow-hidden" style={{ padding: '138px 32px 96px', backgroundColor: 'var(--d-bg)' }}>
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="relative" style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">

            {/* Left: headline + CTA (first on mobile — CTA visible early) */}
            <div className="w-full lg:max-w-[470px] lg:flex-shrink-0">
              <div className="d-eyebrow mb-6">AI BUSINESS VERIFICATION</div>

              <h1
                className="font-inter font-semibold mb-6"
                style={{ fontSize: 'clamp(38px, 4.8vw, 60px)', lineHeight: 1.07, letterSpacing: '-0.035em', color: 'var(--d-fg)' }}
              >
                Can AI verify your business well enough to{' '}
                <em className="serif">recommend it?</em>
              </h1>

              <p
                className="font-inter mb-9"
                style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300, maxWidth: '470px' }}
              >
                KodeCite rebuilds your website into a structured, source-backed entity foundation that AI
                search engines and future agents can understand, trust, and act on.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="d-btn d-btn-primary">Run My Free Machine Read →</Link>
                <Link href="#how-it-works" className="d-btn d-btn-ghost">See How It Works</Link>
              </div>

              <p className="font-mono mt-7" style={{ fontSize: '11px', letterSpacing: '0.06em', color: 'var(--d-fg-mute)', lineHeight: 1.6, maxWidth: '420px' }}>
                What ChatGPT, Perplexity, Gemini &amp; Google AI see when they check your business.
              </p>
            </div>

            {/* Right: integrated AI verification command center (dominant) */}
            <div className="w-full lg:flex-1 lg:min-w-0">
              <HeroVerificationSystem />
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
