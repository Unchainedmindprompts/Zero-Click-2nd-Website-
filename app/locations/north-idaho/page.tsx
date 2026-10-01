import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';
import ProductionProof from '@/components/proof/ProductionProof';
import { ORIGIN, WEBSITE_ID, businessRef } from '@/lib/schema';
import { REVIEW_CTA, REVIEW_HREF, REVIEW_TURNAROUND } from '@/lib/positioning';

const PAGE_URL = `${ORIGIN}/locations/north-idaho`;

export const metadata: Metadata = {
  title: 'North Idaho Websites for Customers and AI Assistants',
  description:
    'North Idaho websites and approved customer actions from Kodecite. Help customers and their AI assistants understand your services, check fit, and get started.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'North Idaho Websites for Customers and AI Assistants',
    description:
      'Clear services, evidence, and next steps for North Idaho businesses, built for people and their AI assistants on accounts you own.',
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
    a: 'Kodecite is based in Coeur d’Alene and works with businesses in Post Falls, Hayden, Rathdrum, Sandpoint, and the broader Inland Northwest, including Spokane. We also deliver projects remotely for businesses elsewhere.',
  },
  {
    q: 'Is this answer engine optimization for North Idaho?',
    a: 'AI discovery is one part of the work. We also make it easier to understand your services, verify the evidence, check service-area fit, and take an approved next step with a clear result.',
  },
  {
    q: 'Does every build include an action endpoint?',
    a: 'Foundation Build includes the website, connected business information, and a plan for possible next steps. A live agent-action endpoint is separately scoped around an approved action and its business rules.',
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
        'KodeCite is based in North Idaho and builds websites and approved next steps that help customers and AI assistants understand, trust, and contact service businesses.',
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
      areaServed: [NORTH_IDAHO, KOOTENAI, BONNER, CDA, POST_FALLS, HAYDEN, RATHDRUM, SANDPOINT],
      description:
        'Business-owned website, clear offers and evidence, connected information, and separately scoped approved actions. Based in North Idaho. Built for service businesses anywhere. A live agent-action endpoint is scoped separately from Foundation Build.',
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
const DIM = 'var(--d-fg-dim)';
const MUTE = 'var(--d-fg-mute)';
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
            Make your <em className="serif" style={{ color: ACCENT }}>North Idaho</em> business easy to understand.
          </h1>
          <p className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(17px, 2.2vw, 21px)', lineHeight: 1.4, color: FG, maxWidth: '640px' }}>
            Help customers and their assistants understand your offer, check that it fits, and take a useful next step.
          </p>
          <p className="font-inter mb-10" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '680px' }}>
            Based in Coeur d&apos;Alene, we work with businesses across Post Falls, Hayden, Rathdrum, Sandpoint, and the Inland Northwest. We turn the knowledge behind a good customer conversation into a clear website, connected business information, and approved next steps when needed.
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
            Make your experience <em className="serif" style={{ color: ACCENT }}>easy to put to work.</em>
          </h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '700px' }}>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              Across North Idaho, a city name alone may not explain where a service business works. Customers need specific coverage, the types of jobs you handle, examples of your work, and a clear way to request help. Publishing that detail saves people and their assistants from piecing the business together across listings and forms.
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
                A business-owned real-estate website with dated screenshots documenting appearances across Bing, Google AI, ChatGPT, and Gemini.
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
            AI answers vary. These are dated results, not a guarantee.{' '}
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
            You own the website, code, and operating accounts. No mandatory retainer. Active capabilities can have direct service costs and maintenance needs.
          </p>
          <div className="d-eyebrow mb-4">WHO IT&apos;S FOR</div>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            Established home-service providers, real-estate teams, builders, specialty practices, and other businesses where customers value expertise and want to check fit before getting started.
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
