import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import {
  AGREEMENT,
  CONSEQUENCE,
  FOUNDATION_BOUNDARY,
  LUXE_PROOF,
  MARKET_SHAPE,
  PLATFORM_SIDECAR,
  REVIEW_HREF,
  REVIEW_TURNAROUND,
  THESIS,
  WEBSITE_ROLE,
} from '@/lib/positioning';

export const metadata: Metadata = {
  title: 'Start Here — Usable by AI',
  description:
    'What “usable by AI” means: the trusted digital business layer that helps agents understand, evaluate, recommend, and take authorized next steps with a service business.',
  alternates: { canonical: 'https://www.kodecite.ai/faq' },
};

const faqs: { q: string; a: string | string[] }[] = [
  {
    q: 'What does “usable by AI” mean?',
    a: [
      THESIS,
      'It means a system can understand what the business does, evaluate what is true, determine what the business is allowed to do, recommend it accurately, take the next authorized action, return an honest outcome, and hand off to a human when required.',
      'Finding a name in a search result is not the same thing. Usable means the business can be understood and safely used — not merely discovered.',
    ],
  },
  {
    q: 'Is this just ranking in ChatGPT?',
    a: [
      'Visibility in ChatGPT or other systems can follow clearer infrastructure. It is not the product.',
      `${WEBSITE_ROLE} ${AGREEMENT}`,
      CONSEQUENCE,
    ],
  },
  {
    q: 'Why does this matter now?',
    a: CONSEQUENCE,
  },
  {
    q: 'How is this different from AEO, GEO, or SEO?',
    a: [
      'SEO, AEO, and GEO are discovery practices. They matter. They are layers, not the complete product.',
      'Visibility in Google, Bing, ChatGPT, or other systems can be evidence that the infrastructure is clearer. It is not a promise, and it is not the whole job.',
    ],
  },
  {
    q: 'Does this still help with Google, Bing, and ChatGPT?',
    a: 'Yes, when the same authoritative record is published for people, search engines, and agents. Clean identity, services, locations, and proof help traditional search and AI discovery. We treat that as a useful outcome of better infrastructure — not a guaranteed ranking or citation.',
  },
  {
    q: 'How is this category shaped today?',
    a: MARKET_SHAPE,
  },
  {
    q: 'What is authoritative truth?',
    a: 'One owned record of identity, people, services, products, locations, credentials, proof, policies, and limitations. Directories, reviews, and profiles should corroborate that record. When they conflict, machines lose confidence — and people get wrong answers.',
  },
  {
    q: 'What is a capability contract?',
    a: 'A machine-readable description of one action the business actually permits: required information, geography, available services, what success means, and what it does not mean. Luxe Window Works publishes an in-home consultation contract. That contract does not book, price, or check out a visit.',
  },
  {
    q: 'What can agents actually do with a Kodecite business?',
    a: [
      'Only what that business has modeled and permitted. Typical first actions are a consultation request, a qualified inquiry, an appointment request, or a controlled human handoff.',
      `${FOUNDATION_BOUNDARY} Agent Capability Build implements one defined protected action after the rules are understood.`,
    ],
  },
  {
    q: 'Will AI automatically book or purchase from my business?',
    a: 'Not unless you explicitly permit that action, and even then only inside the controls we build. Kodecite does not treat a consultation request as a booking. We do not invent pricing, checkout, or project acceptance.',
  },
  {
    q: 'Who decides what an agent is allowed to do?',
    a: 'You do. The business owner sets permissions. We model only what the real business permits, then fail closed when a request is incomplete, out of area, conflicting, or unauthorized.',
  },
  {
    q: 'What happens with duplicates or abuse?',
    a: 'Protected actions use validation, rate limiting, and idempotency. A replay of the same valid request should return the original outcome instead of creating a second job. A same key with a changed payload should be rejected. Thresholds stay unpublished so they cannot be gamed.',
  },
  {
    q: 'I am on WordPress, Wix, or Squarespace. Can you still help?',
    a: [
      `Yes, in selected cases. A full Next.js rebuild is the strongest path. For some businesses remaining on those platforms, a founding Platform Capability Layer pilot can publish truth and capability from ${PLATFORM_SIDECAR}. No WordPress plugin dependency.`,
      'We will not claim those platforms are equivalent, and we will not claim they are invisible to every AI crawler. The honest problem is usually scattered truth and missing control — not a blank page in every case.',
    ],
  },
  {
    q: 'Is this an API, an MCP server, a chatbot, or a website?',
    a: 'Those are components. The product is the business model plus controlled machine use. A website, schema, JSON files, APIs, and a future MCP connection are how that model gets published and used. Kodecite’s own agent.json is identity and discovery only — this site does not currently accept autonomous agent submissions.',
  },
  {
    q: 'What did the Luxe production test prove?',
    a: `That an outside agent could discover what Luxe permits, determine qualification, submit one valid in-home consultation request, receive an honest machine-readable outcome, and that a duplicate did not create a second email while a conflicting replay was rejected. It did not prove booking, pricing, checkout, or project acceptance. Those stayed unavailable. ${LUXE_PROOF}`,
  },
  {
    q: 'Who owns the work?',
    a: 'You do. The repository, the site, and the deployed infrastructure transfer to you. There is no mandatory retainer and no platform that holds the site hostage.',
  },
  {
    q: 'Does the system run forever without maintenance?',
    a: 'The owned foundation can sit still. Active capabilities may use third-party services with direct costs. APIs, credentials, rate limits, and security may need maintenance. We do not claim an active endpoint operates forever without that work.',
  },
  {
    q: 'Who is the best fit?',
    a: 'Established, high-trust, high-value service businesses — operators who already have a reputation, defined services, and real rules about what they will and will not do. This is not a shortcut for a brand-new business with nothing to verify.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.kodecite.ai/faq/#faqpage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: Array.isArray(item.a) ? item.a.join(' ') : item.a,
    },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai/' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.kodecite.ai/faq' },
  ],
};

