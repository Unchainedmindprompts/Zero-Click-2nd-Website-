import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';
import ProofWall from '@/components/proof/ProofWall';
import { ORIGIN, WEBSITE_ID, businessRef } from '@/lib/schema';
import {
  LUXE_CAPABILITY_URL,
  LUXE_FLAGSHIP_HREF,
  REVIEW_HREF,
  REVIEW_TURNAROUND,
} from '@/lib/positioning';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Make your business easier for customers and their AI assistants to understand, trust, and contact. Business-owned Foundation Build: $4,995 one-time. Approved actions scoped separately.',
  alternates: { canonical: `${ORIGIN}/services` },
};

const PAGE_URL = `${ORIGIN}/services`;

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Services — KodeCite.ai',
      description:
        'Kodecite builds business-owned websites and approved action paths that help customers and their AI assistants understand the offer, assess fit, check evidence, and take a useful next step.',
      inLanguage: 'en-US',
      isPartOf: { '@id': WEBSITE_ID },
      about: businessRef,
      primaryImageOfPage: { '@id': `${ORIGIN}/#logo` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      mainEntity: { '@id': `${PAGE_URL}#foundation-build` },
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#foundation-build`,
      name: 'Foundation Build',
      serviceType: 'Owned business infrastructure',
      provider: businessRef,
      description:
        'A business-owned website with clear identity, offers, evidence, policies, and connected information for people and AI assistants. Live agent-action endpoints are scoped separately.',
      areaServed: { '@type': 'Country', name: 'United States' },
    },
    {
      '@type': 'Service',
      '@id': `${ORIGIN}/#service-web-development`,
      name: 'Business-Owned Website and Information',
      serviceType: 'Website Development',
      provider: businessRef,
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'North Idaho', sameAs: 'https://en.wikipedia.org/wiki/Idaho_Panhandle' },
        { '@type': 'City', name: "Coeur d'Alene", sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho' },
        { '@type': 'City', name: 'Spokane', sameAs: 'https://en.wikipedia.org/wiki/Spokane,_Washington' },
        { '@type': 'Country', name: 'United States' },
      ],
      description:
        'A business-owned website that helps customers and their assistants understand services, assess fit, check evidence, and find the next step using consistent, accessible information.',
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Foundation', value: 'Business-owned website and connected information' },
        { '@type': 'PropertyValue', name: 'Hosting', value: 'Client-owned hosting' },
        { '@type': 'PropertyValue', name: 'Ownership', value: 'Client owns the site and the accounts it runs on' },
        { '@type': 'PropertyValue', name: 'Live action', value: 'Scoped separately from Foundation Build' },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${ORIGIN}/#service-entity-graph`,
      name: 'Connected Business Information and Approved Actions',
      serviceType: 'Business infrastructure for the agent-driven web',
      provider: businessRef,
      description:
        'One reliable record of identity, services, locations, policies, and proof — and, when the business permits, approved next steps AI may take.',
    },
    {
      '@type': 'OfferCatalog',
      '@id': `${ORIGIN}/#offer-catalog`,
      name: 'KodeCite Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@id': `${ORIGIN}/#service-web-development` } },
        { '@type': 'Offer', itemOffered: { '@id': `${ORIGIN}/#service-entity-graph` } },
      ],
    },
    {
      '@type': 'CreativeWork',
      '@id': `${ORIGIN}/#work-real-estate-with-shirin`,
      name: 'Real Estate With Shirin',
      url: 'https://www.realestatewithshirin.com',
      creator: businessRef,
      description:
        'Business-owned real-estate website with dated discovery evidence shown in the case studies.',
    },
    {
      '@type': 'CreativeWork',
      '@id': `${ORIGIN}/#work-chelsey-fanning`,
      name: 'Chelsey Fanning | REALTOR® — North Idaho',
      url: 'https://www.chelseyfanning.com',
      creator: businessRef,
      description:
        'Business-owned real-estate website with dated discovery evidence shown in the case studies.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: PAGE_URL },
      ],
    },
  ],
};

