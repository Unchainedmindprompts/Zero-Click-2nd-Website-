import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';

export const metadata: Metadata = {
  title: 'Services — AI-Ready Foundations',
  description:
    'Foundation Build, SEO + AI Visibility Consulting, and Content Architecture for businesses that need to be legible to AI. Owned forever. No retainer.',
  alternates: { canonical: 'https://www.kodecite.ai/services' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Foundation Build',
  serviceType: 'AI Visibility Infrastructure',
  provider: {
    '@type': 'ProfessionalService',
    '@id': 'https://www.kodecite.ai/#business',
    name: 'KodeCite.ai',
    url: 'https://www.kodecite.ai',
  },
  description:
    'The Foundation Build is the complete version of KodeCite: a rebuilt website, a clean technical foundation, structured data, entity graph alignment, answer-first content architecture, and the handoff of the full asset to you. Owned forever. No retainer.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'KodeCite.ai Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Foundation Build',
        description: 'A complete AI-readable rebuild — Technical Foundation, Entity Graph, Answer-First Structure, Authority Signals. Built in focused phases. You own everything.',
        itemOffered: { '@type': 'Service', name: 'Foundation Build', serviceType: 'AI Visibility Infrastructure' },
      },
      {
        '@type': 'Offer',
        name: 'SEO + AI Visibility Consulting',
        description: 'A scoped audit and strategy plan for businesses with an existing site that needs diagnosis, structure, and AI visibility guidance.',
        itemOffered: { '@type': 'Service', name: 'SEO + AI Visibility Consulting' },
      },
      {
        '@type': 'Offer',
        name: 'Content Architecture',
        description: 'A structure plan for what your site should say, how pages should connect, and how AI systems should read it.',
        itemOffered: { '@type': 'Service', name: 'Content Architecture' },
      },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.kodecite.ai/services' },
  ],
};

const pillars = [
  {
    n: '01', t: 'CHASSIS',
    h: 'Technical Foundation',
    d: 'Next.js, Vercel edge deployment, server-side rendering, repository setup, deployment pipeline, domain configuration, performance budgets.',
    specs: ['Next.js · App Router · TypeScript · Tailwind', 'Vercel deployment + domain config', 'Real Core Web Vitals — not Lighthouse cosplay'],
  },
  {
    n: '02', t: 'ENGINE',
    h: 'Entity Graph',
    d: 'Schema.org deployed correctly, anchored @id references, JSON-LD per page, llms.txt, agent.json, BlogPosting, FAQPage, BreadcrumbList schema.',
    specs: ['Schema.org · anchored entity graph', 'llms.txt + agent.json deployed', 'BlogPosting · FAQPage · BreadcrumbList per post'],
  },
  {
    n: '03', t: 'AERO',
    h: 'Answer-First Structure',
    d: 'Route map, page structure, FAQ blocks, internal linking, extraction-ready pages, content migration.',
    specs: ['Answer-first H1 structure · FAQ blocks', 'Internal linking + entity references', 'Extraction-ready pages + content migration'],
  },
  {
    n: '04', t: 'GRAPHICS',
    h: 'Authority Signals',
    d: 'Design system, component library, visual trust elements, directory launch, NAP and citation alignment across authoritative sources.',
    specs: ['Design system + component library', 'Directory launch: Google, Bing, Apple, Yelp, BBB', 'NAP + citation alignment'],
  },
];

const deliverables = [
  { l: 'GitHub repository', d: 'Transferred to your organization. Full commit history, README, deploy instructions.' },
  { l: 'Vercel project', d: 'Production + preview environments. Domain configured. SSL, DNS, redirects all in place.' },
  { l: 'Domain + DNS', d: 'Registered or moved to your account. You control where it points and what it serves.' },
  { l: 'Design system', d: 'Documented tokens, components, patterns. Anyone can extend the site without breaking it.' },
  { l: 'Schema graph', d: 'Anchored JSON-LD across every route. llms.txt and agent.json at the root.' },
  { l: 'Content', d: 'Migrated, restructured, and connected to the schema graph. Blog posts preserve their existing URLs.' },
];

