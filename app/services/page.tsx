import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';
import ProofWall from '@/components/proof/ProofWall';
import { ORIGIN, WEBSITE_ID, businessRef } from '@/lib/schema';
import {
  LUXE_CAPABILITY_URL,
  LUXE_FLAGSHIP_HREF,
  LUXE_PROOF,
  REVIEW_HREF,
  REVIEW_TURNAROUND,
} from '@/lib/positioning';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'When a customer delegates an outcome to AI, the assistant must know what is true, determine fit, know the actions you permit, and return an honest result or hand off. Foundation Build starts at $4,995.',
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
        'How Kodecite keeps a service business inside the commercial decision as customers begin to delegate outcomes to AI — what is true, whether it fits, what actions are permitted, and an honest result or handoff.',
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
        'An owned website and digital business foundation so AI can understand and evaluate the business. The client owns the site and infrastructure. Does not automatically include a live action endpoint.',
      areaServed: { '@type': 'Country', name: 'United States' },
    },
    {
      '@type': 'Service',
      '@id': `${ORIGIN}/#service-web-development`,
      name: 'Owned Website and Truth Foundation',
      serviceType: 'Website Development',
      provider: businessRef,
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'North Idaho', sameAs: 'https://en.wikipedia.org/wiki/Idaho_Panhandle' },
        { '@type': 'City', name: "Coeur d'Alene", sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho' },
        { '@type': 'City', name: 'Spokane', sameAs: 'https://en.wikipedia.org/wiki/Spokane,_Washington' },
        { '@type': 'Country', name: 'United States' },
      ],
      description:
        'An owned website and digital business foundation so people, search, and AI can read the same accurate information. Fast sites are a component. The product is the owned system underneath.',
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Stack', value: 'Owned website where that is the right path' },
        { '@type': 'PropertyValue', name: 'Hosting', value: 'Client-owned hosting' },
        { '@type': 'PropertyValue', name: 'Ownership', value: 'Client owns the site and the accounts it runs on' },
        { '@type': 'PropertyValue', name: 'Live action', value: 'Not included automatically' },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${ORIGIN}/#service-entity-graph`,
      name: 'Business Truth and Capability Infrastructure',
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
        'Owned real-estate website — discovery evidence that visibility can follow clearer infrastructure.',
    },
    {
      '@type': 'CreativeWork',
      '@id': `${ORIGIN}/#work-chelsey-fanning`,
      name: 'Chelsey Fanning | REALTOR® — North Idaho',
      url: 'https://www.chelseyfanning.com',
      creator: businessRef,
      description:
        'Owned real-estate website — discovery evidence that visibility can follow clearer infrastructure.',
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
    n: '01',
    name: 'Truth',
    h: 'What is true about the business.',
    d: 'Identity, services, area, credibility, policies, and limitations — one reliable record. AI can accurately explain what the business does and whether it serves the customer.',
  },
  {
    n: '02',
    name: 'Capability',
    h: 'What can actually be requested.',
    d: 'What a customer or their assistant may ask for. AI can distinguish a qualified request from what the business does not offer.',
  },
  {
    n: '03',
    name: 'Control',
    h: 'Rules that keep the owner in charge.',
    d: 'Invalid, unauthorized, abusive, or duplicate requests do not become false bookings or repeated leads.',
  },
  {
    n: '04',
    name: 'Action',
    h: 'The next approved step.',
    d: 'A consultation request, a qualified inquiry, an appointment request, or a handoff to a person. The relationship can move forward without AI inventing a price, booking, purchase, or acceptance. Not every client needs every action.',
  },
  {
    n: '05',
    name: 'Distribution',
    h: 'The same accurate information, everywhere it is encountered.',
    d: 'People, search, and AI see one consistent version of the business — not scattered or conflicting facts.',
  },
];

