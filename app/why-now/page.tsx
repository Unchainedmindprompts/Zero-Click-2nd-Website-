import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';
import { ORIGIN, businessRef } from '@/lib/schema';
import { LUXE_CAPABILITY_URL, LUXE_FLAGSHIP_HREF, REVIEW_HREF, REVIEW_TURNAROUND } from '@/lib/positioning';

const PAGE_URL = `${ORIGIN}/why-now`;
const TITLE = 'Why Now: Make Doing Business With You Easier';
const DESCRIPTION = 'Customer AI assistants can help with research and next steps. Give them clear offers, credible evidence, permission, and a useful way to move forward with your business.';
const sources = {
  agent: 'https://openai.com/index/introducing-chatgpt-agent/',
  google: 'https://developers.google.com/search/docs/appearance/ai-features',
  mcp: 'https://www.anthropic.com/news/model-context-protocol',
  llms: 'https://llmstxt.org/',
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, type: 'article' },
};

const questions = [
  {
    q: 'Do I need to wait for a new device or a universal agent standard?',
    a: 'No. Clear services, evidence, conditions, and contact paths are useful on the web today. Specific action integrations can be added when they solve a real customer problem and can be tested. Hardware release dates do not determine whether that work is worthwhile.',
  },
  {
    q: 'Does this replace SEO or my website?',
    a: 'Your website remains a place customers can use directly and a source assistants may consult. Search helps people find information. Kodecite connects that information to fit, trust, and the next customer step. The work should improve the journey across those routes.',
  },
  {
    q: 'Will every assistant read the information I publish?',
    a: 'No. Assistants use different sources, tools, permissions, and retrieval methods. Publishing accurate, accessible information gives them something useful to work with, but does not guarantee that a particular system will read, cite, or recommend the business.',
  },
  {
    q: 'Can an assistant make commitments on my behalf?',
    a: 'Only an explicitly supported workflow should make a business commitment. A received consultation request leaves scheduling and acceptance with your team. Confirmed booking, pricing, or checkout requires its own rules, permission checks, and integrations.',
  },
  {
    q: 'How do I know whether the work is useful?',
    a: 'Start with the customer journey. Can people and the tested assistants understand the offer, establish fit, find supporting evidence, and reach the next step? For an action, check the result, repeat submissions, failures, and human handoff. Agree those tests before building.',
  },
  {
    q: 'Where should I start?',
    a: 'The Agent Readiness Review is a free written review within two business days. It checks your business information, evidence, customer next steps, and permission or handoff gaps, then gives you practical priorities. You keep it whether or not you hire Kodecite.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  author: {
    '@type': 'Person',
    name: 'Mark Abplanalp',
    jobTitle: 'Founder',
    worksFor: businessRef,
  },
  publisher: businessRef,
  about: ['Customer AI assistants', 'Business identity and evidence', 'Approved customer actions', 'Business-owned websites'],
  citation: Object.values(sources),
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: questions.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN },
    { '@type': 'ListItem', position: 2, name: 'Why Now', item: PAGE_URL },
  ],
};

const customerQuestions = [
  { n: '01', t: 'Identity', d: 'Who am I dealing with? Give the customer a consistent business name, real people, location, and a way to reach you.' },
  { n: '02', t: 'Offer and fit', d: 'Can this business help me? Explain the work, service area, relevant limits, and conditions that determine whether a request is a good fit.' },
  { n: '03', t: 'Evidence', d: 'What supports the claim? Connect credentials, examples, reviews, and sources to the offer they help establish.' },
  { n: '04', t: 'Available next steps', d: 'What can I ask for? Make the available request or contact route clear, along with the information it needs.' },
  { n: '05', t: 'Permission', d: 'What needs approval? Respect what the customer authorizes and which business decisions still need a person.' },
  { n: '06', t: 'Result and handoff', d: 'What happened? Confirm the actual outcome, identify anything still pending, and explain who takes over.' },
];

