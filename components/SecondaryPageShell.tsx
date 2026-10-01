import type { ReactNode } from 'react';

export default function SecondaryPageShell({ children, variant }: { children: ReactNode; variant?: 'reading' }) {
  return <div className={`secondary-page ${variant === 'reading' ? 'secondary-page--reading' : ''}`}><div className="secondary-page-content">{children}</div></div>;
}