const buyerNeeds = [
  { t: 'Know what is true', d: 'Services, geography, credentials, and limits have to be clear enough to evaluate.' },
  { t: 'Determine fit', d: 'The assistant has to decide whether your business matches the request.' },
  { t: 'Know permitted actions', d: 'It must see the next step you allow — and refuse the ones you do not.' },
  { t: 'Return an honest result or hand off', d: 'If the work needs a person, the system says so and leaves follow-up with you.' },
];

const whoWeBuildFor = [
  'Established high-trust, high-value service businesses',
  'Premium home services — window treatments, remodels, HVAC, roofing',
  'Realtors and real-estate teams',
  'Custom home builders and specialty trades',
  'Specialty dental, med spas, and other considered-purchase practices',
  'Operators who already have a reputation worth making understandable to AI',
];

const offerPaths = [
  {
    n: '01',
    t: 'Foundation Build',
    d: 'An owned website and digital business foundation so AI can understand and evaluate the business. You own the site and the infrastructure.',
    note: 'This does not automatically include a live action endpoint. Most businesses need the foundation before a safe action can be scoped.',
  },
  {
    n: '02',
    t: 'Agent Capability Build',
    d: 'One clearly defined approved action, scoped after the real business rules are understood. It protects against invalid, unauthorized, abusive, or duplicate requests, returns an honest outcome, and hands the work to a person where required.',
    note: 'No published price. Different actions carry different rules and different risk. Booking, pricing, and checkout stay unavailable until the business actually permits them.',
  },
  {
    n: '03',
    t: 'Platform Capability Layer — Pilot',
    d: 'For selected businesses that remain on WordPress, Wix, Squarespace, or similar platforms: an owned capability layer that can sit alongside the existing website, on infrastructure and a domain the client controls.',
    note: 'This is a founding pilot. A full rebuild is still the strongest path.',
  },
];

const processSteps = [
  { w: 'PHASE 01', t: 'Discovery', d: 'We read the current site, the real services, the area, the policies, and the actions the business will and will not permit.' },
  { w: 'PHASE 02', t: 'Design', d: 'We design identity, services, locations, proof, and what may later be requested. You approve it before the build starts.' },
  { w: 'PHASE 03', t: 'Build', d: 'Page by page, with a live preview as we go. You review along the way.' },
  { w: 'PHASE 04', t: 'Acceptance', d: 'Before we start, we agree what must be published, what AI must be able to understand, and — when an action is included — what the approved workflow must successfully do. The engagement is not complete until those agreed outputs pass.' },
  { w: 'PHASE 05', t: 'Handoff', d: 'The site, hosting, and domain transfer to you. Walkthrough included. You own it. Active capabilities may still need maintenance.' },
];

const dontDo = [
  { t: 'Chatbot agency work', d: 'We do not install a generic chatbot and call the business ready for AI.' },
  { t: 'Generic AI automation', d: 'We do not connect tools to act on a business that has not first been understood and controlled.' },
  { t: 'SEO retainers', d: 'No monthly ranking packages. Visibility can follow clearer information — it is not the product.' },
  { t: 'Paid media', d: 'Not this practice. Plenty of people do that work well.' },
  { t: 'Actions before the business is understood', d: 'We will not connect AI to take actions before the real services, rules, and permissions are clear.' },
  { t: 'Agents without control', d: 'No false booking, pricing, purchase, or acceptance. When judgment is required, the work goes to a person.' },
];

