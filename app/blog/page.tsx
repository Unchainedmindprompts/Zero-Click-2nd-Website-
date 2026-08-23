import Link from 'next/link';
import { getFeaturedPosts, getPublicPosts } from '@/lib/blog';
import BlogFilter from '@/components/blog/BlogFilter';
import { REVIEW_HREF, THESIS } from '@/lib/positioning';

export const metadata = {
  title: 'Insights',
  description:
    'Notes on the trusted digital business layer: how AI agents understand, evaluate, recommend, and take authorized next steps with service businesses.',
  alternates: { canonical: 'https://www.kodecite.ai/blog' },
};

export default function BlogPage() {
  const posts = getPublicPosts();
  const featured = getFeaturedPosts();

  return (
    <>
      <section style={{ padding: '140px 32px 64px', backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">INSIGHTS</div>

          <h1
            className="font-inter font-semibold mb-5"
            style={{
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--d-fg)',
              maxWidth: '800px',
            }}
          >
            Business truth.{' '}
            <em className="serif">Controlled action.</em>
          </h1>

          <p
            className="font-inter"
            style={{
              fontSize: '17px',
              lineHeight: 1.65,
              color: 'var(--d-fg-dim)',
              fontWeight: 300,
              maxWidth: '640px',
            }}
          >
            {THESIS} Notes on business truth, controlled action, and what a usable
            system actually requires.
          </p>
        </div>
      </section>

      <BlogFilter posts={posts} featured={featured} />

      <section
        style={{
          padding: '100px 32px',
          backgroundColor: 'var(--d-bg-2)',
          borderTop: '1px solid var(--d-line)',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">AGENT READINESS REVIEW</div>

          <h2
            className="font-inter font-semibold mb-5"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: 'var(--d-fg)',
            }}
          >
            Reading about it is one thing.{' '}
            <em className="serif">Seeing your own system is another.</em>
          </h2>

          <p
            className="font-inter mb-8"
            style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: 'var(--d-fg-dim)',
              fontWeight: 300,
            }}
          >
            The Agent Readiness Review is a look at what AI can understand, evaluate,
            and safely do with your business today.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={REVIEW_HREF} className="d-btn d-btn-primary">
              Request an Agent Readiness Review →
            </Link>
            <Link href="/services" className="d-btn d-btn-ghost">
              See the five layers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
