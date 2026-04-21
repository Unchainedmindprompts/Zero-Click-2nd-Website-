import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Pricing — AI-Ready Websites & Content | KodeCite.ai',
  description:
    "You're not buying SEO. You're deciding whether you own the answer in your market or rent it from a platform. See KodeCite.ai pricing for AI-ready website builds, rebuilds, and content engines.",
  alternates: {
    canonical: 'https://www.kodecite.ai/pricing',
  },
};

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Pricing — KodeCite.ai',
  url: 'https://www.kodecite.ai/pricing',
  description:
    'Pricing for AI-ready website builds, rebuilds, and content engine retainers from KodeCite.ai.',
  mainEntity: {
    '@type': 'OfferCatalog',
    name: 'KodeCite.ai Services & Pricing',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'AI-Ready Website Build',
        description:
          'Custom Next.js build on edge infrastructure, full AI schema stack, Six Pillars of Trust baseline, and launch indexing checklist. You own it outright.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '7500',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'Offer',
        name: 'AI-Ready Rebuild (Protecting Existing SEO)',
        description:
          'Full crawl and inventory, redirect mapping, content restructuring, and new Next.js + Vercel build — without losing existing rankings and link equity.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '12000',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'Offer',
        name: 'AI-Ready Content Engine — Maintain',
        description:
          '2 AI authority articles per month with answer-first structure, JSON-LD schema, and inline charts.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '950',
          priceCurrency: 'USD',
          unitText: 'MONTH',
        },
      },
      {
        '@type': 'Offer',
        name: 'AI-Ready Content Engine — Grow',
        description:
          '4 AI authority articles per month plus quarterly content map and AI visibility check.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '1800',
          priceCurrency: 'USD',
          unitText: 'MONTH',
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://www.kodecite.ai/pricing' },
  ],
};

