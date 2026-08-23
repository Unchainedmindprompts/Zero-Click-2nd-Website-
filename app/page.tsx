import CinematicHomeSlider from '@/components/home/CinematicHomeSlider';
import HomeScrollLock from '@/components/home/HomeScrollLock';

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
  name: 'KodeCite.ai — Make your business usable by AI',
  description:
    'Kodecite builds owned business infrastructure for the agent-driven web — so AI can understand what you offer, verify what is true, recommend you accurately, and take the next safe step with a customer.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://www.kodecite.ai/#website' },
  about: { '@id': 'https://www.kodecite.ai/#business' },
  primaryImageOfPage: { '@id': 'https://www.kodecite.ai/#logo' },
};

// The homepage is a locked, full-screen cinematic slide experience — only the
// shell, slider, controls, and slide copy/CTAs are visible. Deeper content is
// reached via the nav/menu and CTAs (Services, About, Blog, FAQ, Contact, …).
// The former lower sections (TransformationStatement, ShiftFromPagesToEntities,
// FrameworkLayers, MachineReadPreview, FoundationOffer, final CTA) are no longer
// rendered here; their components remain in the repo for reuse on routes.
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <HomeScrollLock />
      <CinematicHomeSlider />
    </>
  );
}
