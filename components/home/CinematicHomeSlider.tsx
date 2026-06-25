'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { HOME_SLIDES } from './slides';
import FluidImageTransition from './FluidImageTransition';
import CinematicSlide from './CinematicSlide';
import SlideIndicators from './SlideIndicators';

const AUTOPLAY_MS = 7000;
const WHEEL_LOCK_MS = 750; // one wheel gesture = one slide
const SWIPE_THRESHOLD = 48; // px of horizontal travel to register a swipe

/**
 * CinematicHomeSlider — full-viewport, Blackbook-inspired opening experience.
 *
 * Cinematic slide-deck feel: background crossfade/blur/scale, copy drifts in
 * horizontally (direction-aware). Advances via autoplay, dots, keyboard, touch
 * swipe, trackpad horizontal swipe, and (on desktop) vertical wheel while the
 * hero fills the viewport. NOT a full scroll-hijack: on the last slide a further
 * scroll down releases into the normal page; scrolling back up re-engages it.
 */
export default function CinematicHomeSlider() {
  const total = HOME_SLIDES.length;
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reduced, setReduced] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const activeRef = useRef(0);
  const inViewRef = useRef(true);
  const wheelLockRef = useRef(false);
  const dragRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => { activeRef.current = active; }, [active]);

  // Reduced-motion (disables autoplay + wheel hijack).
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // Single source of truth for changing slides — tracks previous + direction.
  const change = useCallback(
    (target: number, dir: 1 | -1) => {
      const cur = activeRef.current;
      const next = (target + total) % total;
      if (next === cur) return;
      setPrev(cur);
      setDirection(dir);
      setActive(next);
    },
    [total],
  );
  const advance = useCallback((dir: 1 | -1) => change(activeRef.current + dir, dir), [change]);
  const select = useCallback(
    (i: number) => change(i, i > activeRef.current ? 1 : -1),
    [change],
  );

  // Autoplay — resets on every slide change; off while paused/interacting/reduced.
  useEffect(() => {
    if (paused || interacting || reduced) return;
    const id = window.setTimeout(() => advance(1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [paused, interacting, reduced, active, advance]);

  // Track whether the hero substantially fills the viewport (wheel gating).
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting && entry.intersectionRatio >= 0.5;
      },
      { threshold: [0, 0.5, 1] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Wheel → slide. Native listener so we can preventDefault (React wheel is passive).
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (reduced || !inViewRef.current) return;
      const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = horizontal ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 6) return;
      const forward = delta > 0; // down or right → next
      const cur = activeRef.current;

      // Edge release: vertical scroll past the first/last slide → let the page move.
      const atEdgeRelease =
        !horizontal &&
        ((forward && cur === total - 1) || (!forward && cur === 0));
      if (atEdgeRelease) {
        // absorb the tail of the same gesture that just landed on the edge
        if (wheelLockRef.current) e.preventDefault();
        return;
      }

      e.preventDefault();
      if (wheelLockRef.current) return;
      wheelLockRef.current = true;
      window.setTimeout(() => { wheelLockRef.current = false; }, WHEEL_LOCK_MS);
      advance(forward ? 1 : -1);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [reduced, total, advance]);

  // Keyboard.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); advance(1); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); advance(-1); }
    else if (e.key === 'Home') { e.preventDefault(); select(0); }
    else if (e.key === 'End') { e.preventDefault(); select(total - 1); }
  };

  // Touch / pen swipe (mouse excluded so desktop text selection isn't hijacked).
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse') return;
    dragRef.current = { x: e.clientX, y: e.clientY, active: true };
    setInteracting(true);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d.active) return;
    d.active = false;
    setInteracting(false);
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy) * 1.2) {
      advance(dx < 0 ? 1 : -1); // swipe left → next, swipe right → prev
    }
  };
  const onPointerCancel = () => {
    dragRef.current.active = false;
    setInteracting(false);
  };

  const dirName = direction === 1 ? 'next' : 'prev';
  const layerClass = (i: number) => {
    if (i === active) return `kc-slide-text is-active kc-enter-${dirName}`;
    if (i === prev) return `kc-slide-text kc-leave-${dirName}`;
    return 'kc-slide-text';
  };

  return (
    <section
      ref={sectionRef}
      className="kc-slider"
      aria-roledescription="carousel"
      aria-label="KodeCite introduction"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Cinematic background layers (crossfade + blur + scale) */}
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
            className={layerClass(i)}
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
        onSelect={select}
        kickers={HOME_SLIDES.map((s) => s.kicker)}
      />
    </section>
  );
}
