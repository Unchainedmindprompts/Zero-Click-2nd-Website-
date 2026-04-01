import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Luxe Window Works Case Study — KodeCite.ai',
  description:
    'How a one-year-old window treatment business in Post Falls, Idaho became the first recommendation on ChatGPT, Google AI Mode, Copilot, and DuckDuckGo — in 2.5 months, with zero ad spend.',
  alternates: {
    canonical: 'https://www.kodecite.ai/our-work/luxe-window-works',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Our Work', item: 'https://kodecite.ai/our-work' },
    { '@type': 'ListItem', position: 3, name: 'Luxe Window Works', item: 'https://kodecite.ai/our-work/luxe-window-works' },
  ],
};

const screenshots = [
  { src: '/chatgpt-luxe-first-recommendation.jpeg', caption: 'ChatGPT — Luxe recommended first. "Best overall pick locally."' },
  { src: '/chatgpt-luxe-shutters-energy-efficiency.jpeg', caption: 'ChatGPT follow-up on shutters & energy efficiency — Luxe first again.' },
  { src: '/chatgpt-luxe-best-overall-shortlist.jpeg', caption: 'ChatGPT best overall shortlist — Luxe at the top.' },
  { src: '/copilot-luxe-best-local-specialist.jpeg', caption: 'Microsoft Copilot — Luxe listed first under "Best Local Specialists."' },
  { src: '/google-ai-mode-luxe-top-rated.jpeg', caption: 'Google AI Mode — Luxe first under "Top-Rated Local Specialists."' },
  { src: '/google-map-pack-luxe-number-one.jpeg', caption: 'Google Map Pack — Luxe #1.' },
  { src: '/duckduckgo-luxe-map-pack-number-one.jpeg', caption: 'DuckDuckGo Map Pack — Luxe #1.' },
  { src: '/bing-luxe-organic-result.jpeg', caption: 'Bing organic result — Luxe featured.' },
];

