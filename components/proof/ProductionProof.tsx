import Link from 'next/link';
import GlassPanel from '@/components/GlassPanel';
import { LUXE_CAPABILITY_URL, LUXE_CONNECTIVE, LUXE_FLAGSHIP_HREF, RECOMMENDATION_STAGE } from '@/lib/positioning';

const FG = 'var(--d-fg)';
const DIM = 'rgba(233, 238, 255, 0.95)';
const MUTE = 'rgba(219, 227, 255, 0.8)';
const ACCENT = 'var(--d-accent)';

const story = [
  'Discovered',
  'Understood',
  'Verified',
  'Selected',
  'Actioned',
  'Controlled',
];

const facts = [
  {
    t: 'Published capability',
    d: 'Luxe publishes a machine-readable in-home consultation capability. Contract 1.0. Readiness: request-submission-ready. Submission enabled. Human follow-up required.',
  },
  {
    t: 'What stayed unavailable',
    d: 'Booking, pricing, and checkout are unpublished. A successful request is delivery and acknowledgement — not an appointment, a quote, a price, or project acceptance.',
  },
  {
    t: 'Authorized production test',
    d: 'One valid request returned HTTP 200 accepted / in_service_area. The email reached the Luxe inbox. Personal fields, request IDs, and keys are not published here.',
  },
  {
    t: 'Duplicate and conflict',
    d: 'The identical duplicate returned the original outcome and did not send a second email. The same key with a changed payload returned HTTP 409 idempotency_conflict.',
  },
];

export default function ProductionProof() {
  return (
    <section id="live-production-proof" className="secondary-section" style={{ marginTop: '30px' }}>
      <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
        <div className="d-eyebrow mb-6">LIVE PRODUCTION PROOF</div>
        <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG, maxWidth: '20ch' }}>
          Luxe Window Works — a request an agent could <em className="serif" style={{ color: ACCENT }}>discover and submit.</em>
        </h2>
        <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '720px' }}>
          An outside agent could discover what Luxe permits, determine qualification, submit safely, receive an honest machine-readable outcome, and leave the next conversation to a human. {LUXE_CONNECTIVE} {RECOMMENDATION_STAGE}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {story.map((step) => (
            <span
              key={step}
              className="font-mono"
              style={{ fontSize: '10px', letterSpacing: '0.12em', color: ACCENT, border: '1px solid rgba(93,213,255,0.35)', borderRadius: '999px', padding: '6px 12px' }}
            >
              {step}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {facts.map((f) => (
            <div key={f.t} className="glass-panel-soft" style={{ padding: '22px 26px' }}>
              <p className="font-inter font-semibold mb-2" style={{ fontSize: '15px', color: FG }}>{f.t}</p>
              <p className="font-inter" style={{ fontSize: '13.5px', lineHeight: 1.6, color: MUTE, fontWeight: 300 }}>{f.d}</p>
            </div>
          ))}
        </div>

        <p className="font-inter mb-6" style={{ fontSize: '14px', lineHeight: 1.65, color: MUTE, fontWeight: 300, maxWidth: '720px' }}>
          Public discovery contract:{' '}
          <a
            href={LUXE_CAPABILITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: ACCENT, borderBottom: '1px solid rgba(93,213,255,0.4)', wordBreak: 'break-all' }}
          >
            luxewindowworks.com/api/capabilities/request-in-home-consultation
          </a>
        </p>

        <Link href={LUXE_FLAGSHIP_HREF} className="d-btn d-btn-ghost">
          Read the Luxe case study →
        </Link>
      </GlassPanel>
    </section>
  );
}
