'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { themeForPath } from '@/lib/theme';

/**
 * RouteTransition — the experience system's route layer.
 *
 *  1. Per-page theme: on every pathname change it writes --kc-bg / --kc-fg onto
 *     <html>. The body { transition } in globals.css morphs the backdrop + base
 *     text color over 0.7s — the "background color morph" between pages.
 *  2. Entrance: children are remounted via key={pathname}, so .kc-entering
 *     replays its materialize animation on each navigation.
 *
 * Children are server-rendered and passed straight through, so page HTML stays
 * in the SSR output and remains crawlable. No animation libraries.
 */
export default function RouteTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const { bg, fg } = themeForPath(pathname);
    const root = document.documentElement;
    root.style.setProperty('--kc-bg', bg);
    root.style.setProperty('--kc-fg', fg);
  }, [pathname]);

  return (
    <main className="kc-main">
      <div key={pathname} className="kc-page kc-entering">
        {children}
      </div>
    </main>
  );
}
