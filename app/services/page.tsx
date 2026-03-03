import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Services — AI Search Optimization, Next.js Websites & Facebook Ads',
  description:
    'Zero Click Strategies offers Next.js website development, AEO-optimized content, schema markup, and Facebook ad campaigns that generate leads in the AI search era.',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Digital Marketing and AI Search Optimization',
  provider: {
    '@type': 'Organization',
    name: 'Zero Click Strategies',
    url: 'https://zeroclickstrategies.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Zero Click Strategies Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Next.js Website Development',
          description: 'Fast, clean Next.js sites built for AI discoverability.',
        },
        price: '2500',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AEO Content and Schema Markup',
          description: 'Schema markup and AEO-optimized articles that train AI engines to cite your business.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Facebook Ad Campaigns',
          description: 'Facebook ads with dedicated landing pages, pixel setup, and custom audiences.',
        },
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is zero click search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zero click search happens when search engines or AI tools answer a query directly on the results page — without the user clicking through to any website. AI Overviews, featured snippets, and knowledge panels are examples. If your business isn\'t structured to be the source of those answers, you\'re invisible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why Next.js instead of WordPress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WordPress is bloated, slow, and dependent on plugins that conflict with each other and break Core Web Vitals scores. Custom Next.js sites load faster, score higher on Lighthouse, and are far easier for AI crawlers to parse and index. For AI search visibility, technical performance is no longer optional.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is schema markup and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schema markup is structured data code added to your website that tells search engines and AI exactly what your business is, what you do, where you are, and what you offer. Without it, AI tools have to guess. With it, they can confidently cite your business as the answer to relevant questions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technical SEO and schema results can appear in days to weeks — we indexed 49 new pages in 48 hours for one client. Facebook ad campaigns typically generate initial data within the first week. Full organic traction from content builds over 60–90 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with businesses outside of Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Zero Click Strategies is based in Post Falls, Idaho, but serves businesses nationwide. All our work is delivered remotely. We\'ve worked with clients across different states and industries.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries do you specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have deep experience in home services (window treatments, home theater, AV), real estate, and local service businesses. We apply the same AEO and digital marketing methodology across industries — the principles of AI visibility and lead generation are universal.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zeroclickstrategies.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://zeroclickstrategies.com/services' },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#0A1628] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-50 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="eyebrow mb-4">SERVICES</p>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Three Pillars of{' '}
            <span className="text-[#D4A94A]">AI Visibility</span>
          </h1>
          <p className="text-[#8A9BB5] text-xl md:text-2xl font-poppins max-w-3xl mx-auto leading-relaxed">
            Every service we offer is designed to make your business discoverable, citable, and profitable in the AI search era.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Pillar 1: Website */}
      <section id="website" className="py-24 md:py-32 bg-[#0F1E3C] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="eyebrow mb-4">PILLAR ONE</p>
                <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                  The <span className="text-[#D4A94A]">Superior Website</span>
                </h2>
                <p className="text-[#8A9BB5] text-lg leading-relaxed font-poppins mb-8">
                  Your website is the foundation of everything. If it&apos;s slow, bloated, or built on the wrong
                  platform, no amount of content or ads will compensate.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed font-poppins mb-6">
                  We build every site on <strong className="text-white">Next.js</strong> deployed to{' '}
                  <strong className="text-white">enterprise edge infrastructure</strong> — the same stack used by the fastest sites
                  on the internet. No WordPress. No plugins. No compromises on performance.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'App Router architecture for maximum performance',
                    'Core Web Vitals optimized from day one',
                    'next/image for automatic image optimization',
                    'next/font for zero layout shift typography',
                    'Structured data embedded at build time',
                    'AI crawler-friendly URL structure and metadata',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#8A9BB5] font-poppins">
                      <svg className="w-4 h-4 text-[#D4A94A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-[#162444] rounded-2xl p-8 border border-[#D4A94A]/20">
                <h3 className="font-poppins font-bold text-lg text-white mb-6">The Performance Advantage</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Load Speed', value: '<1s', desc: 'Average first contentful paint vs 3–5s on WordPress' },
                    { label: 'Lighthouse Score', value: '95+', desc: 'Target across all four categories' },
                    { label: 'Deployment', value: 'Edge', desc: 'Global CDN with automatic SSL and zero downtime' },
                    { label: 'Uptime', value: '99.99%', desc: 'Enterprise SLA for production deployments' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-start gap-4">
                      <div className="text-right min-w-[4rem]">
                        <div className="font-poppins font-bold text-2xl text-[#D4A94A]">{stat.value}</div>
                      </div>
                      <div>
                        <div className="font-poppins font-semibold text-white text-sm">{stat.label}</div>
                        <div className="text-[#8A9BB5] text-xs font-poppins mt-0.5">{stat.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Pillar 2: Content */}
      <section id="content" className="py-24 md:py-32 bg-[#0A1628] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={200} className="order-2 lg:order-1">
              <div className="bg-[#162444] rounded-2xl p-8 border border-[#D4A94A]/20">
                <h3 className="font-poppins font-bold text-lg text-white mb-6">Schema Types We Implement</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Organization', 'LocalBusiness', 'WebSite', 'Service',
                    'FAQPage', 'Article', 'BreadcrumbList', 'Product',
                    'Review', 'HowTo', 'Event', 'VideoObject',
                  ].map((schema) => (
                    <div key={schema} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4A94A] flex-shrink-0" />
                      <span className="text-[#8A9BB5] text-sm font-poppins">{schema}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="order-1 lg:order-2">
              <div>
                <p className="eyebrow mb-4">PILLAR TWO</p>
                <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                  <span className="text-[#D4A94A]">Structured Content</span>{' '}
                  That Trains AI
                </h2>
                <p className="text-[#8A9BB5] text-lg leading-relaxed font-poppins mb-6">
                  Content is no longer about keyword density. It&apos;s about being the clearest, most
                  authoritative answer to the questions your customers are asking.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed font-poppins mb-6">
                  Every article we write is built with <strong className="text-white">Answer Engine Optimization (AEO)</strong> —
                  structured to be cited by Google AI Overviews, ChatGPT, Perplexity, and every AI
                  tool that answers questions on behalf of your customers.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed font-poppins mb-8">
                  Combined with <strong className="text-white">JSON-LD schema markup</strong>, your pages don&apos;t
                  just appear in search — they become the source of truth AI tools cite when your
                  prospects ask for help.
                </p>
                <Link href="/contact" className="btn-gold text-sm font-bold px-6 py-3 rounded-md inline-block">
                  Get an AEO Audit
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Pillar 3: Campaigns */}
      <section id="campaigns" className="py-24 md:py-32 bg-[#0F1E3C] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="eyebrow mb-4">PILLAR THREE</p>
                <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                  The Facebook{' '}
                  <span className="text-[#D4A94A]">Ad Flywheel</span>
                </h2>
                <p className="text-[#8A9BB5] text-lg leading-relaxed font-poppins mb-6">
                  While organic search builds authority over months, paid campaigns start generating
                  leads on day one. We build paid systems that feed the organic engine.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed font-poppins mb-8">
                  Every campaign includes a dedicated landing page built to match the ad message
                  exactly — no sending traffic to your homepage and hoping for the best. We set up
                  the full pixel infrastructure, custom audiences, and retargeting sequences that
                  build a lead generation system that compounds over time.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Pixel Setup', desc: 'Full event tracking from day one' },
                    { title: 'Custom Audiences', desc: '3 targeted segments minimum' },
                    { title: 'Ad Creatives', desc: 'Copy and design ready to launch' },
                    { title: 'Landing Pages', desc: 'Dedicated pages for each campaign' },
                    { title: 'Retargeting', desc: 'Sequential follow-up sequences' },
                    { title: 'Lookalike Build', desc: 'Scale to proven converters' },
                  ].map((item) => (
                    <div key={item.title} className="bg-[#162444] rounded-lg p-4 border border-white/5">
                      <div className="font-poppins font-semibold text-white text-sm mb-1">{item.title}</div>
                      <div className="text-[#8A9BB5] text-xs font-poppins">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-[#162444] rounded-2xl p-8 border border-[#D4A94A]/20">
                <h3 className="font-poppins font-bold text-lg text-white mb-2">The Flywheel Effect</h3>
                <p className="text-[#8A9BB5] text-sm font-poppins mb-8">How paid and organic compound together:</p>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Launch Ads', desc: 'Immediate traffic and lead data from day one' },
                    { step: '02', title: 'Pixel Learns', desc: 'Facebook algorithm optimizes toward converters' },
                    { step: '03', title: 'Build Audiences', desc: 'Custom and lookalike audiences scale reach' },
                    { step: '04', title: 'Organic Rises', desc: 'Schema content gets cited and indexed' },
                    { step: '05', title: 'Costs Drop', desc: 'Retargeting converts warm leads cheaper' },
                    { step: '06', title: 'System Compounds', desc: 'Both channels feed each other indefinitely' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="font-poppins font-bold text-[#D4A94A] text-sm min-w-[2rem]">{item.step}</div>
                      <div>
                        <div className="font-poppins font-semibold text-white text-sm">{item.title}</div>
                        <div className="text-[#8A9BB5] text-xs font-poppins mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 bg-[#0A1628] px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-4">FAQ</p>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white text-center mb-16">
              Common Questions
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              {
                q: 'What is zero click search?',
                a: 'Zero click search happens when search engines or AI tools answer a query directly on the results page — without the user clicking through to any website. AI Overviews, featured snippets, and knowledge panels are examples. If your business isn\'t structured to be the source of those answers, you\'re invisible.',
              },
              {
                q: 'Why Next.js instead of WordPress?',
                a: 'WordPress is bloated, slow, and dependent on plugins that conflict with each other and break Core Web Vitals scores. Custom Next.js sites load faster, score higher on Lighthouse, and are far easier for AI crawlers to parse and index. For AI search visibility, technical performance is no longer optional.',
              },
              {
                q: 'What is schema markup and why does it matter?',
                a: 'Schema markup is structured data code added to your website that tells search engines and AI exactly what your business is, what you do, where you are, and what you offer. Without it, AI tools have to guess. With it, they can confidently cite your business as the answer to relevant questions.',
              },
              {
                q: 'How long does it take to see results?',
                a: 'Technical SEO and schema results can appear in days to weeks — we indexed 49 new pages in 48 hours for one client. Facebook ad campaigns typically generate initial data within the first week. Full organic traction from content builds over 60–90 days.',
              },
              {
                q: 'Do you work with businesses outside of Idaho?',
                a: 'Yes. Zero Click Strategies is based in Post Falls, Idaho, but serves businesses nationwide. All our work is delivered remotely. We\'ve worked with clients across different states and industries.',
              },
              {
                q: 'What industries do you specialize in?',
                a: 'We have deep experience in home services (window treatments, home theater, AV), real estate, and local service businesses. We apply the same AEO and digital marketing methodology across industries — the principles of AI visibility and lead generation are universal.',
              },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <details className="group bg-[#162444] rounded-xl border border-white/5 hover:border-[#D4A94A]/20 transition-all duration-300">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-poppins font-semibold text-white pr-4">{faq.q}</h3>
                    <svg
                      className="w-5 h-5 text-[#D4A94A] flex-shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-[#8A9BB5] font-poppins leading-relaxed text-sm">{faq.a}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F1E3C] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Get <span className="text-[#D4A94A]">Started?</span>
            </h2>
            <p className="text-[#8A9BB5] text-lg font-poppins mb-8">
              Let&apos;s talk about which package makes sense for your business.
            </p>
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Start the Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
