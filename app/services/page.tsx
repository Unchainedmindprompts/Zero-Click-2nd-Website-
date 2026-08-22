import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';
import ProofWall from '@/components/proof/ProofWall';
import { ORIGIN, WEBSITE_ID, businessRef } from '@/lib/schema';
import { FIVE_LAYERS, REVIEW_HREF } from '@/lib/positioning';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Infrastructure that lets AI understand — and safely act with — your business. Truth, capability, control, action, and distribution on systems you own.',
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
        'How Kodecite builds owned business infrastructure so AI can understand what a business does, know what it is allowed to do, and take the next safe step.',
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
        'An owned website and truth/discovery foundation: canonical business truth, entity graph, services and geography, corroboration, and machine discovery. Does not automatically include a production action endpoint.',
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
        'Custom Next.js websites, where appropriate, deployed to client-owned Vercel infrastructure and structured so people, search engines, and AI agents can read the same business truth. Fast sites are a component. The product is the owned system underneath.',
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Framework', value: 'Next.js (React) where appropriate' },
        { '@type': 'PropertyValue', name: 'Hosting', value: 'Vercel — client-owned' },
        { '@type': 'PropertyValue', name: 'Ownership', value: 'Client owns the repo, site, and deployed infrastructure' },
        { '@type': 'PropertyValue', name: 'Action endpoint', value: 'Not included automatically' },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${ORIGIN}/#service-entity-graph`,
      name: 'Business Truth and Capability Infrastructure',
      serviceType: 'Business infrastructure for the agent-driven web',
      provider: businessRef,
      description:
        'Canonical identity, services, locations, policies, proof, and — when the business permits — a defined capability contract so AI can understand, verify, recommend, and take a controlled next step.',
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
        'Owned Next.js real-estate website with a connected entity graph — discovery evidence that visibility can follow clearer infrastructure.',
    },
    {
      '@type': 'CreativeWork',
      '@id': `${ORIGIN}/#work-chelsey-fanning`,
      name: 'Chelsey Fanning | REALTOR® — North Idaho',
      url: 'https://www.chelseyfanning.com',
      creator: businessRef,
      description:
        'Owned Next.js real-estate website with a connected entity graph — discovery evidence that visibility can follow clearer infrastructure.',
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

const whoWeBuildFor = [
  'Established high-trust, high-value service businesses',
  'Premium home services — window treatments, remodels, HVAC, roofing',
  'Realtors and real-estate teams',
  'Custom home builders and specialty trades',
  'Specialty dental, med spas, and other considered-purchase practices',
  'Operators who already have a reputation worth making machine-usable',
];

const offerPaths = [
  {
    n: '01',
    t: 'Foundation Build',
    d: 'The owned foundation: a Next.js site where that is the right stack, canonical business truth, an entity graph, services and geography, corroboration, machine discovery, and a capability map. You own the GitHub repo and the Vercel deploy.',
    note: 'This does not automatically include a production action endpoint. Most businesses need the foundation before a safe action can be scoped.',
  },
  {
    n: '02',
    t: 'Agent Capability Build',
    d: 'Custom-scoped after the real business rules are understood. One defined action at a time: a contract, validation, security and abuse controls, idempotency, human handoff, and production acceptance testing.',
    note: 'No fixed public price. Different actions carry different rules and different risk. Booking, pricing, and checkout stay false until the business actually permits them.',
  },
  {
    n: '03',
    t: 'Platform Capability Layer — Pilot',
    d: 'For selected businesses that remain on WordPress, Wix, Squarespace, or similar platforms: a Kodecite-owned Next.js / Vercel sidecar on a business-controlled domain or subdomain. Truth and capability publication, and protected actions where appropriate. No WordPress plugin dependency.',
    note: 'This is a founding pilot, not a universally proven product. A full Next.js rebuild is still the strongest path. A sidecar may fit selected cases.',
  },
];

const processSteps = [
  { w: 'PHASE 01', t: 'Discovery', d: 'We read the current site, the real services, the geography, the policies, and the actions the business will and will not permit.' },
  { w: 'PHASE 02', t: 'Truth and architecture', d: 'We design the identity, services, locations, proof, and capability map. You approve it before the build starts.' },
  { w: 'PHASE 03', t: 'Build', d: 'Page by page, live preview at every push. You review as we go.' },
  { w: 'PHASE 04', t: 'Acceptance', d: 'Before we start we agree what the system must publish, what AI must be able to understand, and — when action is included — what the protected workflow must successfully do. The engagement is not complete until those agreed outputs pass the tests.' },
  { w: 'PHASE 05', t: 'Handoff', d: 'Repo, hosting, and domain transferred to you. Walkthrough included. You own it. Active capabilities may still need maintenance.' },
];

const dontDo = [
  { t: 'Chatbot agency work', d: 'We do not install a generic chatbot and call the business agent-ready.' },
  { t: 'Generic AI automation', d: 'We do not wire tools to act on a business that has not first been modeled and controlled.' },
  { t: 'SEO retainers', d: 'No monthly ranking packages. Visibility can be evidence that the infrastructure is clearer — it is not the category.' },
  { t: 'Paid media', d: 'Not this practice. Plenty of people do that work well.' },
  { t: 'MCP without the business', d: 'We will not publish a machine interface that has not reconciled what the business can actually do.' },
  { t: 'Agents without control', d: 'No false booking, pricing, purchase, or acceptance. Fail closed. Hand off to a human when required.' },
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
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">SERVICES · HOW IT WORKS</div>
          <h1 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(36px, 4.8vw, 62px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: FG, maxWidth: '18ch' }}>
            Infrastructure that lets AI understand — <em className="serif" style={{ color: ACCENT }}>and safely act with</em> — your business.
          </h1>
          <p className="font-inter mb-10" style={{ fontSize: '18px', lineHeight: 1.6, color: DIM, fontWeight: 300, maxWidth: '640px' }}>
            Most businesses are spread across a website, directories, forms, calendars, and unwritten rules.
            Kodecite builds one owned system for identity, services, locations, policies, proof, and allowed actions.
            Based in North Idaho. Built for service businesses anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href={REVIEW_HREF} className="d-btn d-btn-primary justify-center">Request an Agent Readiness Review →</Link>
            <Link href="/pricing" className="d-btn d-btn-ghost justify-center">See Pricing →</Link>
          </div>
        </GlassPanel>
      </section>

      <section id="website-development" className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">THE PRODUCT</div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(28px, 3.7vw, 46px)', lineHeight: 1.1, letterSpacing: '-0.03em', color: FG, maxWidth: '20ch' }}>
            Owned infrastructure for the <em className="serif" style={{ color: ACCENT }}>agent-driven web.</em>
          </h2>
          <div className="flex flex-col gap-5 mb-8" style={{ maxWidth: '720px' }}>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              The website, the entity graph, <code>llms.txt</code>, <code>agent.json</code>, forms, APIs, and a future MCP connection are components.
              The product is the system that lets AI understand what you do, verify what is true, determine what you can and cannot do, recommend you accurately, take the next authorized action, return an honest outcome, and hand off to a human when required.
            </p>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              A full Next.js rebuild is the strongest path. If you stay on WordPress, Wix, or Squarespace, we may still help selected businesses through a sidecar pilot. We will not pretend every platform is equal.
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

      <section id="how-it-works" className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">THE FIVE LAYERS</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG, maxWidth: '18ch' }}>
            Model only what the <em className="serif" style={{ color: ACCENT }}>real business permits.</em>
          </h2>
          <p className="font-inter mb-12" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '680px' }}>
            Not every client needs every action. We do not invent a booking endpoint, a price, or an acceptance the business does not give.
          </p>

          <div className="flex flex-col gap-4">
            {FIVE_LAYERS.map((l) => (
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
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
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

      <ProofWall />

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
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
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)', borderLeft: '2px solid rgba(93,213,255,0.55)' }}>
          <div className="d-eyebrow mb-6">WHAT YOU OWN</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG }}>
            The repo. The site. <em className="serif" style={{ color: ACCENT }}>The deployed infrastructure.</em>
          </h2>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            You own the GitHub repository and the Vercel project. There is no mandatory retainer.
            Active capabilities may use third-party services with direct costs. APIs, credentials, and security may need maintenance.
            We do not claim an active endpoint runs forever without that work.
          </p>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
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
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">WHAT WE ARE NOT</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dontDo.map((s) => (
              <div key={s.t} className="glass-panel-soft" style={{ padding: '22px 26px' }}>
                <p className="font-inter font-semibold mb-2" style={{ fontSize: '15px', color: FG, letterSpacing: '-0.01em' }}>{s.t}</p>
                <p className="font-inter" style={{ fontSize: '13.5px', lineHeight: 1.6, color: MUTE, fontWeight: 300 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={{ ...sectionGap, paddingBottom: '120px' }}>
        <GlassPanel style={{ padding: 'clamp(40px, 6vw, 72px)', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">START HERE</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG }}>
            See what AI can understand, verify, and <em className="serif" style={{ color: ACCENT }}>safely do</em> today.
          </h2>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            The Agent Readiness Review is a written look at identity, services, geography, credentials, policies, machine discovery, action paths, and control gaps. Free. 24–48 hours. You keep the report either way.
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
