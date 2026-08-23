import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import { REVIEW_HREF, REVIEW_TURNAROUND } from '@/lib/positioning';

export const metadata: Metadata = {
  title: 'Start Here — Usable by AI',
  description:
    'Plain answers about how Kodecite helps AI understand your business, recommend it accurately, and take only the next steps you approve.',
  alternates: { canonical: 'https://www.kodecite.ai/faq' },
};

// Visible Q&As and FAQPage schema share this list so they cannot drift.
const faqs: { q: string; a: string | string[] }[] = [
  {
    q: 'What does “usable by AI” mean for my business?',
    a: [
      'AI can already find businesses. “Usable by AI” means it can accurately understand what you do, where you operate, who you serve, what makes you credible, and which actions you permit.',
      'For a window-treatment company, that can mean recommending a qualified installer and submitting an approved consultation request. That is different from merely finding a name in search.',
      'People stay in control.',
    ],
  },
  {
    q: 'Why does this matter now?',
    a: [
      'Customers are beginning to delegate more discovery, comparison, and next steps to AI. If AI cannot confidently understand and use your business, it may leave you outside the decision.',
      'Websites and search still matter. This is about remaining clear when more of that work starts happening through AI.',
    ],
  },
  {
    q: 'Is this SEO or ranking in ChatGPT?',
    a: [
      'Clearer information can support discovery in Google, Bing, ChatGPT, and similar systems. Visibility is not the complete product, and it is not a promise of rankings, citations, traffic, or recommendations.',
      'Discovery helps AI find the business. Kodecite helps AI understand, evaluate, and safely use the business.',
    ],
  },
  {
    q: 'What can AI actually do with my business?',
    a: [
      'You decide what is permitted.',
      'Approved actions can include submitting a consultation request, sending a qualified inquiry, requesting an appointment, or handing the customer to a person.',
      'Kodecite does not automatically invent prices, schedule confirmed appointments, accept projects, or complete purchases unless you explicitly authorize and support those actions.',
    ],
  },
  {
    q: 'What does Kodecite build?',
    a: [
      'Kodecite works in two stages.',
      'Foundation Build — $4,995. An owned website and trusted digital business foundation so AI can understand and evaluate your business. It also identifies which agent actions could safely be added. It does not automatically include a live agent-action endpoint.',
      'Agent Capability Build is separately scoped. It adds one protected approved action after the rules and boundaries are understood.',
    ],
  },
  {
    q: 'Can this work with my existing website?',
    a: [
      'A complete rebuild is the strongest path. In selected cases, we can add an owned capability layer while your existing website remains.',
      'Kodecite reviews your platform and recommends the most reliable path.',
    ],
  },
  {
    q: 'What did Luxe Window Works prove?',
    a: [
      'An outside AI found what Luxe permitted, determined the request qualified, and submitted one valid in-home consultation request. Luxe received one email. Repeating the same request did not create a duplicate. Changing the request while reusing the same request identity was rejected. A person still controls follow-up.',
      'That proved a consultation-request capability — not automated booking, pricing, checkout, or project acceptance.',
    ],
  },
  {
    q: 'What does it cost, and who owns it?',
    a: [
      'Foundation Build is $4,995. Agent Capability Build is separately scoped.',
      'You own the repository, the website, and the deployed infrastructure. There is no mandatory retainer.',
      'Active capabilities may have third-party costs and occasional maintenance.',
    ],
  },
  {
    q: 'Is my business a good fit?',
    a: [
      'This is for established service businesses making high-trust, high-value decisions. You have defined services and a defined area, existing reputation, credentials, reviews, or other proof, and clear rules about what you will and will not do. You want long-term owned infrastructure — not a temporary marketing tactic.',
      'It is not a shortcut for a new business with nothing established or verifiable.',
    ],
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
              maxWidth: '680px',
            }}
          >
            Plain answers about how Kodecite helps AI understand your business, recommend it accurately, and take only the next steps you approve.
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
              See what Kodecite builds
            </Link>
          </div>
        </div>
      </section>
    </SecondaryPageShell>
  );
}
