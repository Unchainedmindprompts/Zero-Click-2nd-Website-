'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { HOME_SLIDES } from './slides';
import FluidImageTransition from './FluidImageTransition';
import CinematicSlide from './CinematicSlide';
import SlideIndicators from './SlideIndicators';

const AUTOPLAY_MS = 7000;

/**
 * CinematicHomeSlider — full-viewport, Blackbook-inspired opening experience.
 *
 * One giant visual at a time; cinematic CSS crossfade/blur/scale between slides.
 * Not scroll-jacked — slides advance via autoplay (paused on hover/focus, off
 * under reduced motion), dots, and keyboard. The persistent shell sits above it;
 * the rest of the homepage scrolls normally below.
 */
export default function CinematicHomeSlider() {
  const total = HOME_SLIDES.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  // Respect reduced-motion (disables autoplay).
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const go = useCallback((i: number) => setActive((i + total) % total), [total]);

  // Autoplay.
  useEffect(() => {
    if (paused || reduced) return;
    const id = setInterval(() => setActive((a) => (a + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reduced, total]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      go(active + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      go(active - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      go(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      go(total - 1);
    }
  };

  return (
    <section
      className="kc-slider"
      aria-roledescription="carousel"
      aria-label="KodeCite introduction"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Cinematic background layers */}
      <FluidImageTransition slides={HOME_SLIDES} active={active} />

      {/* Atmospheric drift (CSS only) */}
      <div
        className="pointer-events-none absolute inset-0 hero-aura"
        aria-hidden
        style={{
          background:
            'radial-gradient(40% 50% at 80% 18%, rgba(93,213,255,0.08), transparent 70%)',
        }}
      />

      {/* Text layers — all rendered for crawlability, one visible at a time */}
      <div className="absolute inset-0 z-10">
        {HOME_SLIDES.map((s, i) => (
          <div
            key={s.id}
            className={`kc-slide-text ${i === active ? 'is-active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${total}: ${s.kicker}`}
            aria-hidden={i !== active}
          >
            <CinematicSlide slide={s} index={i} total={total} />
          </div>
        ))}
      </div>

      {/* Persistent CTAs (stable across slides) */}
      <div
        className="kc-slider-cta absolute z-20 left-0 right-0 mx-auto px-8 flex flex-col sm:flex-row gap-3"
        style={{ maxWidth: '1320px', bottom: 'clamp(72px, 9vh, 108px)' }}
      >
        <Link href="/contact" className="d-btn d-btn-primary w-full sm:w-auto justify-center">
          Run My Free Machine Read →
        </Link>
        <Link href="#foundation" className="d-btn d-btn-ghost w-full sm:w-auto justify-center">
          See the Foundation
        </Link>
      </div>

      <SlideIndicators
        total={total}
        active={active}
        onSelect={go}
        kickers={HOME_SLIDES.map((s) => s.kicker)}
      />
    </section>
  );
}
