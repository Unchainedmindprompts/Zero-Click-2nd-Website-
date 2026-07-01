import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'The Foundation Build — one-time $4,995. A rebuilt, AI-readable website with 60 days of citation tracking, owned forever, no retainer. Cited by name in 60 days or your money back.',
  alternates: { canonical: 'https://www.kodecite.ai/pricing' },
};

const pricingSchema = {
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
    'A one-time rebuild of your website into an AI-readable foundation AI engines can read, verify, and cite — with 60 days of citation tracking, transferred to you on handoff. No retainer. Cited by name in 60 days or your money back.',
  offers: {
    '@type': 'Offer',
    price: '4995',
    priceCurrency: 'USD',
    url: 'https://www.kodecite.ai/pricing',
    description: 'One-time Foundation Build. Shipped in 15–20 business days. You own everything.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://www.kodecite.ai/pricing' },
  ],
};

const whatYouGet = [
  { t: 'A fast, AI-readable website.', d: 'Rebuilt so AI crawlers can actually see and read every page (most WordPress/Wix sites can’t be read properly — the #1 reason they’re invisible to AI).' },
  { t: 'Pages for every service and every area you serve.', d: 'So when someone asks about a specific service in a specific town, there’s a clear page for the AI to pull.' },
  { t: 'Answer-first content.', d: 'Every page answers the exact questions your customers ask, written so an AI can lift the answer word-for-word and credit you.' },
  { t: 'The trust layer.', d: 'We make your business identity match everywhere it needs to — Google, Bing, Apple, the major directories — so AI engines verify you’re real and trust what they find.' },
  { t: 'The technical plumbing that makes AI cite you.', d: 'The behind-the-scenes structure and signals AI engines look for. You’ll never see it — but it’s the difference between being cited and being invisible.' },
  { t: '60 days of AI visibility tracking.', d: 'We watch the exact questions your customers ask, across every major engine, and show you the citations landing.' },
];

const paybackRows = [
  { biz: 'High-end custom van builder (one build)', worth: '$150,000–$250,000+', pay: 'a rounding error on one build' },
  { biz: 'Realtor (one commission)', worth: '~$10,000+', pay: 'half a deal' },
  { biz: 'Custom home builder (one project)', worth: '$50,000+', pay: 'a fraction of one job' },
  { biz: 'High-end home services (remodel, HVAC, window treatments)', worth: '$5,000–$60,000', pay: 'one job, often several times over' },
  { biz: 'Cosmetic / implant dentistry (one case)', worth: '$5,000–$30,000', pay: 'one patient' },
  { biz: 'Med spa / aesthetics (one client)', worth: '$3,000–$5,000+', pay: 'one client' },
];

const addOns = [
  { t: 'Extra service or area pages', price: '$250 each (or 5 for $1,000)', d: 'Cover more towns and more services.' },
  { t: 'Citation-ready articles', price: '$350 each (or 3 for $900)', d: 'The kind of in-depth answer content AI loves to quote.' },
  { t: 'Review Language System', price: '$500', d: 'Set up so AI can quote your reviews for “best” and “safest”-type questions.' },
  { t: 'Rush delivery', price: '+$1,500', d: 'Shipped in 10 business days instead of 15–20.' },
  { t: 'Additional location or second vertical', price: '$2,500', d: 'A second full location/service set.' },
  { t: 'Optional AI Visibility Tracking', price: '$200/month · cancel anytime', d: 'Keep watching your citations after day 60. Not required, no contract — pure optional.' },
];

// shared text colors on glass
const FG = 'var(--d-fg)';
const DIM = 'rgba(233, 238, 255, 0.95)';
const MUTE = 'rgba(219, 227, 255, 0.8)';
const ACCENT = 'var(--d-accent)';
const sectionGap = { marginTop: '30px' };

