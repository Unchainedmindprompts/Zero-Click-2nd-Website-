import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';

export const metadata: Metadata = {
  title: 'About KodeCite — Clarity, Verification & Trust for AI Search',
  description:
    'KodeCite builds AI-readable website infrastructure for businesses that need to be understood, verified, and trusted by AI systems.',
  alternates: { canonical: 'https://www.kodecite.ai/about' },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.kodecite.ai/#founder',
  name: 'Mark Abplanalp',
  jobTitle: 'Founder',
  worksFor: { '@id': 'https://www.kodecite.ai/#business' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: "Coeur d'Alene",
    addressRegion: 'ID',
    addressCountry: 'US',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.kodecite.ai/about' },
  ],
};

// CVT — the public framework
const cvt = [
  {
    k: 'C', t: 'CLARITY',
    q: 'Can AI understand who you are, what you do, where you serve, and what each page is actually about?',
    d: 'Clarity comes from site structure, answer-first content, clean service and location relationships, schema, internal linking, and clear entity definitions — so an AI system reads your business without guessing.',
  },
  {
    k: 'V', t: 'VERIFICATION',
    q: 'Can AI confirm that your business is real and consistent across trusted sources?',
    d: 'Verification comes from Google Business Profile, Bing Places, Apple Maps, Yelp, BBB, licensing profiles, directories, reviews, NAP consistency, sameAs links, and matching structured data across every place you appear.',
  },
  {
    k: 'T', t: 'TRUST',
    q: 'Can AI corroborate what you claim?',
    d: 'Trust is built when important claims connect to credible sources an AI system can check — third-party URLs, authoritative references, citations, reviews, credentials, location data, and schema relationships like mentions, sameAs, about, and spatialCoverage.',
  },
];

// What we build — plain English first, technical second
const buildItems = [
  'Server-rendered pages AI crawlers can actually read',
  'Structured JSON-LD schema across every route',
  'Entity graph alignment — one consistent identity',
  'Answer-first page architecture',
  'Review and authority-signal structure',
  'Directory and profile consistency',
  'Third-party corroboration links',
  'llms.txt and agent.json where appropriate',
  'GitHub and Vercel infrastructure you own',
  'No platform lock-in',
];

// How the practice operates
const principles = [
  { n: '01', h: 'You own everything.', d: 'Your repository, your domain, your hosting account, your design system. If the engagement ends, your business doesn’t skip a beat. No platform rent. No managed service that holds your site hostage.' },
  { n: '02', h: 'No required retainer.', d: 'We scope, build, and hand off. You don’t pay monthly to keep your own website running. If you need more later, we scope a new engagement — you’re never on a meter.' },
  { n: '03', h: 'Schema is product, not metadata.', d: 'Most agencies treat structured data as an afterthought. It’s the actual product — the JSON-LD graph is what AI systems read, which makes it the most important code on the site.' },
  { n: '04', h: 'Speak plainly. Show the work.', d: 'No jargon walls. No black boxes. Every recommendation and every decision in the build is explained in language you can use to make a decision.' },
  { n: '05', h: 'Durable infrastructure, not trend-chasing.', d: 'Web standards. Server-rendered HTML. Real schema. The durable foundation that doesn’t need rebuilding every time the platforms shift — because they will shift again.' },
];

