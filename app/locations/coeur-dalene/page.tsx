import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';
import ProductionProof from '@/components/proof/ProductionProof';
import { ORIGIN, WEBSITE_ID, businessRef } from '@/lib/schema';
import { REVIEW_CTA, REVIEW_HREF, REVIEW_TURNAROUND } from '@/lib/positioning';

const PAGE_URL = `${ORIGIN}/locations/coeur-dalene`;

export const metadata: Metadata = {
  title: "Coeur d'Alene Websites for Customers and AI Assistants",
  description:
    "Based in Coeur d'Alene, Kodecite builds websites and approved next steps that make service businesses easier for customers and their AI assistants to understand, trust, and contact.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Coeur d'Alene Websites for Customers and AI Assistants",
    description:
      "Clear offers, credible evidence, and useful customer next steps for Coeur d'Alene businesses. A website and accounts you own.",
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
    a: 'We are based in Coeur d’Alene and build business-owned websites and approved customer actions. The work includes clear information that supports discovery, then goes further into fit, evidence, permission, and what happens after a customer chooses you.',
  },
  {
    q: 'Do you only work with Coeur d’Alene businesses?',
    a: 'We work with businesses in Coeur d’Alene and across North Idaho, and deliver projects remotely for service businesses elsewhere too.',
  },
  {
    q: 'Is this AEO or AI search optimization?',
    a: 'Those terms focus on appearing in AI answers. Our work also covers the customer journey after discovery: understanding the offer, checking its evidence, making an approved request, and getting a clear result.',
  },
  {
    q: 'Does every build include an action endpoint?',
    a: 'Foundation Build includes the website, connected business information, and a plan for possible next steps. A live agent-action endpoint is separately scoped around an approved action and its business rules.',
  },
  {
    q: 'Is KodeCite actually local?',
    a: 'Yes. Kodecite is based in Coeur d’Alene, in North Idaho. You work directly with founder Mark Abplanalp.',
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
        "KodeCite is based in Coeur d'Alene and builds websites and approved next steps that help customers and AI assistants understand, trust, and contact service businesses.",
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
      name: 'Websites and approved actions for customer AI assistants',
      serviceType: ['Business-owned websites', 'Connected business information', 'Approved agent capabilities'],
      provider: businessRef,
      areaServed: [CDA, KOOTENAI],
      description:
        "Business-owned website, clear offers and evidence, connected information, and separately scoped approved actions. Based in Coeur d'Alene. Built for service businesses anywhere. A live agent-action endpoint is scoped separately from Foundation Build.",
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
const DIM = 'var(--d-fg-dim)';
const MUTE = 'var(--d-fg-mute)';
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
            Make your <em className="serif" style={{ color: ACCENT }}>Coeur d&apos;Alene</em> business easier to choose.
          </h1>
          <p className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(17px, 2.2vw, 21px)', lineHeight: 1.4, color: FG, maxWidth: '640px' }}>
            Help customers and their assistants understand your offer, check that it fits, and take a useful next step.
          </p>
          <p className="font-inter mb-10" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '660px' }}>
            Kodecite is based here in Coeur d&apos;Alene. We build business-owned websites and the connected information an assistant needs to help a customer. When the next step should happen through an assistant, we build that specific workflow with your rules and your team in control.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href={REVIEW_HREF} className="d-btn d-btn-primary justify-center">{REVIEW_CTA} →</Link>
            <Link href="/pricing" className="d-btn d-btn-ghost justify-center">See Pricing →</Link>
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">A BETTER CUSTOMER JOURNEY</div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG, maxWidth: '22ch' }}>
            Your local reputation, <em className="serif" style={{ color: ACCENT }}>made easier to understand.</em>
          </h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '700px' }}>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              A homeowner comparing service providers needs more than a name and a phone number. Do you handle this type of project? Do you serve their address? What experience can they see? How does an estimate or consultation begin? Your website should make those answers easy for the customer and their assistant to find.
            </p>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              We connect the answers across your website and business information, then scope an action where it helps. If you are keeping an existing WordPress, Wix, or Squarespace site, the application-only platform pilot may be an option.
            </p>
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">LOCAL WORK, DOCUMENTED RESULTS</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="glass-panel-soft" style={{ padding: '26px 30px' }}>
              <p className="font-inter font-semibold mb-2" style={{ fontSize: '16px', color: FG }}>Real Estate With Shirin <span style={{ color: MUTE, fontWeight: 400 }}>· North Idaho</span></p>
              <p className="font-inter" style={{ fontSize: '14.5px', lineHeight: 1.6, color: DIM, fontWeight: 300 }}>
                A business-owned real-estate website with connected identity, services, and evidence. Dated screenshots document appearances across Bing, Google AI, ChatGPT, and Gemini.
              </p>
            </div>
            <div className="glass-panel-soft" style={{ padding: '26px 30px' }}>
              <p className="font-inter font-semibold mb-2" style={{ fontSize: '16px', color: FG }}>Luxe Window Works <span style={{ color: MUTE, fontWeight: 400 }}>· Post Falls</span></p>
              <p className="font-inter" style={{ fontSize: '14.5px', lineHeight: 1.6, color: DIM, fontWeight: 300 }}>
                The documented authorized test went further than discovery: an assistant submitted a consultation request, one email reached the team, and duplicate and changed-request checks behaved as intended.
              </p>
            </div>
          </div>
          <p className="font-inter" style={{ fontSize: '13.5px', lineHeight: 1.6, color: MUTE, fontWeight: 300, fontStyle: 'italic', maxWidth: '640px' }}>
            AI answers vary. These are dated results, not a guarantee that any engine will cite a business.{' '}
            <Link href="/services#proof" style={{ color: ACCENT, borderBottom: '1px solid var(--d-line-s)' }}>See discovery screenshots →</Link>
          </p>
        </GlassPanel>
      </section>

      <ProductionProof />

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">WHAT WE BUILD</div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG }}>
            Start with the foundation. <em className="serif" style={{ color: ACCENT }}>Add what helps.</em>
          </h2>
          <ul className="flex flex-col gap-3 mb-8" style={{ maxWidth: '700px' }}>
            {[
              'Foundation Build: $4,995 one-time for a business-owned website, clear offers and evidence, and connected information. A live agent-action endpoint is separate.',
              'Agent Capability Build: one useful action with defined requirements, permission, result, and human follow-up. Separately scoped and priced.',
              'Platform Capability Layer: application-only pilot for selected businesses keeping WordPress, Wix, Squarespace, or a similar platform. Scope follows a review of the site and workflow.',
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
            You own the website, code, and operating accounts. No mandatory retainer. Direct service costs and maintenance needs for active capabilities are made clear.
          </p>
          <div className="d-eyebrow mb-4">WHO IT&apos;S FOR</div>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            Home-service providers, real-estate teams, custom builders, specialty practices, and other established businesses whose customers want to understand the fit before making a call.
          </p>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)', border: '1px solid var(--d-line-s)', boxShadow: 'none' }}>
          <div className="d-eyebrow mb-6">CHECKING THE WORK</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG, maxWidth: '18ch' }}>
            Know what is being built. <em className="serif" style={{ color: ACCENT }}>See it checked.</em>
          </h2>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            Before a build, we agree the content, reading paths, customer journey, and any action to be tested. The work is complete when the agreed checks pass, including the relevant result and handoff. Third-party recommendations are outside our control.{' '}
            <Link href="/pricing" style={{ color: ACCENT, borderBottom: '1px solid var(--d-line-s)' }}>Details on Pricing →</Link>
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
            Make it easier <em className="serif" style={{ color: ACCENT }}>to get started with you.</em>
          </h2>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            Get practical priorities for your offer, evidence, business information, and customer next steps. {REVIEW_TURNAROUND} You keep the report whether or not we work together.
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
