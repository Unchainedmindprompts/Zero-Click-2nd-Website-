import type { ReactNode } from 'react';

/**
 * SecondaryPageShell — content wrapper for menu-reachable pages. The water
 * backdrop is mounted globally (SecondaryBackground in the layout), so this just
 * provides the normally-scrolling content column that floats above it.
 */
export default function SecondaryPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="secondary-page">
      <div className="secondary-content">{children}</div>
    </div>
  );
}
