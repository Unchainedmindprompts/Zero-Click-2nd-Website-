import Link from 'next/link';
import Image from 'next/image';
import { proofTeaserItems, PROOF_DATE } from './proofData';

const FG = 'var(--d-fg)';
const DIM = 'rgba(233, 238, 255, 0.95)';
const MUTE = 'rgba(219, 227, 255, 0.8)';
const ACCENT = 'var(--d-accent)';

/**
 * ProofTeaser — a condensed, two-image version of the ProofWall for use outside
 * the full Services section (e.g. a homepage teaser). Static (no lightbox); the
 * whole block links through to the full proof at /services#proof.
 */
export default function ProofTeaser() {
  return (
    <div className="glass-panel" style={{ padding: 'clamp(28px, 4vw, 48px)' }}>
      <div className="d-eyebrow mb-4">PROOF · REAL AI ANSWERS</div>
      <h2 className="font-inter font-semibold mb-3" style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG, maxWidth: '18ch' }}>
        When people ask AI who to hire, <em className="serif" style={{ color: ACCENT }}>our clients come back first.</em>
      </h2>
      <p className="font-inter mb-8" style={{ fontSize: '15px', lineHeight: 1.6, color: DIM, fontWeight: 300, maxWidth: '560px' }}>
        Real answers, real queries, captured {PROOF_DATE}. AI answers vary and change over
        time — these are real results, not guarantees.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {proofTeaserItems.map((item) => (
          <figure key={item.src} className="glass-panel-soft overflow-hidden" style={{ padding: 0 }}>
            <Image
              src={item.src}
              alt={item.result}
              width={1600}
              height={1000}
              sizes="(max-width: 640px) 100vw, 50vw"
              loading="lazy"
              className="w-full h-auto"
              style={{ objectPosition: 'top', display: 'block' }}
            />
            <figcaption
              className="font-mono"
              style={{ fontSize: '10.5px', letterSpacing: '0.04em', padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span style={{ color: ACCENT }}>{item.engine}</span>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}> · </span>
              <span style={{ color: MUTE }}>{PROOF_DATE}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <Link href="/services#proof" className="d-btn d-btn-primary">
        See the full proof →
      </Link>
    </div>
  );
}
