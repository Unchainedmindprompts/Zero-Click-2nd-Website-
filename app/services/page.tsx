import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — AI-Ready Foundations',
  description:
    'Foundation Build, SEO consulting, and content design for businesses that need to be legible to AI. Engineered once. Owned forever. No retainer.',
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
    "A complete rebuild of your business website on infrastructure that's actually legible to the systems people now use to find you. Engineered once. Owned forever. No retainer.",
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'KodeCite.ai Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Foundation Build',
        description: 'Full 4-layer rebuild — Chassis, Engine, Aero, Graphics. 6–8 weeks. You own everything.',
        itemOffered: { '@type': 'Service', name: 'Foundation Build', serviceType: 'AI Visibility Infrastructure' },
      },
      {
        '@type': 'Offer',
        name: 'SEO + AI Visibility Consulting',
        description: "Strategy and audit work for established sites that don't need a full rebuild.",
        itemOffered: { '@type': 'Service', name: 'SEO + AI Visibility Consulting' },
      },
      {
        '@type': 'Offer',
        name: 'Content Design + Information Architecture',
        description: 'Architecture work — what should exist on your site, how it should connect, and how it should be structured.',
        itemOffered: { '@type': 'Service', name: 'Content Design + Information Architecture' },
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
    h: 'Infrastructure',
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
    h: 'Answer-First Content Architecture',
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
  {
    w: 'WEEK 1', t: 'Discovery + audit',
    d: 'We read your existing site, your traffic, your goals. You tell us what matters. We come back with a build brief — what gets kept, what gets rebuilt, what gets removed.',
  },
  {
    w: 'WEEKS 2–3', t: 'Architecture + design system',
    d: 'Information architecture, route map, schema graph design, design tokens, and the component library. Approved before any production code is written.',
  },
  {
    w: 'WEEKS 4–6', t: 'Build',
    d: 'Page-by-page implementation. Live preview deployments at every push. You review and approve as we go — no big-bang reveal at the end.',
  },
  {
    w: 'WEEK 7', t: 'Content migration + QA',
    d: 'Existing blog posts moved into the new system with URLs and JSON-LD preserved. Cross-browser, accessibility, performance, schema validation — all checked.',
  },
  {
    w: 'WEEK 8', t: 'Handoff',
    d: 'Domain cutover. Repo transferred. Vercel transferred. Walkthrough. Documentation. You own it.',
  },
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
  {
    t: 'Copywriting',
    d: 'We design the structure. Your writer (or you) produces the words. We can recommend writers we trust.',
  },
  {
    t: 'Monthly retainers',
    d: 'No managed services, no ongoing fees. We build it, you own it. If you need help later, we scope a new engagement.',
  },
  {
    t: 'WordPress / Wix / Squarespace',
    d: "We don't build on platforms we don't recommend. If you're committed to one of these, we're not your team.",
  },
  {
    t: 'Paid ads + social media',
    d: 'Not our practice. Plenty of excellent agencies do this. We focus on owned, durable infrastructure.',
  },
  {
    t: 'Generic "SEO services"',
    d: "No keyword stuffing, no link farms, no guaranteed-rankings packages. Real SEO is structural — that's the work we do.",
  },
  {
    t: 'Logo + brand identity',
    d: "We work with the brand you have. If you need a new identity first, we'll wait or recommend a designer.",
  },
];