const fiveLayers = [
  {
    n: '01', name: 'Business facts', h: 'Give the customer a clear picture.',
    d: 'Connect your identity, people, services, locations, credentials, policies, and evidence. The website and its machine-readable information should describe the same real business, with sources for claims that matter.',
  },
  {
    n: '02', name: 'Fit and capabilities', h: 'Explain who you can help and how.',
    d: 'Describe the work you take on, where you do it, relevant limits, and the next steps available. A customer’s assistant should be able to tell a good fit from a request that needs a different provider.',
  },
  {
    n: '03', name: 'Permission and conditions', h: 'Keep decisions with the right person.',
    d: 'Make required information, customer permission, business approval, and human review explicit. For an action we build, validation and duplicate protection keep a request from becoming an unintended commitment.',
  },
  {
    n: '04', name: 'Action and result', h: 'Make the next step useful.',
    d: 'Where separately scoped, let an assistant submit a consultation request, send a qualified inquiry, or hand the customer to your team. Return what actually happened, what remains pending, and who follows up.',
  },
  {
    n: '05', name: 'Publication and upkeep', h: 'Keep the same story across the business.',
    d: 'Publish clear pages, connected business data, and appropriate discovery and capability information. Keep them aligned as services or policies change. Different assistants use different sources; no file guarantees universal adoption.',
  },
];

const buyerNeeds = [
  { t: 'Who is this business?', d: 'A clear identity, real people, contact details, and a service area.' },
  { t: 'Does it fit my needs?', d: 'Specific offers, relevant limitations, and enough detail to compare options.' },
  { t: 'What supports its claims?', d: 'Credentials, examples, reviews, or other evidence tied to the right business.' },
  { t: 'What can I do next?', d: 'An available request or a clear way to reach the person who can help.' },
  { t: 'What needs my approval?', d: 'Required information, permission, and conditions before a request goes through.' },
  { t: 'Did it work?', d: 'A confirmed result or a clear handoff, with no confusion about what remains to be done.' },
];

const whoWeBuildFor = [
  'Premium home services, including window treatments, remodels, HVAC, and roofing',
  'Realtors and real-estate teams helping clients make considered decisions',
  'Custom home builders and specialty trades with distinct project requirements',
  'Specialty dental, med spas, and other practices where human judgment matters',
  'Established operators with expertise, a reputation, and a clear offer to explain',
];

const offerPaths = [
  {
    n: '01', t: 'Foundation Build · $4,995 one-time',
    d: 'A business-owned website with clear offers, evidence, policies, and connected information for people and AI assistants. Includes mapping the next steps that could be supported safely.',
    note: 'You own the website and the accounts it runs on. No mandatory retainer. A live agent-action endpoint is separate from this build.',
  },
  {
    n: '02', t: 'Agent Capability Build',
    d: 'One approved action, from the information an assistant needs to the result the customer receives. We scope the business rules, permission checks, validation, duplicate protection, delivery, and human follow-up together.',
    note: 'Separately scoped and priced after the action is defined. An inquiry, an appointment request, and a confirmed booking are different commitments.',
  },
  {
    n: '03', t: 'Platform Capability Layer · Pilot',
    d: 'For selected businesses keeping WordPress, Wix, Squarespace, or a similar platform. We assess whether a business-owned layer alongside the existing site can support the needed information and capability.',
    note: 'Application-only pilot. Scope depends on the platform, the quality of the current site, and the requested workflow.',
  },
];

const processSteps = [
  { w: 'PHASE 01', t: 'Understand the customer journey', d: 'We review how customers choose you, the questions they ask, the evidence they need, and where a request gets stuck. Then we confirm your services, area, policies, and approval rules.' },
  { w: 'PHASE 02', t: 'Agree the plan', d: 'You review the content, the site structure, and any proposed action. We put the scope and acceptance checks in writing before building.' },
  { w: 'PHASE 03', t: 'Build with a working preview', d: 'Review the pages and customer journey as they take shape. We connect the visible content to the same business facts in the machine-readable layer.' },
  { w: 'PHASE 04', t: 'Check the agreed result', d: 'We verify the published information, the agreed ways of reading it, and the customer journey. Where an action is included, we test success, invalid requests, repeat submissions, and handoff against the written scope.' },
  { w: 'PHASE 05', t: 'Hand over ownership', d: 'You receive the site, code, and accounts, with a walkthrough. We document any third-party services and maintenance an active capability depends on.' },
];

const operatingPrinciples = [
  { t: 'Your real offer leads', d: 'The build starts with what customers can buy or request from your business, supported by the experience and evidence you already have.' },
  { t: 'The customer gives permission', d: 'A request must respect the customer’s consent and the information they choose to share.' },
  { t: 'Your team keeps its judgment', d: 'Quoting, scheduling, accepting a project, or making a professional judgment stays with a person unless a specific supported workflow says otherwise.' },
  { t: 'The result says what happened', d: 'A received inquiry is labeled as a received inquiry. The customer knows whether anything is confirmed and what comes next.' },
  { t: 'Ownership is practical', d: 'Your website, code, and operating accounts belong to you. Direct service costs and maintenance needs are made clear.' },
  { t: 'Success is checked', d: 'We test the outputs and workflows we agree to build. Third-party rankings and AI recommendations remain outside our control.' },
];

