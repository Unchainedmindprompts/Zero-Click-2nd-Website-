import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';
import { LUXE_CAPABILITY_URL, REVIEW_HREF } from '@/lib/positioning';

const SLUG = 'from-recommended-to-actionable-luxe-window-works';
const PAGE_URL = `https://www.kodecite.ai/blog/${SLUG}`;
const TITLE = 'How an AI Assistant Sent Luxe Window Works a Real Consultation Request';
const DESCRIPTION =
  'The business information, request rules and production test that let an outside AI submit one real consultation request to Luxe Window Works.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${PAGE_URL}#article`,
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: '2026-08-22T00:00:00-07:00',
  dateModified: '2026-10-01T15:00:00Z',
  wordCount: 1370,
  keywords:
    'agent-ready business infrastructure, capability contract, controlled action, Luxe Window Works, in-home consultation, idempotency',
  author: articleAuthor,
  publisher: articlePublisher,
  url: PAGE_URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  isPartOf: blogCollectionPage,
  about: [
    { '@type': 'DefinedTerm', name: 'Capability contract' },
    { '@type': 'Organization', name: 'Luxe Window Works', url: 'https://www.luxewindowworks.com' },
    businessRef,
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.kodecite.ai/blog' },
    { '@type': 'ListItem', position: 3, name: TITLE, item: PAGE_URL },
  ],
};

const sections = [
  {
    h: 'The customer needs a suitable business and a useful next step',
    p: [
      'A homeowner may ask a personal AI assistant to find a window-treatment specialist and start the conversation. The convenience comes from reducing the work between a need and a useful response. That requires the assistant to understand the provider and have a real way to move the request forward.',
      'Luxe Window Works is the founder’s own business. Its owned site, connected business information, service pages and geography pages provided the foundation. The dated AI-answer screenshots already published on Kodecite, captured April 1, 2026, show discovery observations. The consultation test examined what could happen after that research.',
    ],
  },
  {
    h: 'Represent the real business before connecting the request',
    p: [
      'The assistant needed a coherent picture of Luxe: the business and the people behind it, its window-treatment offerings, the work it can do, the areas it serves and the evidence a homeowner can use to evaluate it. Those facts connect identity to the customer’s specific project.',
      'The consultation rules then make fit operational. In-area, nearby and out-of-area requests need appropriate handling. Product questions, commercial work, third-party repairs and existing-customer issues can need different paths. The request flow should preserve those distinctions rather than collect every inquiry in the same way.',
    ],
  },
  {
    h: 'Policies had to be reconciled before any action',
    p: [
      'The key design decision was what a successful submission would mean for the customer and for the person receiving it.',
      'An in-home consultation request is a request for human follow-up. It is not a reserved time. It is not a price. It is not project acceptance. Commercial work, third-party repair, price-only questions, and existing-customer issues are different intents. Those distinctions existed in the business before they existed in a contract.',
    ],
  },
  {
    h: 'The consultation capability',
    p: [
      'The production test used Luxe’s published version 1.0 consultation capability: request-submission-ready, with submission enabled and human follow-up required. It described a specific available action, the information needed and how the response should be interpreted.',
      'The discovery URL is public on purpose. An outside agent should be able to read what Luxe permits without guessing from marketing copy.',
    ],
  },
  {
    h: 'Make success unambiguous',
    p: [
      'For this workflow, success means that a qualified consultation request was delivered for human follow-up. Scheduling and project details remain a conversation with the business. The response gives the assistant enough information to explain that next step accurately to its customer.',
      'Direct booking, pricing and checkout were outside the tested capability. Each would require its own working system and operating rules. The consultation request was valuable on its own because it moved a real inquiry into the business without creating a false commitment.',
    ],
  },
  {
    h: 'Make retries safe for the customer and the inbox',
    p: [
      'Software may retry when a response is delayed or uncertain. The workflow needs to protect the customer and the receiving team from repeated submissions. The tested interface used rate limiting and a request identity for that purpose.',
      'Every agent request must include an idempotency key. A replay of the same key and the same request returns the original public result. A different payload with the same key is rejected. That is how you keep a confused agent — or a retry loop — from creating a second job in a real inbox.',
    ],
  },
];

