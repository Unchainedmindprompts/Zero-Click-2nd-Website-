import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';
import { LUXE_CAPABILITY_URL, LUXE_PROOF, REVIEW_HREF } from '@/lib/positioning';

const SLUG = 'from-recommended-to-actionable-luxe-window-works';
const PAGE_URL = `https://www.kodecite.ai/blog/${SLUG}`;
const TITLE = 'From Recommended to Actionable: How Luxe Window Works Became Ready for AI Agents';
const DESCRIPTION =
  'How Luxe Window Works moved from AI discovery to a live, protected in-home consultation capability — production proof that this infrastructure can work, and what the authorized test did not prove.';

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
  dateModified: '2026-08-22T00:00:00-07:00',
  wordCount: 1600,
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
    h: 'The visibility foundation came first',
    p: [
      'Luxe did not start with an action endpoint. It started with a business that needed to be understood: who it is, what it installs, where it works, and why a homeowner should take it seriously.',
      'That work produced an owned site, a connected entity graph, service and geography pages, and the discovery evidence already published on Kodecite — real answers from ChatGPT, Google AI Mode, Bing Copilot, and Gemini, captured April 1, 2026. Those screenshots are discovery proof. They are not this story.',
    ],
  },
  {
    h: 'Services and geography had to be explicit',
    p: [
      'A window-treatment business is not “we do everything, everywhere.” Luxe has product categories, service towns, and a real edge between in-area, nearby, and out-of-area.',
      'Until those facts lived in one place, an AI system could recommend Luxe and still invent a visit, a product, or a city the business does not cover. Recommendation without a capability model is how wrong next steps get created.',
    ],
  },
  {
    h: 'Policies had to be reconciled before any action',
    p: [
      'The hard part was not the form. It was deciding what a request is allowed to mean.',
      'An in-home consultation request is a request for human follow-up. It is not a reserved time. It is not a price. It is not project acceptance. Commercial work, third-party repair, price-only questions, and existing-customer issues are different intents. Those distinctions existed in the business before they existed in a contract.',
    ],
  },
  {
    h: 'The consultation capability',
    p: [
      'Luxe now publishes a machine-readable in-home consultation capability. The public contract is version 1.0. Readiness is request-submission-ready. Submission is enabled. Human follow-up is required.',
      'The discovery URL is public on purpose. An outside agent should be able to read what Luxe permits without guessing from marketing copy.',
    ],
  },
  {
    h: 'Why booking stayed false',
    p: [
      'Because Luxe does not let a machine book the calendar. Direct booking, pricing, and checkout are unpublished. Success means the request was delivered for a human to follow up — not that a visit exists.',
      'That is control. Calling the request a booking would have been a more exciting sentence. It would also have been false.',
    ],
  },
  {
    h: 'Rate limits and idempotency',
    p: [
      'Agent-intended requests are rate limited. Thresholds are not published.',
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
          <nav className="flex items-center gap-2 text-sm font-inter text-[var(--d-fg-dim)] mb-8">
            <Link href="/" className="hover:text-[var(--d-accent)] transition-colors">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/blog" className="hover:text-[var(--d-accent)] transition-colors">Insights</Link>
            <span aria-hidden>/</span>
            <span className="text-[var(--d-fg)] truncate">Luxe: recommended to actionable</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">Case Studies</span>
            <span className="text-[var(--d-fg-dim)] text-sm font-inter">12 min read</span>
          </div>

          <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--d-fg)] mb-6 leading-tight">
            From Recommended to Actionable:{' '}
            <span className="text-[var(--d-accent)]">How Luxe Window Works Became Ready for AI Agents</span>
          </h1>

          <p className="text-[var(--d-fg-dim)] text-xl font-inter leading-relaxed max-w-3xl">
            Discovery was the first chapter. The second was a live, protected consultation request an outside agent could find, qualify, submit, and receive an honest answer for — without pretending the job was booked. {LUXE_PROOF}
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[rgba(100,70,30,0.2)]">
            <div>
              <p className="text-[var(--d-fg)] text-sm font-semibold font-inter">Mark Abplanalp</p>
              <p className="text-[var(--d-fg-dim)] text-xs font-inter">August 22, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[var(--d-bg)]">
        <article className="max-w-3xl mx-auto font-inter" style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--d-fg-dim)', fontWeight: 300 }}>
          <p className="mb-8">
            The story is short if you tell it honestly: Luxe became understandable, then verifiable, then recommendable, then actionable, then controlled.
            Visibility, schema, scheduling, automation, commerce, and governance tools usually stop at one isolated layer. This build connected them for a real service business.
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
              The contract is live at:
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
              Anyone can read it. It states required fields, allowed intents, eligible markets, response statuses, and the rule that a successful request is not an appointment. That is the point of publishing a capability instead of hoping an agent infers one from a contact page.
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
              The transferable piece is the sequence: truth, then capability, then control, then one action, then production acceptance. Recommendation is only one stage. The larger goal is safe agent participation. The Luxe contract is specific to in-home window-treatment consultations in a defined geography.
            </p>
            <p className="mb-4">
              Another business gets a different action, or no action yet. A Foundation Build can stop at truth and discovery. An Agent Capability Build is scoped after the real rules are understood. Kodecite’s own site does not currently publish an autonomous submission endpoint.
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
              How We Indexed 49 New Pages in 48 Hours — the earlier Luxe chapter
            </Link>
            <Link href="/blog/what-is-an-entity-graph" className="text-[var(--d-fg)] hover:text-[var(--d-accent)]">
              What Is an Entity Graph
            </Link>
            <Link href="/blog/why-your-website-cant-talk-to-ai" className="text-[var(--d-fg)] hover:text-[var(--d-accent)]">
              The Language Problem
            </Link>
          </div>
          <h2 className="font-inter font-semibold text-[var(--d-fg)] mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}>
            See what AI can understand, verify, and safely do with your business.
          </h2>
          <Link href={REVIEW_HREF} className="d-btn d-btn-primary mt-4">
            Request an Agent Readiness Review →
          </Link>
        </div>
      </section>
    </>
  );
}
