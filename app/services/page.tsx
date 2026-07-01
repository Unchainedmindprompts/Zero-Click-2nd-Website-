import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';
import ProofWall from '@/components/proof/ProofWall';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'We rebuild your website so AI engines — ChatGPT, Perplexity, Google AI, Bing Copilot, Gemini — can read it, trust it, and cite your business by name. Built once. Owned forever. No retainer.',
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
    'KodeCite rebuilds your website so AI engines can read it, verify your business, and cite you by name — a fast server-rendered site, a connected entity graph, answer-first pages, and aligned trust signals, then handed off to you. Owned forever. No retainer.',
  areaServed: { '@type': 'Country', name: 'United States' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.kodecite.ai/services' },
  ],
};

const whoWeBuildFor = [
  'High-end custom van builders',
  'Realtors and real-estate teams',
  'Custom home builders',
  'Premium home services — remodels, HVAC, roofing, window treatments',
  'Specialty dental — implants, cosmetic, ortho',
  'Med spas and aesthetic practices',
  'Any boutique specialist whose customers research before they buy',
];

// F1 codename kept as a light nod (small tag); the plain-English outcome leads.
const layers = [
  {
    n: '01', code: 'CHASSIS',
    h: 'A site AI can actually read.',
    d: 'We rebuild your site so every page loads fully-formed, fast, and readable to every AI crawler — no blank pages, no missed content. This alone fixes the #1 reason businesses are invisible to AI.',
    hood: 'a modern, server-rendered build on fast infrastructure.',
  },
  {
    n: '02', code: 'ENGINE',
    h: 'An identity AI can verify.',
    d: 'We wire your business, your people, your services, your location, and your credentials into a connected map AI reads to understand exactly who you are — then make sure it matches everywhere it needs to (Google, Bing, Apple, the major directories) so there are no contradictions. AI won’t recommend a business it can’t verify. This is the part everyone else charges a fortune for and explains badly. We just do it.',
    hood: 'a hand-built entity graph.',
  },
  {
    n: '03', code: 'AERO',
    h: 'Answers AI can quote.',
    d: 'Every page is written to answer the exact questions your customers ask, in a form an AI can lift word-for-word and credit you. When someone researches their decision, your page is the clean, quotable answer.',
    hood: null,
  },
  {
    n: '04', code: 'GRAPHICS',
    h: 'Signals AI trusts.',
    d: 'The connections, consistency, and authority markers AI engines look for before they’ll put you in an answer — all aligned so the whole thing holds together.',
    hood: null,
  },
];

const processSteps = [
  { w: 'PHASE 01', t: 'Discovery + audit', d: 'We read your current site, your goals, and the exact questions your customers ask. You get a plan: what’s kept, what’s rebuilt, what’s cut.' },
  { w: 'PHASE 02', t: 'Architecture', d: 'We design the structure and the identity map, and you approve it before any real build starts.' },
  { w: 'PHASE 03', t: 'Build', d: 'Page by page, live preview at every push. You review as we go.' },
  { w: 'PHASE 04', t: 'Content + QA', d: 'Your content moves into the new system, checked across browsers, speed, and structure.' },
  { w: 'PHASE 05', t: 'Handoff', d: 'Everything transferred to you — repo, hosting, domain. Walkthrough included. You own it.' },
];

