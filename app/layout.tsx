import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'KodeCite.ai — AI Search Optimization & Digital Marketing',
    template: '%s | KodeCite.ai',
  },
  description:
    'Most businesses are invisible to AI. KodeCite.ai builds the websites, content, and campaigns that make you the answer. Based in Post Falls, Idaho.',
  keywords: [
    'SEO',
    'schema markup',
    'entity graph',
    'Schema.org implementation',
    'AI search optimization',
    'answer engine optimization',
    'why my business doesn\'t show up in ChatGPT',
    'Google AI Overviews',
    'AI search visibility',
    'local SEO',
    'digital marketing',
    'website infrastructure',
    'AEO agency',
    'Perplexity SEO',
    'llms.txt',
    'JSON-LD schema',
  ],
  authors: [{ name: 'KodeCite.ai' }],
  creator: 'KodeCite.ai',
  metadataBase: new URL('https://kodecite.ai'),
  openGraph: {
    title: 'KodeCite.ai — Entity Graph Infrastructure for AI & Traditional Search',
    description:
      'Schema.org has been the language of the internet for 15 years. An entity graph is Schema used correctly — the foundation that makes your business visible in both AI discovery and traditional search. Built on infrastructure you own.',
    url: 'https://www.kodecite.ai',
    siteName: 'KodeCite.ai',
    images: [
      {
        url: 'https://kodecite.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KodeCite.ai — Entity Graph Infrastructure for AI & Traditional Search',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KodeCite.ai — Entity Graph Infrastructure for AI & Traditional Search',
    description:
      'An entity graph is Schema.org used correctly. Almost no business has one built right. We build it — on infrastructure you own.',
    images: ['https://kodecite.ai/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.kodecite.ai/#organization',
  name: 'KodeCite.ai',
  url: 'https://www.kodecite.ai',
  logo: 'https://www.kodecite.ai/logo.png',
  description:
    'KodeCite.ai builds entity graphs for businesses. An entity graph is Schema.org deployed correctly — every element of a business connected into a single machine-readable identity that search engines and AI systems can read, verify, and cite. We build on Next.js edge infrastructure owned by the client. The language of the internet has existed for 15 years. We\'re the first to use it correctly for your business.',
  email: 'mark@kodecite.ai',
  foundingDate: '2025',
  founder: {
    '@id': 'https://www.kodecite.ai/#founder',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
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
  worksFor: {
    '@id': 'https://www.kodecite.ai/#organization',
  },
  url: 'https://www.kodecite.ai',
  description:
    'Founder of KodeCite.ai and Luxe Window Works. 30 years of sales experience, 23 years as an entrepreneur, and 1,000+ hours of AEO and GEO research. Builds AI-ready web infrastructure for businesses that want to be recommended by AI search engines.',
  knowsAbout: [
    'Entity Graph Infrastructure',
    'Schema.org Implementation',
    'Answer Engine Optimization',
    'Generative Engine Optimization',
    'AI Search Visibility',
    'JSON-LD Schema Markup',
    'Next.js Development',
    'Vercel Edge Hosting',
    'llms.txt',
    'agent.json',
    'Local Business Entity Graphs',
    'Machine-Readable Business Identity',
    'Traditional SEO',
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
  logo: 'https://www.kodecite.ai/logo.png',
  image: 'https://www.kodecite.ai/og-image.png',
  description:
    'KodeCite.ai builds entity graphs — Schema.org deployed correctly as a machine-readable business identity. Custom JSON-LD on every page, AI identity files (llms.txt + agent.json), and sub-1s edge infrastructure owned by the client. The foundation that makes businesses visible in both traditional search and AI discovery.',
  telephone: '+14803239740',
  email: 'mark@kodecite.ai',
  priceRange: '$$',
  founder: {
    '@id': 'https://www.kodecite.ai/#founder',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: [
    'Entity Graph Infrastructure',
    'Schema.org Implementation',
    'Answer Engine Optimization',
    'AI Search Optimization',
    'Next.js Website Development',
    'JSON-LD Schema Markup',
    'AI Identity File Setup',
  ],
  knowsAbout: [
    'Entity Graph Infrastructure',
    'Schema.org',
    'JSON-LD Schema Markup',
    'Machine-Readable Business Identity',
    'Answer Engine Optimization',
    'Generative Engine Optimization',
    'AI Search Visibility',
    'Next.js Edge Hosting',
    'llms.txt',
    'agent.json',
    'Traditional SEO',
    'Local Business Schema',
    'AI Identity Files',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'KodeCite Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'AI Search Infrastructure Build',
        description:
          'Custom Next.js site on Vercel edge hosting with full JSON-LD schema stack and AI identity files. One-time fixed fee. Client owns the codebase, domain, and hosting account.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '7500',
          priceCurrency: 'USD',
          minPrice: '7500',
          maxPrice: '12000',
        },
      },
      {
        '@type': 'Offer',
        name: 'Free AI Scaffolding Audit',
        description:
          'No-obligation audit of current AI search visibility in ChatGPT, Perplexity, and Google AI Overviews.',
        price: '0',
        priceCurrency: 'USD',
      },
    ],
  },
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
  description:
    'Entity graph infrastructure for AI search and traditional SEO. KodeCite builds machine-readable business identities on Next.js edge infrastructure — owned by the client, built to compound.',
  publisher: {
    '@id': 'https://www.kodecite.ai/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.kodecite.ai/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Bebas Neue, Cormorant Garamond, DM Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Cormorant+Garamond:ital,wght@1,300;1,400&display=swap"
          rel="stylesheet"
        />
        {/* Map Google Font names to the CSS variables used throughout the codebase */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-playfair: 'Bebas Neue', Impact, sans-serif;
            --font-poppins: 'DM Sans', system-ui, sans-serif;
            --font-cormorant: 'Cormorant Garamond', Georgia, serif;
          }
        ` }} />
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
      <body className="font-poppins bg-[#f8f5f0] text-[#0a0806] antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