// shared text colors
const FG = 'var(--d-fg)';
const DIM = 'var(--d-fg-dim)';
const MUTE = 'var(--d-fg-mute)';
const ACCENT = 'var(--d-accent)';
const wrap = { maxWidth: '1180px', margin: '0 auto' } as const;
const sectionA = { padding: '100px 32px', backgroundColor: 'var(--d-bg)' };
const sectionB = { padding: '100px 32px', backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' };
const eyebrow = { fontSize: '11px', letterSpacing: '0.18em', color: ACCENT } as const;
const h2Style = { fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: FG } as const;
const leadStyle = { fontSize: '17px', lineHeight: 1.65, color: DIM, fontWeight: 300 } as const;

export default function AboutPage() {
  return (
    <SecondaryPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{ padding: '120px 32px 80px', backgroundColor: 'var(--d-bg)' }}>
        <div style={wrap}>
          <div className="d-eyebrow mb-6">ABOUT KODECITE</div>
          <h1
            className="font-inter font-semibold mb-7"
            style={{ fontSize: 'clamp(30px, 3.9vw, 52px)', lineHeight: 1.08, letterSpacing: '-0.03em', color: FG, maxWidth: '900px' }}
          >
            Traditional websites were built for people to scroll.{' '}
            <em className="serif" style={{ color: ACCENT }}>KodeCite builds for AI systems that verify.</em>
          </h1>
          <p className="font-inter" style={{ ...leadStyle, maxWidth: '660px' }}>
            Most websites were designed for visitors who land on a page, scroll, read, and click.
            AI systems work differently. Before they recommend a business, they need to understand
            what it is, verify that it is real, and trust that its claims can be corroborated.
          </p>
        </div>
      </section>

      {/* ── 01 · Why KodeCite exists ─────────────────────── */}
      <section style={sectionB}>
        <div style={wrap}>
          <p className="font-inter mb-4" style={eyebrow}>01 / WHY KODECITE EXISTS</p>
          <h2 className="font-inter font-semibold mb-6" style={{ ...h2Style, maxWidth: '760px' }}>
            Business discovery changed. <em className="serif" style={{ color: ACCENT }}>Most websites did not.</em>
          </h2>
          <div style={{ maxWidth: '720px' }}>
            <p className="font-inter mb-6" style={{ ...leadStyle, fontSize: '16px', lineHeight: 1.75 }}>
              Discovery is no longer only about ranking pages for humans to click. People now ask
              AI systems for recommendations, comparisons, and answers — and those systems evaluate
              businesses differently than a search results page ever did.
            </p>
            <p className="font-inter" style={{ ...leadStyle, fontSize: '16px', lineHeight: 1.75 }}>
              KodeCite exists because the old website model was built for a different discovery
              environment. A traditional site can look polished and still be difficult for AI
              systems to understand. The problem is usually invisible: unclear entity structure,
              inconsistent business data, weak schema, disconnected reviews, unsupported claims,
              and no clean relationship between the website and the rest of the business&apos;s
              online footprint.
            </p>
          </div>
        </div>
      </section>

      {/* ── 02 · The CVT framework ───────────────────────── */}
      <section style={sectionA}>
        <div style={wrap}>
          <p className="font-inter mb-4" style={eyebrow}>02 / THE FRAMEWORK</p>
          <h2 className="font-inter font-semibold mb-3" style={h2Style}>
            AI visibility starts with <em className="serif" style={{ color: ACCENT }}>CVT.</em>
          </h2>
          <p className="font-inter font-semibold mb-12" style={{ fontSize: '18px', letterSpacing: '0.01em', color: DIM }}>
            Clarity. Verification. Trust.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {cvt.map((c) => (
              <article
                key={c.k}
                style={{ background: 'var(--d-bg-2)', border: '1px solid var(--d-line)', borderRadius: '14px', padding: '32px 30px' }}
              >
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="serif" style={{ fontSize: '40px', lineHeight: 1, color: ACCENT }}>{c.k}</span>
                  <span className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.18em', color: MUTE }}>{c.t}</span>
                </div>
                <p className="font-inter font-semibold mb-4" style={{ fontSize: '16px', lineHeight: 1.35, letterSpacing: '-0.01em', color: FG }}>
                  {c.q}
                </p>
                <p className="font-inter" style={{ fontSize: '14px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
                  {c.d}
                </p>
              </article>
            ))}
          </div>

          {/* prominent thesis line */}
          <div style={{ borderLeft: '2px solid var(--d-accent)', paddingLeft: '24px', maxWidth: '820px' }}>
            <p className="font-inter font-semibold" style={{ fontSize: 'clamp(22px, 3vw, 34px)', lineHeight: 1.2, letterSpacing: '-0.02em', color: FG }}>
              Trust is not what you claim.{' '}
              <em className="serif" style={{ color: ACCENT }}>Trust is what AI can corroborate.</em>
            </p>
            <p className="font-inter mt-4" style={{ fontSize: '15px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '640px' }}>
              Corroboration is the mechanism that creates trust: every meaningful claim connected to
              a source an AI system can independently check.
            </p>
          </div>
        </div>
      </section>

      {/* ── 03 · What KodeCite builds ────────────────────── */}
      <section style={sectionB}>
        <div style={wrap}>
          <p className="font-inter mb-4" style={eyebrow}>03 / WHAT WE BUILD</p>
          <h2 className="font-inter font-semibold mb-6" style={{ ...h2Style, maxWidth: '760px' }}>
            We turn websites into <em className="serif" style={{ color: ACCENT }}>AI-readable infrastructure.</em>
          </h2>
          <p className="font-inter mb-12" style={{ ...leadStyle, maxWidth: '640px' }}>
            KodeCite rebuilds or restructures the foundation beneath your website so AI systems can
            read the business clearly, connect it to trusted sources, and understand why it deserves
            to be recommended. Plain English first, technical underneath.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4" style={{ maxWidth: '900px' }}>
            {buildItems.map((item) => (
              <div key={item} className="flex items-start gap-3" style={{ borderTop: '1px solid var(--d-line)', paddingTop: '14px' }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="flex-shrink-0" style={{ marginTop: '2px' }}>
                  <path d="M5 10L8.5 13.5L15 7" stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-inter" style={{ fontSize: '15px', lineHeight: 1.5, color: DIM, fontWeight: 300 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 · Who this is for ─────────────────────────── */}
      <section style={sectionA}>
        <div style={wrap}>
          <p className="font-inter mb-4" style={eyebrow}>04 / WHO THIS IS FOR</p>
          <h2 className="font-inter font-semibold mb-6" style={{ ...h2Style, maxWidth: '760px' }}>
            Built for real businesses with <em className="serif" style={{ color: ACCENT }}>real reputation.</em>
          </h2>
          <div style={{ maxWidth: '720px' }}>
            <p className="font-inter mb-6" style={{ ...leadStyle, fontSize: '16px', lineHeight: 1.75 }}>
              KodeCite works best for businesses that already have something worth proving:
              experience, reviews, credentials, a defined service area, and a real reputation in the
              market. Established owner-operated businesses, professional services, and local or
              regional experts.
            </p>
            <p className="font-inter" style={{ ...leadStyle, fontSize: '16px', lineHeight: 1.75 }}>
              The work does not invent trust, and it is not a shortcut for a business with no
              reputation. It organizes, verifies, and exposes the trust that already exists — so AI
              systems can read it.
            </p>
          </div>
        </div>
      </section>

      {/* ── 05 · How the practice operates ───────────────── */}
      <section style={sectionB}>
        <div style={wrap}>
          <p className="font-inter mb-4" style={eyebrow}>05 / HOW THE PRACTICE OPERATES</p>
          <h2 className="font-inter font-semibold mb-6" style={h2Style}>
            Built once. <em className="serif" style={{ color: ACCENT }}>Owned forever.</em>
          </h2>
          <p className="font-inter mb-12" style={{ ...leadStyle, maxWidth: '600px' }}>
            Scoped engagements, durable infrastructure, and a handful of principles the practice
            won&apos;t compromise on.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p) => (
              <article key={p.n} style={{ background: 'var(--d-bg-3)', border: '1px solid var(--d-line)', borderRadius: '12px', padding: '26px 28px' }}>
                <p className="font-mono mb-4" style={{ fontSize: '10px', letterSpacing: '0.18em', color: ACCENT }}>{p.n}</p>
                <h3 className="font-inter font-semibold mb-3" style={{ fontSize: '16px', lineHeight: 1.3, letterSpacing: '-0.01em', color: FG }}>{p.h}</h3>
                <p className="font-inter" style={{ fontSize: '14px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 · Founder credibility (short) ─────────────── */}
      <section style={sectionA}>
        <div style={wrap}>
          <p className="font-inter mb-4" style={eyebrow}>06 / THE OPERATOR</p>
          <h2 className="font-inter font-semibold mb-10" style={h2Style}>
            Built by an <em className="serif" style={{ color: ACCENT }}>operator.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 items-start" style={{ maxWidth: '900px' }}>
            <figure style={{ width: '100%', maxWidth: '200px' }}>
              <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: '12px', border: '1px solid var(--d-line)', overflow: 'hidden' }}>
                <Image
                  src="/mark-abplanalp.png"
                  alt="Mark Abplanalp — Founder, KodeCite.ai"
                  fill
                  sizes="(max-width: 768px) 60vw, 200px"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
            </figure>

            <div>
              <p className="font-inter mb-6" style={{ ...leadStyle, fontSize: '16px', lineHeight: 1.75 }}>
                KodeCite was founded by Mark Abplanalp, an operator with 23 years building service
                businesses that depended on being found. After watching discovery shift from
                directories to Google to reviews to AI-driven recommendations, he built the
                infrastructure he wished traditional web agencies already understood — because his
                own businesses needed it.
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono" style={{ fontSize: '11px', letterSpacing: '0.1em', color: MUTE }}>
                {['23 YRS · ENTREPRENEUR', '30 YRS · SALES', 'APPLE RETAIL · COMMERCIAL', 'NORTH IDAHO · PNW ROOTS'].map((chip, i, arr) => (
                  <span key={chip} className="flex items-center gap-3">
                    {chip}
                    {i < arr.length - 1 && <span style={{ color: 'var(--d-line)' }}>/</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07 · CTA ─────────────────────────────────────── */}
      <section style={{ ...sectionB, paddingBottom: '120px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">START WITH THE EVIDENCE</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG }}>
            Start with what AI can <em className="serif" style={{ color: ACCENT }}>verify.</em>
          </h2>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            The Machine Read shows what AI systems can and can&apos;t understand about your business
            right now. You get a plain-English report on clarity, verification, and trust — no pitch
            required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="d-btn d-btn-primary">Run my site →</Link>
            <Link href="/faq" className="d-btn d-btn-ghost">Read the Start Here page</Link>
          </div>
        </div>
      </section>
    </SecondaryPageShell>
  );
}
