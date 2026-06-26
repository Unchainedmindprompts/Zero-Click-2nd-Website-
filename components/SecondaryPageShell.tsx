import type { ReactNode } from 'react';
import SecondaryWaterBackground from './SecondaryWaterBackground';

/**
 * SecondaryPageShell — wraps a secondary (menu-reachable) page with the
 * continuous animated water background and a normally-scrolling content column.
 * The persistent site shell/nav sits above this; only the homepage is locked.
 */
export default function SecondaryPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="secondary-page">
      <SecondaryWaterBackground />
      <div className="secondary-content">{children}</div>
    </div>
  );
}
