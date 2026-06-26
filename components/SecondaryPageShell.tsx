import type { ReactNode } from 'react';
import UrbanMaterialBackground from './UrbanMaterialBackground';

/**
 * SecondaryPageShell — wraps an entire secondary page. It renders the full-page
 * urban background (behind everything) and a normally-scrolling content column
 * that floats above it. Page sections stay transparent and use GlassPanel (or
 * the mapped --d-* tokens) so the background remains visible top-to-bottom.
 *
 * variant="reading" applies a calmer translucent wash to long-form content
 * (blog articles) so dense text stays legible over the urban surface.
 */
export default function SecondaryPageShell({
  children,
  variant,
}: {
  children: ReactNode;
  variant?: 'reading';
}) {
  return (
    <div className={`secondary-page ${variant === 'reading' ? 'secondary-page--reading' : ''}`.trim()}>
      <UrbanMaterialBackground />
      <div className="secondary-page-content">{children}</div>
    </div>
  );
}