const FG = 'var(--d-fg)';
const DIM = 'var(--d-fg-dim)';
const MUTE = 'var(--d-fg-mute)';
const ACCENT = 'var(--d-accent)';
const sectionGap = { marginTop: '30px' };

export default function ServicesPage() {
  return (
    <SecondaryPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

      <section className="secondary-section secondary-hero">
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">SERVICES · HOW IT WORKS</div>
          <h1 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(30px, 4.8vw, 62px)', lineHeight: 1.12, letterSpacing: '-0.03em', color: FG, maxWidth: '20ch' }}>
            Help customers do business with you <em className="serif" style={{ color: ACCENT }}>through their AI assistant.</em>
          </h1>
          <p className="font-inter mb-10" style={{ fontSize: '18px', lineHeight: 1.6, color: DIM, fontWeight: 300, maxWidth: '640px' }}>
            Make it easier to understand your offer, check that you are a fit, and take the next step. We build the website and connected business information first, then add a specific action when it serves your customers and your team. Based in North Idaho. Working with service businesses anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href={REVIEW_HREF} className="d-btn d-btn-primary justify-center">Request an Agent Readiness Review →</Link>
            <Link href="/pricing" className="d-btn d-btn-ghost justify-center">See Pricing →</Link>
          </div>
        </GlassPanel>
      </section>

      <section id="the-category" className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">THE CUSTOMER EXPERIENCE</div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(28px, 3.7vw, 46px)', lineHeight: 1.1, letterSpacing: '-0.03em', color: FG, maxWidth: '20ch' }}>
            Less work for your customer. <em className="serif" style={{ color: ACCENT }}>A better start for your team.</em>
          </h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '720px' }}>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              A customer should not need to open five tabs, reconcile conflicting details, and repeat their story just to find out whether you can help. Their assistant needs the same answers your best front-desk person would give: what you do, who it is for, what supports it, and how to get started.
            </p>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              Kodecite connects those answers to a usable customer journey. Clear information helps an assistant compare and explain your business. A separately built capability can carry an approved request through to your team, with a result the customer can understand.
            </p>
          </div>
        </GlassPanel>
      </section>

      <section id="website-development" className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">WHAT WE BUILD</div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(28px, 3.7vw, 46px)', lineHeight: 1.1, letterSpacing: '-0.03em', color: FG, maxWidth: '20ch' }}>
            A clear business, online. <em className="serif" style={{ color: ACCENT }}>A useful next step.</em>
          </h2>
          <div className="flex flex-col gap-5 mb-8" style={{ maxWidth: '720px' }}>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              The foundation is a website people enjoy using, backed by a consistent record of your business. Services, locations, people, proof, and policies belong together. The next step should explain what a customer can request and what they can expect in return.
            </p>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              A full rebuild gives us control over the content, performance, and connections. If your current site is staying, we can assess the application-only Platform Capability Layer pilot. The right path depends on what needs fixing and what your platform supports.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {['Identity', 'Offers and fit', 'Evidence', 'Permission', 'Action and result'].map((t) => (
              <span key={t} className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.08em', color: ACCENT, border: '1px solid var(--d-line-s)', borderRadius: '999px', padding: '6px 14px' }}>{t}</span>
            ))}
          </div>

          <p className="font-mono mb-4" style={{ fontSize: '10px', letterSpacing: '0.18em', color: MUTE }}>RECENT BUILDS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-panel-soft" style={{ padding: '24px 28px' }}>
              <p className="font-inter font-semibold mb-1" style={{ fontSize: '16px', color: FG }}>Real Estate With Shirin</p>
              <a href="https://www.realestatewithshirin.com" target="_blank" rel="noopener noreferrer" className="font-inter" style={{ fontSize: '13px', color: ACCENT, borderBottom: '1px solid var(--d-line-s)' }}>realestatewithshirin.com</a>
            </div>
            <div className="glass-panel-soft" style={{ padding: '24px 28px' }}>
              <p className="font-inter font-semibold mb-1" style={{ fontSize: '16px', color: FG }}>Chelsey Fanning</p>
              <a href="https://www.chelseyfanning.com" target="_blank" rel="noopener noreferrer" className="font-inter" style={{ fontSize: '13px', color: ACCENT, borderBottom: '1px solid var(--d-line-s)' }}>chelseyfanning.com</a>
            </div>
          </div>
        </GlassPanel>
      </section>

      <section id="what-ai-must-do" className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">THE QUESTIONS THAT MATTER</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG, maxWidth: '20ch' }}>
            Answer the questions <em className="serif" style={{ color: ACCENT }}>behind a good decision.</em>
          </h2>
          <p className="font-inter mb-10" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '680px' }}>
            Whether a person is browsing or an assistant is helping, these six questions shape a useful customer experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {buyerNeeds.map((item, i) => (
              <article key={item.t} className="glass-panel-soft" style={{ padding: 'clamp(22px, 3vw, 28px)' }}>
                <p className="font-mono mb-3" style={{ fontSize: '10px', letterSpacing: '0.18em', color: ACCENT }}>{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-inter font-semibold mb-2" style={{ fontSize: '17px', color: FG, letterSpacing: '-0.01em' }}>{item.t}</h3>
                <p className="font-inter" style={{ fontSize: '14.5px', lineHeight: 1.6, color: DIM, fontWeight: 300 }}>{item.d}</p>
              </article>
            ))}
          </div>
        </GlassPanel>
      </section>

      <section id="how-it-works" className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">HOW IT FITS TOGETHER</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG, maxWidth: '18ch' }}>
            From a clear offer to <em className="serif" style={{ color: ACCENT }}>a dependable result.</em>
          </h2>
          <p className="font-inter mb-12" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '680px' }}>
            We work through the whole journey, then build the parts you need. Sometimes the most useful next step is a well-informed conversation with your team.
          </p>

          <div className="flex flex-col gap-4">
            {fiveLayers.map((l) => (
              <article key={l.n} className="glass-panel-soft" style={{ padding: 'clamp(24px, 3vw, 34px)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-inter font-semibold" style={{ fontSize: '15px', color: ACCENT }}>{l.n}</span>
                  <span className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.22em', color: MUTE }}>{l.name.toUpperCase()}</span>
                </div>
                <h3 className="font-inter font-semibold mb-3" style={{ fontSize: 'clamp(19px, 2.4vw, 24px)', lineHeight: 1.2, letterSpacing: '-0.015em', color: FG }}>
                  {l.h}
                </h3>
                <p className="font-inter" style={{ fontSize: '15.5px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '720px' }}>
                  {l.d}
                </p>
              </article>
            ))}
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">THREE OFFER PATHS</div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', color: FG }}>Choose the scope that helps your customers.</h2>
          <div className="flex flex-col gap-4">
            {offerPaths.map((o) => (
              <article id={o.n === '01' ? 'foundation-build' : o.n === '02' ? 'agent-capability' : 'platform-pilot'} key={o.n} className="glass-panel-soft" style={{ padding: 'clamp(24px, 3vw, 34px)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-inter font-semibold" style={{ fontSize: '15px', color: ACCENT }}>{o.n}</span>
                  <h3 className="font-inter font-semibold" style={{ fontSize: 'clamp(19px, 2.4vw, 24px)', color: FG }}>{o.t}</h3>
                </div>
                <p className="font-inter mb-3" style={{ fontSize: '15.5px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '720px' }}>{o.d}</p>
                <p className="font-inter" style={{ fontSize: '13px', lineHeight: 1.55, color: MUTE, fontStyle: 'italic' }}>{o.note}</p>
              </article>
            ))}
          </div>
        </GlassPanel>
      </section>

      <section id="live-production-proof" className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">A DOCUMENTED CUSTOMER REQUEST</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG, maxWidth: '20ch' }}>
            Luxe Window Works — a request an assistant could <em className="serif" style={{ color: ACCENT }}>find and submit.</em>
          </h2>
          <p className="font-inter mb-5" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '720px' }}>
            In the documented authorized test, an outside AI found what Luxe permitted, checked that the request qualified, and submitted an in-home consultation request. Luxe received one email. Replaying the identical request produced no second lead. Changing the request while reusing its identity was rejected.
          </p>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '720px' }}>
            The result was a received request ready for human follow-up. It did not confirm an appointment, set a price, complete a purchase, or accept a project. Read the case study for the test details and scope.
          </p>
          <p className="font-inter mb-6" style={{ fontSize: '14px', lineHeight: 1.65, color: MUTE, fontWeight: 300, maxWidth: '720px' }}>
            Read the published capability:{' '}
            <a
              href={LUXE_CAPABILITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="capability-url"
              style={{ color: ACCENT, borderBottom: '1px solid var(--d-line-s)' }}
            >
              luxewindowworks.com/api/capabilities/request-in-home-consultation
            </a>
          </p>
          <Link href={LUXE_FLAGSHIP_HREF} className="d-btn d-btn-ghost">
            Read the Luxe case study →
          </Link>
        </GlassPanel>
      </section>

      <ProofWall />

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">WHO WE BUILD FOR</div>
          <p className="font-inter font-semibold mb-8" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', lineHeight: 1.3, letterSpacing: '-0.02em', color: FG, maxWidth: '22ch' }}>
            For businesses where <em className="serif" style={{ color: ACCENT }}>the choice takes care.</em>
          </p>
          <ul className="flex flex-col gap-3 mb-8" style={{ maxWidth: '640px' }}>
            {whoWeBuildFor.map((w) => (
              <li key={w} className="glass-panel-soft flex items-center gap-4 font-inter" style={{ padding: '16px 22px', fontSize: '16px', color: DIM, fontWeight: 300 }}>
                <span style={{ color: ACCENT, flexShrink: 0, fontSize: '13px' }}>◆</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: MUTE, fontWeight: 300, maxWidth: '680px' }}>
            The best starting point is a real offer, experience you can demonstrate, and a team that knows how a good customer relationship begins. We help make that knowledge easier to use online.
          </p>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)', borderLeft: '2px solid var(--d-accent)' }}>
          <div className="d-eyebrow mb-6">WHAT YOU OWN</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG }}>
            Your website. Your accounts. <em className="serif" style={{ color: ACCENT }}>Your business.</em>
          </h2>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            You own the finished website and the hosting and code accounts it runs on. There is no mandatory retainer.
            Active capabilities may use third-party services with direct costs, and they may need occasional maintenance.
            We make those dependencies clear at handoff so you can plan for them.
          </p>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">HOW THE ENGAGEMENT RUNS</div>
          <p className="font-inter mb-10" style={{ fontSize: '16px', lineHeight: 1.6, color: DIM, fontWeight: 300, maxWidth: '640px' }}>
            You see the work as it develops, know what is being tested, and take ownership of the finished build.
          </p>
          <div className="mb-4">
            {processSteps.map((s, i) => (
              <div key={s.w} className="flex gap-6">
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: '12px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: '5px', boxShadow: 'none' }} />
                  {i < processSteps.length - 1 && <div style={{ width: '1px', flex: 1, background: 'rgba(255,255,255,0.14)', minHeight: '32px' }} />}
                </div>
                <div style={{ paddingBottom: i < processSteps.length - 1 ? '32px' : '0' }}>
                  <p className="font-mono mb-1" style={{ fontSize: '10px', letterSpacing: '0.16em', color: ACCENT }}>{s.w}</p>
                  <p className="font-inter font-semibold mb-2" style={{ fontSize: '16px', color: FG, letterSpacing: '-0.01em' }}>{s.t}</p>
                  <p className="font-inter" style={{ fontSize: '15px', lineHeight: 1.6, color: DIM, fontWeight: 300, maxWidth: '640px' }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">HOW WE WORK</div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', color: FG }}>Convenience with clear responsibilities.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {operatingPrinciples.map((s) => (
              <div key={s.t} className="glass-panel-soft" style={{ padding: '22px 26px' }}>
                <p className="font-inter font-semibold mb-2" style={{ fontSize: '15px', color: FG, letterSpacing: '-0.01em' }}>{s.t}</p>
                <p className="font-inter" style={{ fontSize: '13.5px', lineHeight: 1.6, color: MUTE, fontWeight: 300 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={{ ...sectionGap, paddingBottom: 'clamp(48px, 10vw, 120px)' }}>
        <GlassPanel style={{ padding: 'clamp(28px, 6vw, 72px)', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">START HERE</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG }}>
            Find the friction <em className="serif" style={{ color: ACCENT }}>before your customer does.</em>
          </h2>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            The Agent Readiness Review checks how clearly your business can be understood, what supports trust, and how a customer or their assistant can move forward. You get practical priorities in writing. {REVIEW_TURNAROUND} You keep the report either way.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link href={REVIEW_HREF} className="d-btn d-btn-primary">Request an Agent Readiness Review →</Link>
            <Link href="/pricing" className="d-btn d-btn-ghost">See Pricing →</Link>
          </div>
          <p className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.14em', color: MUTE }}>
            CLEAR TO CUSTOMERS · USEFUL TO THEIR ASSISTANTS · OWNED BY YOU
          </p>
        </GlassPanel>
      </section>
    </SecondaryPageShell>
  );
}
