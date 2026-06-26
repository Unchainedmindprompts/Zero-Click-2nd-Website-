'use client';

import { usePathname } from 'next/navigation';
import SecondaryWaterBackground from './SecondaryWaterBackground';

/**
 * SecondaryBackground — mounts the water backdrop for every route EXCEPT the
 * homepage. Rendered once in the layout so it stays mounted across secondary →
 * secondary navigation (continuous, no re-fade); it disappears on the homepage,
 * which keeps its locked cinematic slider untouched.
 */
export default function SecondaryBackground() {
  const pathname = usePathname();
  if (pathname === '/') return null;
  return <SecondaryWaterBackground />;
}
