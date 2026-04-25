import Link from 'next/link';
import HeroCube from '@/components/home/HeroCube';
import EntityGraph from '@/components/home/EntityGraph';
import F1Stack from '@/components/home/F1Stack';
import AIVisibilityCheck from '@/components/home/AIVisibilityCheck';

export default function HomePage() {
  return (
    <>
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
                Built once.<br />
                Owned forever.<br />
                <em className="serif">Found by AI.</em>
              </h1>

              <p
                className="font-inter mb-10"
                style={{
                  fontSize: '18px',
                  lineHeight: 1.65,
                  color: 'var(--d-fg-dim)',
                  fontWeight: 300,
                  maxWidth: '480px',
                }}
              >
                We rebuild your digital foundation on Next.js — engineered for AI readability,
                structured for machine clarity, and owned by you forever.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="d-btn d-btn-primary">
                  Get My Machine Read →
                </Link>
                <Link href="#framework" className="d-btn d-btn-ghost">
                  See The Framework
                </Link>
              </div>
            </div>

            {/* Right: 3D rotating cube */}
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
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
              { stat: '73%',   label: 'of AI answers cite fewer than 3 sources' },
              { stat: '< 2s',  label: 'is all the time AI takes to decide if you\'re credible' },
              { stat: '0 / 10', label: 'most business sites score on a structured entity test' },
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
              graphs, and answer-first content architecture. Your platform can&apos;t build that. We can.
            </p>
          </div>

        </div>
      </section>

      {/* ─── 3. F1 Framework ─────────────────────────────────── */}
      <div id="framework">
        <F1Stack />
      </div>

      {/* ─── 4. Entity Differentiator ────────────────────────── */}
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
                entity-based search engine for over a decade. Most marketers just stopped pretending
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
                  Without an entity graph, AI cannot verify your business exists. With one,
                  every AI system can confirm who you are, what you do, and why you&apos;re credible —
                  before a single user asks.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 5. Who It's For ──────────────────────────────────── */}
      <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">WHO IT&apos;S FOR</div>

          <h2
            className="font-inter font-semibold mb-4"
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
              maxWidth: '560px',
            }}
          >
            Independent and owner-operated businesses serving a specific geography.
            The ones private equity is rolling up — because they dominate local markets
            and haven&apos;t built the digital infrastructure to prove it yet.
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
        </div>
      </section>

      {/* ─── 6. Foundation Build ──────────────────────────────── */}
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
                One fixed-scope engagement. We build your complete AI-visible digital foundation —
                infrastructure, entity graph, content architecture, and authority signals —
                then hand you the keys. No retainer. No lock-in. No platform rent.
              </p>

              <p
                className="font-inter mb-10"
                style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--d-fg-dim)' }}
              >
                A defined-scope, fixed-price engagement. No retainers.
                You own everything we build.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="d-btn d-btn-primary">
                  Get My Machine Read →
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
                    'Built for AI Overviews. Wins traditional Google + Bing as a byproduct.',
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

      {/* ─── 7. AI Visibility Check ───────────────────────────── */}
      <AIVisibilityCheck />

      {/* ─── 8. Window Urgency ───────────────────────────────── */}
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
            In 2–3 years this will be table stakes. The businesses that own the space in their
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
                This is a 2–3 year window.
              </strong>
              {' '}It&apos;s open right now. Every month you wait, a competitor in your market
              gets a head start that will be hard to close.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 9. Final CTA ─────────────────────────────────────── */}
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
            className="font-inter mb-10"
            style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--d-fg-dim)', fontWeight: 300 }}
          >
            One conversation. No pitch. We&apos;ll show you exactly what AI can and can&apos;t verify
            about your business right now — and what it would take to fix it.
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
                Get My Machine Read →
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
