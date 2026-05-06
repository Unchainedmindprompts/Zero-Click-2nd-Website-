import type { Metadata } from 'next';
import {
  Inter,
  JetBrains_Mono,
  Instrument_Serif,
  DM_Sans,
  Bebas_Neue,
  Cormorant_Garamond,
} from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundLayer from '@/components/BackgroundLayer';

// ── Design system v2 fonts ────────────────────────────────────────────────────
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
});

// ── Legacy fonts — blog post pages depend on these CSS variables ──────────────
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: '400',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400'],
  style: ['italic'],
  display: 'swap',
});

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: 'KodeCite.ai — AI Search Optimization & Digital Marketing',
    template: '%s | KodeCite.ai',
  },
  description:
    'Most businesses are invisible to AI. KodeCite.ai builds the websites, content, and campaigns that make you the answer. Based in Post Falls, Idaho.',
  keywords: [
    'SEO', 'schema markup', 'entity graph', 'Schema.org implementation',
    'AI search optimization', 'answer engine optimization',
    "why my business doesn't show up in ChatGPT", 'Google AI Overviews',
    'AI search visibility', 'local SEO', 'digital marketing',
    'website infrastructure', 'AEO agency', 'Perplexity SEO', 'llms.txt', 'JSON-LD schema',
  ],
  authors: [{ name: 'KodeCite.ai' }],
  creator: 'KodeCite.ai',
  metadataBase: new URL('https://www.kodecite.ai'),
  openGraph: {
    title: 'KodeCite.ai — Entity Graph Infrastructure for AI & Traditional Search',
    description:
      'Schema.org has been the language of the internet for 15 years. An entity graph is Schema used correctly — the foundation that makes your business visible in both AI discovery and traditional search.',
    url: 'https://www.kodecite.ai',
    siteName: 'KodeCite.ai',
    images: [{ url: 'https://www.kodecite.ai/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KodeCite.ai — Entity Graph Infrastructure for AI & Traditional Search',
    description:
      'An entity graph is Schema.org used correctly. Almost no business has one built right. We build it — on infrastructure you own.',
    images: ['https://www.kodecite.ai/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

// ── JSON-LD schemas (root layout — present on every page) ────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.kodecite.ai/#organization',
  name: 'KodeCite.ai',
  url: 'https://www.kodecite.ai',
  logo: 'https://www.kodecite.ai/logo.png',
  description:
    "KodeCite.ai builds entity graphs for businesses — Schema.org deployed correctly, every element of a business connected into a single machine-readable identity that AI systems can read, verify, and cite.",
  email: 'mark@kodecite.ai',
  foundingDate: '2025',
  founder: { '@id': 'https://www.kodecite.ai/#founder' },
  areaServed: { '@type': 'Country', name: 'United States' },
  sameAs: [
    'https://www.kodecite.ai',
    'https://www.facebook.com/profile.php?id=61586478347376',
    'https://www.linkedin.com/in/mark-abplanalp-46a272371',
  ],
};

const founderSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.kodecite.ai/#founder',
  name: 'Mark Abplanalp',
  jobTitle: 'Founder',
  worksFor: { '@id': 'https://www.kodecite.ai/#organization' },
  url: 'https://www.kodecite.ai',
  description:
    'Founder of KodeCite.ai. 30 years of sales experience, 23 years as an entrepreneur, 1,000+ hours of AEO and GEO research. Builds AI-ready web infrastructure for businesses that want to be recommended by AI search engines.',
  knowsAbout: [
    'Entity Graph Infrastructure', 'Schema.org Implementation', 'Answer Engine Optimization',
    'Generative Engine Optimization', 'AI Search Visibility', 'JSON-LD Schema Markup',
    'Next.js Development', 'Vercel Edge Hosting', 'llms.txt', 'agent.json',
    'Local Business Entity Graphs', 'Machine-Readable Business Identity', 'Traditional SEO',
  ],
  sameAs: [
    'https://www.linkedin.com/in/mark-abplanalp-46a272371',
    'https://www.facebook.com/profile.php?id=61586478347376',
  ],
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.kodecite.ai/#service',
  name: 'KodeCite.ai',
  url: 'https://www.kodecite.ai',
  image: 'https://www.kodecite.ai/og-image.png',
  description:
    'KodeCite.ai builds entity graphs — Schema.org deployed correctly as a machine-readable business identity. Custom JSON-LD on every page, AI identity files (llms.txt + agent.json), and sub-1s edge infrastructure owned by the client.',
  telephone: '+14803239740',
  email: 'mark@kodecite.ai',
  priceRange: '$$',
  founder: { '@id': 'https://www.kodecite.ai/#founder' },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: [
    'Entity Graph Infrastructure', 'Schema.org Implementation', 'Answer Engine Optimization',
    'AI Search Optimization', 'Next.js Website Development', 'JSON-LD Schema Markup',
  ],
  sameAs: [
    'https://www.kodecite.ai',
    'https://www.facebook.com/profile.php?id=61586478347376',
    'https://www.linkedin.com/in/mark-abplanalp-46a272371',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.kodecite.ai/#website',
  name: 'KodeCite.ai',
  url: 'https://www.kodecite.ai',
  publisher: { '@id': 'https://www.kodecite.ai/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.kodecite.ai/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

// ── Root layout ───────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontVariables = [
    inter.variable,
    jetbrainsMono.variable,
    instrumentSerif.variable,
    dmSans.variable,
    bebasNeue.variable,
    cormorantGaramond.variable,
  ].join(' ');

  return (
    <html lang="en" className={fontVariables}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <BackgroundLayer />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