const processSteps = [
  { w: 'PHASE 01', t: 'Discovery + audit', d: 'We read your existing site, your traffic, your goals. You tell us what matters. We come back with a build brief — what gets kept, what gets rebuilt, what gets removed.' },
  { w: 'PHASE 02', t: 'Architecture + design system', d: 'Information architecture, route map, schema graph design, design tokens, and the component library. Approved before any production code is written.' },
  { w: 'PHASE 03', t: 'Build', d: 'Page-by-page implementation. Live preview deployments at every push. You review and approve as we go — no big-bang reveal at the end.' },
  { w: 'PHASE 04', t: 'Content migration + QA', d: 'Existing blog posts moved into the new system with URLs and JSON-LD preserved. Cross-browser, accessibility, performance, schema validation — all checked.' },
  { w: 'PHASE 05', t: 'Handoff', d: 'Domain cutover. Repo transferred. Vercel transferred. Walkthrough. Documentation. You own it.' },
];

const seoDeliverables = [
  'Technical SEO audit + schema review',
  'AI visibility diagnostic (ChatGPT · Claude · Perplexity · Google AI)',
  'Entity graph review + recommendations',
  'Prioritized action plan with effort estimates',
  'Implementation guidance for your existing developer',
];

const contentDeliverables = [
  'Site map + information architecture',
  'Page-level content briefs (what each page should contain)',
  'Schema-aware content structure (FAQs, HowTo, Service nodes)',
  'Internal linking + entity-reference plan',
  'Content brief templates for your writer or agency',
];

const scopeItems = [
  { t: 'Copywriting', d: 'We design the structure. Your writer (or you) produces the words. We can recommend writers we trust.' },
  { t: 'Monthly retainers', d: 'No managed services, no ongoing fees. We build it, you own it. If you need help later, we scope a new engagement.' },
  { t: 'WordPress / Wix / Squarespace', d: "We don't build on platforms we don't recommend. If you're committed to one of these, we're not your team." },
  { t: 'Paid ads + social media', d: 'Not our practice. Plenty of excellent agencies do this. We focus on owned, durable infrastructure.' },
  { t: 'Generic "SEO services"', d: "No keyword stuffing, no link farms, no guaranteed-rankings packages. Real SEO is structural — that's the work we do." },
  { t: 'Logo + brand identity', d: "We work with the brand you have. If you need a new identity first, we'll wait or recommend a designer." },
];

// shared text colors on glass
const FG = 'var(--d-fg)';
const DIM = 'rgba(233, 238, 255, 0.95)';
const MUTE = 'rgba(219, 227, 255, 0.8)';
const ACCENT = 'var(--d-accent)';
const sectionGap = { marginTop: '30px' };

