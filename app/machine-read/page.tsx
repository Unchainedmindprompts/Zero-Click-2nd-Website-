import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';
import { CONSEQUENCE } from '@/lib/positioning';

export const metadata: Metadata = {
  title: 'Agent Readiness Review',
  description:
    'See what AI can understand, verify and safely do with your business today. Free written review in 24–48 hours.',
  alternates: { canonical: 'https://www.kodecite.ai/machine-read' },
};

const machineReadPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agent Readiness Review — KodeCite.ai',
  url: 'https://www.kodecite.ai/machine-read',
  description:
    'A free Agent Readiness Review shows what AI can understand, verify, and safely do with a business today — identity, services, geography, policies, discovery, action paths, and control gaps — with a written report in 24–48 hours.',
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
  { t: 'Identity', d: 'Who the business is, who runs it, and whether those facts agree across the site and the public record.' },
  { t: 'Services and products', d: 'What is actually offered — and what is implied but never stated.' },
  { t: 'Geography', d: 'Where the business works, where it does not, and whether that is machine-readable.' },
  { t: 'Credentials and policies', d: 'Licenses, limitations, and the rules a safe recommendation has to respect.' },
  { t: 'Machine discovery', d: 'What a crawler or agent can find today: site structure, structured data, discovery files. No claim that every system reads them.' },
  { t: 'Action paths', d: 'What a customer — or their AI agent — can accomplish, and what still requires a human.' },
  { t: 'Useful outcome', d: 'Whether a completed request is defined honestly, or whether the site over-promises booking, price, or acceptance.' },
  { t: 'Control gaps', d: 'Human confirmation, validation, abuse, duplicates, platform constraints, and security.' },
];

const FG = 'var(--d-fg)';
const DIM = 'rgba(233, 238, 255, 0.95)';
const MUTE = 'rgba(219, 227, 255, 0.8)';
const ACCENT = 'var(--d-accent)';
const sectionGap = { marginTop: '30px' };

export default function MachineReadPage() {
  return (
    <SecondaryPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(machineReadPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="secondary-section secondary-hero">
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">AGENT READINESS REVIEW · FREE · 24–48H</div>
          <h1 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(36px, 5.4vw, 68px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: FG, maxWidth: '16ch' }}>
            See what AI can understand, verify, and <em className="serif" style={{ color: ACCENT }}>safely do</em> today.
          </h1>
          <p className="font-inter mb-10" style={{ fontSize: '17px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '600px' }}>
            {CONSEQUENCE} This is a written review of your current system — not a citation score, not a ranking promise,
            and not a claim that Kodecite is first, only, or the category leader. This site does not currently accept autonomous agent submissions.
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
                Skip the review. Use the contact page. Send the site, the timeline, and the scope.
              </p>
            </div>

            <div>
              <a href="/contact" className="glass-panel-soft secondary-jump" style={{ display: 'block', padding: '36px 40px', textDecoration: 'none' }}>
                <p className="font-mono mb-4" style={{ fontSize: '9px', letterSpacing: '0.2em', color: MUTE }}>CONTACT · DIRECT</p>
                <p className="font-inter font-semibold mb-4" style={{ fontSize: 'clamp(16px, 2.5vw, 22px)', letterSpacing: '-0.015em', color: ACCENT }}>
                  Go to the contact page →
                </p>
                <div className="flex flex-col gap-1 mb-5" style={{ borderTop: '1px solid rgba(255,255,255,0.10)', paddingTop: '16px' }}>
                  <p className="font-inter" style={{ fontSize: '13px', color: MUTE, fontWeight: 300 }}>No sales handoff. A senior reply, written in plain English.</p>
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