const FG = 'var(--d-fg)';
const DIM = 'rgba(233, 238, 255, 0.95)';
const MUTE = 'rgba(219, 227, 255, 0.8)';
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
            Infrastructure that lets AI understand — <em className="serif" style={{ color: ACCENT }}>and take authorized next steps with</em> — your business.
          </h1>
          <p className="font-inter mb-10" style={{ fontSize: '18px', lineHeight: 1.6, color: DIM, fontWeight: 300, maxWidth: '640px' }}>
            When a customer delegates an outcome to AI, the assistant may evaluate your business before anyone visits. To keep you in that decision, it must know what is true, determine whether you fit, know the actions you permit, and return an honest result or hand the work to a person. Based in North Idaho. Built for service businesses anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href={REVIEW_HREF} className="d-btn d-btn-primary justify-center">Request an Agent Readiness Review →</Link>
            <Link href="/pricing" className="d-btn d-btn-ghost justify-center">See Pricing →</Link>
          </div>
        </GlassPanel>
      </section>

      <section id="the-category" className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">THE CATEGORY</div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(28px, 3.7vw, 46px)', lineHeight: 1.1, letterSpacing: '-0.03em', color: FG, maxWidth: '20ch' }}>
            Isolated layers are common. <em className="serif" style={{ color: ACCENT }}>A usable system is not.</em>
          </h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '720px' }}>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              Existing tools often address one piece — visibility, scheduling, automation, or commerce. Service businesses still need those pieces working as one system AI can understand and take authorized next steps with.
            </p>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              Kodecite connects what is true about the business, what may be requested, what the owner permits, owned infrastructure, and human handoff. {LUXE_PROOF}
            </p>
          </div>
        </GlassPanel>
      </section>

      <section id="website-development" className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">THE PRODUCT</div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(28px, 3.7vw, 46px)', lineHeight: 1.1, letterSpacing: '-0.03em', color: FG, maxWidth: '20ch' }}>
            Owned infrastructure for the <em className="serif" style={{ color: ACCENT }}>agent-driven web.</em>
          </h2>
          <div className="flex flex-col gap-5 mb-8" style={{ maxWidth: '720px' }}>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              The product is the owned system that lets AI understand what you do, verify what is true, determine what you can and cannot do, recommend you accurately, take the next approved step, return an honest result, and hand the work to a person when required.
            </p>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              A complete rebuild is the strongest path. If you stay on WordPress, Wix, or Squarespace, we may still help selected businesses through an owned capability layer that sits alongside the existing site. We will not pretend every platform is equal.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {['Truth', 'Capability', 'Control', 'Action', 'Distribution'].map((t) => (
              <span key={t} className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.08em', color: ACCENT, border: '1px solid rgba(93,213,255,0.35)', borderRadius: '999px', padding: '6px 14px' }}>{t}</span>
            ))}
          </div>

          <p className="font-mono mb-4" style={{ fontSize: '10px', letterSpacing: '0.18em', color: MUTE }}>RECENT BUILDS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-panel-soft" style={{ padding: '24px 28px' }}>
              <p className="font-inter font-semibold mb-1" style={{ fontSize: '16px', color: FG }}>Real Estate With Shirin</p>
              <a href="https://www.realestatewithshirin.com" target="_blank" rel="noopener noreferrer" className="font-inter" style={{ fontSize: '13px', color: ACCENT, borderBottom: '1px solid rgba(93,213,255,0.4)' }}>realestatewithshirin.com</a>
            </div>
            <div className="glass-panel-soft" style={{ padding: '24px 28px' }}>
              <p className="font-inter font-semibold mb-1" style={{ fontSize: '16px', color: FG }}>Chelsey Fanning</p>
              <a href="https://www.chelseyfanning.com" target="_blank" rel="noopener noreferrer" className="font-inter" style={{ fontSize: '13px', color: ACCENT, borderBottom: '1px solid rgba(93,213,255,0.4)' }}>chelseyfanning.com</a>
            </div>
          </div>
        </GlassPanel>
      </section>

      <section id="what-ai-must-do" className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">BEFORE THE LAYERS</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG, maxWidth: '20ch' }}>
            AI has to finish this work <em className="serif" style={{ color: ACCENT }}>before you stay in the decision.</em>
          </h2>
          <p className="font-inter mb-10" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '680px' }}>
            If it cannot complete these four jobs with confidence, the customer connection may end before it begins.
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
          <div className="d-eyebrow mb-6">THE FIVE LAYERS</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG, maxWidth: '18ch' }}>
            Model only what the <em className="serif" style={{ color: ACCENT }}>real business permits.</em>
          </h2>
          <p className="font-inter mb-12" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '680px' }}>
            Not every client needs every action. We do not invent a booking, a price, or an acceptance the business does not give.
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
          <div className="flex flex-col gap-4">
            {offerPaths.map((o) => (
              <article key={o.n} className="glass-panel-soft" style={{ padding: 'clamp(24px, 3vw, 34px)' }}>
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
          <div className="d-eyebrow mb-6">LIVE PRODUCTION PROOF</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG, maxWidth: '20ch' }}>
            Luxe Window Works — a request an assistant could <em className="serif" style={{ color: ACCENT }}>find and submit.</em>
          </h2>
          <p className="font-inter mb-5" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '720px' }}>
            An outside AI found what Luxe permitted, established that the request qualified, and submitted one consultation request. Luxe received one email. Repeating the same request did not create another lead. Changing the request while reusing the same request identity was rejected. A person still follows up.
          </p>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '720px' }}>
            That is not booking, calendar, pricing, checkout, or acceptance. {LUXE_PROOF}
          </p>
          <p className="font-inter mb-6" style={{ fontSize: '14px', lineHeight: 1.65, color: MUTE, fontWeight: 300, maxWidth: '720px' }}>
            Public discovery contract:{' '}
            <a
              href={LUXE_CAPABILITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="capability-url"
              style={{ color: ACCENT, borderBottom: '1px solid rgba(93,213,255,0.4)' }}
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
            Established, <em className="serif" style={{ color: ACCENT }}>high-trust, high-value</em> service businesses.
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
            If your customers make a considered, expensive decision, this is built for you.
            If you need a chatbot, a paid-media team, or an SEO retainer, we will tell you we are the wrong shop.
          </p>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)', borderLeft: '2px solid rgba(93,213,255,0.55)' }}>
          <div className="d-eyebrow mb-6">WHAT YOU OWN</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG }}>
            The site. The accounts. <em className="serif" style={{ color: ACCENT }}>The finished system.</em>
          </h2>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            You own the finished website and the hosting and code accounts it runs on. There is no mandatory retainer.
            Active capabilities may use third-party services with direct costs, and they may need occasional maintenance.
            We do not claim a live action runs forever without that work.
          </p>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">HOW THE ENGAGEMENT RUNS</div>
          <p className="font-inter mb-10" style={{ fontSize: '16px', lineHeight: 1.6, color: DIM, fontWeight: 300, maxWidth: '640px' }}>
            Built in focused phases, with a live preview at every step — no big reveal at the end.
          </p>
          <div className="mb-4">
            {processSteps.map((s, i) => (
              <div key={s.w} className="flex gap-6">
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: '12px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: '5px', boxShadow: '0 0 10px rgba(93,213,255,0.5)' }} />
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
          <div className="d-eyebrow mb-6">WHAT WE ARE NOT</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dontDo.map((s) => (
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
            See what AI can understand, verify, and <em className="serif" style={{ color: ACCENT }}>safely do</em> today.
          </h2>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            The Agent Readiness Review is a written look at identity, services, area, credentials, policies, what AI can understand today, and where control is missing. {REVIEW_TURNAROUND} You keep the report either way.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link href={REVIEW_HREF} className="d-btn d-btn-primary">Request an Agent Readiness Review →</Link>
            <Link href="/pricing" className="d-btn d-btn-ghost">See Pricing →</Link>
          </div>
          <p className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.14em', color: MUTE }}>
            OWNED BY YOU · CONTROLLED BY YOU · READY FOR THE AGENT-DRIVEN WEB
          </p>
        </GlassPanel>
      </section>
    </SecondaryPageShell>
  );
}
