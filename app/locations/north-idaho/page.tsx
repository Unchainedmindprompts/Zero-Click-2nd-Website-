import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';
import { ORIGIN, WEBSITE_ID, businessRef } from '@/lib/schema';

const PAGE_URL = `${ORIGIN}/locations/north-idaho`;

export const metadata: Metadata = {
  title: 'Answer Engine Optimization for North Idaho Businesses',
  description:
    'Get your North Idaho business cited by name in ChatGPT, Perplexity, Google AI, Bing Copilot, and Gemini. Answer engine optimization (AEO) from KodeCite — based in Coeur d\'Alene, serving the entire panhandle.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Answer Engine Optimization for North Idaho Businesses',
    description:
      'Make your North Idaho business machine-readable so AI answer engines find it, verify it, and recommend it by name — across the whole panhandle. Built once. Owned forever.',
    url: PAGE_URL,
    type: 'website',
    images: [{ url: `${ORIGIN}/og-image.png`, width: 1200, height: 630 }],
  },
};

// Regional area served — the panhandle region, its counties, and its towns, each
// with a Wikipedia sameAs for entity resolution.
const NORTH_IDAHO = { '@type': 'AdministrativeArea', name: 'North Idaho', sameAs: 'https://en.wikipedia.org/wiki/Idaho_Panhandle' };
const KOOTENAI = { '@type': 'AdministrativeArea', name: 'Kootenai County', sameAs: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho' };
const BONNER = { '@type': 'AdministrativeArea', name: 'Bonner County', sameAs: 'https://en.wikipedia.org/wiki/Bonner_County,_Idaho' };
const CDA = { '@type': 'City', name: "Coeur d'Alene", sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho' };
const POST_FALLS = { '@type': 'City', name: 'Post Falls', sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho' };
const HAYDEN = { '@type': 'City', name: 'Hayden', sameAs: 'https://en.wikipedia.org/wiki/Hayden,_Idaho' };
const RATHDRUM = { '@type': 'City', name: 'Rathdrum', sameAs: 'https://en.wikipedia.org/wiki/Rathdrum,_Idaho' };
const SANDPOINT = { '@type': 'City', name: 'Sandpoint', sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho' };

const faqItems = [
  {
    q: 'Which towns do you serve?',
    a: 'The whole panhandle — Coeur d’Alene, Post Falls, Hayden, Rathdrum, Sandpoint, and the surrounding Inland Northwest, including Spokane. We’re based in Coeur d’Alene.',
  },
  {
    q: 'Do I need this if I already rank on Google in North Idaho?',
    a: 'Yes — AI answers don’t mirror Google rankings. Even a #1-ranked page is cited in AI answers only about half the time, and the reviews that win the Google map pack don’t get you named in ChatGPT. AI visibility is a separate system that most North Idaho businesses have no foundation for.',
  },
  {
    q: 'How is this different from a local SEO company?',
    a: 'Traditional SEO targets Google’s ranked links. AEO makes your business machine-readable so AI answer engines recommend you by name. It strengthens your traditional SEO as a byproduct — but the goal is being the answer, not just a link. Based on our research, it’s a gap almost no one in the region is building for.',
  },
];

const locationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Answer Engine Optimization for North Idaho Businesses — KodeCite.ai',
      description:
        'Answer engine optimization (AI search optimization) for North Idaho businesses across the panhandle — machine-readable infrastructure that gets you cited by name in ChatGPT, Perplexity, Google AI, Bing Copilot, and Gemini.',
      inLanguage: 'en-US',
      isPartOf: { '@id': WEBSITE_ID },
      about: businessRef,
      primaryImageOfPage: { '@id': `${ORIGIN}/#logo` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      mainEntity: { '@id': `${PAGE_URL}#service` },
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Answer Engine Optimization',
      serviceType: ['Answer Engine Optimization', 'AI Search Optimization', 'AI Visibility Infrastructure'],
      provider: businessRef,
      areaServed: [NORTH_IDAHO, KOOTENAI, BONNER, CDA, POST_FALLS, HAYDEN, RATHDRUM, SANDPOINT],
      description:
        'Making a North Idaho business machine-readable so AI answer engines can find it, verify it, and recommend it by name across the panhandle — a rebuilt AI-readable website, a connected entity graph, answer-first content, and 60 days of AI-visibility tracking. Owned forever. No retainer.',
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
        { '@type': 'ListItem', position: 2, name: 'Answer Engine Optimization for North Idaho', item: PAGE_URL },
      ],
    },
  ],
};

const FG = 'var(--d-fg)';
const DIM = 'rgba(233, 238, 255, 0.95)';
const MUTE = 'rgba(219, 227, 255, 0.8)';
const ACCENT = 'var(--d-accent)';
const sectionGap = { marginTop: '30px' };

export default function NorthIdahoLocationPage() {
  return (
    <SecondaryPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />

      {/* ── Hero (answer-first) ──────────────────────────── */}
      <section className="secondary-section secondary-hero">
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">ANSWER ENGINE OPTIMIZATION · NORTH IDAHO</div>
          <h1 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(32px, 4.4vw, 56px)', lineHeight: 1.07, letterSpacing: '-0.03em', color: FG, maxWidth: '18ch' }}>
            Answer Engine Optimization for <em className="serif" style={{ color: ACCENT }}>North Idaho businesses.</em>
          </h1>
          <p className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(17px, 2.2vw, 21px)', lineHeight: 1.4, color: FG, maxWidth: '640px' }}>
            Get your North Idaho business cited by name in ChatGPT, Perplexity, Google AI, Bing Copilot, and Gemini.
          </p>
          <p className="font-inter mb-10" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '680px' }}>
            Answer engine optimization (AEO) — also called AI search optimization — is the work of making your
            business machine-readable so AI answer engines can find it, verify it, and recommend it <em>by name.</em>{' '}
            It&apos;s how a North Idaho business shows up when a customer asks ChatGPT for &ldquo;the best [your service] in
            Coeur d&apos;Alene&rdquo; or &ldquo;who to hire in Sandpoint.&rdquo; KodeCite builds that infrastructure — based in
            Coeur d&apos;Alene, serving the entire panhandle: Coeur d&apos;Alene, Post Falls, Hayden, Rathdrum, Sandpoint,
            and the Inland Northwest.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/machine-read" className="d-btn d-btn-primary justify-center">Run My Free Machine Read →</Link>
            <Link href="/pricing" className="d-btn d-btn-ghost justify-center">See Pricing →</Link>
          </div>
        </GlassPanel>
      </section>

      {/* ── The regional opportunity ─────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">THE OPPORTUNITY</div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG, maxWidth: '22ch' }}>
            We researched the North Idaho market. <em className="serif" style={{ color: ACCENT }}>The AI-visibility gap is wide open.</em>
          </h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '700px' }}>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              Based on our research across North Idaho, most local businesses — and most of the agencies serving them —
              are still optimizing traditional SEO on WordPress, Wix, and Squarespace, while completely missing how
              search is changing and the opportunity in AI visibility. They&apos;re working to win Google&apos;s blue links, a
              page fewer people click every month, while the AI-answer lane sits wide open across the region.
            </p>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              That gap matters, because your customers are already asking AI. When they do, the AI names a short list of
              businesses before the old results even load. If yours isn&apos;t on it, you never enter the conversation. And
              most North Idaho businesses aren&apos;t on it — not because they&apos;re not good, but because their websites
              aren&apos;t in a form an AI engine can read, verify, and quote.
            </p>
          </div>
        </GlassPanel>
      </section>

      {/* ── Proof (real North Idaho results) ─────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">PROOF · REAL NORTH IDAHO RESULTS</div>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            We haven&apos;t been publishing this playbook for years; we&apos;ve been proving it, right here:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="glass-panel-soft" style={{ padding: '26px 30px' }}>
              <p className="font-inter font-semibold mb-2" style={{ fontSize: '16px', color: FG }}>Real Estate With Shirin <span style={{ color: MUTE, fontWeight: 400 }}>· North Idaho</span></p>
              <p className="font-inter" style={{ fontSize: '14.5px', lineHeight: 1.6, color: DIM, fontWeight: 300 }}>
                Rebuilt on our entity-graph foundation — now cited across Bing, Google AI, ChatGPT, and Gemini for
                competitive regional queries, beating far older, higher-authority sites.
              </p>
            </div>
            <div className="glass-panel-soft" style={{ padding: '26px 30px' }}>
              <p className="font-inter font-semibold mb-2" style={{ fontSize: '16px', color: FG }}>Luxe Window Works <span style={{ color: MUTE, fontWeight: 400 }}>· Post Falls</span></p>
              <p className="font-inter" style={{ fontSize: '14.5px', lineHeight: 1.6, color: DIM, fontWeight: 300 }}>
                Recommended by name across ChatGPT, Perplexity, and Google AI, ahead of national franchises with 10×
                the reviews.
              </p>
            </div>
          </div>
          <div className="glass-panel-soft mb-6" style={{ padding: '26px 30px', borderLeft: '2px solid rgba(93,213,255,0.55)' }}>
            <p className="font-inter font-semibold mb-2" style={{ fontSize: '16px', color: FG }}>The review paradox</p>
            <p className="font-inter" style={{ fontSize: '14.5px', lineHeight: 1.6, color: DIM, fontWeight: 300 }}>
              In our regional audit, a North Idaho business with <strong style={{ color: FG, fontWeight: 600 }}>1,375 five-star Google reviews</strong> — the
              clear market leader — was named in <strong style={{ color: FG, fontWeight: 600 }}>zero</strong> of the AI answers we ran for its core service.
              Reviews win Google Maps. They don&apos;t win AI answers.
            </p>
          </div>
          <p className="font-inter" style={{ fontSize: '13.5px', lineHeight: 1.6, color: MUTE, fontWeight: 300, fontStyle: 'italic', maxWidth: '640px' }}>
            AI answers vary and change over time — these are real, dated results, not guarantees. The guarantee is below.{' '}
            <Link href="/services#proof" style={{ color: ACCENT, borderBottom: '1px solid rgba(93,213,255,0.4)' }}>See the full proof →</Link>
          </p>
        </GlassPanel>
      </section>

      {/* ── What we build ────────────────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">WHAT WE BUILD</div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG }}>
            A complete, AI-readable foundation — the <em className="serif" style={{ color: ACCENT }}>Foundation Build.</em>
          </h2>
          <ul className="flex flex-col gap-3 mb-8" style={{ maxWidth: '700px' }}>
            {[
              'A fast website rebuilt so AI crawlers can actually read every page.',
              'A connected entity graph that gives your business one verified, machine-readable identity.',
              'Answer-first content and service/area pages AI can quote.',
              'Identity consistency across Google, Bing, Apple, and the directories AI cross-checks.',
              '60 days of AI-visibility tracking to prove it worked.',
            ].map((s) => (
              <li key={s} className="flex items-start gap-3 font-inter" style={{ fontSize: '15.5px', lineHeight: 1.6, color: DIM, fontWeight: 300 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0" style={{ marginTop: '1px' }}>
                  <path d="M5 10L8.5 13.5L15 7" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <p className="font-inter mb-10" style={{ fontSize: '16px', lineHeight: 1.6, color: FG, fontWeight: 500 }}>
            You own everything on handoff — website, code, domain. No monthly retainer.
          </p>

          <div className="d-eyebrow mb-4">WHO IT&apos;S FOR</div>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            High-trust, high-ticket North Idaho businesses whose customers research before they buy: custom home
            builders, high-end custom van builders, specialty dental, med spas, premium home services, and specialty law
            — across Coeur d&apos;Alene, Post Falls, Hayden, Rathdrum, and Sandpoint.
          </p>
        </GlassPanel>
      </section>

      {/* ── The guarantee ────────────────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)', border: '1px solid rgba(93,213,255,0.45)', boxShadow: '0 0 0 1px rgba(93,213,255,0.12), 0 24px 70px -30px rgba(93,213,255,0.4)' }}>
          <div className="d-eyebrow mb-6">THE GUARANTEE</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG, maxWidth: '18ch' }}>
            Cited by name in 60 days, <em className="serif" style={{ color: ACCENT }}>or your money back.</em>
          </h2>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            If AI isn&apos;t naming your business on the questions we agree to target, across the engines we agree to
            measure, within 60 days — we refund the full build fee, and you keep the entire website.{' '}
            <Link href="/pricing" style={{ color: ACCENT, borderBottom: '1px solid rgba(93,213,255,0.4)' }}>Details on the Pricing page →</Link>
          </p>
        </GlassPanel>
      </section>

      {/* ── Local FAQ ────────────────────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">NORTH IDAHO AI SEARCH · QUESTIONS WE GET</div>
          <div className="flex flex-col gap-5">
            {faqItems.map((item) => (
              <div key={item.q} className="glass-panel-soft" style={{ padding: '24px 28px' }}>
                <p className="font-inter font-semibold mb-2" style={{ fontSize: '16px', color: FG, letterSpacing: '-0.01em' }}>{item.q}</p>
                <p className="font-inter" style={{ fontSize: '14.5px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="secondary-section" style={{ ...sectionGap, paddingBottom: '120px' }}>
        <GlassPanel style={{ padding: 'clamp(40px, 6vw, 72px)', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">SEE WHERE YOU STAND</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG }}>
            See where your North Idaho business <em className="serif" style={{ color: ACCENT }}>stands.</em>
          </h2>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            Run a free Machine Read — we check how you show up across ChatGPT, Perplexity, Google AI, Bing Copilot,
            and Gemini for your local queries, and show you exactly where the gap is. No cost, no pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/machine-read" className="d-btn d-btn-primary">Run My Free Machine Read →</Link>
            <Link href="/pricing" className="d-btn d-btn-ghost">See Pricing →</Link>
          </div>
        </GlassPanel>
      </section>
    </SecondaryPageShell>
  );
}
