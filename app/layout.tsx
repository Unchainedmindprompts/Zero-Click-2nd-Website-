import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'KodeCite.ai — AI Search Optimization & Digital Marketing',
    template: '%s | KodeCite.ai',
  },
  description:
    'Most businesses are invisible to AI. KodeCite.ai builds the websites, content, and campaigns that make you the answer. Based in Post Falls, Idaho.',
  keywords: [
    'AI search optimization',
    'AEO',
    'answer engine optimization',
    'zero click search',
    'digital marketing',
    'Next.js website',
    'schema markup',
    'Post Falls Idaho',
  ],
  authors: [{ name: 'KodeCite.ai' }],
  creator: 'KodeCite.ai',
  metadataBase: new URL('https://kodecite.ai'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kodecite.ai',
    siteName: 'KodeCite.ai',
    title: 'KodeCite.ai — AI Search Optimization & Digital Marketing',
    description:
      'Most businesses are invisible to AI. We build the websites, content, and campaigns that make you the answer.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KodeCite.ai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KodeCite.ai — AI Search Optimization & Digital Marketing',
    description:
      'Most businesses are invisible to AI. We build the websites, content, and campaigns that make you the answer.',
    images: ['/og-image.png'],
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
  name: 'KodeCite.ai',
  url: 'https://kodecite.ai',
  logo: 'https://kodecite.ai/logo.png',
  description:
    'AI search optimization and digital marketing micro agency based in Post Falls, Idaho.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Post Falls',
    addressRegion: 'ID',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'hello@kodecite.ai',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'KodeCite.ai',
  description:
    'AI search optimization and digital marketing micro agency. We build websites, content, and campaigns that make businesses visible to AI search.',
  url: 'https://kodecite.ai',
  telephone: '',
  email: 'hello@kodecite.ai',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Post Falls',
    addressRegion: 'Idaho',
    postalCode: '83854',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.7182,
    longitude: -116.9516,
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  priceRange: '$$',
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'KodeCite.ai',
  description:
    'Answer Engine Optimization agency helping businesses become the cited source in AI-generated search results and discoverable by wearable devices.',
  url: 'https://kodecite.ai',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Post Falls',
    addressRegion: 'ID',
    addressCountry: 'US',
  },
  areaServed: ['North Idaho', 'Pacific Northwest', 'United States'],
  knowsAbout: [
    'Answer Engine Optimization',
    'AI Search Visibility',
    'Next.js Development',
    'Schema Markup',
    'Wearable Device Discoverability',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AEO Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Free AEO Audit',
        description:
          'No-obligation audit of current AI search visibility in ChatGPT, Perplexity, and Google AI Overviews',
        price: '0',
        priceCurrency: 'USD',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>
      <body className="font-poppins bg-[#07070f] text-white antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