const proved = [
  'An outside agent can discover the consultation capability at a public URL.',
  'The contract states what is required, what is optional, what geography is eligible, and what success does not mean.',
  'One authorized valid request returned HTTP 200 accepted / in_service_area.',
  'The corresponding email reached the Luxe inbox.',
  'An identical duplicate returned the original outcome and did not send a second email.',
  'The same key with a changed payload returned HTTP 409 idempotency_conflict.',
  'A human still had to follow up. That was the designed next step.',
];

const notProved = [
  'No appointment was created.',
  'No price was given.',
  'No purchase happened.',
  'No project was accepted.',
  'This is not proof that every Kodecite client automatically receives the same endpoint.',
  'This is not proof that every AI system will find or use the contract.',
];

export default function LuxeAgentCaseStudyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-36 pb-16 bg-[var(--d-bg)] px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-inter text-[var(--d-fg-dim)] mb-8">
            <Link href="/" className="shrink-0 whitespace-nowrap hover:text-[var(--d-accent)] transition-colors">Home</Link>
            <span aria-hidden className="shrink-0">/</span>
            <Link href="/blog" className="shrink-0 whitespace-nowrap hover:text-[var(--d-accent)] transition-colors">Insights</Link>
            <span aria-hidden className="shrink-0">/</span>
            <span className="text-[var(--d-fg)] truncate">Luxe: recommended to actionable</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">Case Studies</span>
            <span className="text-[var(--d-fg-dim)] text-sm font-inter">7 min read</span>
          </div>

          <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--d-fg)] mb-6 leading-tight">
            How an AI Assistant Sent Luxe Window Works{' '}
            <span className="text-[var(--d-accent)]">a Real Consultation Request</span>
          </h1>

          <p className="text-[var(--d-fg-dim)] text-xl font-inter leading-relaxed max-w-3xl">
            An outside AI read what Luxe offered, checked that a consultation request fit, submitted it and received a real result. One email reached the business. This case shows the information and working interface that made that step possible.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[rgba(100,70,30,0.2)]">
            <div>
              <p className="text-[var(--d-fg)] text-sm font-semibold font-inter">Mark Abplanalp</p>
              <p className="text-[var(--d-fg-dim)] text-xs font-inter">Published August 22, 2026 · Updated October 1, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[var(--d-bg)]">
        <article className="max-w-3xl mx-auto font-inter" style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--d-fg-dim)', fontWeight: 300 }}>
          <p className="mb-8">
            The customer’s goal is simple: find a suitable specialist and get the conversation started. The business needs enough context to respond usefully. This build connected that customer intent to one defined request, with the business facts and rules made explicit before an action was enabled.
          </p>

          {sections.map((s) => (
            <section key={s.h} className="mb-12">
              <h2 className="font-inter font-semibold text-[var(--d-fg)] mb-4" style={{ fontSize: 'clamp(22px, 3vw, 30px)', letterSpacing: '-0.02em' }}>
                {s.h}
              </h2>
              {s.p.map((para) => (
                <p key={para} className="mb-4">{para}</p>
              ))}
            </section>
          ))}

          <section className="mb-12">
            <h2 className="font-inter font-semibold text-[var(--d-fg)] mb-4" style={{ fontSize: 'clamp(22px, 3vw, 30px)', letterSpacing: '-0.02em' }}>
              Production discovery
            </h2>
            <p className="mb-4">
              The public discovery address for the capability is:
            </p>
            <p className="mb-4">
              <a
                href={LUXE_CAPABILITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--d-accent)]"
                style={{ borderBottom: '1px solid rgba(93,213,255,0.4)', wordBreak: 'break-all' }}
              >
                {LUXE_CAPABILITY_URL}
              </a>
            </p>
            <p>
              The published contract describes required fields, allowed intents, eligible markets and response statuses. An outside agent can use that description to determine how to make the request. Discoverability by every AI platform is not assumed; this test established that the participating agent could read and use it.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-inter font-semibold text-[var(--d-fg)] mb-4" style={{ fontSize: 'clamp(22px, 3vw, 30px)', letterSpacing: '-0.02em' }}>
              The authorized test
            </h2>
            <p className="mb-4">
              One authorized production test used a valid in-area request. The system returned HTTP 200 accepted with reason in_service_area. The email reached the Luxe inbox.
            </p>
            <p className="mb-4">
              The identical duplicate returned the original outcome. It did not send a second email.
            </p>
            <p className="mb-4">
              The same key with a changed payload returned HTTP 409 idempotency_conflict.
            </p>
            <p>
              Names, phones, emails, secrets, storage keys, and full request IDs stay out of this article. The public fact is the behavior, not the private payload.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-inter font-semibold text-[var(--d-fg)] mb-4" style={{ fontSize: 'clamp(22px, 3vw, 30px)', letterSpacing: '-0.02em' }}>
              What this proved
            </h2>
            <ul className="mb-8" style={{ paddingLeft: '1.2em' }}>
              {proved.map((item) => (
                <li key={item} className="mb-2">{item}</li>
              ))}
            </ul>
            <h2 className="font-inter font-semibold text-[var(--d-fg)] mb-4" style={{ fontSize: 'clamp(22px, 3vw, 30px)', letterSpacing: '-0.02em' }}>
              What this did not prove
            </h2>
            <ul style={{ paddingLeft: '1.2em' }}>
              {notProved.map((item) => (
                <li key={item} className="mb-2">{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-inter font-semibold text-[var(--d-fg)] mb-4" style={{ fontSize: 'clamp(22px, 3vw, 30px)', letterSpacing: '-0.02em' }}>
              Transferability
            </h2>
            <p className="mb-4">
              The transferable sequence is to understand the business, describe the available request, implement its rules and test the actual result. This can help a customer move from comparison to engagement with less repeated explanation. The Luxe contract remains specific to in-home window-treatment consultations in a defined geography.
            </p>
            <p className="mb-4">
              Another business might benefit from an appointment request, a qualified project inquiry or a handoff to a specialist. The action should follow the real buying process. Kodecite’s $4,995 Foundation Build provides the owned website and business foundation; a live action is separately scoped after the operating rules are understood.
            </p>
            <p>
              If you want the earlier indexing chapter — the owned rebuild, the schema work, the crawl — that remains at{' '}
              <Link href="/blog/how-we-indexed-49-pages-48-hours" className="text-[var(--d-accent)]" style={{ borderBottom: '1px solid rgba(93,213,255,0.4)' }}>
                How We Indexed 49 New Pages in 48 Hours
              </Link>
              . That is discovery infrastructure. This is the action layer that came after.
            </p>
          </section>
        </article>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="d-eyebrow d-eyebrow-center mb-6">RELATED READING</p>
          <div className="flex flex-col gap-3 mb-12 text-left max-w-xl mx-auto">
            <Link href="/blog/how-we-indexed-49-pages-48-hours" className="text-[var(--d-fg)] hover:text-[var(--d-accent)]">
              How We Indexed 49 New Pages in 48 Hours: the earlier Luxe chapter
            </Link>
            <Link href="/blog/what-is-an-entity-graph" className="text-[var(--d-fg)] hover:text-[var(--d-accent)]">
              What Is an Entity Graph
            </Link>
            <Link href="/blog/why-your-website-cant-talk-to-ai" className="text-[var(--d-fg)] hover:text-[var(--d-accent)]">
              Can Your Customer’s AI Assistant Understand Your Website?
            </Link>
          </div>
          <h2 className="font-inter font-semibold text-[var(--d-fg)] mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}>
            Make it easier for your customer’s AI assistant to understand your business and take the next step.
          </h2>
          <Link href={REVIEW_HREF} className="d-btn d-btn-primary mt-4">
            Request an Agent Readiness Review →
          </Link>
        </div>
      </section>
    </>
  );
}
