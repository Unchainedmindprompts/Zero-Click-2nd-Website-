'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * SecondaryWaterBackground — the continuous animated water backdrop for
 * secondary pages. CSS-only motion (slow drift + shimmer), no dependencies.
 *
 * Portaled to <body> so it escapes the RouteTransition wrapper's transform
 * (which would otherwise break position: fixed) and stays locked to the
 * viewport while the page scrolls. It is removed on unmount, so it never leaks
 * onto the homepage or other routes. Sits behind all content (z-index: -1) and
 * below the persistent shell.
 */
export default function SecondaryWaterBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="secondary-water-bg" aria-hidden="true">
      <div className="secondary-water-layer" />
      <div className="secondary-water-layer secondary-water-layer--depth" />
      <div className="secondary-water-shimmer" />
      <div className="secondary-water-tint" />
    </div>,
    document.body,
  );
}
