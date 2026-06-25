'use client';

import { useEffect } from 'react';

/**
 * HomeScrollLock — locks the viewport to the cinematic slider on `/` only.
 *
 * Adds a class to <html> on mount and removes it on unmount, so the lock is
 * scoped to the homepage route: navigating to an interior page unmounts this
 * (HomePage is remounted per route by RouteTransition's key), restoring scroll.
 * The CSS (globals.css) handles the actual overflow lock + hiding the footer.
 */
export default function HomeScrollLock() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('kc-home-locked');
    return () => root.classList.remove('kc-home-locked');
  }, []);

  return null;
}
