import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import CinematicHomeSlider from '@/components/home/CinematicHomeSlider';
import TransformationStatement from '@/components/home/TransformationStatement';
import ShiftFromPagesToEntities from '@/components/home/ShiftFromPagesToEntities';
import FrameworkLayers from '@/components/home/FrameworkLayers';
import MachineReadPreview from '@/components/home/MachineReadPreview';
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

      <CinematicHomeSlider />
      <TransformationStatement />

      <ScrollReveal><ShiftFromPagesToEntities /></ScrollReveal>
      <ScrollReveal><FrameworkLayers /></ScrollReveal>
      <ScrollReveal><MachineReadPreview /></ScrollReveal>
      <ScrollReveal><FoundationOffer /></ScrollReveal>

      {/* Final CTA */}
      <section style={{ padding: '130px 32px', backgroundColor: 'var(--d-bg)', borderTop: '1px solid var(--d-line)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            className="font-inter font-semibold mb-6"
            style={{ fontSize: 'clamp(38px, 5.6vw, 72px)', lineHeight: 1.02, letterSpacing: '-0.04em', color: 'var(--d-fg)' }}
          >
            Become the answer{' '}
            <em className="serif">AI recommends.</em>
          </h2>
          <p
            className="font-inter mb-10"
            style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--d-fg-dim)', fontWeight: 300, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            Start with a free Machine Read. Built once, owned forever — no platform rent, no lock-in.
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
