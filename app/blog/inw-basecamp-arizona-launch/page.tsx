import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';
import { blogPosts } from '@/lib/blog';

type Section = { h: string; p: string[]; items?: string[]; source?: string };
const ARTICLE: { slug: string; title: string; description: string; date: string; category: string; intro: string; sections: Section[]; sources: string[][]; related: string[]; example?: object } = {
  "slug": "inw-basecamp-arizona-launch",
  "title": "The INW Basecamp Arizona Launch: A Focused Foundation for a New Market",
  "description": "Lessons from an earlier same-day landing-page launch: define the offer, separate launch checks from market outcomes and connect inquiries to human follow-up.",
  "date": "2026-02-26",
  "category": "CASE STUDIES",
  "intro": "The original INW Basecamp Arizona launch report described a landing page, structured-data work and paid campaigns prepared on the same day. Its useful lesson is focused execution: establish what is offered, make it understandable and give interested customers a clear next step.",
  "sections": [
    {
      "h": "Keep launch evidence separate from market results",
      "p": [
        "Publishing a page is a deliverable. Validating its structured data is a technical check. Launching a campaign is another action. None independently proves that a new market trusts the business or that customers will book.",
        "This is a historical launch account, not a newly audited performance report. The article preserves the reported same-day scope without converting that timing into a general delivery promise. Current availability, campaign performance and business outcomes would need current records."
      ]
    },
    {
      "h": "A new market needs an accurate explanation",
      "p": [
        "An established business may have experience in one region while entering another. The website should distinguish those facts. Prior work can demonstrate expertise, but it should not be presented as local work in the new area.",
        "Explain the actual offer, who it suits, where it is available and how a customer can confirm details. Identify whether there is a physical location, a service area or an upcoming expansion. Those distinctions affect both human expectations and how the business should be described in code."
      ]
    },
    {
      "h": "Use the smallest page that answers the decision",
      "p": [
        "A focused launch page should let a prospective customer understand the offering without hunting through an old site. Give it a descriptive title, useful headings, relevant evidence and a next step that matches the stage of the relationship.",
        "The page should answer the questions that determine fit. Which customers and project types are suitable? What is available now? Which details need a conversation? What information should a request include? If a fact is not established, leave room for confirmation rather than filling it with confident marketing language."
      ]
    },
    {
      "h": "Model relationships without inventing a local presence",
      "p": [
        "Structured data can connect the page to the existing business and describe the actual offering. Use a location entity only when there is a real location to represent. Do not create a fictional office or suggest a verified business profile exists before it does.",
        "The same principle applies to evidence. A project image from an established region can be useful if it is labeled honestly. A credential belongs to the holder who earned it. A new-market claim should say what is new and what experience the team brings with it."
      ]
    },
    {
      "h": "Let the conversion match the buying process",
      "p": [
        "For considered purchases, an inquiry may be the most useful first action. A customer may need to discuss suitability, timing, scope or price with a person before committing. The request flow should collect enough context to make that discussion productive.",
        "An assistant working for the customer needs the same clarity. It should be able to distinguish a request for information from a confirmed appointment or purchase. A successful submission should explain that the request was received and what follow-up remains."
      ]
    },
    {
      "h": "Paid distribution was part of the historical scope",
      "p": [
        "The original launch included Facebook campaigns. That is context for the launch, not a current Kodecite paid-media offer. Paid distribution can bring people to a new page, while the owned site still needs to explain the business and handle the response well.",
        "Campaign launch, audience engagement and qualified demand should be reported separately. Tracking and audience use also need appropriate permissions and platform compliance. A short launch timeline is not a reason to treat every visitor or customer record as available for advertising."
      ]
    },
    {
      "h": "A practical launch acceptance checklist",
      "p": [
        "Before publication, test the page against its stated purpose. Keep technical acceptance concrete and keep market expectations realistic."
      ],
      "items": [
        "The offer, availability and geography reflect the approved business facts.",
        "Images, credentials and examples are correctly attributed.",
        "The page loads, navigation works and important information is accessible.",
        "Structured data matches the visible page and appropriate vocabulary.",
        "The request reaches the right person and shows an accurate confirmation.",
        "The team knows who follows up and how later changes will be published."
      ]
    },
    {
      "h": "What the case contributes to an agent-led journey",
      "p": [
        "The broader lesson is to build around a real customer decision before expanding the site or campaign. A focused, accurate foundation can be extended as evidence and demand develop.",
        "For Kodecite today, that extends to personal AI assistants and outside agents. The business needs to be understandable, supported by evidence and able to receive the appropriate next request. The format of the entry point can change; the responsibility to represent the business accurately remains."
      ]
    }
  ],
  "sources": [
    [
      "Schema.org: About the vocabulary",
      "https://schema.org/docs/about.html"
    ],
    [
      "Google Search Central: Sitemaps",
      "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview"
    ]
  ],
  "related": [
    "below-the-content-layer",
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
const WORD_COUNT = 760;
const READ_TIME = '4 min read';
const PUBLISHED = 'February 26, 2026';

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
              {section.source && SOURCE_LINKS[section.source] && <p className="text-sm"><a href={SOURCE_LINKS[section.source][1]} target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-4">{SOURCE_LINKS[section.source][0]} →</a></p>}
              {section.h === 'A small connected example' && ARTICLE.example && <pre className="overflow-x-auto rounded-xl p-5 text-xs md:text-sm leading-relaxed my-6" style={{ background: 'var(--d-bg-2)', border: '1px solid var(--d-line)' }}><code>{JSON.stringify(ARTICLE.example, null, 2)}</code></pre>}
            </section>
          ))}
          <section className="pt-8 mt-12" style={{ borderTop: '1px solid var(--d-line)' }}>
            <h2 className="text-xl font-semibold text-[var(--d-fg)] mb-5">Sources and further reading</h2>
            <ul className="space-y-3 text-sm">{ARTICLE.sources.map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-4">{label} →</a></li>)}</ul>
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
