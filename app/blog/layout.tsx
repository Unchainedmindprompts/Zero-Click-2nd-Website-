import type { ReactNode } from 'react';
import SecondaryPageShell from '@/components/SecondaryPageShell';

/**
 * Blog layout — gives the blog index and every article page the shared urban
 * background, with the calmer reading wash so long-form content stays legible.
 */
export default function BlogLayout({ children }: { children: ReactNode }) {
  return <SecondaryPageShell variant="reading">{children}</SecondaryPageShell>;
}
