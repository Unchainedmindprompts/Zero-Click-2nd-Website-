import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — KodeCite.ai',
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

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{ padding: '120px 32px 80px', backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">SERVICES · WHAT WE BUILD</div>

          <h1
            className="font-inter font-semibold mb-6"
            style={{
              fontSize: 'clamp(44px, 6vw, 80px)',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: 'var(--d-fg)',
            }}
          >
            Three things.<br />
            Done <em className="serif">properly.</em>
          </h1>

          <p
            className="font-inter mb-12"
            style={{
              fontSize: '17px',
              lineHeight: 1.65,
              color: 'var(--d-fg-dim)',
              fontWeight: 300,
              maxWidth: '560px',
            }}
          >
            We rebuild the foundation, advise on structure, or design the architecture of how
            information should flow through your site. We don&apos;t write your copy, run your ads,
            or manage your platform monthly. The work is engineered, scoped, and shipped.
          </p>

          {/* Jump links */}
          <div className="flex flex-col gap-3" style={{ maxWidth: '660px' }}>
            {[
              {
                href: '#foundation-build',
                tag: 'FLAGSHIP',
                title: 'Foundation Build',
                desc: 'Full 4-layer rebuild · 6–8 weeks · you own everything',
              },
              {
                href: '#adjacent',
                tag: 'ADJACENT',
                title: 'SEO + Content Design',
                desc: "Strategy and structure for sites that aren't ready to rebuild",
              },
              {
                href: '#scope',
                tag: 'SCOPE',
                title: "What we don't do",
                desc: 'Honest about where we stop · so you know who else to hire',
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  background: 'var(--d-bg-2)',
                  border: '1px solid var(--d-line)',
                  borderLeft: '3px solid var(--d-accent)',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'background-color 200ms ease',
                }}
              >
                <span
                  className="font-mono flex-shrink-0"
                  style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--d-accent)', minWidth: '68px' }}
                >
                  {link.tag}
                </span>
                <span
                  className="font-inter font-semibold flex-1"
                  style={{ fontSize: '14px', color: 'var(--d-fg)', letterSpacing: '-0.01em' }}
                >
                  {link.title}
                </span>
                <span
                  className="font-inter flex-1 hidden md:block"
                  style={{ fontSize: '13px', color: 'var(--d-fg-mute)', fontWeight: 300 }}
                >
                  {link.desc}
                </span>
                <span style={{ color: 'var(--d-accent)', fontSize: '14px', flexShrink: 0 }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Foundation Build ─────────────────────────────── */}
      <section
        id="foundation-build"
        style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

          <p className="font-mono mb-4" style={{ fontSize: '11px', letterSpacing: '0.18em', color: 'var(--d-accent)' }}>
            01 / FLAGSHIP
          </p>
          <h2
            className="font-inter font-semibold mb-5"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: 'var(--d-fg)',
              maxWidth: '600px',
            }}
          >
            The Foundation <em className="serif">Build.</em>
          </h2>
          <p
            className="font-inter mb-16"
            style={{
              fontSize: '17px',
              lineHeight: 1.65,
              color: 'var(--d-fg-dim)',
              fontWeight: 300,
              maxWidth: '560px',
            }}
          >
            A complete rebuild of your business website on infrastructure that&apos;s actually
            legible to the systems people now use to find you. Engineered once. Owned forever.
            No retainer.
          </p>

          {/* 4 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {pillars.map((p) => (
              <article
                key={p.n}
                style={{
                  background: 'var(--d-bg-3)',
                  border: '1px solid var(--d-line)',
                  borderTop: '3px solid var(--d-accent)',
                  borderRadius: '12px',
                  padding: '28px 32px',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--d-fg-mute)' }}>
                    {p.n}
                  </span>
                  <span className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'var(--d-accent)' }}>
                    {p.t}
                  </span>
                </div>
                <h3
                  className="font-inter font-semibold mb-3"
                  style={{ fontSize: '17px', lineHeight: 1.25, letterSpacing: '-0.01em', color: 'var(--d-fg)' }}
                >
                  {p.h}
                </h3>
                <p
                  className="font-inter mb-5"
                  style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300 }}
                >
                  {p.d}
                </p>
                <ul className="flex flex-col gap-1">
                  {p.specs.map((s) => (
                    <li
                      key={s}
                      className="font-mono"
                      style={{ fontSize: '10px', letterSpacing: '0.08em', color: 'var(--d-fg-mute)' }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Verification — separate component, equally important */}
          <div style={{ marginTop: '40px', marginBottom: '16px' }}>
            {/* Section break banner */}
            <div
              className="flex items-center gap-4 mb-6"
              style={{ paddingTop: '40px', borderTop: '1px solid var(--d-line-s)' }}
            >
              <span
                className="font-mono flex-shrink-0"
                style={{ fontSize: '9px', letterSpacing: '0.22em', color: 'var(--d-ok)' }}
              >
                ALSO INCLUDED IN EVERY FOUNDATION BUILD
              </span>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(122,240,194,0.3), transparent)' }} />
            </div>

            <article
              style={{
                background: 'rgba(122,240,194,0.04)',
                border: '1px solid rgba(122,240,194,0.18)',
                borderLeft: '3px solid var(--d-ok)',
                borderRadius: '12px',
                padding: '36px 40px',
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'var(--d-ok)' }}>
                  VERIFICATION
                </span>
              </div>
              <h3
                className="font-inter font-semibold mb-4"
                style={{ fontSize: '22px', lineHeight: 1.2, letterSpacing: '-0.015em', color: 'var(--d-fg)' }}
              >
                The trust layer.
              </h3>
              <p
                className="font-inter mb-6"
                style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300, maxWidth: '680px' }}
              >
                Schema alone isn&apos;t trust. The entity graph has to match the real business across
                every authoritative source. We review and align Google Business Profile, Bing Places,
                Apple Maps, Yelp, BBB, licensing profiles, NAP consistency, and address and
                service-area strategy so AI systems and search engines see one coherent identity,
                not contradictions.
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  'Directory and profile audit across Google, Bing, Apple, Yelp, BBB',
                  'NAP and sameAs alignment across all authoritative sources',
                  'GBP and service-area risk review for licensed and shared-office practitioners',
                  'Address strategy verification (storefront vs. service-area vs. brokerage location)',
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span style={{ color: 'var(--d-ok)', flexShrink: 0, fontSize: '12px', marginTop: '1px' }}>✓</span>
                    <span
                      className="font-mono"
                      style={{ fontSize: '10px', letterSpacing: '0.08em', color: 'var(--d-fg-mute)', lineHeight: 1.6 }}
                    >
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* Deliverables */}
          <div
            style={{
              background: 'var(--d-bg-3)',
              border: '1px solid var(--d-line)',
              borderRadius: '16px',
              padding: '48px',
              marginBottom: '64px',
            }}
          >
            <p className="font-mono mb-3" style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'var(--d-fg-mute)' }}>
              WHAT YOU OWN ON DAY ONE OF WEEK NINE
            </p>
            <h3
              className="font-inter font-semibold mb-10"
              style={{
                fontSize: 'clamp(22px, 3vw, 32px)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: 'var(--d-fg)',
              }}
            >
              Everything. <em className="serif">With keys.</em>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliverables.map((d) => (
                <div key={d.l} className="flex gap-4">
                  <div className="flex-shrink-0" style={{ marginTop: '2px' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 10L8.5 13.5L15 7"
                        stroke="var(--d-accent)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-inter font-semibold mb-1"
                      style={{ fontSize: '14px', color: 'var(--d-fg)', letterSpacing: '-0.005em' }}
                    >
                      {d.l}
                    </p>
                    <p
                      className="font-inter"
                      style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--d-fg-mute)', fontWeight: 300 }}
                    >
                      {d.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process timeline */}
          <div style={{ marginBottom: '64px' }}>
            <p className="font-mono mb-3" style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'var(--d-fg-mute)' }}>
              PROCESS · 6–8 WEEKS
            </p>
            <h3
              className="font-inter font-semibold mb-10"
              style={{
                fontSize: 'clamp(22px, 3vw, 32px)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: 'var(--d-fg)',
              }}
            >
              How the engagement <em className="serif">runs.</em>
            </h3>
            <div>
              {processSteps.map((s, i) => (
                <div key={s.w} className="flex gap-6">
                  <div className="flex flex-col items-center flex-shrink-0" style={{ width: '20px' }}>
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: 'var(--d-accent)',
                        flexShrink: 0,
                        marginTop: '5px',
                        boxShadow: '0 0 8px rgba(93,213,255,0.4)',
                      }}
                    />
                    {i < processSteps.length - 1 && (
                      <div
                        style={{
                          width: '1px',
                          flex: 1,
                          background: 'var(--d-line)',
                          minHeight: '36px',
                        }}
                      />
                    )}
                  </div>
                  <div style={{ paddingBottom: i < processSteps.length - 1 ? '36px' : '0' }}>
                    <p
                      className="font-mono mb-1"
                      style={{ fontSize: '10px', letterSpacing: '0.16em', color: 'var(--d-accent)' }}
                    >
                      {s.w}
                    </p>
                    <p
                      className="font-inter font-semibold mb-2"
                      style={{ fontSize: '15px', color: 'var(--d-fg)', letterSpacing: '-0.01em' }}
                    >
                      {s.t}
                    </p>
                    <p
                      className="font-inter"
                      style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300 }}
                    >
                      {s.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mid-page CTA */}
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
            style={{
              background: 'rgba(93,213,255,0.04)',
              border: '1px solid rgba(93,213,255,0.2)',
              borderRadius: '14px',
              padding: '36px 40px',
            }}
          >
            <div>
              <h3
                className="font-inter font-semibold mb-2"
                style={{ fontSize: '18px', letterSpacing: '-0.015em', color: 'var(--d-fg)' }}
              >
                Ready to see what&apos;s actually under the hood?
              </h3>
              <p
                className="font-inter"
                style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--d-fg-dim)', fontWeight: 300 }}
              >
                Start with a Machine Read. Free, no pitch, 24–48 hour turnaround.
              </p>
            </div>
            <Link href="/contact" className="d-btn d-btn-primary flex-shrink-0">
              Run my site →
            </Link>
          </div>

        </div>
      </section>

      {/* ── Adjacent Services ────────────────────────────── */}
      <section
        id="adjacent"
        style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)', borderTop: '1px solid var(--d-line)' }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

          <p className="font-mono mb-4" style={{ fontSize: '11px', letterSpacing: '0.18em', color: 'var(--d-accent)' }}>
            02 / ADJACENT
          </p>
          <h2
            className="font-inter font-semibold mb-5"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: 'var(--d-fg)',
              maxWidth: '640px',
            }}
          >
            When a full rebuild isn&apos;t <em className="serif">the answer.</em>
          </h2>
          <p
            className="font-inter mb-14"
            style={{
              fontSize: '17px',
              lineHeight: 1.65,
              color: 'var(--d-fg-dim)',
              fontWeight: 300,
              maxWidth: '560px',
            }}
          >
            Sometimes your site is structurally fine but the strategy isn&apos;t.
            Sometimes you need a second set of eyes on schema, IA, or how content
            should be organized. We work on those, too — scoped per engagement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* SEO Consulting */}
            <article
              style={{
                background: 'var(--d-bg-2)',
                border: '1px solid var(--d-line)',
                borderRadius: '14px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'var(--d-accent)' }}>
                  SEO CONSULTING
                </span>
                <span className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.12em', color: 'var(--d-fg-mute)' }}>
                  SCOPED PER ENGAGEMENT
                </span>
              </div>
              <h3
                className="font-inter font-semibold mb-3"
                style={{ fontSize: '20px', lineHeight: 1.2, letterSpacing: '-0.015em', color: 'var(--d-fg)' }}
              >
                SEO + AI visibility <em className="serif">consulting.</em>
              </h3>
              <p
                className="font-inter mb-6"
                style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300 }}
              >
                Strategy and audit work for sites that don&apos;t need a rebuild. We read what&apos;s there,
                identify what&apos;s broken or missing — schema gaps, entity coherence, technical SEO issues,
                AI crawler accessibility — and write a prioritized action plan your existing team can execute.
              </p>
              <div className="flex-1 mb-6">
                <p className="font-mono mb-3" style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--d-fg-mute)' }}>
                  TYPICAL DELIVERABLES
                </p>
                <ul className="flex flex-col gap-2">
                  {seoDeliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: 'var(--d-accent)', flexShrink: 0, marginTop: '2px', fontSize: '12px' }}>—</span>
                      <span
                        className="font-inter"
                        style={{ fontSize: '13px', lineHeight: 1.55, color: 'var(--d-fg-dim)', fontWeight: 300 }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.12em', color: 'var(--d-fg-mute)' }}>
                → FOR: ESTABLISHED SITES, IN-HOUSE TEAMS, AGENCIES NEEDING A SECOND OPINION
              </p>
            </article>

            {/* Content Design + IA */}
            <article
              style={{
                background: 'var(--d-bg-2)',
                border: '1px solid var(--d-line)',
                borderRadius: '14px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'var(--d-accent)' }}>
                  CONTENT DESIGN
                </span>
                <span className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.12em', color: 'var(--d-fg-mute)' }}>
                  SCOPED PER ENGAGEMENT
                </span>
              </div>
              <h3
                className="font-inter font-semibold mb-3"
                style={{ fontSize: '20px', lineHeight: 1.2, letterSpacing: '-0.015em', color: 'var(--d-fg)' }}
              >
                Content design <em className="serif">+ IA.</em>
              </h3>
              <p
                className="font-inter mb-6"
                style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300 }}
              >
                Architecture work — what should exist on your site, how it should connect,
                and how it should be structured so both humans and AI systems can navigate it.
                We design the skeleton and the connective tissue. We don&apos;t write the words.
              </p>
              <div className="flex-1 mb-6">
                <p className="font-mono mb-3" style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--d-fg-mute)' }}>
                  TYPICAL DELIVERABLES
                </p>
                <ul className="flex flex-col gap-2">
                  {contentDeliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: 'var(--d-accent)', flexShrink: 0, marginTop: '2px', fontSize: '12px' }}>—</span>
                      <span
                        className="font-inter"
                        style={{ fontSize: '13px', lineHeight: 1.55, color: 'var(--d-fg-dim)', fontWeight: 300 }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.12em', color: 'var(--d-fg-mute)' }}>
                → FOR: TEAMS WITH A WRITER · AGENCIES THAT NEED STRUCTURE · BUSINESSES PLANNING A CONTENT INVESTMENT
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* ── Scope ────────────────────────────────────────── */}
      <section
        id="scope"
        style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

          <p className="font-mono mb-4" style={{ fontSize: '11px', letterSpacing: '0.18em', color: 'var(--d-accent)' }}>
            03 / SCOPE
          </p>
          <h2
            className="font-inter font-semibold mb-5"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: 'var(--d-fg)',
              maxWidth: '600px',
            }}
          >
            What we <em className="serif">don&apos;t do.</em>
          </h2>
          <p
            className="font-inter mb-14"
            style={{
              fontSize: '17px',
              lineHeight: 1.65,
              color: 'var(--d-fg-dim)',
              fontWeight: 300,
              maxWidth: '560px',
            }}
          >
            We&apos;re focused on doing one thing exceptionally well: building AI-native web infrastructure.
            We don&apos;t dabble in the rest, and we won&apos;t pretend to. Here&apos;s where we stop — so you know who else to hire.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scopeItems.map((s) => (
              <div
                key={s.t}
                style={{
                  background: 'var(--d-bg-3)',
                  border: '1px solid var(--d-line)',
                  borderRadius: '12px',
                  padding: '24px 28px',
                }}
              >
                <p
                  className="font-mono mb-3"
                  style={{ fontSize: '18px', color: 'var(--d-fg-mute)', lineHeight: 1 }}
                >
                  ×
                </p>
                <p
                  className="font-inter font-semibold mb-2"
                  style={{ fontSize: '15px', color: 'var(--d-fg)', letterSpacing: '-0.01em' }}
                >
                  {s.t}
                </p>
                <p
                  className="font-inter"
                  style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--d-fg-mute)', fontWeight: 300 }}
                >
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section
        style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)', borderTop: '1px solid var(--d-line)' }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">START HERE</div>

          <h2
            className="font-inter font-semibold mb-5"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: 'var(--d-fg)',
            }}
          >
            The first step is <em className="serif">always</em> a Machine Read.
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
            Whether you end up needing a Foundation Build, SEO consulting, content design,
            or nothing at all — we start by reading what&apos;s actually there. Free.
            24–48 hour turnaround. You keep the report either way.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="d-btn d-btn-primary">
              Run my site →
            </Link>
            <a href="mailto:mark@kodecite.ai" className="d-btn d-btn-ghost">
              Email mark@kodecite.ai
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
