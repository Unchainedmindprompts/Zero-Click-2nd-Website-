'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { BlogPost, CATEGORIES, Category } from '@/lib/blog';

// ─── Category chip ────────────────────────────────────────
function Chip({
  label, count, active, onClick,
}: { label: string; count: number; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="font-mono flex-shrink-0"
      style={{
        fontSize: '11px',
        letterSpacing: '0.14em',
        padding: '7px 14px',
        borderRadius: '100px',
        cursor: 'pointer',
        transition: 'background-color 150ms ease, color 150ms ease, border-color 150ms ease',
        background:   active ? 'var(--d-accent)' : 'transparent',
        color:        active ? 'var(--d-bg)'      : 'var(--d-fg-mute)',
        border:       active
          ? '1px solid var(--d-accent)'
          : '1px solid var(--d-line-s)',
      }}
    >
      {label}
      <span style={{ opacity: 0.6, marginLeft: '6px' }}>
        {count}
      </span>
    </button>
  );
}

// ─── Featured card (large, shown only in ALL view) ────────
function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      style={{
        display:      'block',
        background:   'var(--d-bg-2)',
        border:       '1px solid var(--d-line)',
        borderLeft:   '3px solid var(--d-accent)',
        borderRadius: '16px',
        padding:      '32px 36px',
        transition:   'border-color 200ms ease, background-color 200ms ease',
      }}
      className="d-featured-card"
    >
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span
          className="font-mono"
          style={{
            fontSize:      '10px',
            letterSpacing: '0.15em',
            color:         'var(--d-accent)',
            background:    'rgba(93,213,255,0.08)',
            border:        '1px solid rgba(93,213,255,0.2)',
            borderRadius:  '100px',
            padding:       '4px 10px',
          }}
        >
          {post.category}
        </span>
        <span
          className="font-mono"
          style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'var(--d-fg-mute)' }}
        >
          FEATURED
        </span>
      </div>

      <h2
        className="font-inter font-semibold mb-3"
        style={{
          fontSize:      'clamp(17px, 2vw, 20px)',
          lineHeight:    1.25,
          letterSpacing: '-0.015em',
          color:         'var(--d-fg)',
        }}
      >
        {post.title}
      </h2>

      <p
        className="font-inter mb-6"
        style={{
          fontSize:   '14px',
          lineHeight: 1.65,
          color:      'var(--d-fg-dim)',
          fontWeight: 300,
        }}
      >
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span
            className="font-mono"
            style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'var(--d-fg-mute)' }}
          >
            {post.date}
          </span>
          <span
            className="font-mono"
            style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'var(--d-fg-mute)' }}
          >
            {post.readTime}
          </span>
        </div>
        <span
          className="font-inter font-semibold d-post-arrow"
          style={{ fontSize: '13px', color: 'var(--d-accent)' }}
        >
          Read →
        </span>
      </div>
    </Link>
  );
}

// ─── Post list row ────────────────────────────────────────
function PostRow({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="d-post-row block"
      style={{
        borderBottom: '1px solid var(--d-line)',
        paddingLeft:  '16px',
      }}
    >
      <div className="flex items-start gap-5 py-5">
        {/* Category chip */}
        <span
          className="font-mono flex-shrink-0 hidden sm:inline-block"
          style={{
            fontSize:      '9px',
            letterSpacing: '0.14em',
            color:         'var(--d-accent)',
            background:    'rgba(93,213,255,0.06)',
            border:        '1px solid rgba(93,213,255,0.15)',
            borderRadius:  '100px',
            padding:       '4px 9px',
            marginTop:     '3px',
            whiteSpace:    'nowrap',
          }}
        >
          {post.category}
        </span>

        {/* Title + excerpt */}
        <div className="flex-1 min-w-0">
          <p
            className="font-inter font-semibold mb-1"
            style={{
              fontSize:      '15px',
              lineHeight:    1.35,
              letterSpacing: '-0.01em',
              color:         'var(--d-fg)',
            }}
          >
            {post.title}
          </p>
          <p
            className="font-inter hidden md:block"
            style={{
              fontSize:   '13px',
              lineHeight: 1.55,
              color:      'var(--d-fg-mute)',
              fontWeight: 300,
              overflow:   'hidden',
              display:    '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical' as const,
            }}
          >
            {post.excerpt}
          </p>
        </div>

        {/* Meta */}
        <div
          className="flex-shrink-0 text-right hidden lg:block"
          style={{ minWidth: '120px' }}
        >
          <p
            className="font-mono"
            style={{ fontSize: '10px', letterSpacing: '0.08em', color: 'var(--d-fg-mute)' }}
          >
            {post.date}
          </p>
          <p
            className="font-mono"
            style={{ fontSize: '10px', letterSpacing: '0.08em', color: 'var(--d-fg-mute)' }}
          >
            {post.readTime}
          </p>
        </div>

        {/* Arrow */}
        <span
          className="d-post-arrow flex-shrink-0"
          style={{ color: 'var(--d-accent)', fontSize: '14px', marginTop: '1px' }}
        >
          →
        </span>
      </div>
    </Link>
  );
}

// ─── Main export ──────────────────────────────────────────
export default function BlogFilter({
  posts,
  featured,
}: {
  posts:    BlogPost[];
  featured: BlogPost[];
}) {
  const [active, setActive] = useState<Category>('ALL');

  const counts = useMemo(() => {
    const result: Record<string, number> = { ALL: posts.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== 'ALL') result[cat] = posts.filter((p) => p.category === cat).length;
    });
    return result;
  }, [posts]);

  const showFeatured = active === 'ALL';
  const filteredPosts = active === 'ALL'
    ? posts.filter((p) => !p.featured)
    : posts.filter((p) => p.category === active);

  return (
    <>
      {/* ── Sticky category filter ───────────────────────── */}
      <div
        className="sticky z-30"
        style={{
          top:          '72px',
          background:   'rgba(10,12,31,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--d-line)',
        }}
      >
        <div
          className="flex gap-2 overflow-x-auto"
          style={{
            maxWidth: '1240px',
            margin:   '0 auto',
            padding:  '14px 32px',
            scrollbarWidth: 'none',
          }}
        >
          {CATEGORIES.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              count={counts[cat] ?? 0}
              active={active === cat}
              onClick={() => setActive(cat)}
            />
          ))}
        </div>
      </div>

      {/* ── Featured cards (ALL only) ────────────────────── */}
      {showFeatured && (
        <section style={{ padding: '56px 32px 40px', backgroundColor: 'var(--d-bg)' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <p
              className="font-mono mb-5"
              style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'var(--d-fg-mute)' }}
            >
              FEATURED
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featured.map((post) => (
                <FeaturedCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Post list ────────────────────────────────────── */}
      <section
        style={{
          padding:         showFeatured ? '0 32px 80px' : '48px 32px 80px',
          backgroundColor: 'var(--d-bg)',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {!showFeatured && (
            <p
              className="font-mono mb-6"
              style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'var(--d-fg-mute)' }}
            >
              {active} — {filteredPosts.length} {filteredPosts.length === 1 ? 'ARTICLE' : 'ARTICLES'}
            </p>
          )}

          {filteredPosts.length > 0 ? (
            <div style={{ borderTop: '1px solid var(--d-line)' }}>
              {filteredPosts.map((post) => (
                <PostRow key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p
              className="font-inter"
              style={{ color: 'var(--d-fg-mute)', fontSize: '15px', padding: '40px 0' }}
            >
              No articles in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
