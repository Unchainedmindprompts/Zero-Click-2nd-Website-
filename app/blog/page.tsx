import Link from 'next/link';
import { blogPosts, getFeaturedPosts } from '@/lib/blog';
import BlogFilter from '@/components/blog/BlogFilter';

export const metadata = {
  title: 'The Playbook — KodeCite.AI',
  description:
    'Strategic thinking on AI visibility, entity architecture, and the infrastructure decisions that compound.',
};

export default function BlogPage() {
  const featured = getFeaturedPosts();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{ padding: '140px 32px 64px', backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">THE PLAYBOOK</div>

          <h1
            className="font-inter font-semibold mb-5"
            style={{
              fontSize:      'clamp(40px, 5.5vw, 72px)',
              lineHeight:    1.05,
              letterSpacing: '-0.03em',
              color:         'var(--d-fg)',
              maxWidth:      '800px',
            }}
          >
            The KodeCite{' '}
            <em className="serif">Playbook.</em>
          </h1>

          <p
            className="font-inter"
            style={{
              fontSize:   '17px',
              lineHeight: 1.65,
              color:      'var(--d-fg-dim)',
              fontWeight: 300,
              maxWidth:   '560px',
            }}
          >
            Strategic thinking on AI visibility, entity architecture, and the
            infrastructure decisions that compound.
          </p>
        </div>
      </section>

      {/* ── Filter + posts (client component) ───────────── */}
      <BlogFilter posts={blogPosts} featured={featured} />

      {/* ── Bottom CTA ───────────────────────────────────── */}
      <section
        style={{
          padding:         '100px 32px',
          backgroundColor: 'var(--d-bg-2)',
          borderTop:       '1px solid var(--d-line)',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">GET THE REAL AUDIT</div>

          <h2
            className="font-inter font-semibold mb-5"
            style={{
              fontSize:      'clamp(28px, 3.5vw, 44px)',
              lineHeight:    1.1,
              letterSpacing: '-0.025em',
              color:         'var(--d-fg)',
            }}
          >
            Reading about it is one thing.{' '}
            <em className="serif">Having it built is another.</em>
          </h2>

          <p
            className="font-inter mb-8"
            style={{
              fontSize:   '16px',
              lineHeight: 1.65,
              color:      'var(--d-fg-dim)',
              fontWeight: 300,
            }}
          >
            The Machine Read shows you exactly what AI can and can&apos;t verify
            about your business right now. No pitch. Just data.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="d-btn d-btn-primary">
              Get My Machine Read →
            </Link>
            <Link href="/services" className="d-btn d-btn-ghost">
              See What&apos;s Included
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