export default function PricingPage() {
  return (
    <SecondaryPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="secondary-section secondary-hero">
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">PRICING</div>
          <h1 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(36px, 4.8vw, 62px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: FG, maxWidth: '15ch' }}>
            One build. One price. <em className="serif" style={{ color: ACCENT }}>One guarantee.</em>
          </h1>
          <p className="font-inter mb-9" style={{ fontSize: '18px', lineHeight: 1.6, color: DIM, fontWeight: 300, maxWidth: '620px' }}>
            Everything it takes to make AI cite your business by name — built once, owned forever, no
            retainer. Priced so a single new customer more than covers it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link href="/machine-read" className="d-btn d-btn-primary justify-center">Run My Free Machine Read →</Link>
            <Link href="/services" className="d-btn d-btn-ghost justify-center">See how it works →</Link>
          </div>
          {/* Proof strip — one line, links to the full ProofWall on Services */}
          <div className="glass-panel-soft flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-2" style={{ padding: '16px 22px' }}>
            <span className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.06em', color: MUTE }}>
              Cited across ChatGPT · Perplexity · Google AI · Bing Copilot · Gemini.
            </span>
            <Link href="/services#proof" className="font-inter font-semibold" style={{ fontSize: '13px', color: ACCENT, whiteSpace: 'nowrap' }}>
              See the proof →
            </Link>
          </div>
        </GlassPanel>
      </section>

      {/* ── The Offer ────────────────────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">THE OFFER</div>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
            <h2 className="font-inter font-semibold" style={{ fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: FG }}>
              The Foundation Build
            </h2>
            <span className="font-inter font-semibold" style={{ fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: ACCENT }}>$4,995</span>
          </div>
          <p className="font-mono mb-8" style={{ fontSize: '12px', letterSpacing: '0.1em', color: MUTE }}>
            ONE-TIME · SHIPPED IN 15–20 BUSINESS DAYS · YOU OWN EVERYTHING
          </p>
          <p className="font-inter mb-10" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            We rebuild your site into one an AI can actually read, trust, and quote — then we track it for
            60 days to prove it&apos;s working. Not a prettier website. The machine-readable foundation that
            makes AI cite you by name.
          </p>

          <p className="font-mono mb-5" style={{ fontSize: '10px', letterSpacing: '0.18em', color: ACCENT }}>WHAT YOU GET</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {whatYouGet.map((w) => (
              <div key={w.t} className="glass-panel-soft flex gap-4" style={{ padding: '22px 26px' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0" style={{ marginTop: '2px' }}>
                  <path d="M5 10L8.5 13.5L15 7" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="font-inter font-semibold mb-1" style={{ fontSize: '15px', color: FG, letterSpacing: '-0.005em' }}>{w.t}</p>
                  <p className="font-inter" style={{ fontSize: '13.5px', lineHeight: 1.6, color: MUTE, fontWeight: 300 }}>{w.d}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            <strong style={{ color: FG, fontWeight: 600 }}>When it&apos;s done, it&apos;s yours</strong> — the website, the
            code, the domain, everything, transferred to you with the keys. <strong style={{ color: FG, fontWeight: 600 }}>No
            monthly retainer. No lock-in. You own it forever.</strong>
          </p>
        </GlassPanel>
      </section>

      {/* ── The Guarantee (standout) ─────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel
          style={{
            padding: 'clamp(36px, 5vw, 64px)',
            border: '1px solid rgba(93,213,255,0.45)',
            boxShadow: '0 0 0 1px rgba(93,213,255,0.15), 0 24px 70px -30px rgba(93,213,255,0.45)',
          }}
        >
          <div className="inline-flex items-center gap-2 mb-6" style={{ padding: '6px 14px', borderRadius: '999px', border: '1px solid rgba(93,213,255,0.4)', background: 'rgba(93,213,255,0.08)' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: ACCENT, boxShadow: '0 0 8px rgba(93,213,255,0.8)' }} />
            <span className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.2em', color: ACCENT }}>THE 60-DAY GUARANTEE</span>
          </div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(28px, 3.8vw, 46px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: FG, maxWidth: '18ch' }}>
            Cited by name in 60 days, <em className="serif" style={{ color: ACCENT }}>or your money back.</em>
          </h2>
          <p className="font-inter mb-6" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            We keep this precise on purpose — a guarantee is only worth something if it&apos;s honest.
          </p>
          <p className="font-inter mb-5" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            <strong style={{ color: FG, fontWeight: 600 }}>What we guarantee:</strong> your business named by AI in its
            answer to the specific questions we agree to target, across the engines we agree to measure,
            within 60 days. If it isn&apos;t, we refund the full $4,995 — and <strong style={{ color: FG, fontWeight: 600 }}>you
            keep the entire website anyway.</strong>
          </p>

          <p className="font-inter mb-3" style={{ fontSize: '15px', lineHeight: 1.6, color: MUTE, fontWeight: 300 }}>We agree, in writing, before we start:</p>
          <ul className="flex flex-col gap-2.5 mb-8" style={{ maxWidth: '680px' }}>
            {[
              <>the exact <strong style={{ color: FG, fontWeight: 600 }}>questions</strong> we&apos;re targeting,</>,
              <>the exact <strong style={{ color: FG, fontWeight: 600 }}>engines</strong> we&apos;re measuring (from ChatGPT, Perplexity, Gemini, Google AI, Bing Copilot),</>,
              <>and what counts: your business <strong style={{ color: FG, fontWeight: 600 }}>named in the AI&apos;s answer</strong> — not buried in a source footnote.</>,
            ].map((node, i) => (
              <li key={i} className="flex items-start gap-3 font-inter" style={{ fontSize: '15px', lineHeight: 1.55, color: DIM, fontWeight: 300 }}>
                <span style={{ color: ACCENT, flexShrink: 0, marginTop: '1px' }}>✓</span>
                <span>{node}</span>
              </li>
            ))}
          </ul>

          {/* Kept intentionally — the honest boundary */}
          <div className="glass-panel-soft mb-8" style={{ padding: '26px 30px', borderLeft: '2px solid rgba(255,255,255,0.18)' }}>
            <p className="font-inter mb-0" style={{ fontSize: '15px', lineHeight: 1.65, color: MUTE, fontWeight: 300 }}>
              <strong style={{ color: DIM, fontWeight: 600 }}>What we don&apos;t pretend to guarantee:</strong> that you&apos;ll be
              the #1 pick every single time. AI answers move around run to run — some days you&apos;re first, some
              days you&apos;re third. Anyone promising you a permanent top spot in 60 days is selling you something
              they can&apos;t deliver. Being <em>the</em> recommendation is earned over time as your reviews and
              reputation grow. Getting <em>cited</em> — getting into the answer at all — is what we lock down now.
            </p>
          </div>

          <p className="font-inter mb-5" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            <strong style={{ color: FG, fontWeight: 600 }}>New business or established, we scope it to what&apos;s
            winnable.</strong> A newer site wins on the <em>research questions</em> your buyers ask along the way —
            where great, well-structured content beats age and reviews. An established business with reviews can
            also win the competitive &ldquo;best of&rdquo; questions. During your free Machine Read, we tell you exactly
            which questions we can win for you — and if we can&apos;t win enough to make it worth your money, we say
            so before you spend a dime.
          </p>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            You get the raw results on day 60. If we missed, you&apos;re refunded within 7 business days and you keep
            everything. No strings.
          </p>
        </GlassPanel>
      </section>

      {/* ── Why this beats being #3 ──────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">WHY THIS BEATS BEING #3 ON A &ldquo;BEST OF&rdquo; LIST</div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG, maxWidth: '22ch' }}>
            For big decisions, the trusted source wins — <em className="serif" style={{ color: ACCENT }}>not one of five names.</em>
          </h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '720px' }}>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              When someone makes an expensive, careful decision — a home, a custom van build, a major remodel,
              dental work, a high-end install — they don&apos;t pick from a list in thirty seconds. They research for
              weeks, asking AI a dozen questions along the way: how to choose, what to watch for, what&apos;s right for
              their situation.
            </p>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              The business that gets <strong style={{ color: FG, fontWeight: 600 }}>cited as the authority</strong> on those
              questions becomes the one they trust before they ever pick up the phone. By the time they&apos;re ready to
              buy, you&apos;re not a stranger on a list — you&apos;re the expert they&apos;ve been reading the whole time. For a
              slow, high-trust purchase, that&apos;s worth far more than being name #3 on &ldquo;best [category] in town.&rdquo;
            </p>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              That&apos;s exactly what we build: your business as the cited, trusted answer to the questions your
              customers are actually asking <em>while they decide.</em> The &ldquo;best of&rdquo; spot comes later, on its own,
              as your reputation compounds.
            </p>
          </div>
        </GlassPanel>
      </section>

      {/* ── Why it's worth it (payback table) ────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">WHY IT&apos;S WORTH IT · THE REAL MATH</div>
          <p className="font-inter mb-8" style={{ fontSize: '17px', lineHeight: 1.6, color: DIM, fontWeight: 300, maxWidth: '640px' }}>
            $4,995 sounds like a lot until you count it against a single customer.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: '640px' }}>
              <thead>
                <tr>
                  {['Your business', 'One customer is worth', 'The build pays for itself in'].map((h) => (
                    <th key={h} className="font-mono text-left" style={{ fontSize: '10px', letterSpacing: '0.14em', color: MUTE, fontWeight: 400, padding: '0 18px 14px', borderBottom: '1px solid rgba(255,255,255,0.14)', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paybackRows.map((r, i) => (
                  <tr key={r.biz} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <td className="font-inter" style={{ fontSize: '14.5px', lineHeight: 1.45, color: i === 0 ? FG : DIM, fontWeight: i === 0 ? 600 : 300, padding: '16px 18px', borderLeft: i === 0 ? '2px solid rgba(93,213,255,0.55)' : '2px solid transparent' }}>{r.biz}</td>
                    <td className="font-inter" style={{ fontSize: '14.5px', lineHeight: 1.45, color: DIM, fontWeight: 400, padding: '16px 18px', whiteSpace: 'nowrap' }}>{r.worth}</td>
                    <td className="font-inter font-semibold" style={{ fontSize: '14.5px', lineHeight: 1.45, color: ACCENT, padding: '16px 18px' }}>{r.pay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="font-inter mt-8" style={{ fontSize: '15px', lineHeight: 1.65, color: MUTE, fontWeight: 300, fontStyle: 'italic', maxWidth: '700px' }}>
            You don&apos;t need dozens of new customers from this. You need one. Everything after that is profit —
            with no monthly fee ever.
          </p>
        </GlassPanel>
      </section>

      {/* ── Add-ons ──────────────────────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-4">ADD-ONS</div>
          <p className="font-inter mb-10" style={{ fontSize: '15px', lineHeight: 1.6, color: MUTE, fontWeight: 300, fontStyle: 'italic', maxWidth: '620px' }}>
            Optional. All one-time — no subscriptions, no lock-in. Add what fits your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addOns.map((a) => (
              <div key={a.t} className="glass-panel-soft" style={{ padding: '24px 28px' }}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                  <p className="font-inter font-semibold" style={{ fontSize: '15.5px', color: FG, letterSpacing: '-0.01em' }}>{a.t}</p>
                  <p className="font-mono" style={{ fontSize: '13px', color: ACCENT, whiteSpace: 'nowrap' }}>{a.price}</p>
                </div>
                <p className="font-inter" style={{ fontSize: '13.5px', lineHeight: 1.6, color: MUTE, fontWeight: 300 }}>{a.d}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </section>

      {/* ── For bigger jobs ──────────────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(28px, 4vw, 44px)' }}>
          <div className="d-eyebrow mb-4">FOR BIGGER JOBS</div>
          <h2 className="font-inter font-semibold mb-3" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', letterSpacing: '-0.02em', color: FG }}>
            Custom builds — <em className="serif" style={{ color: ACCENT }}>by application.</em>
          </h2>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '720px' }}>
            Multi-location businesses, complex sites, or fully bespoke design work go beyond the fixed Foundation
            Build. Those are scoped and quoted individually. Start with a Machine Read and we&apos;ll tell you honestly
            whether you need the $4,995 build or a custom engagement.
          </p>
        </GlassPanel>
      </section>

      {/* ── How to start (final CTA) ─────────────────────── */}
      <section className="secondary-section" style={{ ...sectionGap, paddingBottom: '120px' }}>
        <GlassPanel style={{ padding: 'clamp(40px, 6vw, 72px)', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">HOW TO START</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG }}>
            It always starts with a <em className="serif" style={{ color: ACCENT }}>free Machine Read.</em>
          </h2>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            We run real customer questions about your business across every major AI engine and show you exactly
            where you stand — who&apos;s getting named, who isn&apos;t, and what it&apos;s costing you. Free. 48 hours. No
            pitch. You keep the report either way — even if the answer is &ldquo;you don&apos;t need us.&rdquo;
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link href="/machine-read" className="d-btn d-btn-primary">Run My Free Machine Read →</Link>
            <Link href="/services" className="d-btn d-btn-ghost">See how it works →</Link>
          </div>
          <p className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.14em', color: MUTE }}>
            BUILT ONCE · OWNED FOREVER · FOUND BY AI
          </p>
        </GlassPanel>
      </section>
    </SecondaryPageShell>
  );
}
