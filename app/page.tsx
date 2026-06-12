import Link from 'next/link';
import HeroCube from '@/components/home/HeroCube';
import EntityGraph from '@/components/home/EntityGraph';
import AIVisibilityCheck from '@/components/home/AIVisibilityCheck';

export const metadata = {
  alternates: {
    canonical: 'https://www.kodecite.ai/',
  },
};

// Homepage WebPage entity — connected by @id to the site-wide entity graph
// defined in app/layout.tsx (#website, #business).
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.kodecite.ai/#webpage',
  url: 'https://www.kodecite.ai/',
  name: 'KodeCite.ai — Entity Infrastructure for the AI Web',
  description:
    'KodeCite builds entity-first infrastructure on Next.js that makes a business understandable, verifiable, recommendable, and agent-ready — so search engines, AI answer engines, and AI agents can confidently recommend it.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://www.kodecite.ai/#website' },
  about: { '@id': 'https://www.kodecite.ai/#business' },
  primaryImageOfPage: { '@id': 'https://www.kodecite.ai/#logo' },
};

const sectionH2 = {
  fontSize: 'clamp(30px, 4vw, 48px)',
  lineHeight: 1.08,
  letterSpacing: '-0.025em',
  color: 'var(--d-fg)',
} as const;

const bodyP = {
  fontSize: '17px',
  lineHeight: 1.7,
  color: 'var(--d-fg-dim)',
  fontWeight: 300,
} as const;

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* ─── 1. Hero ─────────────────────────────────────────── */}
      <section style={{ padding: '140px 32px 100px', backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left: text */}
            <div className="flex-1 min-w-0">
              <div className="d-eyebrow mb-6">ENTITY INFRASTRUCTURE FOR THE AI WEB</div>

              <h1
                className="font-inter font-semibold mb-7"
                style={{
                  fontSize: 'clamp(40px, 5.2vw, 68px)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.035em',
                  color: 'var(--d-fg)',
                }}
              >
                Make your business{' '}
                <em className="serif">understandable, verifiable, recommendable,</em> and
                agent-ready.
              </h1>

              <p className="font-inter mb-5" style={{ ...bodyP, fontSize: '18px', maxWidth: '500px' }}>
                When someone asks ChatGPT, Google AI, Perplexity, Gemini, or an AI agent who to hire
                in your city, your business needs to be more than a website. It needs to be a clear,
                structured, verifiable entity.
              </p>

              <p className="font-inter mb-5" style={{ ...bodyP, maxWidth: '500px' }}>
                KodeCite replaces slow, plugin-dependent websites with fast, entity-first
                infrastructure built on Next.js — so search engines, AI answer engines, and future AI
                agents can understand who you are, what you do, where you operate, why you should be
                trusted, and what action a customer can safely take next.
              </p>

              <p
                className="font-inter mb-10"
                style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--d-fg)', fontWeight: 400, maxWidth: '480px' }}
              >
                Built on Next.js. Powered by structured entity graphs. Designed for the AI web.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="d-btn d-btn-primary">
                  Get My Free Machine Read →
                </Link>
                <Link href="#framework" className="d-btn d-btn-ghost">
                  See The Framework
                </Link>
              </div>
            </div>

            {/* Right: entity graph */}
            <div className="flex-shrink-0 w-full lg:w-[620px] flex justify-center lg:justify-end">
              <HeroCube />
            </div>

          </div>
        </div>
      </section>

      {/* ─── 2. The Shift ────────────────────────────────────── */}
      <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">THE SHIFT</div>

          <h2 className="font-inter font-semibold mb-8" style={sectionH2}>
            The old web was built around pages.<br />
            <em className="serif">The AI web is built around entities.</em>
          </h2>

          <p className="font-inter mb-5" style={bodyP}>
            Most websites were built for the last era of search. They publish pages, target keywords,
            rely on plugins, and hope Google figures it out. But AI systems do not think like a list
            of blue links. They need to verify entities. They ask:
          </p>

          <div
            style={{
              background: 'var(--d-bg-3)',
              border: '1px solid var(--d-line)',
              borderLeft: '3px solid var(--d-accent)',
              borderRadius: '12px',
              padding: '24px 28px',
              marginBottom: '28px',
            }}
          >
            {[
              'Who is this business?',
              'What does it actually do?',
              'Where does it operate?',
              'Is the information consistent across trusted sources?',
              'Can this business be safely recommended?',
              'Can a user take action without the AI guessing?',
            ].map((q) => (
              <p key={q} className="font-inter" style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--d-fg-dim)' }}>
                {q}
              </p>
            ))}
          </div>

          <p className="font-inter" style={bodyP}>
            If your website cannot answer those questions clearly, you may be skipped — even if you
            have better reviews, more experience, or a stronger real-world reputation than your
            competitor.
          </p>
        </div>
      </section>

      {/* ─── 3. The Problem ──────────────────────────────────── */}
      <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1 min-w-0">
              <div className="d-eyebrow mb-6">THE PROBLEM</div>
              <h2 className="font-inter font-semibold mb-5" style={sectionH2}>
                WordPress, Wix, and Squarespace were built for the{' '}
                <em className="serif">page-based web.</em>
              </h2>
              <p className="font-inter mb-5" style={bodyP}>
                They were designed for publishing pages, adding plugins, and managing content. That
                worked when search was mostly keyword-driven. But AI search and agent-driven
                discovery require something different.
              </p>
              <p className="font-inter" style={bodyP}>
                Most platform websites treat these as add-ons.{' '}
                <span style={{ color: 'var(--d-fg)', fontWeight: 500 }}>KodeCite treats them as the foundation.</span>
              </p>
            </div>

            <div className="flex-1 min-w-0">
              <div
                style={{
                  background: 'var(--d-bg-2)',
                  border: '1px solid var(--d-line)',
                  borderRadius: '16px',
                  padding: '32px 36px',
                }}
              >
                <p className="font-mono text-xs mb-5" style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.12em' }}>
                  WHAT AI DISCOVERY ACTUALLY REQUIRES
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    'Canonical business identity',
                    'Structured entity graphs',
                    'Stable schema IDs',
                    'Service & location relationships',
                    'Citation trails',
                    'Source-backed content',
                    'llms.txt',
                    'agent.json',
                    'Action rules',
                    'Quote & booking clarity',
                    'Machine-readable proof',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span style={{ color: 'var(--d-accent)', flexShrink: 0, fontSize: '13px', marginTop: '3px' }}>›</span>
                      <span className="font-inter" style={{ fontSize: '14px', color: 'var(--d-fg-dim)', lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. The KodeCite Difference ──────────────────────── */}
      <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <div className="flex-shrink-0 w-full lg:w-auto order-2 lg:order-1" style={{ width: 'min(100%, 520px)' }}>
              <EntityGraph />
            </div>

            <div className="flex-1 order-1 lg:order-2 min-w-0">
              <div className="d-eyebrow mb-6">THE DIFFERENCE</div>
              <h2 className="font-inter font-semibold mb-5" style={sectionH2}>
                Traditional websites describe your business.<br />
                <em className="serif">KodeCite makes it machine-verifiable.</em>
              </h2>

              <p className="font-inter mb-6" style={bodyP}>
                A normal website says: &ldquo;We are a dentist in Bend.&rdquo; A KodeCite website tells
                AI systems exactly what is true, and what should not be assumed:
              </p>

              <div
                style={{
                  background: 'var(--d-bg-3)',
                  border: '1px solid var(--d-line)',
                  borderLeft: '3px solid var(--d-accent)',
                  borderRadius: '12px',
                  padding: '24px 28px',
                }}
              >
                {[
                  'This is the practice.',
                  'This is the provider.',
                  'These are the services.',
                  'This is the location.',
                  'These are the credentials.',
                  'These are the reviews.',
                  'These are the trusted external profiles.',
                  'These are the FAQs and citations.',
                  'This is the correct next step.',
                  'This is what should not be assumed.',
                ].map((line) => (
                  <p key={line} className="font-inter" style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--d-fg-dim)' }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 5. The Framework — four layers ──────────────────── */}
      <section id="framework" style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)', borderTop: '1px solid var(--d-line)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">THE FRAMEWORK</div>
          <h2 className="font-inter font-semibold mb-12" style={sectionH2}>
            Four layers. <em className="serif">One compounding foundation.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                layer: 'LAYER 01',
                title: 'Infrastructure',
                sub: 'Built on Next.js, not plugin stacks.',
                body: 'Fast, server-rendered, edge-deployed pages that AI crawlers and search engines can read on the first request. No fragile plugin chain, no bloated theme stack, no hidden JavaScript dependency, no rented platform lock-in.',
              },
              {
                layer: 'LAYER 02',
                title: 'Entity Graph',
                sub: 'The source of truth for your business.',
                body: 'A structured Schema.org entity graph that connects your business, people, services, locations, credentials, reviews, articles, FAQs, citations, and profiles through stable machine-readable IDs — so AI systems can verify who you are and why you are credible.',
              },
              {
                layer: 'LAYER 03',
                title: 'Answer Architecture',
                sub: 'Content built for extraction and citation.',
                body: 'Each important page answers a specific buyer question clearly. Services are structured, locations defined, FAQs visible, internal links reinforce entity relationships, and claims are backed by sources — so AI can quote, summarize, and recommend with confidence.',
              },
              {
                layer: 'LAYER 04',
                title: 'Agent Readiness',
                sub: 'The next step beyond visibility.',
                body: 'AI agents will help people compare providers, request quotes, and book appointments. KodeCite makes your business action-ready: what can a customer do next, what is required, what requires consultation, what pricing should not be invented, and what AI agents should not promise.',
              },
            ].map((l) => (
              <div
                key={l.layer}
                style={{
                  background: 'var(--d-bg-2)',
                  border: '1px solid var(--d-line)',
                  borderLeft: '3px solid var(--d-accent)',
                  borderRadius: '16px',
                  padding: '32px 36px',
                }}
              >
                <p className="font-mono text-xs mb-3" style={{ color: 'var(--d-accent)', letterSpacing: '0.14em' }}>
                  {l.layer}
                </p>
                <h3 className="font-inter font-semibold mb-1" style={{ fontSize: '22px', color: 'var(--d-fg)', letterSpacing: '-0.02em' }}>
                  {l.title}
                </h3>
                <p className="font-inter mb-4" style={{ fontSize: '15px', color: 'var(--d-fg)', fontWeight: 500 }}>
                  {l.sub}
                </p>
                <p className="font-inter" style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300 }}>
                  {l.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. What This Looks Like ─────────────────────────── */}
      <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-8">WHAT THIS LOOKS LIKE IN REAL LIFE</div>

          <div
            style={{
              background: 'var(--d-bg-3)',
              border: '1px solid var(--d-line)',
              borderLeft: '3px solid var(--d-accent)',
              borderRadius: '16px',
              padding: '40px 44px',
            }}
          >
            {[
              '“Who is the best estate planning attorney near me?”',
              '“Find a dentist in Bend that offers dental implants and has strong reviews.”',
              '“Find a plumber who serves Post Falls and can handle emergency repairs.”',
            ].map((q) => (
              <p
                key={q}
                className="font-inter mb-4"
                style={{ fontSize: '17px', lineHeight: 1.6, color: 'var(--d-fg)', fontWeight: 500 }}
              >
                {q}
              </p>
            ))}

            <p className="font-inter mt-6 mb-4" style={{ ...bodyP, fontSize: '16px' }}>
              AI does not simply count keywords. It looks for businesses it can understand, verify,
              compare, and safely recommend. Most local websites are vague, plugin-dependent, and
              structurally incomplete.
            </p>
            <p className="font-inter mb-0" style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--d-fg)', fontWeight: 500 }}>
              KodeCite makes your business clear enough to be included.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 7. What You Get ─────────────────────────────────── */}
      <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)', borderTop: '1px solid var(--d-line)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">WHAT YOU GET</div>
          <h2 className="font-inter font-semibold mb-10" style={sectionH2}>
            The Foundation Build, <em className="serif">in full.</em>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {[
              'Custom Next.js website, server-rendered and AI-readable on cold load',
              'Full entity graph: business, people, services, credentials, locations, articles, FAQs, citations',
              'Custom JSON-LD per page, built as code — not plugin output',
              'llms.txt and llms-full.txt',
              'agent.json / agents.json for AI-agent guidance',
              'Service and location architecture',
              'FAQPage, Article, Breadcrumb, LocalBusiness, Person, Service, and Organization schema',
              'Citation and profile cleanup across key trust sources',
              'Clear quote, contact, booking, or consultation paths',
              'Action rules that tell AI what can and cannot be assumed',
              'GitHub repo and Vercel account owned by you',
              'No platform lock-in. No monthly website rent.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span style={{ color: 'var(--d-ok)', flexShrink: 0, fontSize: '14px', marginTop: '3px' }}>✓</span>
                <span className="font-inter" style={{ fontSize: '15px', color: 'var(--d-fg-dim)', lineHeight: 1.6, fontWeight: 300 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. Verification ─────────────────────────────────── */}
      <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">VERIFICATION</div>
          <h2 className="font-inter font-semibold mb-6" style={sectionH2}>
            Schema alone is not trust.<br />
            <em className="serif">Verification is.</em>
          </h2>

          <p className="font-inter mb-6" style={bodyP}>
            AI visibility only works when the entity graph matches the real business. Your website,
            schema, Google Business Profile, Apple Maps, Bing Places, BBB, Yelp, licensing profiles,
            service areas, address strategy, and third-party citations all need to agree. If those
            signals conflict, AI systems lose confidence — and confidence is the trust layer.
          </p>
          <p className="font-inter" style={bodyP}>
            KodeCite does not just add JSON-LD to your site.{' '}
            <span style={{ color: 'var(--d-fg)', fontWeight: 500 }}>We architect the verification system around it.</span>
          </p>
        </div>
      </section>

      {/* ─── 9. AI Visibility Check ──────────────────────────── */}
      <AIVisibilityCheck />

      {/* ─── 10. The Bigger Threat ───────────────────────────── */}
      <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)', borderTop: '1px solid var(--d-line)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">THE BIGGER THREAT</div>
          <h2 className="font-inter font-semibold mb-6" style={sectionH2}>
            Enterprise and PE rollups are already moving to{' '}
            <em className="serif">AI-ready infrastructure.</em>
          </h2>

          <p className="font-inter mb-5" style={bodyP}>
            Large companies are not waiting. They are building on modern frameworks, structured data,
            APIs, knowledge graphs, and machine-readable product and service data. Meanwhile, most
            local businesses are still being sold WordPress websites, generic SEO plugins, and blog
            content. That gap will matter.
          </p>
          <p className="font-inter" style={bodyP}>
            The businesses that win the next decade will not just have websites. They will have
            structured, verifiable, agent-ready infrastructure. KodeCite brings that advantage to
            established local and regional businesses before the national brands and private-equity
            rollups dominate AI recommendations.
          </p>
        </div>
      </section>

      {/* ─── 11. Who It's For ────────────────────────────────── */}
      <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">WHO IT&apos;S FOR</div>
          <h2 className="font-inter font-semibold mb-5" style={{ ...sectionH2, maxWidth: '760px' }}>
            Established operators with real-world credibility{' '}
            <em className="serif">AI can&apos;t fully verify yet.</em>
          </h2>
          <p className="font-inter mb-12" style={{ ...bodyP, maxWidth: '620px' }}>
            If your business is trusted in the real world but unclear to AI systems, KodeCite is built
            for you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Home Service Businesses', note: 'HVAC, plumbing, roofing, electrical, window installation' },
              { label: 'Dental & Healthcare', note: 'Practices where the provider carries the trust' },
              { label: 'Attorneys & Law Firms', note: 'Practice areas, credentials, and client trust' },
              { label: 'Real Estate Professionals', note: 'Agents and owner-operated brokerages' },
              { label: 'Financial Advisors', note: 'Credentialed, owner-operator scale' },
              { label: 'Property Management', note: 'Residential and commercial — local operators' },
              { label: 'Specialty Trades', note: 'General contractors, landscape design, custom builds' },
              { label: 'Owner-Operated Services', note: 'Strong reviews, credentials, and reputation' },
              { label: 'Regional Independent Operators', note: 'Local/regional SMBs targeted by PE roll-ups' },
            ].map((c) => (
              <div key={c.label} className="d-card">
                <p className="font-inter font-semibold mb-2" style={{ fontSize: '15px', color: 'var(--d-fg)', letterSpacing: '-0.01em' }}>
                  {c.label}
                </p>
                <p className="font-inter text-sm" style={{ color: 'var(--d-fg-mute)', lineHeight: 1.55 }}>
                  {c.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 12. The Offer ───────────────────────────────────── */}
      <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="flex flex-col lg:flex-row gap-16">

            <div className="flex-1">
              <div className="d-eyebrow mb-6">THE OFFER</div>
              <h2 className="font-inter font-semibold mb-5" style={sectionH2}>
                The Foundation Build.<br />
                <em className="serif">Built once. Owned forever.</em>
              </h2>
              <p className="font-inter mb-6" style={bodyP}>
                A defined-scope engagement that gives your business a complete AI-readable foundation:
                infrastructure, entity graph, answer architecture, verification layer, and agent-ready
                action paths.
              </p>
              <p className="font-inter mb-10" style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--d-fg-dim)' }}>
                No retainer. No platform rent. No lock-in. You own the codebase, GitHub repo, Vercel
                account, structured data, and digital foundation.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="d-btn d-btn-primary">
                  Get My Free Machine Read →
                </Link>
                <Link href="/services" className="d-btn d-btn-ghost">
                  See Full Scope
                </Link>
              </div>
            </div>

            <div className="flex-1">
              <div
                style={{
                  background: 'var(--d-bg-2)',
                  border: '1px solid var(--d-line)',
                  borderRadius: '16px',
                  padding: '36px 40px',
                }}
              >
                <p className="font-mono text-xs mb-6" style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.12em' }}>
                  ONE FOUNDATION, FIVE LAYERS
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    'Infrastructure — custom Next.js, server-rendered, edge-deployed',
                    'Entity graph — connected Schema.org identity with stable @id anchors',
                    'Answer architecture — extraction-ready, source-backed content',
                    'Verification layer — consistent signals across every trust source',
                    'Agent-ready action paths — quote, booking, and consultation clarity',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span style={{ color: 'var(--d-ok)', flexShrink: 0, marginTop: '2px', fontSize: '14px', lineHeight: 1 }}>✓</span>
                      <span className="font-inter text-sm" style={{ color: 'var(--d-fg-dim)', lineHeight: 1.6 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 13. The Window + Machine Read CTA ───────────────── */}
      <section style={{ padding: '120px 32px', backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">THE WINDOW</div>
          <h2 className="font-inter font-semibold mb-6" style={{ ...sectionH2, fontSize: 'clamp(32px, 4.5vw, 54px)' }}>
            This becomes table stakes later.<br />
            <em className="serif">Right now, it&apos;s an advantage.</em>
          </h2>

          <p className="font-inter mb-5" style={bodyP}>
            AI visibility is still early. Most businesses do not know they have an entity problem yet —
            they think they need more SEO, more blog posts, or more ads. But the real shift is already
            happening: search is moving from pages to answers, answers to recommendations, and
            recommendations toward actions.
          </p>
          <p className="font-inter mb-10" style={bodyP}>
            The businesses that build machine-readable foundations now will be much harder to displace
            later. The window is open.
          </p>

          <div
            style={{
              background: 'rgba(93,213,255,0.04)',
              border: '1px solid rgba(93,213,255,0.25)',
              borderRadius: '20px',
              padding: '44px 40px',
              textAlign: 'center',
            }}
          >
            <p className="font-inter mb-2" style={{ fontSize: '20px', lineHeight: 1.4, color: 'var(--d-fg)', fontWeight: 600 }}>
              See what AI can verify about your business.
            </p>
            <p className="font-inter mb-6" style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300 }}>
              A free Machine Read shows what AI can verify, what is unclear, what is inconsistent, what
              competitors may be doing better, and what to fix first.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="d-btn d-btn-primary">
                Get My Free Machine Read →
              </Link>
              <Link href="/services" className="d-btn d-btn-ghost">
                See What&apos;s Included
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
