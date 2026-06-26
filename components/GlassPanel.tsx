import type { CSSProperties, ElementType, ReactNode } from 'react';

/**
 * GlassPanel — a translucent frosted-glass surface that floats over the
 * secondary-page water background. `soft` is a lighter, more transparent
 * variant for nested/inset cards.
 */
export default function GlassPanel({
  children,
  soft = false,
  as: Tag = 'div',
  className = '',
  style,
  id,
}: {
  children: ReactNode;
  soft?: boolean;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  id?: string;
}) {
  return (
    <Tag id={id} className={`${soft ? 'glass-panel-soft' : 'glass-panel'} ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}
