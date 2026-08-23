import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';
import ProductionProof from '@/components/proof/ProductionProof';
import { ORIGIN, WEBSITE_ID, businessRef } from '@/lib/schema';
import { REVIEW_CTA, REVIEW_HREF } from '@/lib/positioning';

const PAGE_URL = `${ORIGIN}/locations/spokane`;

export const metadata: Metadata = {
  title: 'Spokane Business Infrastructure for the Agent-Driven Web',
  description:
    'Based in North Idaho, building for Spokane and anywhere. KodeCite builds the trusted digital business layer so AI can understand, evaluate, recommend, and take authorized action with a service business.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Spokane Business Infrastructure for the Agent-Driven Web',
    description:
      'Make your Spokane business usable by AI. Owned infrastructure that helps AI understand, evaluate, and take authorized next steps.',
    url: PAGE_URL,
    type: 'website',
    images: [{ url: `${ORIGIN}/og-image.png`, width: 1200, height: 630 }],
  },
};

const SPOKANE = { '@type': 'City', name: 'Spokane', sameAs: 'https://en.wikipedia.org/wiki/Spokane,_Washington' };
const SPOKANE_VALLEY = { '@type': 'City', name: 'Spokane Valley', sameAs: 'https://en.wikipedia.org/wiki/Spokane_Valley,_Washington' };
const LIBERTY_LAKE = { '@type': 'City', name: 'Liberty Lake', sameAs: 'https://en.wikipedia.org/wiki/Liberty_Lake,_Washington' };

const faqItems = [
  {
    q: 'Do you work with Spokane businesses?',
    a: 'Yes. We are based in North Idaho and work with Spokane, Spokane Valley, and Liberty Lake operators — and with service businesses anywhere. The offer is remote, not geo-limited.',
  },
  {
    q: 'Are you a Spokane AI SEO agency?',
    a: 'No. Search visibility can follow better infrastructure. The category is owned business infrastructure for the agent-driven web — not an SEO retainer and not a promise that a specific engine will cite you.',
  },
  {
    q: 'How is this different from a Spokane SEO company?',
    a: 'Traditional SEO targets ranked links. AEO and GEO describe discovery. We publish one authoritative record — identity, services, geography, policies, proof, and allowed actions — so a system can understand the business and, when permitted, take a safe next step.',
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
      name: 'Spokane Business Infrastructure — KodeCite.ai',
      description:
        'KodeCite is based in North Idaho and builds owned business infrastructure for Spokane service businesses and operators anywhere.',
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
      areaServed: [SPOKANE, SPOKANE_VALLEY, LIBERTY_LAKE],
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
        { '@type': 'ListItem', position: 2, name: 'Spokane', item: PAGE_URL },
      ],
    },
  ],
};

const FG = 'var(--d-fg)';
const DIM = 'rgba(233, 238, 255, 0.95)';
const MUTE = 'rgba(219, 227, 255, 0.8)';
const ACCENT = 'var(--d-accent)';
const sectionGap = { marginTop: '30px' };

export default function SpokaneLocationPage() {
  return (
    <SecondaryPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />

      <section className="secondary-section secondary-hero">
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">NORTH IDAHO PRACTICE · SPOKANE AND ANYWHERE</div>
          <h1 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(34px, 4.6vw, 58px)', lineHeight: 1.06, letterSpacing: '-0.03em', color: FG, maxWidth: '16ch' }}>
            Make your <em className="serif" style={{ color: ACCENT }}>Spokane</em> business usable by AI.
          </h1>
          <p className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(17px, 2.2vw, 21px)', lineHeight: 1.4, color: FG, maxWidth: '640px' }}>
            Owned infrastructure that lets AI understand what you offer, verify what is true, recommend you accurately, and take the next safe step.
          </p>
          <p className="font-inter mb-10" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '660px' }}>
            KodeCite is based in North Idaho and works with Spokane, Spokane Valley, and Liberty Lake operators.
            The offer is the trusted digital business layer for service businesses. The website remains the human-facing experience. Action is scoped only when the real business permits it.
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
            Ranking and reviews are not the same as <em className="serif" style={{ color: ACCENT }}>being usable by AI.</em>
          </h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '700px' }}>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              A Spokane business can rank, collect reviews, and still leave an agent unable to reconstruct what can be requested, where the work happens, or what happens next.
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
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            You own the repo, the site, and the deployed infrastructure. No required retainer.
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
          <div className="d-eyebrow mb-6">SPOKANE · QUESTIONS</div>
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