export default function LuxeWindowWorksCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#f8f5f0' }}>
        <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Link href="/our-work" className="eyebrow mb-4 inline-block hover:opacity-70 transition-opacity">
            ← OUR WORK
          </Link>
          <h1 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl text-[#0a0806] mb-6 leading-tight mt-4">
            Luxe Window Works
          </h1>
          <p className="text-[#6a5a48] text-xl font-poppins max-w-3xl mx-auto leading-relaxed mb-8">
            From zero to AI-recommended first across six platforms — in 2.5 months, with no ad spend.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Home Services', 'Post Falls, Idaho', 'Next.js', 'Zero Ad Spend', '2.5 Months'].map((tag) => (
              <span key={tag} className="font-poppins text-sm font-medium px-4 py-1.5 rounded-full border" style={{ color: '#a0723a', borderColor: 'rgba(160,114,58,0.35)', backgroundColor: 'rgba(160,114,58,0.06)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* The Setup */}
      <section className="py-16 md:py-24 px-4" style={{ backgroundColor: '#faf7f2' }}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-4">THE SETUP</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-center mb-10 leading-tight" style={{ color: '#0a0806' }}>
              Every Disadvantage. No Shortcuts.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { label: 'Business Age', value: '1 Year Old' },
                { label: 'Deployment Age', value: '2.5 Months' },
                { label: 'Ad Spend', value: '$0' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-8 rounded-xl border" style={{ borderColor: 'rgba(160,114,58,0.2)', backgroundColor: '#f8f5f0' }}>
                  <p className="font-playfair text-4xl font-bold mb-2" style={{ color: '#a0723a' }}>{stat.value}</p>
                  <p className="font-poppins text-sm" style={{ color: '#6a5a48' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="font-poppins text-base md:text-lg leading-relaxed space-y-5" style={{ color: '#6a5a48' }}>
              <p>
                Luxe Window Works is a custom window treatment business in Post Falls, Idaho. When we took on this build, they had been in business for one year — going up against established competitors with 10–20 year head starts, deep review histories, and embedded local search presence.
              </p>
              <p>
                We deployed a Next.js site with full schema markup, AEO-optimized service and location pages, and structured content designed to be cited by AI systems — not just ranked by traditional algorithms. No paid advertising. No review campaigns. No shortcuts.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* The Results */}
      <section className="py-16 md:py-24 px-4" style={{ backgroundColor: '#1c1814' }}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-4" style={{ color: '#c8945a' }}>APRIL 1, 2026 · 17-MINUTE WINDOW</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-center mb-10 leading-tight" style={{ color: '#f8f5f0' }}>
              Six Platforms. One Morning.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="font-poppins text-base md:text-lg leading-relaxed space-y-4 mb-10" style={{ color: 'rgba(240,232,216,0.75)' }}>
              <p>
                On the morning of April 1, 2026, within a single 17-minute window, one search query produced this across every major platform. Every screenshot captured in incognito mode — no search history, no personalization, no location bias.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <ul className="space-y-4 mb-10">
              {[
                { time: '9:36 AM', text: 'ChatGPT recommended Luxe first. \u201cBest overall pick locally.\u201d' },
                { time: '9:39 AM', text: 'ChatGPT follow-up on shutters and energy efficiency. Luxe first again.' },
                { time: '9:42 AM', text: 'Microsoft Copilot listed Luxe first under \u201cBest Local Specialists.\u201d' },
                { time: '9:43 AM', text: 'Google Map Pack. Luxe #1.' },
                { time: '9:43 AM', text: 'Google AI Mode. Luxe first under \u201cTop-Rated Local Specialists.\u201d' },
                { time: '9:53 AM', text: 'DuckDuckGo map pack. Luxe #1.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start p-4 rounded-lg" style={{ backgroundColor: 'rgba(240,232,216,0.05)', borderLeft: '3px solid #a0723a' }}>
                  <span className="font-poppins font-semibold shrink-0 text-sm" style={{ color: '#c8945a' }}>{item.time}</span>
                  <span className="font-poppins text-sm md:text-base" style={{ color: 'rgba(240,232,216,0.82)' }}>— {item.text}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-poppins text-sm italic text-center" style={{ color: 'rgba(240,232,216,0.4)' }}>
              Results vary by platform, query, and crawl cycle. What doesn&rsquo;t vary is the infrastructure that makes this possible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Screenshot Gallery */}
      <section className="py-16 md:py-24 px-4" style={{ backgroundColor: '#f2ede4' }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-4">THE EVIDENCE</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-center mb-4 leading-tight" style={{ color: '#0a0806' }}>
              Timestamps Don&rsquo;t Lie.
            </h2>
            <p className="font-poppins text-base text-center mb-12" style={{ color: '#6a5a48' }}>
              All screenshots captured in incognito mode on April 1, 2026.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {screenshots.map((img, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <figure className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-xl border" style={{ borderColor: 'rgba(160,114,58,0.2)' }}>
                    <Image
                      src={img.src}
                      alt={img.caption}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <figcaption className="font-poppins text-sm text-center px-2" style={{ color: '#a0927a' }}>
                    {img.caption}
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="py-24 px-4" style={{ backgroundColor: '#1c1814' }}>
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6 leading-tight" style={{ color: 'rgba(240,232,216,0.9)' }}>
              Want Results Like This <span style={{ color: '#a0723a' }}>For Your Business?</span>
            </h2>
            <p className="font-poppins text-xl mb-10 leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(240,232,216,0.6)' }}>
              The same infrastructure that made Luxe the first recommendation across six platforms is available for your business right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-ghost font-poppins text-base inline-flex items-center justify-center gap-2" style={{ padding: '16px 32px' }}>
                See How It Works →
              </Link>
              <Link href="/our-work" className="font-poppins text-base inline-flex items-center justify-center gap-2" style={{ color: 'rgba(240,232,216,0.5)', padding: '16px 32px' }}>
                ← Back to Our Work
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
