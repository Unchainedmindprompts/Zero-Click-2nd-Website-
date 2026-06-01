import Link from 'next/link';
import HeroCube from '@/components/home/HeroCube';
import EntityGraph from '@/components/home/EntityGraph';
import F1Stack from '@/components/home/F1Stack';
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
  name: 'KodeCite.ai — Entity Graph Infrastructure for AI & Traditional Search',
  description:
    'Most businesses are invisible to AI. KodeCite.ai builds the entity graph — Schema.org deployed correctly — that makes your business the machine-readable answer AI systems can read, verify, and cite.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://www.kodecite.ai/#website' },
  about: { '@id': 'https://www.kodecite.ai/#business' },
  primaryImageOfPage: { '@id': 'https://www.kodecite.ai/#logo' },
};

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
              <div className="d-eyebrow mb-6">AI VISIBILITY ENGINEERING</div>

              <h1
                className="font-inter font-semibold mb-7"
                style={{
                  fontSize: 'clamp(48px, 6.5vw, 84px)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.035em',
                  color: 'var(--d-fg)',
                }}
              >
                Own the answer,<br />
                <em className="serif">not the ad.</em>
              </h1>

              <p
                className="font-inter mb-5"
                style={{
                  fontSize: '18px',
                  lineHeight: 1.65,
                  color: 'var(--d-fg-dim)',
                  fontWeight: 300,
                  maxWidth: '480px',
                }}
              >
                When someone asks an AI assistant &ldquo;who should I hire in my city?&rdquo;,
                you want to be the business it confidently recommends.
              </p>

              <p
                className="font-inter mb-5"
                style={{
                  fontSize: '17px',
                  lineHeight: 1.65,
                  color: 'var(--d-fg-dim)',
                  fontWeight: 300,
                  maxWidth: '480px',
                }}
              >
                We replace slow, plugin-dependent websites with fast, AI-readable infrastructure
                that helps Google, ChatGPT, Perplexity, and AI search tools understand and
                recommend your business.
              </p>

              <p
                className="font-inter mb-10"
                style={{
                  fontSize: '17px',
                  lineHeight: 1.6,
                  color: 'var(--d-fg)',
                  fontWeight: 400,
                  maxWidth: '460px',
                }}
              >
                Built on Next.js, engineered for AI readability, and owned by you forever.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="d-btn d-btn-primary">
                  Get My Free Machine Read →
                </Link>
                <Link href="#framework" className="d-btn d-btn-ghost">
                  See The Framework
                </Link>
              </div>

              <p
                className="font-inter mt-4"
                style={{
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: 'var(--d-fg-mute)',
                  fontWeight: 300,
                  maxWidth: '440px',
                }}
              >
                A Machine Read shows what AI systems can verify about your business — and where
                your website, schema, citations, and profiles are breaking trust.
              </p>
            </div>

            {/* Right: entity graph */}
            <div className="flex-shrink-0 w-full lg:w-[620px] flex justify-center lg:justify-end">
              <HeroCube />
            </div>

          </div>
        </div>
      </section>

      {/* ─── 2. Problem — stat band ───────────────────────────── */}
      <section style={{ padding: '80px 32px', backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

          {/* Three stats */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-0 mb-16">
            {([
              { stat: 'A short list', label: 'is all an AI answer cites — you\'re on it, or you\'re invisible.' },
              { stat: '1st',  label: 'AI reads your site on the first crawl — or it skips you' },
              { stat: 'Most', label: 'business sites have no connected entity graph at all' },
            ] as const).map(({ stat, label }, i) => (
              <div
                key={stat}
                className="flex-1"
                style={{
                  paddingLeft:  i > 0 ? '48px' : '0',
                  borderLeft:   i > 0 ? '1px solid var(--d-line)' : 'none',
                }}
              >
                <div
                  className="font-inter font-semibold mb-2"
                  style={{
                    fontSize: 'clamp(40px, 5vw, 60px)',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    color: 'var(--d-accent)',
                  }}
                >
                  {stat}
                </div>
                <p
                  className="font-inter"
                  style={{ fontSize: '15px', color: 'var(--d-fg-dim)', lineHeight: 1.55 }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Narrative */}
          <div style={{ maxWidth: '720px' }}>
            <div className="d-eyebrow mb-5">THE PROBLEM</div>
            <h2
              className="font-inter font-semibold mb-5"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                color: 'var(--d-fg)',
              }}
            >
              WordPress, Wix, and Squarespace were never<br className="hidden md:block" />
              built for AI search.
            </h2>
            <p
              className="font-inter"
              style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--d-fg-dim)', fontWeight: 300 }}
            >
              AI systems don&apos;t reward content volume or review count — they reward businesses
              with machine-readable foundations: server-rendered infrastructure, structured entity
              graphs, and answer-first content architecture. Your platform was not designed for that. KodeCite is.
            </p>
          </div>

        </div>
      </section>

      {/* ─── 3. F1 Framework ─────────────────────────────────── */}
      <div id="framework">
        <F1Stack />
      </div>

      {/* ─── 3a. Scenario vignette ───────────────────────────── */}
      <section style={{ padding: '80px 32px', backgroundColor: 'var(--d-bg-2)' }}>
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
            <p
              className="font-inter mb-6"
              style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--d-fg-dim)', fontWeight: 300 }}
            >
              Someone in Bellevue asks their phone:{' '}
              <span style={{ color: 'var(--d-fg)', fontWeight: 500 }}>
                &ldquo;Who&apos;s the best estate planning attorney near me?&rdquo;
              </span>
            </p>

            <p
              className="font-inter mb-4"
              style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--d-fg-dim)', fontWeight: 300 }}
            >
              The AI doesn&apos;t search keywords. It checks which firms exist as clean, verified
              entities — business, attorney, services, location, credentials, reviews — all
              connected and machine-readable.
            </p>

            <p
              className="font-inter mb-4"
              style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--d-fg-dim)', fontWeight: 300 }}
            >
              Most firms can&apos;t be confidently identified. They get skipped.
            </p>

            <p
              className="font-inter mb-0"
              style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--d-fg)', fontWeight: 500 }}
            >
              The ones that can? Those are the businesses AI can confidently recommend.
              KodeCite makes sure that&apos;s you.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 3b. What You Get — abbreviated checklist ────────── */}
      <section style={{ padding: '64px 32px 80px', backgroundColor: 'var(--d-bg-2)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p
            className="font-mono mb-6"
            style={{ fontSize: '11px', letterSpacing: '0.18em', color: 'var(--d-fg-mute)' }}
          >
            WHAT YOU GET
          </p>

          <div className="flex flex-col gap-3">
            {[
              'Custom Next.js site, server-rendered, AI-readable on cold load',
              'Full entity graph: business, founder, services, credentials, location',
              'llms.txt + agent.json deployed (machine-readable identity for AI agents)',
              'Sub-1s verified load time, edge-deployed globally',
              'You own everything: GitHub repo + Vercel account, no lock-in',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span style={{ color: 'var(--d-ok)', flexShrink: 0, fontSize: '14px', marginTop: '2px' }}>
                  ✓
                </span>
                <span
                  className="font-inter"
                  style={{ fontSize: '15px', color: 'var(--d-fg-dim)', lineHeight: 1.6, fontWeight: 300 }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/services" className="d-btn d-btn-ghost">
              See Full Scope →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 4. Verification ─────────────────────────────────── */}
      <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)', borderTop: '1px solid var(--d-line)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">VERIFICATION</div>

          <h2
            className="font-inter font-semibold mb-6"
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 1.07,
              letterSpacing: '-0.025em',
              color: 'var(--d-fg)',
            }}
          >
            Schema alone isn&apos;t trust.<br />
            <em className="serif">Verification is.</em>
          </h2>

          <p
            className="font-inter mb-6"
            style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--d-fg-dim)', fontWeight: 300 }}
          >
            AI visibility only works when the entity graph matches the real business. For local and
            owner-operated businesses, that means your website, schema, Google Business Profile,
            Apple Maps, Bing, BBB, Yelp, licensing profiles, service areas, and address strategy
            all have to agree. When even one of those layers contradicts another, AI systems lose
            confidence — and confidence is the entire trust layer.
          </p>

          <p
            className="font-inter"
            style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--d-fg-dim)', fontWeight: 300 }}
          >
            KodeCite doesn&apos;t just inject JSON-LD into your site. We architect the verification
            system around it: matching identity signals across every authoritative source, resolving
            inconsistencies before they become flags, and structuring address and service-area
            strategy so it holds up under Google&apos;s verification scrutiny. The work that protects
            you from suspension is the same work that makes AI tools confident enough to recommend you.
          </p>
        </div>
      </section>

      {/* ─── 5. Entity Differentiator ────────────────────────── */}
      <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left: EntityGraph */}
            <div
              className="flex-shrink-0 w-full lg:w-auto order-2 lg:order-1"
              style={{ width: 'min(100%, 520px)' }}
            >
              <EntityGraph />
            </div>

            {/* Right: text */}
            <div className="flex-1 order-1 lg:order-2 min-w-0">
              <div className="d-eyebrow mb-6">THE DIFFERENCE</div>

              <h2
                className="font-inter font-semibold mb-5"
                style={{
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  lineHeight: 1.07,
                  letterSpacing: '-0.025em',
                  color: 'var(--d-fg)',
                }}
              >
                Keywords are guesses.<br />
                <em className="serif">Entity graphs</em> are facts.
              </h2>

              <p
                className="font-inter mb-5"
                style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300 }}
              >
                Traditional SEO asks: what words will humans type? AI search asks: who is this
                business, what do they do, where do they operate, and are they verified across
                independent sources?
              </p>

              <p
                className="font-inter mb-5"
                style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300 }}
              >
                An entity graph connects every piece of structured data about your business —
                schema, directories, citations, credentials — into a single machine-readable identity
                that AI systems can traverse, verify, and trust.
              </p>

              <p
                className="font-inter mb-8"
                style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--d-fg-mute)', fontWeight: 300 }}
              >
                This isn&apos;t just an AI play. The same structure that wins AI Overview citations
                is what&apos;s been quietly winning Google rankings since 2012 — Google has been an
                entity-based search engine for over a decade. Most marketers just kept pretending
                content was the leverage.
              </p>

              <div
                style={{
                  background: 'var(--d-bg-3)',
                  border: '1px solid var(--d-line)',
                  borderLeft: '3px solid var(--d-accent)',
                  borderRadius: '12px',
                  padding: '20px 24px',
                }}
              >
                <p
                  className="font-mono text-xs mb-2"
                  style={{ color: 'var(--d-accent)', letterSpacing: '0.12em' }}
                >
                  ENTITY GRAPH vs KEYWORD TARGETING
                </p>
                <p
                  className="font-inter text-sm"
                  style={{ color: 'var(--d-fg-dim)', lineHeight: 1.65 }}
                >
                  Without a clean entity graph, AI has to infer who you are from scattered signals.
                  With one, every major system gets a clear, consistent path to confirm who you are,
                  what you do, where you operate, and why you&apos;re credible — before a single user asks.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 6. Who It's For ──────────────────────────────────── */}
      <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">WHO IT&apos;S FOR</div>

          <h2
            className="font-inter font-semibold mb-3"
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 1.07,
              letterSpacing: '-0.025em',
              color: 'var(--d-fg)',
              maxWidth: '680px',
            }}
          >
            Built for the operators{' '}
            <em className="serif">PE is coming for next.</em>
          </h2>

          <p
            className="font-inter mb-12"
            style={{
              fontSize: '17px',
              lineHeight: 1.65,
              color: 'var(--d-fg-dim)',
              fontWeight: 300,
              maxWidth: '600px',
            }}
          >
            Independent and owner-operated businesses serving a specific geography — the ones
            private equity is rolling up because they dominate local markets and haven&apos;t built
            the digital infrastructure to prove it yet. The operators who win the next decade are
            the ones who own their local category before roll-ups and nationals dominate AI
            recommendations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Home Services',                   note: 'HVAC, plumbing, roofing, window installation, electrical' },
              { label: 'Real Estate',                      note: 'Independent agents and owner-operated brokerages' },
              { label: 'Property Management',              note: 'Residential and commercial — local operators, not nationals' },
              { label: 'Specialty Trades',                 note: 'General contractors, landscape design, custom builds' },
              { label: 'Local Professional Services',      note: 'Law, accounting, medical practices — owner-operator scale' },
              { label: 'Regional Independent Operators',   note: 'Any local/regional SMB with 1–3 locations being targeted by PE roll-ups' },
            ].map((c) => (
              <div key={c.label} className="d-card">
                <p
                  className="font-inter font-semibold mb-2"
                  style={{ fontSize: '15px', color: 'var(--d-fg)', letterSpacing: '-0.01em' }}
                >
                  {c.label}
                </p>
                <p
                  className="font-inter text-sm"
                  style={{ color: 'var(--d-fg-mute)', lineHeight: 1.55 }}
                >
                  {c.note}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-12"
            style={{
              background: 'var(--d-bg-3)',
              border: '1px solid var(--d-line)',
              borderLeft: '3px solid var(--d-accent)',
              borderRadius: '16px',
              padding: '40px 44px',
            }}
          >
            <p style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', lineHeight: 1.4, color: 'var(--d-fg)' }}>
              <em className="serif">
                The threat to the local operator isn&apos;t the agent down the street or the listing
                portal. It&apos;s the national and the PE roll-up that will implement this — they have
                the resources and the sophistication to do it. You have 12–18 months to own your local
                category before they arrive. After that, you&apos;re defending against their budget
                instead of building in clear air.
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* ─── 7. Foundation Build ──────────────────────────────── */}
      <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Left: pitch */}
            <div className="flex-1">
              <div className="d-eyebrow mb-6">THE OFFER</div>

              <h2
                className="font-inter font-semibold mb-5"
                style={{
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  lineHeight: 1.07,
                  letterSpacing: '-0.025em',
                  color: 'var(--d-fg)',
                }}
              >
                The Foundation Build.<br />
                <em className="serif">Built once. Owned forever.</em>
              </h2>

              <p
                className="font-inter mb-6"
                style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300 }}
              >
                The Foundation Build is a defined-scope, fixed-price engagement. We build your
                complete AI-visible digital foundation — infrastructure, entity graph, content
                architecture, and authority signals — then hand you the keys.
              </p>

              <p
                className="font-inter mb-10"
                style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--d-fg-dim)' }}
              >
                No retainer. No lock-in. No platform rent. You own everything: the codebase,
                the GitHub repo, and the Vercel account.
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

            {/* Right: checklist */}
            <div className="flex-1">
              <div
                style={{
                  background: 'var(--d-bg-2)',
                  border: '1px solid var(--d-line)',
                  borderRadius: '16px',
                  padding: '36px 40px',
                }}
              >
                <p
                  className="font-mono text-xs mb-6"
                  style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.12em' }}
                >
                  WHAT&apos;S INCLUDED
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    'Custom Next.js site — server-rendered, edge-deployed, AI-readable on cold load',
                    'Built for AI Overviews. Strengthens traditional Google + Bing visibility as a byproduct.',
                    'Full entity graph: business, founder, services, credentials, location, @id anchors',
                    'Custom JSON-LD per page — built as code, not plugin output',
                    'llms.txt + agent.json deployed on every build',
                    'Sub-1s verified load time on real devices',
                    'FAQPage schema + answer-first content architecture',
                    'Directory launch: Google, Bing, Apple, Yelp, BBB',
                    'You own the GitHub repo + Vercel account — no lock-in, ever',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span
                        style={{
                          color: 'var(--d-ok)',
                          flexShrink: 0,
                          marginTop: '2px',
                          fontSize: '14px',
                          lineHeight: 1,
                        }}
                      >
                        ✓
                      </span>
                      <span
                        className="font-inter text-sm"
                        style={{ color: 'var(--d-fg-dim)', lineHeight: 1.6 }}
                      >
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

      {/* ─── 8. AI Visibility Check ───────────────────────────── */}
      <AIVisibilityCheck />

      {/* ─── 9. Window Urgency ───────────────────────────────── */}
      <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">THE WINDOW</div>

          <h2
            className="font-inter font-semibold mb-6"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: 'var(--d-fg)',
            }}
          >
            First movers in AI visibility<br />
            <em className="serif">compound every month.</em>
          </h2>

          <p
            className="font-inter mb-5"
            style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--d-fg-dim)', fontWeight: 300 }}
          >
            The businesses showing up in AI answers today aren&apos;t there because they outspent anyone.
            They built machine-readable foundations before their competitors thought to.
            That advantage compounds — every month an entity graph exists, it accumulates more
            citation signals, more cross-platform verification, more AI crawler trust.
          </p>

          <p
            className="font-inter mb-10"
            style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--d-fg-dim)', fontWeight: 300 }}
          >
            Within a few years this will be table stakes. The businesses that own the space in their
            market today will be extraordinarily difficult to displace.
          </p>

          <div
            style={{
              background: 'rgba(93,213,255,0.06)',
              border: '1px solid rgba(93,213,255,0.2)',
              borderRadius: '12px',
              padding: '20px 24px',
            }}
          >
            <p
              className="font-inter"
              style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--d-fg-dim)' }}
            >
              <strong style={{ color: 'var(--d-fg)', fontWeight: 600 }}>
                That window is open right now.
              </strong>
              {' '}Every month you wait, a competitor in your market
              gets a head start that will be hard to close.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 10. Final CTA ────────────────────────────────────── */}
      <section style={{ padding: '120px 32px', backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">GET STARTED</div>

          <h2
            className="font-inter font-semibold mb-5"
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--d-fg)',
            }}
          >
            The window is open.<br />
            <em className="serif">Let&apos;s build your foundation.</em>
          </h2>

          <p
            className="font-inter mb-6"
            style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300 }}
          >
            One conversation. No pitch. We&apos;ll show you exactly what AI can and can&apos;t verify
            about your business right now — and what it would take to fix it.
          </p>

          <p
            className="font-inter mb-10"
            style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--d-fg-mute)', fontWeight: 300 }}
          >
            If some of this feels abstract, that&apos;s normal. The Machine Read shows you in plain
            English what AI can and can&apos;t see about your business today.
          </p>

          <div
            style={{
              background: 'rgba(93,213,255,0.04)',
              border: '1px solid rgba(93,213,255,0.25)',
              borderRadius: '20px',
              padding: '44px 40px',
            }}
          >
            <p
              className="font-mono text-xs mb-6"
              style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.12em' }}
            >
              THE MACHINE READ — FREE, NO PITCH, JUST DATA
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="d-btn d-btn-primary">
                Get My Free Machine Read →
              </Link>
              <Link href="/services" className="d-btn d-btn-ghost">
                See What&apos;s Included
              </Link>
            </div>

            <p
              className="font-inter mt-5"
              style={{
                fontSize: '13px',
                lineHeight: 1.6,
                color: 'var(--d-fg-mute)',
                fontWeight: 300,
              }}
            >
              A Machine Read shows what AI systems can verify about your business — and where
              your website, schema, citations, and profiles are breaking trust.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
