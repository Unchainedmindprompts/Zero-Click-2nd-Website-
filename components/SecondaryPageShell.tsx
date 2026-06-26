import type { ReactNode } from 'react';
import UrbanMaterialBackground from './UrbanMaterialBackground';

/**
 * SecondaryPageShell — wraps an entire secondary page. It renders the full-page
 * urban background (behind everything) and a normally-scrolling content column
 * that floats above it. Page sections must stay transparent and use GlassPanel
 * for their content so the background remains visible top-to-bottom.
 */
export default function SecondaryPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="secondary-page">
      <UrbanMaterialBackground />
      <div className="secondary-page-content">{children}</div>
    </div>
  );
}
