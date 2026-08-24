import CinematicHomeSlider from '@/components/home/CinematicHomeSlider';
import HomeScrollLock from '@/components/home/HomeScrollLock';
import HomeExperience from '@/components/home/HomeExperience';
import MobileHomeStory from '@/components/home/MobileHomeStory';

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
    'Your next customer may ask an AI assistant to find, compare, and contact a business for them. Kodecite keeps you eligible by making the business understandable, verifiable, and safely actionable — with only the next steps you approve.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://www.kodecite.ai/#website' },
  about: { '@id': 'https://www.kodecite.ai/#business' },
  primaryImageOfPage: { '@id': 'https://www.kodecite.ai/#logo' },
};

// Desktop (≥768px): locked cinematic slider. Phone widths: stacked
// MobileHomeStory from the same HOME_SLIDES source. Interior routes are
// unchanged. Former lower homepage sections remain in the repo for reuse.
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <HomeScrollLock />
      <HomeExperience
        desktop={<CinematicHomeSlider />}
        mobile={<MobileHomeStory />}
      />
    </>
  );
}
