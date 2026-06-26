'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * UrbanMaterialBackground — the full-page urban surface behind every secondary
 * page. It is fixed to the viewport and covers the whole scrolling page (NOT a
 * hero-only background); sections above it are transparent and panels carry the
 * text, so the page never fades to black.
 *
 * Portaled to <body> so the fixed layer escapes the RouteTransition wrapper's
 * transform (a transformed ancestor would otherwise make `position: fixed`
 * scroll with the page). Removed on unmount, so it never appears on routes that
 * don't use SecondaryPageShell (e.g. the homepage slider).
 */
export default function UrbanMaterialBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="urban-material-bg" aria-hidden="true">
      <div className="urban-material-layer" />
      <div className="urban-material-overlay" />
    </div>,
    document.body,
  );
}
