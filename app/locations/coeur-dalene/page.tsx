import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';
import { ORIGIN, WEBSITE_ID, businessRef } from '@/lib/schema';

const PAGE_URL = `${ORIGIN}/locations/coeur-dalene`;

export const metadata: Metadata = {
  title: "AI Search Optimization in Coeur d'Alene, Idaho",
  description:
    "Get your Coeur d'Alene business cited by name in ChatGPT, Perplexity, Google AI, Bing Copilot, and Gemini. AI search optimization (AEO) from KodeCite — based in Coeur d'Alene.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "AI Search Optimization in Coeur d'Alene, Idaho",
    description:
      "Make your Coeur d'Alene business machine-readable so AI answer engines find it, verify it, and recommend it by name. Built once. Owned forever.",
    url: PAGE_URL,
    type: 'website',
    images: [{ url: `${ORIGIN}/og-image.png`, width: 1200, height: 630 }],
  },
};

// Local City / county nodes with Wikipedia sameAs — same URLs as the #business
// areaServed so business, page, and Service all corroborate the same place.
const CDA = { '@type': 'City', name: "Coeur d'Alene", sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho' };
const KOOTENAI = { '@type': 'AdministrativeArea', name: 'Kootenai County', sameAs: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho' };

const faqItems = [
  {
    q: 'Do I need this if I already rank on Google in Coeur d’Alene?',
    a: 'Yes — AI answers don’t mirror Google rankings. Even a #1-ranked Coeur d’Alene page is cited in AI answers only about half the time, and the reviews that win the Google map pack don’t get you named in ChatGPT. AI visibility is a separate system.',
  },
  {
    q: 'How is this different from SEO?',
    a: 'Traditional SEO targets Google’s blue links. AI search optimization makes your business machine-readable so AI answer engines recommend you by name. Done right, it strengthens your traditional SEO too — but the goal is being the answer, not just a link.',
  },
  {
    q: 'Is KodeCite actually local?',
    a: 'Yes — we’re based in Coeur d’Alene and serve North Idaho, Spokane, and businesses nationally. And we practice what we sell: this site is built on the same entity-graph infrastructure we build for you.',
  },
];

const locationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "AI Search Optimization in Coeur d'Alene, Idaho — KodeCite.ai",
      description:
        "AI search optimization (answer engine optimization) for Coeur d'Alene businesses — machine-readable infrastructure that gets you cited by name in ChatGPT, Perplexity, Google AI, Bing Copilot, and Gemini.",
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
      name: 'AI Search Optimization',
      serviceType: ['Answer Engine Optimization', 'AI Search Optimization', 'AI Visibility Infrastructure'],
      provider: businessRef,
      areaServed: [CDA, KOOTENAI],
      description:
        "Making a Coeur d'Alene business machine-readable so AI answer engines can find it, verify it, and recommend it by name — a rebuilt AI-readable website, a connected entity graph, answer-first content, and 60 days of AI-visibility tracking. Owned forever. No retainer.",
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
        { '@type': 'ListItem', position: 2, name: "AI Search Optimization in Coeur d'Alene", item: PAGE_URL },
      ],
    },
  ],
};

const FG = 'var(--d-fg)';
const DIM = 'rgba(233, 238, 255, 0.95)';
const MUTE = 'rgba(219, 227, 255, 0.8)';
const ACCENT = 'var(--d-accent)';
const sectionGap = { marginTop: '30px' };

