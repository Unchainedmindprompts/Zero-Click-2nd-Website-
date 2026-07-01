'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { proofCases, PROOF_ENGINES, PROOF_DATE } from './proofData';

// shared text colors on glass (match the secondary-page system)
const FG = 'var(--d-fg)';
const DIM = 'rgba(233, 238, 255, 0.95)';
const MUTE = 'rgba(219, 227, 255, 0.8)';
const ACCENT = 'var(--d-accent)';

// Flattened, in render order — the lightbox navigates across every card.
const ALL_ITEMS = proofCases.flatMap((c) => c.items);

function CaptionBar({ engine, query }: { engine: string; query: string }) {
  return (
    <div
      className="font-mono flex flex-wrap items-baseline gap-x-2 gap-y-1"
      style={{ fontSize: '11px', lineHeight: 1.5, letterSpacing: '0.02em', padding: '14px 18px', borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <span style={{ color: ACCENT, letterSpacing: '0.08em' }}>{engine}</span>
      <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
      <span className="font-inter" style={{ color: DIM, fontStyle: 'italic', fontWeight: 300 }}>&ldquo;{query}&rdquo;</span>
      <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
      <span style={{ color: MUTE }}>{PROOF_DATE}</span>
    </div>
  );
}

export default function ProofWall() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i === null ? null : (i - 1 + ALL_ITEMS.length) % ALL_ITEMS.length)), []);
  const next = useCallback(() => setActive((i) => (i === null ? null : (i + 1) % ALL_ITEMS.length)), []);

  useEffect(() => {
    if (active === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [active, close, prev, next]);

  let globalIndex = -1;

  return (
    <section id="proof" className="secondary-section" style={{ marginTop: '30px' }}>
      <div className="glass-panel" style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
        {/* Header */}
        <div className="d-eyebrow mb-5">PROOF · REAL AI ANSWERS, REAL QUERIES</div>
        <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '760px' }}>
          Real answers from ChatGPT, Google AI Mode, Bing Copilot, and Gemini, captured
          April 1, 2026. AI answers vary by user and change over time — these are real
          results, not guarantees.
        </p>

        {/* Engine strip */}
        <div className="flex items-center gap-4 mt-7 mb-12">
          <span className="font-mono flex-shrink-0" style={{ fontSize: '10px', letterSpacing: '0.12em', color: MUTE }}>
            Cited across {PROOF_ENGINES.join(' · ')}
          </span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(93,213,255,0.28), transparent)' }} />
        </div>

        {/* One block per business */}
        {proofCases.map((c, ci) => (
          <div key={c.business} style={{ marginTop: ci === 0 ? 0 : '56px' }}>
            <h3 className="font-inter font-semibold mb-2" style={{ fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 1.15, letterSpacing: '-0.02em', color: FG }}>
              {c.business}
            </h3>
            <p className="font-inter mb-8" style={{ fontSize: '15px', lineHeight: 1.6, color: MUTE, fontWeight: 300, maxWidth: '680px' }}>
              {c.tagline}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {c.items.map((item) => {
                globalIndex += 1;
                const idx = globalIndex;
                return (
                  <figure key={item.src} className="glass-panel-soft overflow-hidden" style={{ padding: 0 }}>
                    <button
                      type="button"
                      onClick={() => setActive(idx)}
                      className="block w-full text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--d-accent)]"
                      aria-label={`Enlarge screenshot: ${item.result}`}
                    >
                      <div className="relative">
                        <Image
                          src={item.src}
                          alt={item.result}
                          width={1600}
                          height={1000}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          loading="lazy"
                          className="w-full h-auto"
                          style={{ objectPosition: 'top', display: 'block' }}
                        />
                        <div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          style={{ background: 'rgba(6,9,28,0.35)' }}
                        >
                          <svg className="w-10 h-10" fill="none" stroke="white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    <figcaption>
                      <CaptionBar engine={item.engine} query={item.query} />
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ background: 'rgba(4,6,16,0.93)' }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={ALL_ITEMS[active].result}
        >
          <button className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100 transition-opacity" onClick={close} aria-label="Close">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition-opacity"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative max-w-5xl w-full flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={ALL_ITEMS[active].src}
              alt={ALL_ITEMS[active].result}
              width={1600}
              height={1000}
              className="rounded-xl object-contain max-h-[78vh] w-auto h-auto"
              style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.6)' }}
            />
            <p className="font-mono text-center" style={{ fontSize: '12px', color: 'rgba(233,238,255,0.85)', letterSpacing: '0.02em' }}>
              <span style={{ color: ACCENT }}>{ALL_ITEMS[active].engine}</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}> · </span>
              <span className="font-inter" style={{ fontStyle: 'italic' }}>&ldquo;{ALL_ITEMS[active].query}&rdquo;</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}> · </span>
              <span style={{ color: MUTE }}>{PROOF_DATE}</span>
            </p>
            <p className="font-mono" style={{ fontSize: '10px', color: 'rgba(233,238,255,0.4)' }}>
              {active + 1} / {ALL_ITEMS.length} · ESC to close · ← → to navigate
            </p>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition-opacity"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