const Checkmark = () => (
  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#a0723a' }}>
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main style={{ backgroundColor: '#f8f5f0', color: '#0a0806' }}>

        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p
                className="font-poppins font-medium mb-4 tracking-widest uppercase"
                style={{ fontSize: '11px', color: '#a0723a', letterSpacing: '3px' }}
              >
                Pricing
              </p>
              <h1
                className="font-playfair leading-none mb-8"
                style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', color: '#0a0806' }}
              >
                You now know what an entity graph is.
                <br />
                <span style={{ color: '#a0723a' }}>This is how you get one.</span>
              </h1>
              <p
                className="font-poppins"
                style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#6a5a48', maxWidth: '640px' }}
              >
                Every KodeCite build ships with the complete entity graph stack &mdash; Schema.org deployed
                correctly, AI identity files, edge infrastructure, and launch indexing. The only
                question is whether you&rsquo;re starting from scratch or protecting what you&rsquo;ve already built.
              </p>
              <p
                className="font-poppins mt-4"
                style={{ fontSize: '1rem', lineHeight: '1.8', color: '#6a5a48', maxWidth: '640px' }}
              >
                Every project starts with a Free Scaffolding Audit. After that, we quote a fixed
                project fee based on your site size and complexity. The ranges below are what most
                local and regional clients fall into.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="py-24 md:py-32 px-4" style={{ backgroundColor: '#f2ede4' }}>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <p className="eyebrow text-center mb-5">HOW WE WORK</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-playfair text-4xl md:text-5xl text-center mb-6 leading-[1.05]" style={{ color: '#0a0806' }}>
                One methodology. Two ways to deploy it.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="font-poppins text-lg text-center max-w-xl mx-auto mb-14 leading-relaxed" style={{ color: '#6a5a48' }}>
                Same entity graph foundation. Same KodeCite Standard. Configured for your situation.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={180}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="rounded-2xl p-8" style={{ background: '#ffffff', border: '1.5px solid rgba(160,114,58,0.35)' }}>
                  <p className="eyebrow mb-4">FOR BUSINESSES</p>
                  <h3 className="font-playfair text-2xl mb-4 leading-tight" style={{ color: '#0a0806' }}>Custom build</h3>
                  <p className="font-playfair mb-1" style={{ fontSize: '2.5rem', lineHeight: 1, color: '#a0723a' }}>$7,500–$12,000</p>
                  <p className="font-poppins text-sm mb-8" style={{ color: '#6a5a48' }}>one-time · yours forever</p>
                  <div className="space-y-3 mb-8">
                    {[
                      'Full entity graph from day one',
                      'Custom Next.js on your Vercel account',
                      'GitHub repo in your name',
                      'llms.txt + agent.json + robots.ts',
                      'Launch indexing at go-live',
                      'You own everything. No monthly rent.',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Checkmark />
                        <span className="font-poppins text-sm leading-relaxed" style={{ color: '#6a5a48' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-gold-outline font-poppins font-semibold text-base inline-flex items-center gap-2 rounded-md w-full justify-center" style={{ padding: '14px 24px' }}>
                    Start the Conversation →
                  </Link>
                </div>

                <div className="rounded-2xl p-8" style={{ background: '#1c1814', border: '1.5px solid rgba(160,114,58,0.25)' }}>
                  <p className="eyebrow mb-4" style={{ color: '#c8945a' }}>FOR PLATFORMS &amp; AGENCIES</p>
                  <h3 className="font-playfair text-2xl mb-4 leading-tight" style={{ color: '#f8f5f0' }}>Wholesale partnership</h3>
                  <p className="font-poppins text-base mb-8 leading-relaxed" style={{ color: 'rgba(240,232,216,0.7)' }}>
                    You serve professional service businesses at scale. Your clients have no entity graph underneath their digital presence. Let&apos;s change that.
                  </p>
                  <div className="space-y-3 mb-8">
                    {[
                      'Templated deployment per industry vertical',
                      'Real estate, law, and financial advisory rule sets',
                      'Each client gets owned infrastructure',
                      'Schema validated before every delivery',
                      'Same methodology — configured for your client base',
                      'You serve clients. We build the foundation.',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Checkmark />
                        <span className="font-poppins text-sm leading-relaxed" style={{ color: 'rgba(240,232,216,0.82)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="font-poppins font-semibold text-base inline-flex items-center gap-2 pb-0.5" style={{ color: '#c8945a', borderBottom: '1px solid rgba(200,148,90,0.4)' }}>
                    Let&apos;s Talk →
                  </Link>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </section>
        <div className="section-divider" />

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ height: '1px', backgroundColor: 'rgba(100,70,30,0.15)' }} />
        </div>

        {/* AI-Ready Website Build */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p
                className="font-poppins font-medium mb-3 tracking-widest uppercase"
                style={{ fontSize: '11px', color: '#a0723a', letterSpacing: '3px' }}
              >
                New Build
              </p>
              <h2
                className="font-playfair mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#0a0806' }}
              >
                AI&#8209;Ready Website Build
              </h2>
              <p
                className="font-poppins mb-2"
                style={{ fontSize: '14px', color: '#a0723a', fontStyle: 'italic' }}
              >
                For businesses without a site, or currently on a platform that can&rsquo;t support a production-grade entity graph. We build from the ground up on infrastructure you own.
              </p>
              <p
                className="font-poppins mb-8"
                style={{ fontSize: '1rem', lineHeight: '1.75', color: '#6a5a48' }}
              >
                We build a fast, edge&#8209;hosted site that AI systems can actually read, trust,
                and cite&nbsp;&mdash; and you own it outright.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'Custom Next.js build on your own Vercel account',
                  'Engineered for fast cold\u2011load performance on modern mobile devices, verified with Lighthouse/Lightspeed lab tests',
                  'Full AI schema stack on launch: LocalBusiness, Services, Locations, Articles, FAQ, SameAs, plus llms.txt and agent.json',
                  'Six Pillars of Trust baseline: Google Business Profile, Bing Places, Apple Business Connect, Yelp, BBB, and Yellow Pages wired into your site',
                  'Launch indexing checklist: sitemaps submitted, crawlers invited, no accidental AI blocks in robots.txt',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span style={{ color: '#a0723a', fontSize: '16px', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                    <span className="font-poppins" style={{ fontSize: '15px', lineHeight: '1.65', color: '#3a2e24' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="rounded-lg p-6 mb-8"
                style={{ backgroundColor: '#f2ede4', border: '1px solid rgba(100,70,30,0.15)' }}
              >
                <p className="font-poppins" style={{ fontSize: '15px', lineHeight: '1.7', color: '#3a2e24' }}>
                  <strong>Investment:</strong> from $7,500 for most local service and professional
                  businesses. Final pricing depends on page count, content needs, and how many
                  locations you serve.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-block font-poppins font-semibold text-white px-7 py-3.5 rounded-md transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1a56db', fontSize: '14px' }}
              >
                Start with a Free Scaffolding Audit
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ height: '1px', backgroundColor: 'rgba(100,70,30,0.15)' }} />
        </div>

        {/* AI-Ready Rebuild */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p
                className="font-poppins font-medium mb-3 tracking-widest uppercase"
                style={{ fontSize: '11px', color: '#a0723a', letterSpacing: '3px' }}
              >
                Rebuild
              </p>
              <h2
                className="font-playfair mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#0a0806' }}
              >
                AI&#8209;Ready Rebuild
                <br />
                <span style={{ color: '#1a56db' }}>Protecting Existing SEO</span>
              </h2>
              <p
                className="font-poppins mb-2"
                style={{ fontSize: '14px', color: '#a0723a', fontStyle: 'italic' }}
              >
                For businesses with existing rankings and backlinks worth protecting. We replace the platform without burning the authority you&rsquo;ve already earned.
              </p>
              <p
                className="font-poppins mb-8"
                style={{ fontSize: '1rem', lineHeight: '1.75', color: '#6a5a48' }}
              >
                We replace your slow, generic site with a KodeCite build&nbsp;&mdash; without
                burning down the authority you already have.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'Full crawl and inventory of your current site (URLs, rankings, backlinks, schema)',
                  'Redirect mapping to preserve organic traffic and link equity',
                  'Content restructuring into answer\u2011first, AI\u2011readable pages with proper H1/H2/H3 scaffolding',
                  'New Next.js + Vercel edge build with the full AI schema and identity stack',
                  'Robots.txt and llms.txt configured to explicitly invite major AI crawlers',
                  'Launch QA: cold\u2011load performance, Core Web Vitals, schema validation, and AI crawler access verified before go\u2011live',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span style={{ color: '#a0723a', fontSize: '16px', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                    <span className="font-poppins" style={{ fontSize: '15px', lineHeight: '1.65', color: '#3a2e24' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="rounded-lg p-6 mb-8"
                style={{ backgroundColor: '#f2ede4', border: '1px solid rgba(100,70,30,0.15)' }}
              >
                <p className="font-poppins" style={{ fontSize: '15px', lineHeight: '1.7', color: '#3a2e24' }}>
                  <strong>Investment:</strong> from $12,000 for most local and regional businesses.
                  Final pricing depends on site size, content volume, and migration complexity.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-block font-poppins font-semibold text-white px-7 py-3.5 rounded-md transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1a56db', fontSize: '14px' }}
              >
                See if your current site is worth rebuilding
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ height: '1px', backgroundColor: 'rgba(100,70,30,0.15)' }} />
        </div>

        {/* Content Engine */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p
                className="font-poppins font-medium mb-3 tracking-widest uppercase"
                style={{ fontSize: '11px', color: '#a0723a', letterSpacing: '3px' }}
              >
                Optional Retainer
              </p>
              <h2
                className="font-playfair mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#0a0806' }}
              >
                AI&#8209;Ready Content Engine
              </h2>
              <p
                className="font-poppins mb-2"
                style={{ fontSize: '14px', color: '#a0723a', fontStyle: 'italic' }}
              >
                For businesses that want to keep feeding AI systems new, structured answers after the entity graph is live. The infrastructure keeps working either way.
              </p>
              <p
                className="font-poppins mb-10"
                style={{ fontSize: '1rem', lineHeight: '1.75', color: '#6a5a48' }}
              >
                Once your KodeCite site is live, we can keep publishing structured,
                answer&#8209;first content that AI systems can actually cite.
              </p>

              {/* Two tiers side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {/* Maintain */}
                <div
                  className="rounded-xl p-7"
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid rgba(100,70,30,0.18)',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  }}
                >
                  <h3
                    className="font-playfair mb-1"
                    style={{ fontSize: '1.5rem', color: '#0a0806' }}
                  >
                    Maintain
                  </h3>
                  <p
                    className="font-poppins mb-5"
                    style={{ fontSize: '12px', color: '#a0723a', fontStyle: 'italic' }}
                  >
                    Stay Present
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      '2 AI authority articles per month (1,000–1,500 words each)',
                      'Answer\u2011first structure, H1/H2/H3 aligned to specific questions',
                      'Per\u2011article JSON\u2011LD (Article + FAQ + SameAs where relevant)',
                      'Inline charts and graphs where they clarify the answer',
                      'Deployed via your existing Next.js + Vercel stack',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span style={{ color: '#a0723a', fontSize: '14px', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                        <span className="font-poppins" style={{ fontSize: '13px', lineHeight: '1.6', color: '#3a2e24' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-poppins font-semibold" style={{ fontSize: '14px', color: '#0a0806' }}>
                    $950<span className="font-normal" style={{ color: '#6a5a48' }}>/mo</span>
                  </p>
                </div>

                {/* Grow */}
                <div
                  className="rounded-xl p-7"
                  style={{
                    backgroundColor: '#0a0806',
                    border: '2px solid #a0723a',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
                  }}
                >
                  <h3
                    className="font-playfair mb-1"
                    style={{ fontSize: '1.5rem', color: '#f8f5f0' }}
                  >
                    Grow
                  </h3>
                  <p
                    className="font-poppins mb-5"
                    style={{ fontSize: '12px', color: '#a0723a', fontStyle: 'italic' }}
                  >
                    Take Market Share
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      '4 AI authority articles per month',
                      'Everything in Maintain, plus:',
                      'Quarterly content map: which questions we\u2019re targeting and why',
                      'Quarterly AI visibility check on key topics',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span style={{ color: '#a0723a', fontSize: '14px', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                        <span className="font-poppins" style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(248,245,240,0.82)' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-poppins font-semibold" style={{ fontSize: '14px', color: '#f8f5f0' }}>
                    $1,800<span className="font-normal" style={{ color: 'rgba(248,245,240,0.6)' }}>/mo</span>
                  </p>
                </div>
              </div>

              <p
                className="font-poppins mb-8"
                style={{ fontSize: '14px', lineHeight: '1.7', color: '#6a5a48', fontStyle: 'italic' }}
              >
                No long&#8209;term contracts. You can pause or stop content at any time. The
                infrastructure we built keeps working either way.
              </p>

              <Link
                href="/contact"
                className="inline-block font-poppins font-semibold text-white px-7 py-3.5 rounded-md transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1a56db', fontSize: '14px' }}
              >
                Talk about an AI&#8209;Ready content plan
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* How We Think About Cost */}
        <section
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: '#f2ede4', borderTop: '1px solid rgba(100,70,30,0.12)' }}
        >
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2
                className="font-playfair mb-6"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#0a0806' }}
              >
                How We Think About Cost
              </h2>
              <p
                className="font-poppins mb-8"
                style={{ fontSize: '1rem', lineHeight: '1.75', color: '#6a5a48' }}
              >
                Most agencies have been selling content, links, and reports sitting on top of a site
                with no entity graph underneath. The machine couldn&rsquo;t verify who you were regardless of
                how much you published. We fix the foundation first. Everything else compounds from there.
              </p>
              <ul className="space-y-4">
                {[
                  'One\u2011time build of an AI\u2011ready asset you own outright',
                  'Optional content engine to keep feeding AI systems new, structured answers with your name on them',
                  'No platform lock\u2011in, no surprise retainers, no rented visibility',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span style={{ color: '#a0723a', fontSize: '16px', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                    <span className="font-poppins" style={{ fontSize: '15px', lineHeight: '1.65', color: '#3a2e24' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
}