const FG = 'var(--d-fg)';
const DIM = 'var(--d-fg-dim)';
const MUTE = 'var(--d-fg-mute)';
const ACCENT = 'var(--d-accent)';
const panelStyle = { padding: 'clamp(24px, 5vw, 64px)' };
const sectionStyle = { marginTop: '30px' };
const bodyStyle = { fontSize: '16px', lineHeight: 1.75, color: DIM, fontWeight: 300 };
const headingStyle = { fontSize: 'clamp(28px, 3.7vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: FG };
const sourceStyle = { color: ACCENT, textDecoration: 'underline', textUnderlineOffset: '4px' };

export default function WhyNowPage() {
  return (
    <SecondaryPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="secondary-section secondary-hero">
        <GlassPanel style={panelStyle}>
          <div className="d-eyebrow mb-6">WHY NOW</div>
          <h1 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(34px, 5vw, 66px)', lineHeight: 1.08, letterSpacing: '-0.035em', color: FG, maxWidth: '20ch' }}>
            Your customers have better things to do <em className="serif" style={{ color: ACCENT }}>than chase answers.</em>
          </h1>
          <p className="font-inter mb-8" style={{ ...bodyStyle, fontSize: '19px', maxWidth: '740px' }}>
            An AI assistant can help them research, compare, and take the next step. Your business should be easy to understand, trust, and work with along the way.
          </p>
          <p className="font-mono" style={{ fontSize: '11px', color: MUTE, letterSpacing: '0.08em' }}>MARK ABPLANALP · FOUNDER, KODECITE</p>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionStyle}>
        <GlassPanel style={panelStyle}>
          <div className="d-eyebrow mb-6">START WITH THE PERSON</div>
          <h2 className="font-inter font-semibold mb-6" style={headingStyle}>The customer wants the problem handled.</h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '800px' }}>
            <p className="font-inter" style={bodyStyle}>
              Think about the work involved in choosing a service business. Open a few websites. Figure out who serves the area. Find evidence of the right experience. Work out whether the service is actually what you need. Fill in a form, then wonder whether it reached anyone.
            </p>
            <p className="font-inter" style={bodyStyle}>
              A customer might ask an assistant: “Find someone who can help with window treatments for my home, compare the options, and help me request a consultation.” That is a practical job with several decisions inside it. A list of names only gets the customer part of the way there.
            </p>
            <p className="font-inter" style={bodyStyle}>
              Kodecite&apos;s view is simple: make each of those steps easier, whether the customer does it themselves or asks an assistant to help. The opportunity is less friction, better-informed inquiries, and a clear start to the relationship.
            </p>
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionStyle}>
        <GlassPanel style={panelStyle}>
          <div className="d-eyebrow mb-6">WHAT HAS CHANGED</div>
          <h2 className="font-inter font-semibold mb-6" style={headingStyle}>Research and action can happen in the same conversation.</h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '800px' }}>
            <p className="font-inter" style={bodyStyle}>
              In its July 2025 ChatGPT agent launch, OpenAI described a system that could research across websites and use tools to take actions, with user control and permission for consequential steps. That is a documented example of the shift from answering a question to helping finish a task. <a href={sources.agent} target="_blank" rel="noopener noreferrer" style={sourceStyle}>Read the original OpenAI announcement</a>.
            </p>
            <p className="font-inter" style={bodyStyle}>
              Connections to business software are developing too. Anthropic introduced the Model Context Protocol to connect AI assistants with external data and tools. A protocol provides a way to connect; a useful business workflow still needs accurate information, permission, and a result that means something. <a href={sources.mcp} target="_blank" rel="noopener noreferrer" style={sourceStyle}>Read the MCP introduction</a>.
            </p>
            <p className="font-inter" style={bodyStyle}>
              These developments support a practical direction, rather than a claim that every customer already uses an agent or every assistant can complete every task. We do not need a hardware launch date or a universal adoption forecast to start improving the customer journey.
            </p>
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionStyle}>
        <GlassPanel style={panelStyle}>
          <div className="d-eyebrow mb-6">WHAT YOUR BUSINESS NEEDS TO EXPLAIN</div>
          <h2 className="font-inter font-semibold mb-6" style={headingStyle}>Six questions between interest and action.</h2>
          <p className="font-inter mb-8" style={{ ...bodyStyle, maxWidth: '800px' }}>Your best customer-facing person already answers these questions. The website and its connected information should carry the same knowledge.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {customerQuestions.map((item) => (
              <article key={item.n} className="glass-panel-soft" style={{ padding: '26px' }}>
                <p className="font-mono mb-3" style={{ fontSize: '11px', letterSpacing: '0.12em', color: ACCENT }}>{item.n}</p>
                <h3 className="font-inter font-semibold mb-3" style={{ fontSize: '20px', color: FG }}>{item.t}</h3>
                <p className="font-inter" style={bodyStyle}>{item.d}</p>
              </article>
            ))}
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionStyle}>
        <GlassPanel style={panelStyle}>
          <div className="d-eyebrow mb-6">A USEFUL CUSTOMER JOURNEY</div>
          <h2 className="font-inter font-semibold mb-6" style={headingStyle}>Make one next step work well.</h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '800px' }}>
            <p className="font-inter" style={bodyStyle}>
              Take that window-treatment inquiry. An assistant needs to establish that the business offers the relevant work and serves the home&apos;s location. It should find evidence the customer can inspect, then explain the consultation process and the information required.
            </p>
            <p className="font-inter" style={bodyStyle}>
              If the customer authorizes the request and a supported capability is available, the assistant can submit it. The business checks the information and returns the actual result. If the request reached the team, say that. If scheduling still needs a conversation, make that clear.
            </p>
            <p className="font-inter" style={bodyStyle}>
              The less visible details matter just as much. An accidental repeat should not become a second lead. A changed request should not reuse an old confirmation. A failed delivery should not be reported as success. When a person needs to take over, the customer should know whom to expect and what remains open.
            </p>
            <p className="font-inter" style={bodyStyle}>
              That is the kind of convenience worth building: a customer can make progress without surrendering the decisions that matter, and your team gets a request it can use.
            </p>
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionStyle}>
        <GlassPanel style={panelStyle}>
          <div className="d-eyebrow mb-6">WHAT THE TECHNICAL PIECES DO</div>
          <h2 className="font-inter font-semibold mb-6" style={headingStyle}>A clear website and working connections, built around the same facts.</h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '800px' }}>
            <p className="font-inter" style={bodyStyle}>
              Your website remains important. People use it directly, and assistants may read it through search or a browser. Its visible content should agree with structured business information, external profiles, and any published capability. A polished page that contradicts a form or service-area rule creates work for everyone.
            </p>
            <p className="font-inter" style={bodyStyle}>
              Search has its own requirements. Google says its AI search features do not require special AI files or special schema markup, and appearance is not guaranteed. That is a good reason to focus on useful, accessible content rather than treating a file as a shortcut to recommendations. <a href={sources.google} target="_blank" rel="noopener noreferrer" style={sourceStyle}>Read Google&apos;s guidance for site owners</a>.
            </p>
            <p className="font-inter" style={bodyStyle}>
              Discovery files can still have a role. The <a href={sources.llms} target="_blank" rel="noopener noreferrer" style={sourceStyle}>llms.txt proposal</a> describes a way to provide concise information and links for assistants. A business-specific agent.json can describe identity and capabilities. Neither is a universally adopted business-action standard, and neither makes a request happen by itself.
            </p>
            <p className="font-inter" style={bodyStyle}>
              A real action needs a supported route, such as a form, API, or tool connection, with its own validation, authorization, and result. Which route is appropriate depends on the business and the assistant. On Kodecite.ai, our discovery files describe the business; this site does not currently accept autonomous agent submissions.
            </p>
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionStyle}>
        <GlassPanel style={panelStyle}>
          <div className="d-eyebrow mb-6">THE BUSINESS YOU ALREADY BUILT</div>
          <h2 className="font-inter font-semibold mb-6" style={headingStyle}>Your experience is the material. Make it easy to evaluate.</h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '800px' }}>
            <p className="font-inter" style={bodyStyle}>
              An established service business has valuable detail that often lives in the owner&apos;s head: the jobs you do best, the questions that reveal fit, the work you decline, and the reasons clients trust you. Bringing that knowledge onto the website gives both customers and their assistants a better basis for a decision.
            </p>
            <p className="font-inter" style={bodyStyle}>
              Ownership matters because those facts change. Your service area expands. Your offer becomes more specific. A policy or contact changes. You should own the website, code, and accounts that publish your business information, and know who will keep them accurate. Active capabilities also have service costs and maintenance dependencies that need to be understood.
            </p>
            <p className="font-inter" style={bodyStyle}>
              The useful measures are close to the customer: can they establish fit, find the evidence, make the request, and understand the reply? Discovery is worth observing too, but a screenshot of an AI answer and a successfully handled customer request establish different things.
            </p>
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionStyle}>
        <GlassPanel style={panelStyle}>
          <div className="d-eyebrow mb-6">A DOCUMENTED EXAMPLE</div>
          <h2 className="font-inter font-semibold mb-6" style={headingStyle}>Luxe Window Works: a request that reached the team.</h2>
          <div className="flex flex-col gap-5 mb-8" style={{ maxWidth: '800px' }}>
            <p className="font-inter" style={bodyStyle}>
              In the documented authorized test, an outside AI found Luxe&apos;s published in-home consultation capability, checked that a request qualified, and submitted it. One email reached the Luxe inbox. Replaying the identical request did not send another email. Reusing the request identity with changed information was rejected.
            </p>
            <p className="font-inter" style={bodyStyle}>
              The result was a received consultation request, with follow-up left to a person. It did not demonstrate automated booking, pricing, checkout, or project acceptance. It demonstrated a specific customer step with a clear result and controls around it.
            </p>
            <p className="font-inter" style={bodyStyle}>
              The <a href={LUXE_CAPABILITY_URL} target="_blank" rel="noopener noreferrer" style={sourceStyle}>published capability description</a> explains the request. The case study records the historical test and its scope.
            </p>
          </div>
          <Link href={LUXE_FLAGSHIP_HREF} className="d-btn d-btn-ghost">Read the Luxe case study →</Link>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionStyle}>
        <GlassPanel style={panelStyle}>
          <div className="d-eyebrow mb-6">A PRACTICAL WAY TO START</div>
          <h2 className="font-inter font-semibold mb-6" style={headingStyle}>Improve the foundation. Add an action when it earns its place.</h2>
          <div className="flex flex-col gap-5 mb-8" style={{ maxWidth: '800px' }}>
            <p className="font-inter" style={bodyStyle}>
              Foundation Build is $4,995 one-time for a business-owned website and clear, connected information. It helps people and assistants understand your offer, evaluate the evidence, and find the next step. You own the website and its accounts, with no mandatory retainer. A live agent-action endpoint is scoped separately.
            </p>
            <p className="font-inter" style={bodyStyle}>
              Agent Capability Build adds one approved action after we agree the requirements, permission, result, and handoff. If you are keeping an existing platform, the application-only Platform Capability Layer pilot may be a fit. We review the site and workflow before recommending a path.
            </p>
            <p className="font-inter" style={bodyStyle}>
              Begin with the customer journey you actually have. Clear information and a dependable next step are useful now, and they give you a better starting point as assistants become more capable.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/services" className="d-btn d-btn-primary">See how we build it →</Link>
            <Link href="/pricing" className="d-btn d-btn-ghost">See scope and pricing →</Link>
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionStyle}>
        <GlassPanel style={panelStyle}>
          <div className="d-eyebrow mb-6">COMMON QUESTIONS</div>
          <div className="flex flex-col gap-6">
            {questions.map((item) => (
              <div key={item.q} className="glass-panel-soft" style={{ padding: '26px' }}>
                <h2 className="font-inter font-semibold mb-3" style={{ fontSize: '20px', lineHeight: 1.35, color: FG }}>{item.q}</h2>
                <p className="font-inter" style={bodyStyle}>{item.a}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={{ ...sectionStyle, paddingBottom: '100px' }}>
        <GlassPanel style={{ ...panelStyle, textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">AGENT READINESS REVIEW</div>
          <h2 className="font-inter font-semibold mb-6" style={headingStyle}>Find the next thing worth making easier.</h2>
          <p className="font-inter mb-8" style={{ ...bodyStyle, maxWidth: '680px', margin: '0 auto 32px' }}>
            Get a written review of your offer, evidence, business information, and customer next steps, with practical priorities for what to improve. {REVIEW_TURNAROUND} You keep the report either way.
          </p>
          <Link href={REVIEW_HREF} className="d-btn d-btn-primary">Request an Agent Readiness Review →</Link>
        </GlassPanel>
      </section>
    </SecondaryPageShell>
  );
}
