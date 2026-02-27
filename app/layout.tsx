import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Zero Click Strategies — AI Search Optimization & Digital Marketing',
    template: '%s | Zero Click Strategies',
  },
  description:
    'Most businesses are invisible to AI. Zero Click Strategies builds the websites, content, and campaigns that make you the answer. Based in Post Falls, Idaho.',
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
  authors: [{ name: 'Zero Click Strategies' }],
  creator: 'Zero Click Strategies',
  metadataBase: new URL('https://zeroclickstrategies.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zeroclickstrategies.com',
    siteName: 'Zero Click Strategies',
    title: 'Zero Click Strategies — AI Search Optimization & Digital Marketing',
    description:
      'Most businesses are invisible to AI. We build the websites, content, and campaigns that make you the answer.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zero Click Strategies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero Click Strategies — AI Search Optimization & Digital Marketing',
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
  name: 'Zero Click Strategies',
  url: 'https://zeroclickstrategies.com',
  logo: 'https://zeroclickstrategies.com/logo.png',
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
    email: 'hello@zeroclickstrategies.com',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Zero Click Strategies',
  description:
    'AI search optimization and digital marketing micro agency. We build websites, content, and campaigns that make businesses visible to AI search.',
  url: 'https://zeroclickstrategies.com',
  telephone: '',
  email: 'hello@zeroclickstrategies.com',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-poppins bg-[#0F1E3C] text-white antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
