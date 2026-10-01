import type { ReactNode } from 'react';

// Content stays in the document flow and server-rendered on every route.
export default function RouteTransition({ children }: { children: ReactNode }) {
  return <main id="main-content" className="kc-main" tabIndex={-1}>{children}</main>;
}
