import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Pricing — Brand Authority Architecture | KodeCite.ai',
  description:
    'Transparent pricing for KodeCite.ai Brand Authority Architecture. Choose the engine that matches your growth stage — from foundation infrastructure to full AI-era authority.',
  alternates: {
    canonical: 'https://www.kodecite.ai/pricing',
  },
};

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Pricing — KodeCite.ai',
  url: 'https://www.kodecite.ai/pricing',
  description: 'Pricing for Brand Authority Architecture services.',
  mainEntity: {
    '@type': 'OfferCatalog',
    name: 'KodeCite.ai Pricing Tiers',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Foundation Engine',
        description:
          'Machine-priority Next.js website + Source of Truth schema. Built to be cited by AI systems from day one.',
        price: '2500',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '2500',
          priceCurrency: 'USD',
          referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitText: 'one-time' },
        },
      },
      {
        '@type': 'Offer',
        name: 'Authority Engine',
        description:
          'Foundation + Pre-Vetted Audience Campaigns + Spatial SEO. Full AI-era visibility stack.',
        price: '1200',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '1200',
          priceCurrency: 'USD',
          referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitText: 'month' },
        },
      },
      {
        '@type': 'Offer',
        name: 'Full Engine',
        description:
          'Everything in Authority Engine plus dedicated growth strategy, monthly content, and priority support.',
        price: '2800',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '2800',
          priceCurrency: 'USD',
          referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitText: 'month' },
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

