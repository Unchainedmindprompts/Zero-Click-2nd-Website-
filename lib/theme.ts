// Per-page color themes for the experience system.
//
// RouteTransition reads themeForPath(pathname) on every navigation and writes
// --kc-bg / --kc-fg onto <html>; the body { transition } in globals.css morphs
// the ambient backdrop + base text color between routes.
//
// Only the two ambient tokens live here. Section-level colors (the --d-* design
// system) are unaffected — this is the backdrop the page floats on.

export interface KcTheme {
  bg: string;
  fg: string;
}

export const DEFAULT_THEME: KcTheme = { bg: '#0a0a0f', fg: '#fafafa' };

// Prefix → theme. Order is most-specific-first; themeForPath returns the first
// prefix the pathname starts with, else the default (Home).
const ROUTE_THEMES: ReadonlyArray<{ prefix: string; theme: KcTheme }> = [
  { prefix: '/services',     theme: { bg: '#0c1a2e', fg: '#e0e7ff' } },
  { prefix: '/about',        theme: { bg: '#111827', fg: '#f4f4f5' } },
  { prefix: '/blog',         theme: { bg: '#18181b', fg: '#fafafa' } },
  { prefix: '/faq',          theme: { bg: '#101018', fg: '#e4e4e7' } },
  { prefix: '/contact',      theme: { bg: '#050816', fg: '#fafafa' } },
  // Machine Read — its own route today maps to /contact, but the dedicated
  // theme is kept here for when a standalone Machine Read route ships.
  { prefix: '/machine-read', theme: { bg: '#07111f', fg: '#dbeafe' } },
];

export function themeForPath(pathname: string): KcTheme {
  if (pathname === '/' || pathname === '') return DEFAULT_THEME;
  const match = ROUTE_THEMES.find(({ prefix }) => pathname.startsWith(prefix));
  return match ? match.theme : DEFAULT_THEME;
}