const dontDo = [
  { t: 'Copywriting', d: 'We design the structure; your writer (or you) supplies the words. We can recommend writers we trust.' },
  { t: 'Monthly retainers', d: 'No managed services, no ongoing fees. We build it, you own it.' },
  { t: 'WordPress / Wix / Squarespace', d: 'We don’t build on platforms that can’t do this properly. If you’re committed to one, we’re not your team.' },
  { t: 'Paid ads + social media', d: 'Not our practice. Plenty of great agencies do this.' },
  { t: 'Chasing Reddit upvotes and “hacks”', d: 'We don’t play the gimmick game. Real AI visibility is structural — that’s the work we do.' },
  { t: 'Guaranteed-rankings SEO packages', d: 'No keyword stuffing, no link farms, no snake oil.' },
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
          <div className="d-eyebrow mb-6">SERVICES · HOW IT WORKS</div>
          <h1 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(36px, 4.8vw, 62px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: FG, maxWidth: '16ch' }}>
            The website that makes AI <em className="serif" style={{ color: ACCENT }}>name your business.</em>
          </h1>
          <p className="font-inter mb-10" style={{ fontSize: '18px', lineHeight: 1.6, color: DIM, fontWeight: 300, maxWidth: '640px' }}>
            Your customers are asking ChatGPT, Perplexity, and Google&apos;s AI who to hire — and those
            answers now decide who gets the call. We rebuild your website so AI engines can read it,
            trust it, and cite you by name, with proof it worked.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/machine-read" className="d-btn d-btn-primary justify-center">Run My Free Machine Read →</Link>
            <Link href="/pricing" className="d-btn d-btn-ghost justify-center">See Pricing →</Link>
          </div>
        </GlassPanel>
      </section>

      {/* ── The Problem ──────────────────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">THE PROBLEM</div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG, maxWidth: '20ch' }}>
            Your customers changed how they search.{' '}
            <em className="serif" style={{ color: ACCENT }}>Your website didn&apos;t change how it shows up.</em>
          </h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '680px' }}>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              Ask any AI assistant about a decision like the one your customers make, and it confidently
              names a few businesses. Those businesses get found before a single Google result loads. Right
              now, for most local businesses, the AI names a competitor — not because they&apos;re better, but
              because their website is <em>readable</em> to AI and yours isn&apos;t.
            </p>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              Most sites can&apos;t be read by AI at all. A typical WordPress, Wix, or Squarespace site loads its
              content with code that AI crawlers don&apos;t run — so when the AI looks at your page, it sees a
              blank. You can be the best in your market and still be invisible to the tool your customers are
              asking.
            </p>
            <p className="font-inter font-medium" style={{ fontSize: '17px', lineHeight: 1.6, color: FG }}>
              That&apos;s the whole problem. <em className="serif" style={{ color: ACCENT }}>And it&apos;s fixable.</em>
            </p>
          </div>
        </GlassPanel>
      </section>

      {/* ── Proof (existing ProofWall) ───────────────────── */}
      <ProofWall />

      {/* ── Who we build for ─────────────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">WHO WE BUILD FOR</div>
          <p className="font-inter font-semibold mb-8" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', lineHeight: 1.3, letterSpacing: '-0.02em', color: FG, maxWidth: '22ch' }}>
            You&apos;re a fit if you&apos;re a <em className="serif" style={{ color: ACCENT }}>high-trust, high-ticket business</em> with a
            real reputation and a buyer who takes time to decide:
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
            If your customers make a considered, expensive decision and research it first, this is built for
            you. If you&apos;re a commodity or price-driven business where nobody researches, it isn&apos;t — and
            we&apos;ll tell you that straight.
          </p>
        </GlassPanel>
      </section>

      {/* ── How it works (four layers) ───────────────────── */}
      <section id="how-it-works" className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">HOW IT WORKS</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG, maxWidth: '18ch' }}>
            We rebuild your site into something AI can <em className="serif" style={{ color: ACCENT }}>read, trust, and quote.</em>
          </h2>
          <p className="font-inter mb-12" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '680px' }}>
            Under the hood it&apos;s serious engineering. What it <em>does</em> for you is simple: it turns your
            business into the answer AI gives. Four layers do the work — you&apos;ll never see three of them, and
            that&apos;s the point.
          </p>

          <div className="flex flex-col gap-4">
            {layers.map((l) => (
              <article key={l.n} className="glass-panel-soft" style={{ padding: 'clamp(24px, 3vw, 34px)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-inter font-semibold" style={{ fontSize: '15px', color: ACCENT }}>{l.n}</span>
                  <span className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.22em', color: MUTE }}>{l.code}</span>
                </div>
                <h3 className="font-inter font-semibold mb-3" style={{ fontSize: 'clamp(19px, 2.4vw, 24px)', lineHeight: 1.2, letterSpacing: '-0.015em', color: FG }}>
                  {l.h}
                </h3>
                <p className="font-inter" style={{ fontSize: '15.5px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '720px' }}>
                  {l.d}
                </p>
                {l.hood && (
                  <p className="font-inter mt-4" style={{ fontSize: '13px', lineHeight: 1.5, color: MUTE, fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px' }}>
                    Under the hood: {l.hood}
                  </p>
                )}
              </article>
            ))}
          </div>
        </GlassPanel>
      </section>

      {/* ── What you own ─────────────────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)', borderLeft: '2px solid rgba(93,213,255,0.55)' }}>
          <div className="d-eyebrow mb-6">WHAT YOU OWN</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG }}>
            Everything. <em className="serif" style={{ color: ACCENT }}>With the keys.</em>
          </h2>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            When it&apos;s done, it&apos;s yours — the website, the code, the domain, all of it, transferred to your
            account. <strong style={{ color: FG, fontWeight: 600 }}>No monthly retainer. No lock-in. You own it
            forever.</strong> If you want help later, we scope a new project. We never rent you your own website.
          </p>
        </GlassPanel>
      </section>

      {/* ── How the engagement runs ──────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">HOW THE ENGAGEMENT RUNS</div>
          <p className="font-inter mb-10" style={{ fontSize: '16px', lineHeight: 1.6, color: DIM, fontWeight: 300, maxWidth: '640px' }}>
            Built in focused phases, with a live preview at every step — no big reveal at the end.
          </p>
          <div className="mb-10">
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
          <p className="font-inter" style={{ fontSize: '15px', lineHeight: 1.6, color: MUTE, fontWeight: 300 }}>
            Then we track your citations for 60 days to prove it worked.{' '}
            <Link href="/pricing" style={{ color: ACCENT, borderBottom: '1px solid rgba(93,213,255,0.4)' }}>See the guarantee on the Pricing page →</Link>
          </p>
        </GlassPanel>
      </section>

      {/* ── What we don't do ─────────────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">WHAT WE DON&apos;T DO</div>
          <p className="font-inter mb-10" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '640px' }}>
            We do one thing exceptionally well: build AI-native web infrastructure. Here&apos;s where we stop, so
            you know who else to hire:
          </p>
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

      {/* ── Other ways to work together (demoted) ────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(28px, 4vw, 44px)' }}>
          <div className="d-eyebrow mb-4">OTHER WAYS TO WORK TOGETHER</div>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '720px' }}>
            Not ready for a full rebuild? If your site is structurally fine but the strategy isn&apos;t, we also do{' '}
            <strong style={{ color: FG, fontWeight: 600 }}>audits and structure plans</strong> — a diagnosis and a
            prioritized action plan your existing team can run. Ask about it on your{' '}
            <Link href="/machine-read" style={{ color: ACCENT, borderBottom: '1px solid rgba(93,213,255,0.4)' }}>Machine Read</Link>.
          </p>
        </GlassPanel>
      </section>

      {/* ── Start here (final CTA) ───────────────────────── */}
      <section className="secondary-section" style={{ ...sectionGap, paddingBottom: '120px' }}>
        <GlassPanel style={{ padding: 'clamp(40px, 6vw, 72px)', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">START HERE</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG }}>
            It always starts with a <em className="serif" style={{ color: ACCENT }}>free Machine Read.</em>
          </h2>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            We run real customer questions about your business across every major AI engine and show you exactly
            where you stand — who&apos;s getting named, who isn&apos;t, and what it&apos;s costing you. Free. 48 hours. No
            pitch. You keep the report either way, even if the answer is &ldquo;you don&apos;t need us.&rdquo;
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link href="/machine-read" className="d-btn d-btn-primary">Run My Free Machine Read →</Link>
            <Link href="/pricing" className="d-btn d-btn-ghost">See Pricing →</Link>
          </div>
          <p className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.14em', color: MUTE }}>
            BUILT ONCE · OWNED FOREVER · FOUND BY AI
          </p>
        </GlassPanel>
      </section>
    </SecondaryPageShell>
  );
}
