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
import Shell from '@/components/Shell';
import RouteTransition from '@/components/RouteTransition';
import Footer from '@/components/Footer';
import BackgroundLayer from '@/components/BackgroundLayer';
import { businessAreaServed } from '@/lib/schema';

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
    default: 'KodeCite.ai — Make your business usable by AI',
    template: '%s | KodeCite.ai',
  },
  description:
    'Kodecite works on the connective layer for service businesses: verified truth, explicit capabilities, controlled action, owned infrastructure, and human handoff. An emerging, fragmented category — not a claim of market leadership.',
  keywords: [
    'business infrastructure', 'agent-ready website', 'entity graph',
    'Schema.org implementation', 'capability contract', 'controlled action',
    'AI agents', 'Next.js website infrastructure', 'llms.txt', 'agent.json',
    'JSON-LD schema', 'owned website infrastructure',
  ],
  authors: [{ name: 'KodeCite.ai' }],
  creator: 'KodeCite.ai',
  metadataBase: new URL('https://www.kodecite.ai'),
  openGraph: {
    title: 'KodeCite.ai — Make your business usable by AI',
    description:
      'The connective layer for service businesses: verified truth, explicit capabilities, controlled action, owned infrastructure, and human handoff. Luxe is production proof this can work.',
    url: 'https://www.kodecite.ai',
    siteName: 'KodeCite.ai',
    images: [{ url: 'https://www.kodecite.ai/og-image.png?v=2', width: 1200, height: 630, alt: 'KodeCite.ai — AI-readable business infrastructure' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KodeCite.ai — Make your business usable by AI',
    description:
      'Connective infrastructure for service businesses. Understandable. Verifiable. Recommendable. Actionable. Controlled. Not a claim of market dominance.',
    images: ['https://www.kodecite.ai/og-image.png?v=2'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

// ── JSON-LD entity graph (root layout — present on every page) ───────────────
// Single @graph: one business entity, one founder, one website — connected by @id.
const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    // Business — one entity, most-specific @type first. Merged from the former
    // Organization (#business) and ProfessionalService (#service) blocks.
    {
      '@type': ['ProfessionalService', 'Organization'],
      '@id': 'https://www.kodecite.ai/#business',
      name: 'KodeCite.ai',
      url: 'https://www.kodecite.ai',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://www.kodecite.ai/#logo',
        url: 'https://www.kodecite.ai/og-image.png',
        width: 1200,
        height: 630,
      },
      image: { '@id': 'https://www.kodecite.ai/#logo' },
      description:
        'KodeCite.ai works on the connective layer for service businesses: verified business truth, explicit capabilities, controlled agent actions, owned infrastructure, and human handoff. The category is emerging and fragmented. KodeCite is not the first, only, or category leader. Luxe Window Works is production proof the layer can work.',
      email: 'mark@kodecite.ai',
      telephone: '+14803239740',
      priceRange: '$$',
      foundingDate: '2025',
      founder: { '@id': 'https://www.kodecite.ai/#founder' },
      areaServed: businessAreaServed,
      serviceType: [
        'Owned business infrastructure',
        'Entity Graph Infrastructure',
        'Capability contracts',
        'Controlled agent action',
        'Next.js Website Development',
        'JSON-LD Schema Markup',
      ],
      sameAs: [
        'https://www.facebook.com/profile.php?id=61586478347376',
        'https://www.linkedin.com/in/mark-abplanalp-46a272371',
      ],
    },
    // Founder
    {
      '@type': 'Person',
      '@id': 'https://www.kodecite.ai/#founder',
      name: 'Mark Abplanalp',
      jobTitle: 'Founder',
      worksFor: { '@id': 'https://www.kodecite.ai/#business' },
      url: 'https://www.kodecite.ai',
      homeLocation: { '@type': 'City', name: "Coeur d'Alene", sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho' },
      description:
        'Founder of KodeCite.ai, based in North Idaho. 30 years in sales, entrepreneur since 2002, window-treatment operator, Apple retail commercial. Works on the connective layer for service businesses: verified truth, explicit capabilities, controlled action, owned infrastructure, and human handoff.',
      knowsAbout: [
        'Owned business infrastructure', 'Entity Graph Infrastructure', 'Schema.org Implementation',
        'Capability contracts', 'Controlled agent action', 'JSON-LD Schema Markup',
        'Next.js Development', 'Vercel hosting', 'llms.txt', 'agent.json',
        'Local Business Entity Graphs', 'Machine-Readable Business Identity',
      ],
      sameAs: [
        'https://www.linkedin.com/in/mark-abplanalp-46a272371',
        'https://www.facebook.com/profile.php?id=61586478347376',
      ],
    },
    // Website
    {
      '@type': 'WebSite',
      '@id': 'https://www.kodecite.ai/#website',
      name: 'KodeCite.ai',
      url: 'https://www.kodecite.ai',
      publisher: { '@id': 'https://www.kodecite.ai/#business' },
    },
    // Glossary — the canonical DefinedTermSet. Articles reference it from their
    // DefinedTerms (inDefinedTermSet: #glossary); defining it here, on every
    // page, keeps that reference resolved instead of dangling.
    {
      '@type': 'DefinedTermSet',
      '@id': 'https://www.kodecite.ai/#glossary',
      name: 'KodeCite infrastructure glossary',
      description:
        'Defined terms used across KodeCite for business truth, agent capabilities, controlled action, and entity-graph infrastructure.',
      url: 'https://www.kodecite.ai/#glossary',
      publisher: { '@id': 'https://www.kodecite.ai/#business' },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className="antialiased">
        <BackgroundLayer />
        <Shell />
        <RouteTransition>{children}</RouteTransition>
        <Footer />
      </body>
    </html>
  );
}
