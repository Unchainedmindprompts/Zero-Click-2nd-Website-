'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { HOME_SLIDES } from './slides';
import CinematicSlide from './CinematicSlide';
import SlideIndicators from './SlideIndicators';

const AUTOPLAY_MS = 7000;
const WHEEL_LOCK_MS = 750;
const SWIPE_THRESHOLD = 48;

/**
 * CinematicHomeSlider — one HOME_SLIDES tree, two presentations.
 *
 * Desktop (≥768px): full-viewport carousel (autoplay, dots, Ken Burns, wheel).
 * Phone: the same chapter nodes in normal document flow (no autoplay, no dots).
 * Presentation is CSS. JS only gates carousel behavior and aria-hidden.
 */
export default function CinematicHomeSlider() {
  const total = HOME_SLIDES.length;
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [desktop, setDesktop] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const activeRef = useRef(0);
  const inViewRef = useRef(true);
  const wheelLockRef = useRef(false);
  const dragRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => { activeRef.current = active; }, [active]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const sync = () => setDesktop(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

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

  useEffect(() => {
    if (!desktop || paused || interacting || reduced) return;
    const id = window.setTimeout(() => advance(1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [desktop, paused, interacting, reduced, active, advance]);

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

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const mq = window.matchMedia('(max-width: 767px)');
    let attached = false;

    const onWheel = (e: WheelEvent) => {
      if (mq.matches || reduced || !inViewRef.current) return;
      const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = horizontal ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 6) return;
      const forward = delta > 0;
      const cur = activeRef.current;

      const atEdgeRelease =
        !horizontal &&
        ((forward && cur === total - 1) || (!forward && cur === 0));
      if (atEdgeRelease) {
        if (wheelLockRef.current) e.preventDefault();
        return;
      }

      e.preventDefault();
      if (wheelLockRef.current) return;
      wheelLockRef.current = true;
      window.setTimeout(() => { wheelLockRef.current = false; }, WHEEL_LOCK_MS);
      advance(forward ? 1 : -1);
    };

    const sync = () => {
      if (mq.matches) {
        if (attached) {
          el.removeEventListener('wheel', onWheel);
          attached = false;
        }
        return;
      }
      if (!attached) {
        el.addEventListener('wheel', onWheel, { passive: false });
        attached = true;
      }
    };

    sync();
    mq.addEventListener('change', sync);
    return () => {
      mq.removeEventListener('change', sync);
      if (attached) el.removeEventListener('wheel', onWheel);
    };
  }, [reduced, total, advance]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!desktop) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); advance(1); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); advance(-1); }
    else if (e.key === 'Home') { e.preventDefault(); select(0); }
    else if (e.key === 'End') { e.preventDefault(); select(total - 1); }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (!desktop || e.pointerType === 'mouse') return;
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
      advance(dx < 0 ? 1 : -1);
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
      aria-roledescription={desktop ? 'carousel' : undefined}
      aria-label="KodeCite introduction"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onMouseEnter={() => desktop && setPaused(true)}
      onMouseLeave={() => desktop && setPaused(false)}
      onFocus={() => desktop && setPaused(true)}
      onBlur={() => desktop && setPaused(false)}
    >
      <div className="kc-slider-track">
        {HOME_SLIDES.map((s, i) => (
          <CinematicSlide
            key={s.id}
            slide={s}
            index={i}
            total={total}
            isActive={i === active}
            className={layerClass(i)}
            ariaHidden={desktop && i !== active}
          />
        ))}
      </div>

      <div
        className={`kc-slider-cta absolute z-20 left-0 right-0 mx-auto px-8 flex flex-col sm:flex-row gap-3 ${
          HOME_SLIDES[active].theme === 'light' ? 'kc-cta-light' : ''
        }`}
        style={{ maxWidth: '1320px', bottom: 'clamp(72px, 9vh, 108px)' }}
      >
        <Link href="/machine-read" className="d-btn d-btn-primary w-full sm:w-auto justify-center">
          Request an Agent Readiness Review →
        </Link>
        <Link href="/faq" className="d-btn d-btn-ghost w-full sm:w-auto justify-center">
          Start Here
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
