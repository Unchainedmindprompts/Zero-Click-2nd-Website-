import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';
import ProductionProof from '@/components/proof/ProductionProof';
import { ORIGIN, WEBSITE_ID, businessRef } from '@/lib/schema';
import { REVIEW_CTA, REVIEW_HREF } from '@/lib/positioning';

const PAGE_URL = `${ORIGIN}/locations/north-idaho`;

export const metadata: Metadata = {
  title: 'North Idaho Business Infrastructure for the Agent-Driven Web',
  description:
    'Based in North Idaho. KodeCite builds the trusted digital business layer that lets AI understand, evaluate, recommend, and take authorized action with a service business — here or anywhere.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'North Idaho Business Infrastructure for the Agent-Driven Web',
    description:
      'Make your North Idaho business usable by AI. Owned truth, capability, and control — so agents can take authorized next steps.',
    url: PAGE_URL,
    type: 'website',
    images: [{ url: `${ORIGIN}/og-image.png`, width: 1200, height: 630 }],
  },
};

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
    a: 'We are based in North Idaho — Coeur d’Alene, Post Falls, Hayden, Rathdrum, Sandpoint, and the Inland Northwest, including Spokane. The offer is remote. We also build for service businesses anywhere.',
  },
  {
    q: 'Is this answer engine optimization for North Idaho?',
    a: 'AEO describes discovery. It is a supporting outcome, not the product. The work is making the business understandable, verifiable, recommendable, actionable, and controlled.',
  },
  {
    q: 'Does every build include an action endpoint?',
    a: 'No. Foundation Build publishes owned truth and discovery. A protected action is scoped separately after the real business rules are understood.',
  },
];

const locationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'North Idaho Business Infrastructure — KodeCite.ai',
      description:
        'KodeCite is based in North Idaho and builds owned business infrastructure so AI can understand a service business and take the next safe step.',
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
      name: 'Owned business infrastructure',
      serviceType: ['Owned business infrastructure', 'Entity graph infrastructure', 'Controlled agent action'],
      provider: businessRef,
      areaServed: [NORTH_IDAHO, KOOTENAI, BONNER, CDA, POST_FALLS, HAYDEN, RATHDRUM, SANDPOINT],
      description:
        'Owned website, truth, discovery, and — when the business permits — protected actions. Based in North Idaho. Built for service businesses anywhere. Foundation does not automatically include a production action endpoint.',
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
        { '@type': 'ListItem', position: 2, name: 'North Idaho', item: PAGE_URL },
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

      <section className="secondary-section secondary-hero">
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">BASED IN NORTH IDAHO · BUILT FOR ANYWHERE</div>
          <h1 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(32px, 4.4vw, 56px)', lineHeight: 1.07, letterSpacing: '-0.03em', color: FG, maxWidth: '16ch' }}>
            Make your <em className="serif" style={{ color: ACCENT }}>North Idaho</em> business usable by AI.
          </h1>
          <p className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(17px, 2.2vw, 21px)', lineHeight: 1.4, color: FG, maxWidth: '640px' }}>
            Owned infrastructure that lets AI understand what you offer, verify what is true, recommend you accurately, and take the next safe step.
          </p>
          <p className="font-inter mb-10" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '680px' }}>
            KodeCite is based in North Idaho — Coeur d&apos;Alene, Post Falls, Hayden, Rathdrum, Sandpoint, and the Inland Northwest.
            The offer is the trusted digital business layer for service businesses: remote, not geo-limited. The website remains the human-facing experience. Action is scoped only when the real business permits it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href={REVIEW_HREF} className="d-btn d-btn-primary justify-center">{REVIEW_CTA} →</Link>
            <Link href="/pricing" className="d-btn d-btn-ghost justify-center">See Pricing →</Link>
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">THE PROBLEM</div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG, maxWidth: '22ch' }}>
            Local reputation is not the same as <em className="serif" style={{ color: ACCENT }}>a usable business model.</em>
          </h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '700px' }}>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              Most North Idaho businesses are spread across a website, directories, forms, calendars, and unwritten rules.
              AI may find pieces. It still may not know what can be requested or what a safe next step is.
            </p>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              WordPress, Wix, and Squarespace sites are not blank to every crawler. They often make it harder to publish one owned record. A full rebuild is the strongest path. A sidecar may fit selected pilots.
            </p>
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">DISCOVERY PROOF</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="glass-panel-soft" style={{ padding: '26px 30px' }}>
              <p className="font-inter font-semibold mb-2" style={{ fontSize: '16px', color: FG }}>Real Estate With Shirin <span style={{ color: MUTE, fontWeight: 400 }}>· North Idaho</span></p>
              <p className="font-inter" style={{ fontSize: '14.5px', lineHeight: 1.6, color: DIM, fontWeight: 300 }}>
                Dated screenshots show discovery across Bing, Google AI, ChatGPT, and Gemini. Visibility is evidence, not a permanent placement claim.
              </p>
            </div>
            <div className="glass-panel-soft" style={{ padding: '26px 30px' }}>
              <p className="font-inter font-semibold mb-2" style={{ fontSize: '16px', color: FG }}>Luxe Window Works <span style={{ color: MUTE, fontWeight: 400 }}>· Post Falls</span></p>
              <p className="font-inter" style={{ fontSize: '14.5px', lineHeight: 1.6, color: DIM, fontWeight: 300 }}>
                Discovery came first. The later chapter is a live, protected consultation capability — not a booking, price, or purchase.
              </p>
            </div>
          </div>
          <p className="font-inter" style={{ fontSize: '13.5px', lineHeight: 1.6, color: MUTE, fontWeight: 300, fontStyle: 'italic', maxWidth: '640px' }}>
            AI answers vary. These are dated results, not a guarantee.{' '}
            <Link href="/services#proof" style={{ color: ACCENT, borderBottom: '1px solid rgba(93,213,255,0.4)' }}>See discovery screenshots →</Link>
          </p>
        </GlassPanel>
      </section>

      <ProductionProof />

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">WHAT WE BUILD</div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG }}>
            Three paths. <em className="serif" style={{ color: ACCENT }}>Honest scope.</em>
          </h2>
          <ul className="flex flex-col gap-3 mb-8" style={{ maxWidth: '700px' }}>
            {[
              'Foundation Build — owned website, truth, and discovery. $4,995. Does not automatically include a production action endpoint.',
              'Agent Capability Build — one defined action at a time after the rules are understood. No published price.',
              'Platform Capability Layer — Pilot — sidecar for selected WordPress / Wix / Squarespace businesses. Application-only.',
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
            You own the repo, the site, and the deployed infrastructure. No required retainer.
          </p>
          <div className="d-eyebrow mb-4">WHO IT&apos;S FOR</div>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            Established high-trust, high-value service businesses across Coeur d&apos;Alene, Post Falls, Hayden, Rathdrum, Sandpoint — and operators anywhere.
          </p>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)', border: '1px solid rgba(93,213,255,0.45)', boxShadow: '0 0 0 1px rgba(93,213,255,0.12), 0 24px 70px -30px rgba(93,213,255,0.4)' }}>
          <div className="d-eyebrow mb-6">ACCEPTANCE STANDARD</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG, maxWidth: '18ch' }}>
            Agreed outputs must <em className="serif" style={{ color: ACCENT }}>pass tests.</em>
          </h2>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            Before a build, we agree what must be published, what AI must be able to understand, and — when an action is included — what the protected workflow must do. This is not a citation money-back guarantee.{' '}
            <Link href="/pricing" style={{ color: ACCENT, borderBottom: '1px solid rgba(93,213,255,0.4)' }}>Details on Pricing →</Link>
          </p>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">NORTH IDAHO · QUESTIONS</div>
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

      <section className="secondary-section" style={{ ...sectionGap, paddingBottom: '120px' }}>
        <GlassPanel style={{ padding: 'clamp(40px, 6vw, 72px)', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">AGENT READINESS REVIEW</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG }}>
            See what AI can understand, verify, and <em className="serif" style={{ color: ACCENT }}>safely do.</em>
          </h2>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            A review of identity, services, geography, policies, discovery, and whether a safe next action exists. This is a review request, not a booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={REVIEW_HREF} className="d-btn d-btn-primary">{REVIEW_CTA} →</Link>
            <Link href="/pricing" className="d-btn d-btn-ghost">See Pricing →</Link>
          </div>
        </GlassPanel>
      </section>
    </SecondaryPageShell>
  );
}
