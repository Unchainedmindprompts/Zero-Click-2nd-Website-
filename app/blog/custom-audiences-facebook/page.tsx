import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';
import { blogPosts } from '@/lib/blog';

type Section = { h: string; p: string[]; items?: string[]; source?: string };
const ARTICLE: { slug: string; title: string; description: string; date: string; category: string; intro: string; sections: Section[]; sources: string[][]; related: string[]; example?: object } = {
  "slug": "custom-audiences-facebook",
  "title": "Customer Context, Better Inquiries and the Limits of Audience Targeting",
  "description": "An updated archival guide to engagement, website and customer audiences, with a focus on permission, fit and the owned customer journey.",
  "date": "2026-02-27",
  "category": "ARCHIVE",
  "intro": "Audience tools can help organize advertising, but behavior is not the same as intent. This updated archival guide explains three kinds of customer context and the website work that makes a resulting inquiry useful. Paid media is not part of Kodecite’s current offer.",
  "sections": [
    {
      "h": "A signal needs interpretation",
      "p": [
        "Watching a video, visiting a service page and becoming a customer are different events. They can inform a campaign, but none tells you everything about what a person needs now. A video may be entertainment; a page visit may be research for someone else.",
        "Treat those events as hypotheses about relevance. The next message and landing page should help the person decide whether the offering fits, rather than assume that a past action establishes readiness to buy."
      ]
    },
    {
      "h": "1. Engagement context",
      "p": [
        "People who interact with a business’s content may already recognize its name or work. A useful follow-up can add a different piece of information: how a project starts, what a service includes or an example of a similar job.",
        "Do not attach a fixed conversion value to a particular viewing percentage. Video length, placement, creative and audience all affect the meaning of engagement. Keep claims about superior performance grounded in the campaign’s own evidence, with enough data to distinguish a pattern from noise."
      ]
    },
    {
      "h": "2. Website context",
      "p": [
        "A visit to a detailed service page may indicate a different question from a visit to the home page. Where tracking is permitted and available, that context can help a media specialist design a more relevant message.",
        "The more important website question is whether the page actually answered the visitor’s need. If people repeatedly open the contact page but fail to submit, investigate missing information, unclear expectations and form friction. Advertising cannot repair a confusing request process on its own."
      ]
    },
    {
      "h": "3. Customer context",
      "p": [
        "An existing customer relationship may reveal useful patterns about the kinds of work the business serves well. Those patterns can guide the offer and the examples shown on the website even without uploading a customer list anywhere.",
        "If customer-list or similar audience tools are used, review the platform’s current terms and the rights applicable to that data. A list is not automatically available for every advertising purpose. Sensitive information and restricted categories require particular care. Confirm the permitted scope before any transmission."
      ],
      "source": "terms"
    },
    {
      "h": "Keep audience design proportionate",
      "p": [
        "A small local business may not benefit from splitting every behavior into a separate campaign. Too many segments can make results harder to interpret and leave each group with little usable data. The best structure depends on actual audience size, customer journey and platform options.",
        "Start with a clear business question. Are you trying to explain a new service, remind interested customers of the next step or reach suitable people beyond an existing audience? Give each experiment a purpose and measure the outcome that corresponds to it."
      ]
    },
    {
      "h": "Make the landing page carry the context",
      "p": [
        "A customer who has already watched an installation example may need practical answers about service area and consultation. Someone encountering the business for the first time may need more introduction and proof. Both should reach the same accurate business facts.",
        "Build reusable service information rather than separate, contradictory offers for each campaign. The owner, offerings, credentials, examples and policies should agree wherever the customer encounters them. That consistency also helps assistants collecting information from multiple pages."
      ]
    },
    {
      "h": "Look at inquiry quality and follow-up",
      "p": [
        "Review the path from interest to actual work. How many requests were in area? How many matched the service? Did the team have enough information to respond? Were customers clear that submission requested follow-up rather than reserving a time?",
        "A better result may come from a clearer service description or a shorter form rather than another audience filter. Keep the people handling inquiries involved, because the dashboard cannot show every misunderstanding that appears in the conversation."
      ]
    },
    {
      "h": "Why this matters when an assistant represents the customer",
      "p": [
        "A personal AI assistant may carry explicit context: the customer’s project, location and constraints. The business should help it determine suitability and identify the appropriate next step. That is often more actionable than inferring intent from a past click.",
        "Where a live capability exists, the assistant should submit only the information and action its customer has approved, and receive an accurate result or handoff. Kodecite’s current work focuses on that understandable business foundation and separately scoped requests, while these paid-media lessons remain historical background."
      ]
    }
  ],
  "sources": [
    [
      "Meta Business Help Center",
      "https://www.facebook.com/business/help"
    ],
    [
      "Meta: Customer List Custom Audiences Terms",
      "https://www.facebook.com/legal/terms/customaudience"
    ]
  ],
  "related": [
    "entity-first-search-local-businesses",
    "from-recommended-to-actionable-luxe-window-works"
  ]
};
const SOURCE_LINKS: Record<string, string[]> = {
  "google": [
    "Google Search Central: AI features and your website",
    "https://developers.google.com/search/docs/appearance/ai-features"
  ],
  "schema": [
    "Schema.org: About the vocabulary",
    "https://schema.org/docs/about.html"
  ],
  "jsonld": [
    "W3C: JSON-LD 1.1",
    "https://www.w3.org/TR/json-ld11/"
  ],
  "local": [
    "Schema.org: LocalBusiness",
    "https://schema.org/LocalBusiness"
  ],
  "service": [
    "Schema.org: Service",
    "https://schema.org/Service"
  ],
  "offer": [
    "Schema.org: Offer",
    "https://schema.org/Offer"
  ],
  "updates": [
    "Google Search documentation updates",
    "https://developers.google.com/search/updates"
  ],
  "crawl": [
    "Vercel: The rise of the AI crawler",
    "https://vercel.com/blog/the-rise-of-the-ai-crawler"
  ],
  "reviews": [
    "Google Business Profile: Local ranking guidance",
    "https://support.google.com/business/answer/7091?hl=en"
  ],
  "sitemap": [
    "Google Search Central: Sitemaps",
    "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview"
  ],
  "luxe": [
    "Luxe Window Works: Public consultation capability",
    "https://www.luxewindowworks.com/api/capabilities/request-in-home-consultation"
  ],
  "meta": [
    "Meta Business Help Center",
    "https://www.facebook.com/business/help"
  ],
  "terms": [
    "Meta: Customer List Custom Audiences Terms",
    "https://www.facebook.com/legal/terms/customaudience"
  ]
};
const PAGE_URL = `https://www.kodecite.ai/blog/${ARTICLE.slug}`;
const WORD_COUNT = 737;
const READ_TIME = '4 min read';
const PUBLISHED = 'February 27, 2026';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: ARTICLE.title, description: ARTICLE.description, url: PAGE_URL, type: 'article', publishedTime: `${ARTICLE.date}T00:00:00-07:00`, modifiedTime: '2026-10-01T15:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article', '@id': `${PAGE_URL}#article`,
  headline: ARTICLE.title, description: ARTICLE.description,
  datePublished: `${ARTICLE.date}T00:00:00-07:00`, dateModified: '2026-10-01T15:00:00Z',
  wordCount: WORD_COUNT, articleSection: ARTICLE.category,
  author: articleAuthor, publisher: articlePublisher, isPartOf: blogCollectionPage,
  url: PAGE_URL, mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  image: 'https://www.kodecite.ai/og-image.png', about: [businessRef],
  citation: ARTICLE.sources.map(([name, url]) => ({ '@type': 'CreativeWork', name, url })),
};
const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.kodecite.ai/blog' },
    { '@type': 'ListItem', position: 3, name: ARTICLE.title, item: PAGE_URL },
  ],
};