const plans = [
  {
    name: 'Foundation Engine',
    price: '$2,500',
    period: 'one-time',
    tagline: 'Your machine-ready home base.',
    description:
      'A Next.js website built on Vercel edge infrastructure with Source of Truth JSON-LD schema — the structural minimum for AI systems to find and cite your business.',
    features: [
      'Custom Next.js website on Vercel edge',
      'Sub-second load times',
      'Source of Truth JSON-LD schema',
      'AI crawler–priority architecture',
      'Mobile-first responsive design',
      'Free AEO Audit included',
    ],
    cta: 'Start Your Foundation',
    highlighted: false,
  },
  {
    name: 'Authority Engine',
    price: '$1,200',
    period: 'per month',
    tagline: 'Full visibility. Ongoing authority.',
    description:
      'Everything in Foundation plus active audience campaigns and Spatial SEO — so your brand gets cited by AI tools and discovered by high-intent buyers, month after month.',
    features: [
      'Everything in Foundation Engine',
      'Pre-Vetted Audience Campaigns (Facebook)',
      'Dedicated AEO landing pages',
      'llms.txt + agent.json integration',
      'Spatial SEO for AI agents & wearables',
      'Monthly performance reporting',
    ],
    cta: 'Build Your Authority',
    highlighted: true,
  },
  {
    name: 'Full Engine',
    price: '$2,800',
    period: 'per month',
    tagline: 'Maximum signal. Maximum reach.',
    description:
      'The complete stack — infrastructure, schema, campaigns, spatial SEO, plus a dedicated growth strategy, monthly content production, and priority access to our team.',
    features: [
      'Everything in Authority Engine',
      'Monthly content (2 articles + schema)',
      'Dedicated growth strategy sessions',
      'Multi-channel AEO content distribution',
      'Priority Slack support',
      'Quarterly authority review',
    ],
    cta: 'Go Full Engine',
    highlighted: false,
  },
];

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
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <p
                className="font-poppins font-medium mb-4 tracking-widest uppercase"
                style={{ fontSize: '11px', color: '#a0723a', letterSpacing: '3px' }}
              >
                Pricing
              </p>
              <h1
                className="font-playfair leading-none mb-6"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: '#0a0806' }}
              >
                Pick Your Engine.
                <br />
                <span style={{ color: '#1a56db' }}>Own Your Authority.</span>
              </h1>
              <p
                className="font-poppins max-w-2xl mx-auto"
                style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#6a5a48' }}
              >
                No guesswork. No bloated retainers. Each tier is a complete, functional stack —
                built for the way AI systems discover and cite businesses today.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
              {plans.map((plan, i) => (
                <ScrollReveal key={plan.name} delay={i * 100}>
                  <div
                    className="relative rounded-xl flex flex-col"
                    style={{
                      backgroundColor: plan.highlighted ? '#0a0806' : '#fff',
                      border: plan.highlighted ? '2px solid #a0723a' : '1px solid rgba(100,70,30,0.18)',
                      color: plan.highlighted ? '#f8f5f0' : '#0a0806',
                      boxShadow: plan.highlighted
                        ? '0 20px 60px rgba(0,0,0,0.18)'
                        : '0 2px 20px rgba(0,0,0,0.06)',
                    }}
                  >
                    {plan.highlighted && (
                      <div
                        className="absolute -top-4 left-1/2 -translate-x-1/2 font-poppins font-semibold px-4 py-1.5 rounded-full whitespace-nowrap"
                        style={{
                          backgroundColor: '#a0723a',
                          color: '#fff',
                          fontSize: '11px',
                          letterSpacing: '1.5px',
                          textTransform: 'uppercase',
                        }}
                      >
                        Most Popular
                      </div>
                    )}

                    <div className="p-8 flex flex-col flex-1">
                      {/* Plan header */}
                      <div className="mb-6">
                        <h2
                          className="font-playfair mb-1"
                          style={{
                            fontSize: '1.75rem',
                            color: plan.highlighted ? '#f8f5f0' : '#0a0806',
                          }}
                        >
                          {plan.name}
                        </h2>
                        <p
                          className="font-poppins"
                          style={{
                            fontSize: '13px',
                            color: plan.highlighted ? '#a0723a' : '#a0723a',
                            fontStyle: 'italic',
                          }}
                        >
                          {plan.tagline}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="mb-6 pb-6" style={{ borderBottom: `1px solid ${plan.highlighted ? 'rgba(255,255,255,0.1)' : 'rgba(100,70,30,0.12)'}` }}>
                        <span
                          className="font-playfair"
                          style={{
                            fontSize: '3rem',
                            color: plan.highlighted ? '#fff' : '#0a0806',
                            lineHeight: 1,
                          }}
                        >
                          {plan.price}
                        </span>
                        <span
                          className="font-poppins ml-2"
                          style={{
                            fontSize: '13px',
                            color: plan.highlighted ? 'rgba(248,245,240,0.6)' : '#6a5a48',
                          }}
                        >
                          {plan.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p
                        className="font-poppins mb-8"
                        style={{
                          fontSize: '14px',
                          lineHeight: '1.65',
                          color: plan.highlighted ? 'rgba(248,245,240,0.75)' : '#6a5a48',
                        }}
                      >
                        {plan.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-3 mb-10 flex-1">
                        {plan.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-3">
                            <span
                              style={{
                                color: '#a0723a',
                                fontSize: '16px',
                                lineHeight: '1.4',
                                flexShrink: 0,
                              }}
                            >
                              ✓
                            </span>
                            <span
                              className="font-poppins"
                              style={{
                                fontSize: '14px',
                                color: plan.highlighted ? 'rgba(248,245,240,0.85)' : '#3a2e24',
                              }}
                            >
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Link
                        href="/contact"
                        className="font-poppins font-semibold text-center py-3.5 rounded-md transition-opacity duration-200 hover:opacity-90"
                        style={{
                          backgroundColor: plan.highlighted ? '#1a56db' : '#0a0806',
                          color: '#fff',
                          fontSize: '14px',
                          letterSpacing: '0.5px',
                          display: 'block',
                        }}
                      >
                        {plan.cta}
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Free Audit Banner */}
        <section
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: '#f2ede4', borderTop: '1px solid rgba(100,70,30,0.12)' }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p
                className="font-poppins font-medium mb-3 tracking-widest uppercase"
                style={{ fontSize: '11px', color: '#a0723a', letterSpacing: '3px' }}
              >
                Not sure where to start?
              </p>
              <h2
                className="font-playfair mb-4"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: '#0a0806' }}
              >
                Start with a Free Audit.
              </h2>
              <p
                className="font-poppins mb-8 max-w-xl mx-auto"
                style={{ fontSize: '1rem', lineHeight: '1.7', color: '#6a5a48' }}
              >
                We'll show you exactly how your business appears in ChatGPT, Perplexity, and Google
                AI Overviews — and which engine tier will close the gap fastest.
              </p>
              <Link
                href="/contact"
                className="inline-block font-poppins font-semibold text-white px-8 py-4 rounded-md transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1a56db', fontSize: '15px' }}
              >
                Get My Free Scaffolding Audit
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <h2
                className="font-playfair text-center mb-12"
                style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#0a0806' }}
              >
                Common Questions
              </h2>
            </ScrollReveal>

            {[
              {
                q: 'Are these one-time or recurring costs?',
                a: 'Foundation Engine is a one-time build fee. Authority Engine and Full Engine are monthly retainers — active campaigns, schema maintenance, and authority-building require ongoing work to stay ahead.',
              },
              {
                q: 'Can I start with Foundation and upgrade later?',
                a: 'Yes. Foundation is designed as the launchpad. Moving to Authority or Full Engine adds the campaigns and Spatial SEO layer on top of your existing infrastructure.',
              },
              {
                q: 'What does "Pre-Vetted Audience" mean?',
                a: "We build Facebook audiences from your existing customer data and lookalikes — buyers who already resemble your best clients. You're not buying cold traffic; you're reaching people already primed to choose you.",
              },
              {
                q: 'Do you require long-term contracts?',
                a: 'Monthly plans are month-to-month after the first 90 days. We earn your business every month — the results either speak for themselves or we course-correct fast.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div
                  className="mb-6 pb-6"
                  style={{ borderBottom: '1px solid rgba(100,70,30,0.12)' }}
                >
                  <h3
                    className="font-poppins font-semibold mb-2"
                    style={{ fontSize: '1rem', color: '#0a0806' }}
                  >
                    {item.q}
                  </h3>
                  <p
                    className="font-poppins"
                    style={{ fontSize: '14px', lineHeight: '1.7', color: '#6a5a48' }}
                  >
                    {item.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
