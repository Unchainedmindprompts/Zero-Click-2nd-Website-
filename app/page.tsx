import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import TransformationHero from '@/components/home/TransformationHero';
import ShiftFromPagesToEntities from '@/components/home/ShiftFromPagesToEntities';
import FrameworkLayers from '@/components/home/FrameworkLayers';
import MachineReadPreview from '@/components/home/MachineReadPreview';
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
    'KodeCite rebuilds your website into a structured, source-backed entity foundation that AI search engines, answer engines, and future agents can understand, trust, and recommend.',
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

      <TransformationHero />

      <ScrollReveal><ShiftFromPagesToEntities /></ScrollReveal>
      <ScrollReveal><FrameworkLayers /></ScrollReveal>
      <ScrollReveal><MachineReadPreview /></ScrollReveal>
      <ScrollReveal><UseCaseCards /></ScrollReveal>
      <ScrollReveal><FoundationOffer /></ScrollReveal>

      {/* Final CTA */}
      <section style={{ padding: '130px 32px', backgroundColor: 'var(--d-bg)', borderTop: '1px solid var(--d-line)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">GET STARTED</div>
          <h2
            className="font-inter font-semibold mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.04, letterSpacing: '-0.035em', color: 'var(--d-fg)' }}
          >
            See what AI can verify<br />
            <em className="serif">about your business.</em>
          </h2>
          <p
            className="font-inter mb-10"
            style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300 }}
          >
            A free Machine Read shows what&apos;s clear, what&apos;s missing, what&apos;s inconsistent,
            and what to fix first — built once, owned forever, no platform rent.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="d-btn d-btn-primary">Run My Free Machine Read →</Link>
            <Link href="#foundation" className="d-btn d-btn-ghost">See the Foundation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
