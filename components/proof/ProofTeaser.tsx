import Link from 'next/link';

const FG = 'var(--d-fg)';
const DIM = 'rgba(233, 238, 255, 0.95)';
const MUTE = 'rgba(219, 227, 255, 0.8)';
const ACCENT = 'var(--d-accent)';

// Homepage strip only — a brand-level statement. The verifiable, screenshot-
// backed proof lives on /services#proof (the full ProofWall).
const ENGINES = ['ChatGPT', 'Perplexity', 'Google', 'Bing Copilot', 'Gemini'];

/**
 * ProofTeaser — a minimal, on-brand proof strip for the homepage (below the
 * cinematic hero). No screenshots here (they clash with the hero); just the
 * engine names + a link through to the full screenshot ProofWall.
 */
export default function ProofTeaser() {
  return (
    <div className="glass-panel" style={{ padding: 'clamp(28px, 4vw, 48px)' }}>
      <div className="d-eyebrow mb-4">PROOF · REAL AI ANSWERS</div>
      <h2 className="font-inter font-semibold" style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG, maxWidth: '20ch' }}>
        When people ask AI who to hire, <em className="serif" style={{ color: ACCENT }}>our clients come back first.</em>
      </h2>

      {/* Engine row */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-8 mb-4">
        {ENGINES.map((e, i) => (
          <span key={e} className="flex items-center gap-3">
            <span className="font-inter font-medium" style={{ fontSize: 'clamp(15px, 2vw, 19px)', letterSpacing: '-0.01em', color: FG }}>
              {e}
            </span>
            {i < ENGINES.length - 1 && (
              <span aria-hidden style={{ color: ACCENT, opacity: 0.5 }}>·</span>
            )}
          </span>
        ))}
      </div>

      <p className="font-inter mb-8" style={{ fontSize: '14px', lineHeight: 1.6, color: MUTE, fontWeight: 300 }}>
        Cited across every major AI engine.
      </p>

      <Link href="/services#proof" className="d-btn d-btn-primary">
        See the full proof →
      </Link>
    </div>
  );
}
