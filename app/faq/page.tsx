import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import { REVIEW_HREF, REVIEW_TURNAROUND } from '@/lib/positioning';

export const metadata: Metadata = {
  title: 'Questions About Working With Customer AI Assistants',
  description:
    'Plain answers about making your business easier for customers and AI assistants to understand, trust, and contact. Pricing, ownership, permissions, proof, and next steps.',
  alternates: { canonical: 'https://www.kodecite.ai/faq' },
};

// Visible Q&As and FAQPage schema share this list so they cannot drift.
const faqs: { q: string; a: string | string[] }[] = [
  {
    q: 'What does it mean to make my business usable by AI?',
    a: [
      'It means helping a customer’s assistant answer the questions a person would ask before choosing you: who you are, what you offer, whether it fits, what supports your claims, and how to move forward.',
      'Where an action has been built and approved, it also means an assistant can make a specific request and get a clear result. For a window-treatment business, that might be requesting an in-home consultation and knowing it reached the team. The customer does less legwork, and your team gets a better-informed starting point.',
    ],
  },
  {
    q: 'Why does this matter now?',
    a: [
      'AI assistants can already help people research options and, with the right tools and permission, take actions on the web. A customer may ask an assistant to compare providers and contact one rather than doing every step themselves.',
      'The useful work today is straightforward: make your services, evidence, conditions, and next steps clear. That improves the experience for people visiting your site too. It does not require a prediction about when everyone will use an AI agent.',
    ],
  },
  {
    q: 'Is this SEO or getting recommended in ChatGPT?',
    a: [
      'Search and AI discovery can help customers find you. Kodecite also works on what happens next: understanding the offer, checking fit and evidence, requesting something useful, and knowing the result.',
      'Clear pages and connected business information support that journey. No one can guarantee that every assistant will read a site, cite it, or recommend a business. Different systems use different sources and tools.',
    ],
  },
  {
    q: 'What can an assistant actually do with my business?',
    a: [
      'That depends on the workflow your business supports and the permission the customer gives. A separately scoped capability might submit a consultation request, send a qualified inquiry, request an appointment, or hand the customer to a person.',
      'The response must describe what happened accurately. A request received by your team does not confirm a booking, price, purchase, or project acceptance. Those commitments require explicit business rules and working integrations of their own.',
    ],
  },
  {
    q: 'What does Kodecite build?',
    a: [
      'Foundation Build is $4,995 one-time. It creates a business-owned website with clear identity, services, proof, policies, and connected information for people and assistants. It also maps which next steps could be supported. A live agent-action endpoint is scoped separately.',
      'Agent Capability Build adds one approved action after its requirements are understood, including validation, permission, duplicate protection, a clear result, and human follow-up where needed.',
      'The Platform Capability Layer is an application-only pilot for selected businesses keeping their current website. We assess whether an owned layer alongside that site can support the needed workflow.',
    ],
  },
  {
    q: 'Can I keep my existing website?',
    a: [
      'Possibly. The Platform Capability Layer pilot is for selected businesses on WordPress, Wix, Squarespace, or similar platforms. We review the existing content, platform access, and requested capability before recommending it.',
      'A full rebuild gives us more control over the complete customer journey. The right recommendation depends on the current site and the work it needs, rather than its platform name alone.',
    ],
  },
  {
    q: 'What did the Luxe Window Works test demonstrate?',
    a: [
      'In the documented authorized test, an outside AI found the published capability, checked that a request qualified, and submitted one in-home consultation request. One email reached Luxe. Replaying the identical request produced no second email. A changed request using the same identity was rejected.',
      'That demonstrated a controlled request with a clear result and human follow-up. The test did not confirm an appointment, set a price, complete checkout, or accept a project.',
    ],
  },
  {
    q: 'Who owns the website, and are there ongoing costs?',
    a: [
      'You own the website, code repository, and the accounts it runs on. Foundation Build is $4,995 one-time, with no mandatory retainer. Agent Capability Build is priced separately after scope is agreed; the platform pilot has no published price.',
      'Ownership does not remove direct hosting or third-party service costs. An active capability may also need maintenance as credentials, services, security requirements, or business rules change. Those dependencies are made clear at handoff.',
    ],
  },
  {
    q: 'Do llms.txt, agent.json, or schema make this work automatically?',
    a: [
      'No. Structured data and discovery files can help describe a business, but they do not create permission, send a request, or prove an action succeeded. llms.txt is a proposal, and this site’s agent.json is a business-specific discovery description, not a universally adopted agent standard.',
      'On Kodecite.ai, those files describe identity and discovery. This site does not currently accept autonomous agent submissions. A real action needs a supported connection, validation, and a result that can be checked.',
    ],
  },
  {
    q: 'What stays under human control?',
    a: [
      'The customer controls what they ask an assistant to do and what information they authorize it to share. Your business controls the actions it offers, the conditions for using them, and the decisions that require a person.',
      'The goal is to remove repetitive work while keeping judgment where it belongs. An assistant can help prepare a useful inquiry; your team can still confirm fit, discuss details, quote, and schedule.',
    ],
  },
  {
    q: 'How do you check that the work is done?',
    a: [
      'Before the build, we agree in writing what will be published and which customer journeys and reading paths will be checked. If an action is included, the acceptance checks cover the agreed success, invalid-request, repeat-submission, and handoff behavior.',
      'The work is complete when the agreed outputs pass. Those tests cover what we build, rather than a guaranteed ranking, citation, or recommendation from a third-party AI system.',
    ],
  },
  {
    q: 'Is this right for my business?',
    a: [
      'It is especially useful for established service businesses where customers compare carefully: home services, real estate, custom building, specialty practices, and similar work. Clear offers, real evidence, and a defined customer process give us something useful to build on.',
      'Start with the free Agent Readiness Review. Within two business days, you get written findings on what is clear, where trust or fit is hard to establish, and where the next step could be easier. You keep the report whether or not we work together.',
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

      <section className="page-section page-section--hero" style={{ backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">START HERE</div>

          <h1
            className="font-inter font-semibold mb-6"
            style={{
              fontSize: 'clamp(32px, 5.5vw, 72px)',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: 'var(--d-fg)',
              maxWidth: '820px',
            }}
          >
            Your business. Their assistant. {' '}
            <em className="serif">Practical answers.</em>
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
            What should an assistant understand about your business? What can it do for a customer, and who stays in control? Here is how we approach the work, what the offers include, and what the evidence supports.
          </p>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: 0, backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((item, i) => (
            <div
              key={item.q}
              className="faq-item"
              style={{ borderTop: '1px solid var(--d-line)' }}
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
                <span className="faq-num-spacer" style={{ minWidth: '24px', flexShrink: 0 }} />
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
              See the documented example, or ask about your own business.
            </p>
            <Link href="/blog/from-recommended-to-actionable-luxe-window-works" className="d-btn d-btn-ghost mb-3 mr-3">
              Read the Luxe case study →
            </Link>
            <Link href="/contact" className="d-btn d-btn-primary">
              Contact Kodecite →
            </Link>
          </div>
        </div>
      </section>

      <section
        className="page-section"
        style={{
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
            Make the next step{' '}
            <em className="serif">easier to take.</em>
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
            Get a written look at how your business explains its offer, earns trust, and helps a customer or their assistant move forward. Practical priorities, with no obligation. {REVIEW_TURNAROUND}
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
