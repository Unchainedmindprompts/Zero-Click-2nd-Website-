import CinematicHomeSlider from '@/components/home/CinematicHomeSlider';
import ProofTeaser from '@/components/proof/ProofTeaser';

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

// The homepage opens on the full-screen cinematic slider (its own first
// viewport). The slider is not a hard scroll-hijack — on its last slide a
// further scroll releases into the normal page — so below it we surface the
// Proof teaser and the site footer (contact, NAP, entity signals). Deeper
// content is reached via the nav/menu and the slider CTAs.
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <CinematicHomeSlider />

      <section className="kc-home-proof">
        <ProofTeaser />
      </section>
    </>
  );
}
