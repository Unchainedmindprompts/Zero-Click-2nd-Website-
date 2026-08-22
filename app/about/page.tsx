import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import { CONNECTIVE_LAYER, LUXE_CONNECTIVE, MARKET_SHAPE, NOT_A_CLAIM, REVIEW_HREF } from '@/lib/positioning';

export const metadata: Metadata = {
  title: 'About KodeCite — Business truth before technology',
  description:
    'Kodecite works on the connective layer for service businesses — verified truth, explicit capabilities, controlled action, owned infrastructure, and human handoff. Founded by Mark Abplanalp.',
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

const layers = [
  {
    k: '1', t: 'TRUTH',
    q: 'Can a system tell who you are, what you do, where you work, and what you will not do?',
    d: 'Identity, people, services, products, locations, credentials, proof, policies, and limitations — one authoritative record.',
  },
  {
    k: '2', t: 'CAPABILITY',
    q: 'Can it determine what may be requested, and what success does not mean?',
    d: 'Required information, geography, available services, and an honest definition of a completed request.',
  },
  {
    k: '3', t: 'CONTROL',
    q: 'Can it refuse the things you do not permit?',
    d: 'Human confirmation, authorization, validation, rate limiting, idempotency, and fail-closed behavior. No false booking, pricing, purchase, or acceptance.',
  },
];

const buildItems = [
  'Canonical business truth before any file format',
  'Owned Next.js / Vercel infrastructure where that is the right stack',
  'Entity graph and structured data as delivery, not the product',
  'Capability maps and, when permitted, protected actions',
  'llms.txt and agent.json as discovery files — not a claim that every system reads them',
  'Human handoff when the request requires a person',
  'GitHub and Vercel accounts you own',
  'No mandatory retainer',
];

const principles = [
  { n: '01', h: 'You own everything.', d: 'Your repository, your domain, your hosting account. If the engagement ends, the business does not skip a beat.' },
  { n: '02', h: 'No required retainer.', d: 'We scope, build, and hand off. If you need more later, we scope a new engagement. Active capabilities may still need maintenance and third-party costs.' },
  { n: '03', h: 'Business truth comes before technology.', d: 'Schema, JSON, APIs, and MCP are delivery formats. The real product is an accurate business model plus controlled machine use.' },
  { n: '04', h: 'Speak plainly. Show the work.', d: 'No jargon walls. No black boxes. Every recommendation is explained in language you can use to decide.' },
  { n: '05', h: 'Model only what the business permits.', d: 'We do not publish an action the owner has not authorized, and we do not call a consultation request a booking.' },
];

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

      <section style={{ padding: '120px 32px 80px', backgroundColor: 'var(--d-bg)' }}>
        <div style={wrap}>
          <div className="d-eyebrow mb-6">ABOUT KODECITE</div>
          <h1
            className="font-inter font-semibold mb-7"
            style={{ fontSize: 'clamp(30px, 3.9vw, 52px)', lineHeight: 1.08, letterSpacing: '-0.03em', color: FG, maxWidth: '900px' }}
          >
            Business truth comes before{' '}
            <em className="serif" style={{ color: ACCENT }}>technology.</em>
          </h1>
          <p className="font-inter" style={{ ...leadStyle, maxWidth: '660px' }}>
            {CONNECTIVE_LAYER} Schema, JSON, APIs, and a future MCP connection are how that infrastructure gets published.
            The product is an accurate model of the business — and controlled machine use of it.
          </p>
        </div>
      </section>

      <section style={sectionB}>
        <div style={wrap}>
          <p className="font-inter mb-4" style={eyebrow}>01 / WHY KODECITE EXISTS</p>
          <h2 className="font-inter font-semibold mb-6" style={{ ...h2Style, maxWidth: '760px' }}>
            Luxe needed to be understood. <em className="serif" style={{ color: ACCENT }}>Then it needed to be usable.</em>
          </h2>
          <div style={{ maxWidth: '720px' }}>
            <p className="font-inter mb-6" style={{ ...leadStyle, fontSize: '16px', lineHeight: 1.75 }}>
              The practice started with Luxe Window Works. The first job was accurate understanding and recommendation:
              identity, entity, services, geography, and policies that machines could check instead of guess.
            </p>
            <p className="font-inter" style={{ ...leadStyle, fontSize: '16px', lineHeight: 1.75 }}>
              That foundation made a second job possible: a live, protected in-home consultation capability.
              An outside system can now discover what Luxe permits, submit a request, and get an honest outcome — without booking, pricing, or accepting a project.
              Kodecite exists to make that kind of infrastructure repeatable for other service businesses.
              {` ${LUXE_CONNECTIVE}`}
            </p>
            <p className="font-inter" style={{ ...leadStyle, fontSize: '16px', lineHeight: 1.75, marginTop: '24px' }}>
              {MARKET_SHAPE} {NOT_A_CLAIM} Visibility tools, schema products, schedulers, browser automation, commerce rails, and enterprise agent governance already exist as isolated layers. The underserved work is connecting them for a real service business.
            </p>
          </div>
        </div>
      </section>

      <section style={sectionA}>
        <div style={wrap}>
          <p className="font-inter mb-4" style={eyebrow}>02 / THE WORK</p>
          <h2 className="font-inter font-semibold mb-3" style={h2Style}>
            Understand. Verify. <em className="serif" style={{ color: ACCENT }}>Act only when allowed.</em>
          </h2>
          <p className="font-inter font-semibold mb-12" style={{ fontSize: '18px', letterSpacing: '0.01em', color: DIM }}>
            Truth. Capability. Control.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {layers.map((c) => (
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

          <div style={{ borderLeft: '2px solid var(--d-accent)', paddingLeft: '24px', maxWidth: '820px' }}>
            <p className="font-inter font-semibold" style={{ fontSize: 'clamp(22px, 3vw, 34px)', lineHeight: 1.2, letterSpacing: '-0.02em', color: FG }}>
              AI should not merely find a business.{' '}
              <em className="serif" style={{ color: ACCENT }}>It should know what that business is allowed to do.</em>
            </p>
          </div>
        </div>
      </section>

      <section style={sectionB}>
        <div style={wrap}>
          <p className="font-inter mb-4" style={eyebrow}>03 / WHAT WE BUILD</p>
          <h2 className="font-inter font-semibold mb-6" style={{ ...h2Style, maxWidth: '760px' }}>
            Owned infrastructure. <em className="serif" style={{ color: ACCENT }}>Not a rented stack.</em>
          </h2>
          <p className="font-inter mb-12" style={{ ...leadStyle, maxWidth: '640px' }}>
            Based in North Idaho. Relationships across the PNW — Eastside Seattle, Bend, and the North Idaho–Spokane corridor.
            The offer is remote, not geo-limited.
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

      <section style={sectionA}>
        <div style={wrap}>
          <p className="font-inter mb-4" style={eyebrow}>04 / HOW THE PRACTICE OPERATES</p>
          <h2 className="font-inter font-semibold mb-6" style={h2Style}>
            One-person senior practice. <em className="serif" style={{ color: ACCENT }}>Client ownership.</em>
          </h2>
          <p className="font-inter mb-12" style={{ ...leadStyle, maxWidth: '600px' }}>
            Scoped engagements, durable infrastructure, and a handful of principles the practice will not compromise on.
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

      <section style={sectionB}>
        <div style={wrap}>
          <p className="font-inter mb-4" style={eyebrow}>05 / THE OPERATOR</p>
          <h2 className="font-inter font-semibold mb-10" style={h2Style}>
            Built by someone who already <em className="serif" style={{ color: ACCENT }}>ran the business.</em>
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
                Mark Abplanalp has spent 30 years in sales and has been an entrepreneur since 2002.
                He built and operated window-treatment businesses, lived the work in Issaquah and Bend,
                and now runs the practice from North Idaho. He also spent time in Apple retail commercial —
                operator-led, not agency-led.
              </p>
              <p className="font-inter mb-6" style={{ ...leadStyle, fontSize: '16px', lineHeight: 1.75 }}>
                Kodecite is a one-person senior practice. The PNW relationships are real.
                The client owns the infrastructure. There is no team to hide behind and no retainer required to keep the lights on.
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono" style={{ fontSize: '11px', letterSpacing: '0.1em', color: MUTE }}>
                {['30 YRS · SALES', 'ENTREPRENEUR SINCE 2002', 'WINDOW TREATMENTS', 'APPLE RETAIL · COMMERCIAL', 'ISSAQUAH · BEND · NORTH IDAHO'].map((chip, i, arr) => (
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

      <section style={{ ...sectionA, paddingBottom: '120px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">START WITH THE EVIDENCE</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG }}>
            See what AI can understand, verify, and <em className="serif" style={{ color: ACCENT }}>safely do.</em>
          </h2>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            The Agent Readiness Review is a plain-English look at your current system. No pitch required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={REVIEW_HREF} className="d-btn d-btn-primary">Request an Agent Readiness Review →</Link>
            <Link href="/faq" className="d-btn d-btn-ghost">Read the Start Here page</Link>
          </div>
        </div>
      </section>
    </SecondaryPageShell>
  );
}