export default function FAQPage() {
  return (
    <SecondaryPageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section style={{ padding: '120px 32px 80px', backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">START HERE</div>

          <h1
            className="font-inter font-semibold mb-6"
            style={{
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--d-fg)',
              maxWidth: '820px',
            }}
          >
            What “usable by AI”{' '}
            <em className="serif">actually means.</em>
          </h1>

          <p
            className="font-inter"
            style={{
              fontSize: '17px',
              lineHeight: 1.65,
              color: 'var(--d-fg-dim)',
              fontWeight: 300,
              maxWidth: '580px',
            }}
          >
            Plain answers about the trusted digital business layer: truth, capabilities, controlled action, owned infrastructure, and human handoff.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 32px 120px', backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((item, i) => (
            <div
              key={item.q}
              style={{ borderTop: '1px solid var(--d-line)', padding: '48px 0' }}
            >
              <div className="flex gap-5 mb-5">
                <span
                  className="font-mono flex-shrink-0"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.18em',
                    color: 'var(--d-accent)',
                    paddingTop: '5px',
                    minWidth: '24px',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2
                  className="font-inter font-semibold"
                  style={{
                    fontSize: 'clamp(18px, 2.2vw, 22px)',
                    lineHeight: 1.25,
                    letterSpacing: '-0.015em',
                    color: 'var(--d-fg)',
                  }}
                >
                  {item.q}
                </h2>
              </div>

              <div className="flex gap-5">
                <span style={{ minWidth: '24px', flexShrink: 0 }} />
                <div className="flex flex-col gap-4">
                  {(Array.isArray(item.a) ? item.a : [item.a]).map((para) => (
                    <p
                      key={para}
                      className="font-inter"
                      style={{
                        fontSize: '16px',
                        lineHeight: 1.75,
                        color: 'var(--d-fg-dim)',
                        fontWeight: 300,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div style={{ borderTop: '1px solid var(--d-line)' }} />

          <div className="pt-12 text-center">
            <p
              className="font-inter mb-6"
              style={{ fontSize: '16px', color: 'var(--d-fg-dim)', fontWeight: 300 }}
            >
              Prefer a direct conversation?
            </p>
            <Link href="/contact" className="d-btn d-btn-primary">
              Contact Kodecite →
            </Link>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '100px 32px',
          backgroundColor: 'var(--d-bg-2)',
          borderTop: '1px solid var(--d-line)',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">AGENT READINESS REVIEW</div>

          <h2
            className="font-inter font-semibold mb-5"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: 'var(--d-fg)',
            }}
          >
            See what AI can understand, verify, and{' '}
            <em className="serif">safely do</em> today.
          </h2>

          <p
            className="font-inter mb-8"
            style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: 'var(--d-fg-dim)',
              fontWeight: 300,
            }}
          >
            A written review of identity, services, geography, policies, discovery, action paths, and control gaps. {REVIEW_TURNAROUND}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={REVIEW_HREF} className="d-btn d-btn-primary">
              Request an Agent Readiness Review →
            </Link>
            <Link href="/services" className="d-btn d-btn-ghost">
              See the five layers
            </Link>
          </div>
        </div>
      </section>
    </SecondaryPageShell>
  );
}
