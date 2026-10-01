import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';

export const metadata: Metadata = {
  title: 'Agent Readiness Review',
  description:
    'Find where customers and their AI assistants can understand your offer, trust the evidence, and take the next step. Free written Agent Readiness Review within two business days.',
  alternates: { canonical: 'https://www.kodecite.ai/machine-read' },
};

const machineReadPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agent Readiness Review — KodeCite.ai',
  url: 'https://www.kodecite.ai/machine-read',
  description:
    'A free written review of business identity, offers, fit, evidence, customer next steps, and permission or handoff gaps, with practical priorities within two business days.',
  publisher: { '@id': 'https://www.kodecite.ai/#business' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Agent Readiness Review', item: 'https://www.kodecite.ai/machine-read' },
  ],
};

const reviewCovers = [
  { t: 'Who you are', d: 'Whether your identity, people, contact details, and public information describe the same business.' },
  { t: 'What you offer', d: 'Whether a customer or assistant can understand your services and products without filling in missing details.' },
  { t: 'Who you can help', d: 'Service area, project fit, important limits, and the conditions that shape a good request.' },
  { t: 'Why someone should trust it', d: 'Relevant credentials, examples, reviews, and sources that support the claims on your site.' },
  { t: 'What assistants can read', d: 'Accessible pages, connected business information, and discovery files, checked for consistency rather than assumed universal support.' },
  { t: 'How a customer moves forward', d: 'Forms, contact routes, available capabilities, and the points where someone must repeat work or ask for help.' },
  { t: 'What the result means', d: 'Whether a customer knows what was received, what is confirmed, and who will follow up.' },
  { t: 'What needs attention first', d: 'A prioritized view of missing information, permission checks, duplicate handling, handoff gaps, and platform constraints.' },
];

const FG = 'var(--d-fg)';
const DIM = 'var(--d-fg-dim)';
const MUTE = 'var(--d-fg-mute)';
const ACCENT = 'var(--d-accent)';
const sectionGap = { marginTop: '30px' };

export default function MachineReadPage() {
  return (
    <SecondaryPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(machineReadPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="secondary-section secondary-hero">
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">AGENT READINESS REVIEW · FREE · TWO BUSINESS DAYS</div>
          <h1 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(36px, 5.4vw, 68px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: FG, maxWidth: '16ch' }}>
            How easy is your business <em className="serif" style={{ color: ACCENT }}>to choose and contact?</em>
          </h1>
          <p className="font-inter mb-10" style={{ fontSize: '17px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '600px' }}>
            We review the journey a customer and their AI assistant would face: understanding the offer, checking fit and trust, and taking the next step. Send your website below. You will receive a free written review with practical priorities within two business days, and you keep it whether or not we work together.
          </p>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">WHAT THE REVIEW COVERS</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviewCovers.map((item) => (
              <div key={item.t} className="glass-panel-soft" style={{ padding: '22px 26px' }}>
                <p className="font-inter font-semibold mb-2" style={{ fontSize: '15px', color: FG }}>{item.t}</p>
                <p className="font-inter" style={{ fontSize: '13.5px', lineHeight: 1.6, color: MUTE, fontWeight: 300 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </section>

      <section id="machine-read" className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(32px, 4.5vw, 56px)', maxWidth: '760px', margin: '0 auto' }}>
          <div className="mb-8">
            <h2 className="font-inter font-semibold mb-3" style={{ fontSize: '26px', color: FG }}>Request your written review</h2>
            <p className="font-inter" style={{ fontSize: '15px', lineHeight: 1.65, color: DIM }}>Tell us about the business and the website you want reviewed. We will use those details to prepare the review and follow up with you. The form is a human-submitted request; this site does not currently accept autonomous agent submissions.</p>
          </div>
          <ContactForm />
        </GlassPanel>
      </section>

      <section className="secondary-section" style={{ ...sectionGap, paddingBottom: '120px' }}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="d-eyebrow mb-6">DIRECT LINE</div>
              <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG }}>
                Already know <em className="serif" style={{ color: ACCENT }}>what you need?</em>
              </h2>
              <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '440px' }}>
                Have a project or a specific customer workflow in mind? Send the website, the outcome you want, and any timeline we should know.
              </p>
            </div>

            <div>
              <a href="/contact" className="glass-panel-soft secondary-jump" style={{ display: 'block', padding: '36px 40px', textDecoration: 'none' }}>
                <p className="font-mono mb-4" style={{ fontSize: '9px', letterSpacing: '0.2em', color: MUTE }}>CONTACT · DIRECT</p>
                <p className="font-inter font-semibold mb-4" style={{ fontSize: 'clamp(16px, 2.5vw, 22px)', letterSpacing: '-0.015em', color: ACCENT }}>
                  Go to the contact page →
                </p>
                <div className="flex flex-col gap-1 mb-5" style={{ borderTop: '1px solid rgba(255,255,255,0.10)', paddingTop: '16px' }}>
                  <p className="font-inter" style={{ fontSize: '13px', color: MUTE, fontWeight: 300 }}>A direct conversation about your business and what would help.</p>
                </div>
                <span style={{ color: ACCENT, fontSize: '18px' }}>→</span>
              </a>
            </div>
          </div>
        </GlassPanel>
      </section>
    </SecondaryPageShell>
  );
}