export default function ServicesPage() {
  return (
    <SecondaryPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="secondary-section secondary-hero">
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">SERVICES · WHAT WE BUILD</div>
          <h1 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(36px, 4.8vw, 62px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: FG, maxWidth: '15ch' }}>
            We make business websites{' '}
            <em className="serif" style={{ color: ACCENT }}>understandable to AI.</em>
          </h1>
          <p className="font-inter mb-10" style={{ fontSize: '17px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '620px' }}>
            Most websites were built for human visitors and search crawlers. KodeCite rebuilds
            or restructures your site so AI systems can understand who you are, what you do,
            where you serve, and why you should be trusted.
          </p>

          <h2 className="font-inter font-semibold mb-2" style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: FG }}>
            Choose the right <em className="serif" style={{ color: ACCENT }}>path.</em>
          </h2>
          <p className="font-inter mb-6" style={{ fontSize: '14px', lineHeight: 1.6, color: MUTE, fontWeight: 300 }}>
            One flagship build, plus two scoped engagements for sites that aren&apos;t ready to rebuild.
          </p>

          <div className="flex flex-col gap-3" style={{ maxWidth: '680px' }}>
            {[
              { href: '#foundation-build', tag: 'FLAGSHIP', flagship: true, title: 'Foundation Build', desc: 'A complete AI-readable rebuild for businesses that need the right technical foundation.' },
              { href: '#adjacent', tag: 'ADJACENT', flagship: false, title: 'SEO + AI Visibility Consulting', desc: 'A scoped audit and strategy plan for businesses with an existing site that needs diagnosis, structure, and AI visibility guidance.' },
              { href: '#adjacent', tag: 'ADJACENT', flagship: false, title: 'Content Architecture', desc: 'A structure plan for what your site should say, how pages should connect, and how AI systems should read it.' },
            ].map((link) => (
              <a key={link.tag} href={link.href} className="glass-panel-soft secondary-jump" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', textDecoration: 'none', ...(link.flagship ? { borderColor: 'rgba(93,213,255,0.45)' } : {}) }}>
                <span className="font-mono flex-shrink-0" style={{ fontSize: '9px', letterSpacing: '0.16em', color: link.flagship ? ACCENT : MUTE, minWidth: '78px' }}>{link.tag}</span>
                <span className="font-inter font-semibold flex-1" style={{ fontSize: '14px', color: FG, letterSpacing: '-0.01em' }}>{link.title}</span>
                <span className="font-inter flex-1 hidden md:block" style={{ fontSize: '13px', color: MUTE, fontWeight: 300 }}>{link.desc}</span>
                <span style={{ color: ACCENT, fontSize: '14px', flexShrink: 0 }}>→</span>
              </a>
            ))}
          </div>
        </GlassPanel>
      </section>

      {/* ── Not sure which path? ─────────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5" style={{ padding: 'clamp(28px, 4vw, 44px)' }}>
          <div>
            <h2 className="font-inter font-semibold mb-2" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', letterSpacing: '-0.02em', color: FG }}>
              Not sure which path fits?
            </h2>
            <p className="font-inter" style={{ fontSize: '15px', lineHeight: 1.6, color: DIM, fontWeight: 300, maxWidth: '620px' }}>
              Start with a Machine Read. We&apos;ll show you what AI systems can and can&apos;t verify
              about your business, then recommend the right next step — even if that next step is
              not a rebuild.
            </p>
          </div>
          <Link href="/contact" className="d-btn d-btn-primary flex-shrink-0">Run my site →</Link>
        </GlassPanel>
      </section>

      {/* ── Foundation Build ─────────────────────────────── */}
      <section id="foundation-build" className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <p className="font-mono mb-4" style={{ fontSize: '11px', letterSpacing: '0.18em', color: ACCENT }}>01 / FLAGSHIP</p>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: FG, maxWidth: '600px' }}>
            The Foundation <em className="serif" style={{ color: ACCENT }}>Build.</em>
          </h2>
          <p className="font-inter mb-14" style={{ fontSize: '17px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '640px' }}>
            The Foundation Build is the complete version of KodeCite: a rebuilt website, a clean
            technical foundation, structured data, entity graph alignment, answer-first content
            architecture, and the handoff of the full asset to you. Owned forever. No retainer.
          </p>

          {/* 4 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
            {pillars.map((p) => (
              <article key={p.n} className="glass-panel-soft" style={{ padding: '28px 30px' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.14em', color: MUTE }}>{p.n}</span>
                  <span className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.18em', color: ACCENT }}>{p.t}</span>
                </div>
                <h3 className="font-inter font-semibold mb-3" style={{ fontSize: '17px', lineHeight: 1.25, letterSpacing: '-0.01em', color: FG }}>{p.h}</h3>
                <p className="font-inter mb-5" style={{ fontSize: '14px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>{p.d}</p>
                <ul className="flex flex-col gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px' }}>
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2 font-inter" style={{ fontSize: '12.5px', color: MUTE, lineHeight: 1.5 }}>
                      <span style={{ color: ACCENT, flexShrink: 0 }}>—</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Verification */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono flex-shrink-0" style={{ fontSize: '9px', letterSpacing: '0.22em', color: ACCENT }}>ALSO INCLUDED IN EVERY FOUNDATION BUILD</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(93,213,255,0.3), transparent)' }} />
          </div>
          <article className="glass-panel-soft mb-14" style={{ padding: '34px 38px', borderLeft: '2px solid rgba(93,213,255,0.55)' }}>
            <p className="font-mono mb-5" style={{ fontSize: '10px', letterSpacing: '0.18em', color: ACCENT }}>VERIFICATION</p>
            <h3 className="font-inter font-semibold mb-4" style={{ fontSize: '22px', lineHeight: 1.2, letterSpacing: '-0.015em', color: FG }}>The trust layer.</h3>
            <p className="font-inter mb-6" style={{ fontSize: '15px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '680px' }}>
              Schema alone isn&apos;t trust. The entity graph has to match the real business across
              every authoritative source. We review and align Google Business Profile, Bing Places,
              Apple Maps, Yelp, BBB, licensing profiles, NAP consistency, and address and
              service-area strategy so AI systems and search engines see one coherent identity,
              not contradictions.
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                'Directory and profile audit across Google, Bing, Apple, Yelp, BBB',
                'NAP and sameAs alignment across all authoritative sources',
                'GBP and service-area risk review for licensed and shared-office practitioners',
                'Address strategy verification (storefront vs. service-area vs. brokerage location)',
              ].map((s) => (
                <li key={s} className="flex items-start gap-3 font-inter" style={{ fontSize: '14px', color: DIM, lineHeight: 1.55 }}>
                  <span style={{ color: ACCENT, flexShrink: 0, marginTop: '1px' }}>✓</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Deliverables */}
          <div className="glass-panel-soft mb-14" style={{ padding: '44px' }}>
            <p className="font-mono mb-3" style={{ fontSize: '10px', letterSpacing: '0.18em', color: MUTE }}>WHAT YOU OWN ON HANDOFF DAY</p>
            <h3 className="font-inter font-semibold mb-9" style={{ fontSize: 'clamp(22px, 3vw, 32px)', lineHeight: 1.15, letterSpacing: '-0.02em', color: FG }}>
              Everything. <em className="serif" style={{ color: ACCENT }}>With keys.</em>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {deliverables.map((d) => (
                <div key={d.l} className="flex gap-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0" style={{ marginTop: '2px' }}>
                    <path d="M5 10L8.5 13.5L15 7" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="font-inter font-semibold mb-1" style={{ fontSize: '14px', color: FG, letterSpacing: '-0.005em' }}>{d.l}</p>
                    <p className="font-inter" style={{ fontSize: '13px', lineHeight: 1.6, color: MUTE, fontWeight: 300 }}>{d.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process timeline */}
          <div className="mb-12">
            <p className="font-mono mb-3" style={{ fontSize: '10px', letterSpacing: '0.18em', color: MUTE }}>PROCESS · BUILT IN FOCUSED PHASES</p>
            <h3 className="font-inter font-semibold mb-9" style={{ fontSize: 'clamp(22px, 3vw, 32px)', lineHeight: 1.15, letterSpacing: '-0.02em', color: FG }}>
              How the engagement <em className="serif" style={{ color: ACCENT }}>runs.</em>
            </h3>
            <div>
              {processSteps.map((s, i) => (
                <div key={s.w} className="flex gap-6">
                  <div className="flex flex-col items-center flex-shrink-0" style={{ width: '12px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: '5px', boxShadow: '0 0 10px rgba(93,213,255,0.5)' }} />
                    {i < processSteps.length - 1 && <div style={{ width: '1px', flex: 1, background: 'rgba(255,255,255,0.14)', minHeight: '38px' }} />}
                  </div>
                  <div style={{ paddingBottom: i < processSteps.length - 1 ? '38px' : '0' }}>
                    <p className="font-mono mb-1" style={{ fontSize: '10px', letterSpacing: '0.16em', color: ACCENT }}>{s.w}</p>
                    <p className="font-inter font-semibold mb-2" style={{ fontSize: '15px', color: FG, letterSpacing: '-0.01em' }}>{s.t}</p>
                    <p className="font-inter" style={{ fontSize: '14px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '640px' }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mid-page CTA */}
          <div className="glass-panel-soft flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5" style={{ padding: '32px 36px', borderColor: 'rgba(93,213,255,0.22)' }}>
            <div>
              <h3 className="font-inter font-semibold mb-2" style={{ fontSize: '18px', letterSpacing: '-0.015em', color: FG }}>Ready to see what&apos;s actually under the hood?</h3>
              <p className="font-inter" style={{ fontSize: '14px', lineHeight: 1.6, color: DIM, fontWeight: 300 }}>Start with a Machine Read. Free, no pitch, 24–48 hour turnaround.</p>
            </div>
            <Link href="/contact" className="d-btn d-btn-primary flex-shrink-0">Run my site →</Link>
          </div>
        </GlassPanel>
      </section>

      {/* ── Adjacent Services ────────────────────────────── */}
      <section id="adjacent" className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <p className="font-mono mb-4" style={{ fontSize: '11px', letterSpacing: '0.18em', color: ACCENT }}>02 / ADJACENT</p>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: FG, maxWidth: '640px' }}>
            When a full rebuild isn&apos;t <em className="serif" style={{ color: ACCENT }}>the answer.</em>
          </h2>
          <p className="font-inter mb-12" style={{ fontSize: '17px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '560px' }}>
            Sometimes your site is structurally fine, but the strategy isn&apos;t.
            Sometimes you need a second set of eyes on schema, page structure, internal
            linking, or how content should be organized. We work on those, too — scoped per engagement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { label: 'SEO CONSULTING', title: 'SEO + AI visibility ', em: 'consulting.', body: 'Strategy and audit work for sites that don’t need a rebuild. We read what’s there, identify what’s broken or missing — schema gaps, entity coherence, technical SEO issues, AI crawler accessibility — and write a prioritized action plan your existing team can execute.', items: seoDeliverables, forLine: '→ FOR: ESTABLISHED SITES, IN-HOUSE TEAMS, AGENCIES NEEDING A SECOND OPINION' },
              { label: 'CONTENT ARCHITECTURE', title: 'Content ', em: 'Architecture.', body: 'Architecture work — what should exist on your site, how it should connect, and how it should be structured so both humans and AI systems can navigate it. We design the skeleton and the connective tissue. We don’t write the words.', items: contentDeliverables, forLine: '→ FOR: TEAMS WITH A WRITER · AGENCIES THAT NEED STRUCTURE · BUSINESSES PLANNING A CONTENT INVESTMENT' },
            ].map((card) => (
              <article key={card.label} className="glass-panel-soft" style={{ padding: '34px', display: 'flex', flexDirection: 'column' }}>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.18em', color: ACCENT }}>{card.label}</span>
                  <span className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.12em', color: MUTE }}>SCOPED PER ENGAGEMENT</span>
                </div>
                <h3 className="font-inter font-semibold mb-3" style={{ fontSize: '20px', lineHeight: 1.2, letterSpacing: '-0.015em', color: FG }}>
                  {card.title}<em className="serif" style={{ color: ACCENT }}>{card.em}</em>
                </h3>
                <p className="font-inter mb-6" style={{ fontSize: '14px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>{card.body}</p>
                <div className="flex-1 mb-6">
                  <p className="font-mono mb-3" style={{ fontSize: '9px', letterSpacing: '0.16em', color: MUTE }}>TYPICAL DELIVERABLES</p>
                  <ul className="flex flex-col gap-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-inter" style={{ fontSize: '13px', lineHeight: 1.55, color: DIM, fontWeight: 300 }}>
                        <span style={{ color: ACCENT, flexShrink: 0, marginTop: '2px' }}>—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.12em', color: MUTE, lineHeight: 1.5 }}>{card.forLine}</p>
              </article>
            ))}
          </div>
        </GlassPanel>
      </section>

      {/* ── Scope ────────────────────────────────────────── */}
      <section id="scope" className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <p className="font-mono mb-4" style={{ fontSize: '11px', letterSpacing: '0.18em', color: ACCENT }}>03 / SCOPE</p>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: FG, maxWidth: '600px' }}>
            What we <em className="serif" style={{ color: ACCENT }}>don&apos;t do.</em>
          </h2>
          <p className="font-inter mb-12" style={{ fontSize: '17px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '560px' }}>
            We&apos;re focused on doing one thing exceptionally well: building AI-native web infrastructure.
            We don&apos;t dabble in the rest, and we won&apos;t pretend to. Here&apos;s where we stop — so you know who else to hire.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scopeItems.map((s) => (
              <div key={s.t} className="glass-panel-soft" style={{ padding: '24px 26px' }}>
                <p className="font-mono mb-3" style={{ fontSize: '18px', color: MUTE, lineHeight: 1 }}>×</p>
                <p className="font-inter font-semibold mb-2" style={{ fontSize: '15px', color: FG, letterSpacing: '-0.01em' }}>{s.t}</p>
                <p className="font-inter" style={{ fontSize: '13px', lineHeight: 1.6, color: MUTE, fontWeight: 300 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="secondary-section" style={{ ...sectionGap, paddingBottom: '120px' }}>
        <GlassPanel style={{ padding: 'clamp(40px, 6vw, 72px)', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">START HERE</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG }}>
            The first step is <em className="serif" style={{ color: ACCENT }}>always</em> a Machine Read.
          </h2>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Whether you end up needing a Foundation Build, SEO + AI Visibility Consulting,
            Content Architecture, or nothing at all — we start by reading what&apos;s actually there.
            Free. 24–48 hour turnaround. You keep the report either way.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="d-btn d-btn-primary">Run my site →</Link>
            <a href="mailto:mark@kodecite.ai" className="d-btn d-btn-ghost">Email mark@kodecite.ai</a>
          </div>
        </GlassPanel>
      </section>
    </SecondaryPageShell>
  );
}