// Shared inline styles
const sectionPad = { padding: '110px 32px' };
const wrap = { maxWidth: '1180px', margin: '0 auto' } as const;
const labelStyle = {
  fontFamily: 'var(--font-inter)', fontSize: '12px', fontWeight: 600,
  letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'var(--ed-accent)',
};

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: 'var(--ed-bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{ padding: '150px 32px 80px', backgroundColor: 'var(--ed-bg)' }}>
        <div style={wrap}>
          <div className="ed-eyebrow mb-7">Services · What We Build</div>

          <h1
            className="font-inter font-semibold mb-7"
            style={{ fontSize: 'clamp(46px, 6.4vw, 88px)', lineHeight: 0.98, letterSpacing: '-0.035em', color: 'var(--ed-ink)' }}
          >
            Three things.<br />
            Done <em className="ed-serif" style={{ color: 'var(--ed-accent)' }}>properly.</em>
          </h1>

          <p
            className="font-inter mb-14"
            style={{ fontSize: '19px', lineHeight: 1.6, color: 'var(--ed-ink-2)', fontWeight: 400, maxWidth: '600px' }}
          >
            We rebuild the foundation, advise on structure, or design the architecture of how
            information should flow through your site. We don&apos;t write your copy, run your ads,
            or manage your platform monthly. The work is engineered, scoped, and shipped.
          </p>

          {/* Jump links — clean editorial rows */}
          <div style={{ maxWidth: '720px', borderTop: '1px solid var(--ed-line)' }}>
            {[
              { href: '#foundation-build', tag: 'Flagship', title: 'Foundation Build', desc: 'Full 4-layer rebuild · 6–8 weeks · you own everything' },
              { href: '#adjacent', tag: 'Adjacent', title: 'SEO + Content Design', desc: "Strategy and structure for sites that aren't ready to rebuild" },
              { href: '#scope', tag: 'Scope', title: "What we don't do", desc: 'Honest about where we stop · so you know who else to hire' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="ed-jump"
                style={{
                  display: 'flex', alignItems: 'center', gap: '20px',
                  padding: '22px 4px', borderBottom: '1px solid var(--ed-line)', textDecoration: 'none',
                }}
              >
                <span style={{ ...labelStyle, fontSize: '11px', minWidth: '82px' }}>{link.tag}</span>
                <span className="font-inter font-semibold" style={{ fontSize: '17px', color: 'var(--ed-ink)', letterSpacing: '-0.015em', flex: '0 0 auto', minWidth: '200px' }}>
                  {link.title}
                </span>
                <span className="font-inter hidden md:block" style={{ fontSize: '14px', color: 'var(--ed-ink-3)', flex: 1 }}>
                  {link.desc}
                </span>
                <span style={{ color: 'var(--ed-accent)', fontSize: '17px', flexShrink: 0 }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Foundation Build ─────────────────────────────── */}
      <section id="foundation-build" style={{ ...sectionPad, backgroundColor: 'var(--ed-bg-2)', borderTop: '1px solid var(--ed-line)' }}>
        <div style={wrap}>
          <div style={labelStyle} className="mb-4">01 — Flagship</div>
          <h2
            className="font-inter font-semibold mb-5"
            style={{ fontSize: 'clamp(34px, 4.6vw, 58px)', lineHeight: 1.02, letterSpacing: '-0.025em', color: 'var(--ed-ink)', maxWidth: '640px' }}
          >
            The Foundation <em className="ed-serif" style={{ color: 'var(--ed-accent)' }}>Build.</em>
          </h2>
          <p className="font-inter mb-16" style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--ed-ink-2)', maxWidth: '600px' }}>
            A complete rebuild of your business website on infrastructure that&apos;s actually
            legible to the systems people now use to find you. Engineered once. Owned forever.
            No retainer.
          </p>

          {/* 4 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {pillars.map((p) => (
              <article key={p.n} className="ed-card" style={{ padding: '34px 36px' }}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="ed-serif" style={{ fontSize: '34px', color: 'var(--ed-accent)', lineHeight: 1 }}>{p.n}</span>
                  <span style={{ ...labelStyle, fontSize: '11px' }}>{p.t}</span>
                </div>
                <h3 className="font-inter font-semibold mb-3" style={{ fontSize: '20px', lineHeight: 1.2, letterSpacing: '-0.015em', color: 'var(--ed-ink)' }}>
                  {p.h}
                </h3>
                <p className="font-inter mb-5" style={{ fontSize: '14.5px', lineHeight: 1.62, color: 'var(--ed-ink-2)' }}>
                  {p.d}
                </p>
                <ul className="flex flex-col gap-2" style={{ borderTop: '1px solid var(--ed-line)', paddingTop: '16px' }}>
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 font-inter" style={{ fontSize: '13px', color: 'var(--ed-ink-3)', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--ed-accent)', flexShrink: 0 }}>—</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Verification — warm editorial callout */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span style={{ ...labelStyle, fontSize: '11px', flexShrink: 0 }}>Also included in every Foundation Build</span>
              <div style={{ flex: 1, height: '1px', background: 'var(--ed-line)' }} />
            </div>

            <article className="ed-card" style={{ padding: '40px 44px', borderLeft: '3px solid var(--ed-accent)' }}>
              <div style={{ ...labelStyle, fontSize: '11px' }} className="mb-5">Verification</div>
              <h3 className="font-inter font-semibold mb-4" style={{ fontSize: '26px', lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--ed-ink)' }}>
                The trust layer.
              </h3>
              <p className="font-inter mb-7" style={{ fontSize: '16px', lineHeight: 1.62, color: 'var(--ed-ink-2)', maxWidth: '720px' }}>
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
                  <li key={s} className="flex items-start gap-3 font-inter" style={{ fontSize: '14.5px', color: 'var(--ed-ink-2)', lineHeight: 1.55 }}>
                    <span style={{ color: 'var(--ed-accent)', flexShrink: 0, marginTop: '1px' }}>✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* Deliverables */}
          <div className="ed-card mb-16" style={{ padding: '52px' }}>
            <div style={{ ...labelStyle, fontSize: '11px', color: 'var(--ed-ink-3)' }} className="mb-3">What you own on day one of week nine</div>
            <h3 className="font-inter font-semibold mb-10" style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ed-ink)' }}>
              Everything. <em className="ed-serif" style={{ color: 'var(--ed-accent)' }}>With keys.</em>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
              {deliverables.map((d) => (
                <div key={d.l} className="flex gap-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0" style={{ marginTop: '2px' }}>
                    <path d="M5 10L8.5 13.5L15 7" stroke="var(--ed-accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="font-inter font-semibold mb-1" style={{ fontSize: '15px', color: 'var(--ed-ink)', letterSpacing: '-0.005em' }}>{d.l}</p>
                    <p className="font-inter" style={{ fontSize: '13.5px', lineHeight: 1.55, color: 'var(--ed-ink-3)' }}>{d.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process timeline */}
          <div className="mb-16">
            <div style={{ ...labelStyle, fontSize: '11px', color: 'var(--ed-ink-3)' }} className="mb-3">Process · 6–8 weeks</div>
            <h3 className="font-inter font-semibold mb-10" style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ed-ink)' }}>
              How the engagement <em className="ed-serif" style={{ color: 'var(--ed-accent)' }}>runs.</em>
            </h3>
            <div>
              {processSteps.map((s, i) => (
                <div key={s.w} className="flex gap-6">
                  <div className="flex flex-col items-center flex-shrink-0" style={{ width: '14px' }}>
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'var(--ed-accent)', flexShrink: 0, marginTop: '5px' }} />
                    {i < processSteps.length - 1 && (
                      <div style={{ width: '1px', flex: 1, background: 'var(--ed-line-2)', minHeight: '40px' }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: i < processSteps.length - 1 ? '40px' : '0' }}>
                    <p className="font-inter mb-1" style={{ ...labelStyle, fontSize: '11px' }}>{s.w}</p>
                    <p className="font-inter font-semibold mb-2" style={{ fontSize: '17px', color: 'var(--ed-ink)', letterSpacing: '-0.015em' }}>{s.t}</p>
                    <p className="font-inter" style={{ fontSize: '14.5px', lineHeight: 1.62, color: 'var(--ed-ink-2)', maxWidth: '640px' }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mid-page CTA */}
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            style={{ background: 'var(--ed-accent-soft)', border: '1px solid var(--ed-line)', borderRadius: '16px', padding: '40px 44px' }}
          >
            <div>
              <h3 className="font-inter font-semibold mb-2" style={{ fontSize: '20px', letterSpacing: '-0.02em', color: 'var(--ed-ink)' }}>
                Ready to see what&apos;s actually under the hood?
              </h3>
              <p className="font-inter" style={{ fontSize: '15px', lineHeight: 1.55, color: 'var(--ed-ink-2)' }}>
                Start with a Machine Read. Free, no pitch, 24–48 hour turnaround.
              </p>
            </div>
            <Link href="/contact" className="ed-btn ed-btn-primary flex-shrink-0">Run my site →</Link>
          </div>
        </div>
      </section>

      {/* ── Adjacent Services ────────────────────────────── */}
      <section id="adjacent" style={{ ...sectionPad, backgroundColor: 'var(--ed-bg)', borderTop: '1px solid var(--ed-line)' }}>
        <div style={wrap}>
          <div style={labelStyle} className="mb-4">02 — Adjacent</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(34px, 4.6vw, 58px)', lineHeight: 1.02, letterSpacing: '-0.025em', color: 'var(--ed-ink)', maxWidth: '680px' }}>
            When a full rebuild isn&apos;t <em className="ed-serif" style={{ color: 'var(--ed-accent)' }}>the answer.</em>
          </h2>
          <p className="font-inter mb-14" style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--ed-ink-2)', maxWidth: '600px' }}>
            Sometimes your site is structurally fine but the strategy isn&apos;t.
            Sometimes you need a second set of eyes on schema, IA, or how content
            should be organized. We work on those, too — scoped per engagement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SEO Consulting */}
            <article className="ed-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
              <div className="flex items-center justify-between mb-5">
                <span style={{ ...labelStyle, fontSize: '11px' }}>SEO Consulting</span>
                <span style={{ ...labelStyle, fontSize: '10px', color: 'var(--ed-ink-3)' }}>Scoped per engagement</span>
              </div>
              <h3 className="font-inter font-semibold mb-3" style={{ fontSize: '23px', lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--ed-ink)' }}>
                SEO + AI visibility <em className="ed-serif" style={{ color: 'var(--ed-accent)' }}>consulting.</em>
              </h3>
              <p className="font-inter mb-7" style={{ fontSize: '14.5px', lineHeight: 1.62, color: 'var(--ed-ink-2)' }}>
                Strategy and audit work for sites that don&apos;t need a rebuild. We read what&apos;s there,
                identify what&apos;s broken or missing — schema gaps, entity coherence, technical SEO issues,
                AI crawler accessibility — and write a prioritized action plan your existing team can execute.
              </p>
              <div className="flex-1 mb-6">
                <p style={{ ...labelStyle, fontSize: '10px', color: 'var(--ed-ink-3)' }} className="mb-3">Typical deliverables</p>
                <ul className="flex flex-col gap-2.5">
                  {seoDeliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 font-inter" style={{ fontSize: '13.5px', lineHeight: 1.5, color: 'var(--ed-ink-2)' }}>
                      <span style={{ color: 'var(--ed-accent)', flexShrink: 0 }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p style={{ ...labelStyle, fontSize: '10px', color: 'var(--ed-ink-3)', lineHeight: 1.5 }}>
                For: established sites, in-house teams, agencies needing a second opinion
              </p>
            </article>

            {/* Content Design + IA */}
            <article className="ed-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
              <div className="flex items-center justify-between mb-5">
                <span style={{ ...labelStyle, fontSize: '11px' }}>Content Design</span>
                <span style={{ ...labelStyle, fontSize: '10px', color: 'var(--ed-ink-3)' }}>Scoped per engagement</span>
              </div>
              <h3 className="font-inter font-semibold mb-3" style={{ fontSize: '23px', lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--ed-ink)' }}>
                Content design <em className="ed-serif" style={{ color: 'var(--ed-accent)' }}>+ IA.</em>
              </h3>
              <p className="font-inter mb-7" style={{ fontSize: '14.5px', lineHeight: 1.62, color: 'var(--ed-ink-2)' }}>
                Architecture work — what should exist on your site, how it should connect,
                and how it should be structured so both humans and AI systems can navigate it.
                We design the skeleton and the connective tissue. We don&apos;t write the words.
              </p>
              <div className="flex-1 mb-6">
                <p style={{ ...labelStyle, fontSize: '10px', color: 'var(--ed-ink-3)' }} className="mb-3">Typical deliverables</p>
                <ul className="flex flex-col gap-2.5">
                  {contentDeliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 font-inter" style={{ fontSize: '13.5px', lineHeight: 1.5, color: 'var(--ed-ink-2)' }}>
                      <span style={{ color: 'var(--ed-accent)', flexShrink: 0 }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p style={{ ...labelStyle, fontSize: '10px', color: 'var(--ed-ink-3)', lineHeight: 1.5 }}>
                For: teams with a writer · agencies that need structure · businesses planning a content investment
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Scope ────────────────────────────────────────── */}
      <section id="scope" style={{ ...sectionPad, backgroundColor: 'var(--ed-bg-2)', borderTop: '1px solid var(--ed-line)' }}>
        <div style={wrap}>
          <div style={labelStyle} className="mb-4">03 — Scope</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(34px, 4.6vw, 58px)', lineHeight: 1.02, letterSpacing: '-0.025em', color: 'var(--ed-ink)', maxWidth: '640px' }}>
            What we <em className="ed-serif" style={{ color: 'var(--ed-accent)' }}>don&apos;t do.</em>
          </h2>
          <p className="font-inter mb-14" style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--ed-ink-2)', maxWidth: '600px' }}>
            We&apos;re focused on doing one thing exceptionally well: building AI-native web infrastructure.
            We don&apos;t dabble in the rest, and we won&apos;t pretend to. Here&apos;s where we stop — so you know who else to hire.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {scopeItems.map((s) => (
              <div key={s.t} className="ed-card" style={{ padding: '28px 30px' }}>
                <p className="ed-serif mb-3" style={{ fontSize: '26px', color: 'var(--ed-accent)', lineHeight: 1 }}>×</p>
                <p className="font-inter font-semibold mb-2" style={{ fontSize: '16px', color: 'var(--ed-ink)', letterSpacing: '-0.01em' }}>{s.t}</p>
                <p className="font-inter" style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'var(--ed-ink-3)' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: 'var(--ed-bg)', borderTop: '1px solid var(--ed-line)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <div className="ed-eyebrow mb-6" style={{ display: 'block' }}>Start Here</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(30px, 3.6vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: 'var(--ed-ink)' }}>
            The first step is <em className="ed-serif" style={{ color: 'var(--ed-accent)' }}>always</em> a Machine Read.
          </h2>
          <p className="font-inter mb-9" style={{ fontSize: '17px', lineHeight: 1.6, color: 'var(--ed-ink-2)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Whether you end up needing a Foundation Build, SEO consulting, content design,
            or nothing at all — we start by reading what&apos;s actually there. Free.
            24–48 hour turnaround. You keep the report either way.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="ed-btn ed-btn-primary">Run my site →</Link>
            <a href="mailto:mark@kodecite.ai" className="ed-btn ed-btn-ghost">Email mark@kodecite.ai</a>
          </div>
        </div>
      </section>
    </div>
  );
}