export default function CoeurDAleneLocationPage() {
  return (
    <SecondaryPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />

      {/* ── Hero (answer-first) ──────────────────────────── */}
      <section className="secondary-section secondary-hero">
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">AI SEARCH OPTIMIZATION · COEUR D&apos;ALENE, IDAHO</div>
          <h1 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(34px, 4.6vw, 58px)', lineHeight: 1.06, letterSpacing: '-0.03em', color: FG, maxWidth: '17ch' }}>
            AI Search Optimization in <em className="serif" style={{ color: ACCENT }}>Coeur d&apos;Alene, Idaho.</em>
          </h1>
          <p className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(17px, 2.2vw, 21px)', lineHeight: 1.4, color: FG, maxWidth: '640px' }}>
            Get your Coeur d&apos;Alene business cited by name in ChatGPT, Perplexity, Google AI, Bing Copilot,
            and Gemini.
          </p>
          <p className="font-inter mb-10" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '660px' }}>
            AI search optimization — also called answer engine optimization (AEO) — is the work of making your
            business machine-readable so AI answer engines can find it, verify it, and recommend it <em>by name.</em>{' '}
            It&apos;s how a Coeur d&apos;Alene business shows up when a customer asks ChatGPT &ldquo;the best [your service]
            in Coeur d&apos;Alene&rdquo; instead of Googling it. KodeCite builds that infrastructure — and we&apos;re based
            right here in Coeur d&apos;Alene.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/machine-read" className="d-btn d-btn-primary justify-center">Run My Free Machine Read →</Link>
            <Link href="/pricing" className="d-btn d-btn-ghost justify-center">See Pricing →</Link>
          </div>
        </GlassPanel>
      </section>

      {/* ── The local problem ────────────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">THE PROBLEM</div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG, maxWidth: '22ch' }}>
            Your Coeur d&apos;Alene customers are already asking AI — <em className="serif" style={{ color: ACCENT }}>and it may not be naming you.</em>
          </h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '700px' }}>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              More North Idaho buyers start with ChatGPT, Perplexity, and Google&apos;s AI answers than ever. When they
              ask for a local recommendation, the AI names a short list of businesses <em>before</em> the old search
              results even load. If your business isn&apos;t on that list, you&apos;re not losing a click — you&apos;re losing
              the customer before they knew you existed.
            </p>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              And most Coeur d&apos;Alene businesses aren&apos;t on the list. Not because they&apos;re not good — because their
              website can&apos;t be <em>read</em> by AI. Built on WordPress, Wix, or a page-builder, their content and
              business identity aren&apos;t in a machine-readable form an AI engine can trust and quote.
            </p>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              We know this because we tested it. In a local audit, a Coeur d&apos;Alene-area business with{' '}
              <strong style={{ color: FG, fontWeight: 600 }}>1,375 five-star Google reviews</strong> — a clear market leader — was named in{' '}
              <strong style={{ color: FG, fontWeight: 600 }}>zero</strong> of the AI answers we ran for its core service. The AI recommended other companies
              instead. Reviews win Google Maps. They don&apos;t win AI answers.
            </p>
          </div>
        </GlassPanel>
      </section>

      {/* ── Local proof ──────────────────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">PROOF, NOT PROMISES</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="glass-panel-soft" style={{ padding: '26px 30px' }}>
              <p className="font-inter font-semibold mb-2" style={{ fontSize: '16px', color: FG }}>Real Estate With Shirin <span style={{ color: MUTE, fontWeight: 400 }}>· North Idaho</span></p>
              <p className="font-inter" style={{ fontSize: '14.5px', lineHeight: 1.6, color: DIM, fontWeight: 300 }}>
                Rebuilt on our entity-graph foundation — cited across Bing, Google AI, ChatGPT, and Gemini for
                competitive North Idaho queries, beating far older, higher-authority sites.
              </p>
            </div>
            <div className="glass-panel-soft" style={{ padding: '26px 30px' }}>
              <p className="font-inter font-semibold mb-2" style={{ fontSize: '16px', color: FG }}>Luxe Window Works <span style={{ color: MUTE, fontWeight: 400 }}>· Post Falls</span></p>
              <p className="font-inter" style={{ fontSize: '14.5px', lineHeight: 1.6, color: DIM, fontWeight: 300 }}>
                Recommended by name across ChatGPT, Perplexity, and Google AI for North Idaho window treatments,
                ahead of national franchises with 10× the reviews.
              </p>
            </div>
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
            High-trust, high-ticket Coeur d&apos;Alene businesses whose customers research before they buy: custom home
            builders, high-end custom van builders, specialty dental, med spas, premium home services, and specialty law.
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
          <div className="d-eyebrow mb-6">COEUR D&apos;ALENE AI SEARCH · QUESTIONS WE GET</div>
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
            See where your Coeur d&apos;Alene business <em className="serif" style={{ color: ACCENT }}>stands.</em>
          </h2>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            Run a free Machine Read — we check how you show up across ChatGPT, Perplexity, Google AI, Bing Copilot,
            and Gemini for your Coeur d&apos;Alene queries, and show you exactly where the gap is. No cost, no pitch.
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
