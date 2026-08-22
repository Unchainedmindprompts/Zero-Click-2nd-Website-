import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';
import ProductionProof from '@/components/proof/ProductionProof';
import { ORIGIN, WEBSITE_ID, businessRef } from '@/lib/schema';
import { REVIEW_CTA, REVIEW_HREF } from '@/lib/positioning';

const PAGE_URL = `${ORIGIN}/locations/coeur-dalene`;

export const metadata: Metadata = {
  title: "Coeur d'Alene Business Infrastructure for the Agent-Driven Web",
  description:
    "Based in Coeur d'Alene, Idaho. KodeCite builds owned infrastructure that lets AI understand, verify, recommend, and take the next safe step with a service business — here or anywhere.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Coeur d'Alene Business Infrastructure for the Agent-Driven Web",
    description:
      "Make your Coeur d'Alene business usable by AI. Owned truth, capability, and control — not an AEO retainer.",
    url: PAGE_URL,
    type: 'website',
    images: [{ url: `${ORIGIN}/og-image.png`, width: 1200, height: 630 }],
  },
};

const CDA = { '@type': 'City', name: "Coeur d'Alene", sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho' };
const KOOTENAI = { '@type': 'AdministrativeArea', name: 'Kootenai County', sameAs: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho' };

const faqItems = [
  {
    q: 'Are you a Coeur d’Alene SEO company?',
    a: 'We are based in Coeur d’Alene. Search visibility can follow better infrastructure. The category is owned business infrastructure for the agent-driven web — not an SEO retainer and not a promise that a specific engine will cite you.',
  },
  {
    q: 'Do you only work with Coeur d’Alene businesses?',
    a: 'No. We are based in North Idaho and build for service businesses anywhere. The offer is remote, not geo-limited.',
  },
  {
    q: 'Is this AEO or AI search optimization?',
    a: 'AEO and GEO describe discovery. They are supporting outcomes, not the product. The work is making the business understandable, verifiable, recommendable, actionable, and controlled.',
  },
  {
    q: 'Does every build include an action endpoint?',
    a: 'No. Foundation Build publishes owned truth and discovery. A protected action is scoped separately after the real business rules are understood.',
  },
  {
    q: 'Is KodeCite actually local?',
    a: 'Yes — based in Coeur d’Alene / North Idaho. About may mention the PNW, Eastside Seattle, Bend, and the North Idaho–Spokane corridor. The practice is one-person and operator-led.',
  },
];

const locationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Coeur d'Alene Business Infrastructure — KodeCite.ai",
      description:
        "KodeCite is based in Coeur d'Alene and builds owned business infrastructure so AI can understand a service business and take the next safe step.",
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
      areaServed: [CDA, KOOTENAI],
      description:
        "Owned website, truth, discovery, and — when the business permits — protected actions. Based in Coeur d'Alene. Built for service businesses anywhere. Foundation does not automatically include a production action endpoint.",
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
        { '@type': 'ListItem', position: 2, name: "Coeur d'Alene", item: PAGE_URL },
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

      <section className="secondary-section secondary-hero">
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">BASED IN COEUR D&apos;ALENE · BUILT FOR ANYWHERE</div>
          <h1 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(34px, 4.6vw, 58px)', lineHeight: 1.06, letterSpacing: '-0.03em', color: FG, maxWidth: '16ch' }}>
            Make your <em className="serif" style={{ color: ACCENT }}>Coeur d&apos;Alene</em> business usable by AI.
          </h1>
          <p className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(17px, 2.2vw, 21px)', lineHeight: 1.4, color: FG, maxWidth: '640px' }}>
            Owned infrastructure that lets AI understand what you offer, verify what is true, recommend you accurately, and take the next safe step.
          </p>
          <p className="font-inter mb-10" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '660px' }}>
            KodeCite is based in Coeur d&apos;Alene. The offer is not a local AEO agency and not a citation guarantee.
            We work on the connective layer for service businesses — verified truth, explicit capabilities, controlled action, owned infrastructure, and human handoff.
            The category is early and fragmented. Discovery can follow. Action is scoped only when the real business permits it.
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
            AI may find pieces of the business. <em className="serif" style={{ color: ACCENT }}>It still may not be able to act safely.</em>
          </h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '700px' }}>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              Most Coeur d&apos;Alene businesses are spread across a website, directories, forms, calendars, and unwritten rules.
              A customer — or their agent — can find a name and still not know what can be requested, where the business works, or what happens next.
            </p>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              WordPress, Wix, and Squarespace sites are not blank to every crawler. They often make it harder to publish one owned record.
              A full rebuild is the strongest path. A sidecar may fit selected pilots.
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
                Rebuilt on an owned entity-graph foundation. Dated screenshots show discovery across Bing, Google AI, ChatGPT, and Gemini. Visibility is evidence, not a permanent placement claim.
              </p>
            </div>
            <div className="glass-panel-soft" style={{ padding: '26px 30px' }}>
              <p className="font-inter font-semibold mb-2" style={{ fontSize: '16px', color: FG }}>Luxe Window Works <span style={{ color: MUTE, fontWeight: 400 }}>· Post Falls</span></p>
              <p className="font-inter" style={{ fontSize: '14.5px', lineHeight: 1.6, color: DIM, fontWeight: 300 }}>
                Discovery came first. The later chapter is a live, protected in-home consultation capability — not a booking, price, or purchase.
              </p>
            </div>
          </div>
          <p className="font-inter" style={{ fontSize: '13.5px', lineHeight: 1.6, color: MUTE, fontWeight: 300, fontStyle: 'italic', maxWidth: '640px' }}>
            AI answers vary. These are dated results, not a guarantee that any engine will cite a business.{' '}
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
            You own the repo, the site, and the deployed infrastructure. No required retainer. Active capabilities may need maintenance.
          </p>
          <div className="d-eyebrow mb-4">WHO IT&apos;S FOR</div>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            Established high-trust, high-value service businesses — custom home, specialty healthcare, premium home services, and similar operators whose customers research before they buy.
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
            Before a build, we agree what the system must publish, what AI must be able to understand, and — when an action is included — what the protected workflow must successfully do.
            The engagement is not complete until those tests pass. This is not a citation money-back guarantee.{' '}
            <Link href="/pricing" style={{ color: ACCENT, borderBottom: '1px solid rgba(93,213,255,0.4)' }}>Details on Pricing →</Link>
          </p>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">COEUR D&apos;ALENE · QUESTIONS</div>
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