export default function ArticlePage() {
  const related = ARTICLE.related.map((slug) => blogPosts.find((post) => post.slug === slug)).filter(Boolean);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }} />
      <header className="pt-36 pb-16 px-5 md:px-8" style={{ background: 'var(--d-bg)', borderBottom: '1px solid var(--d-line)' }}>
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex gap-3 text-sm font-inter text-[var(--d-fg-dim)] mb-9">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/blog">Insights</Link>
          </nav>
          <p className="d-eyebrow mb-6">{ARTICLE.category} · {READ_TIME}</p>
          <h1 className="font-inter font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-[var(--d-fg)] mb-8">{ARTICLE.title}</h1>
          <p className="font-inter text-lg md:text-xl leading-relaxed text-[var(--d-fg-dim)] max-w-3xl">{ARTICLE.intro}</p>
          <div className="mt-9 pt-6 font-inter text-sm text-[var(--d-fg-dim)]" style={{ borderTop: '1px solid var(--d-line)' }}>
            <p className="font-semibold text-[var(--d-fg)] mb-1">Mark Abplanalp · Kodecite</p>
            <p>Published {PUBLISHED} · Updated October 1, 2026</p>
          </div>
        </div>
      </header>
      <section className="px-5 md:px-8 py-16 md:py-20" style={{ background: 'var(--d-bg)' }}>
        <article className="max-w-3xl mx-auto font-inter text-[var(--d-fg-dim)]" style={{ fontSize: '17px', lineHeight: 1.85 }}>
          {ARTICLE.sections.map((section) => (
            <section key={section.h} className="mb-12">
              <h2 className="font-inter font-semibold text-2xl md:text-3xl leading-tight tracking-tight text-[var(--d-fg)] mb-5">{section.h}</h2>
              {section.p.map((paragraph) => <p key={paragraph} className="mb-5">{paragraph}</p>)}
              {section.items && <ul className="space-y-3 pl-6 mb-5 list-disc">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
              {section.source && SOURCE_LINKS[section.source] && <p className="text-sm"><a href={SOURCE_LINKS[section.source][1]} target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-4">{SOURCE_LINKS[section.source][0]} ↗</a></p>}
              {section.h === 'A small connected example' && ARTICLE.example && <pre className="overflow-x-auto rounded-xl p-5 text-xs md:text-sm leading-relaxed my-6" style={{ background: 'var(--d-bg-2)', border: '1px solid var(--d-line)' }}><code>{JSON.stringify(ARTICLE.example, null, 2)}</code></pre>}
            </section>
          ))}
          <section className="pt-8 mt-12" style={{ borderTop: '1px solid var(--d-line)' }}>
            <h2 className="text-xl font-semibold text-[var(--d-fg)] mb-5">Sources and further reading</h2>
            <ul className="space-y-3 text-sm">{ARTICLE.sources.map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-4">{label} ↗</a></li>)}</ul>
          </section>
          <section className="pt-8 mt-10" style={{ borderTop: '1px solid var(--d-line)' }}>
            <h2 className="text-xl font-semibold text-[var(--d-fg)] mb-5">Keep reading</h2>
            <ul className="space-y-4">{related.map((post) => post && <li key={post.slug}><Link href={`/blog/${post.slug}`} className="text-[var(--d-accent)] hover:underline">{post.title} →</Link></li>)}</ul>
            <Link href="/blog" className="inline-block mt-8 text-sm text-[var(--d-fg-dim)] hover:text-[var(--d-fg)]">← All insights</Link>
          </section>
        </article>
      </section>
      <section className="py-20 px-5 md:px-8" style={{ background: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="d-eyebrow mb-5">YOUR BUSINESS, CLEARLY UNDERSTOOD</p>
          <h2 className="font-inter text-3xl md:text-4xl font-semibold tracking-tight text-[var(--d-fg)] mb-5">Make the next step easier for your customer and their AI assistant.</h2>
          <p className="font-inter text-[var(--d-fg-dim)] text-lg leading-relaxed mb-8">An Agent Readiness Review looks at your business information, supporting evidence and the next steps a customer can take. Start with the gaps that matter to a real inquiry.</p>
          <Link href="/machine-read" className="d-btn d-btn-primary">Request an Agent Readiness Review →</Link>
        </div>
      </section>
    </>
  );
}
