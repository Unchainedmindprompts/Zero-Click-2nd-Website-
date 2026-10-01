import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';
import { blogPosts } from '@/lib/blog';

type Section = { h: string; p: string[]; items?: string[]; source?: string };
const ARTICLE: { slug: string; title: string; description: string; date: string; category: string; intro: string; sections: Section[]; sources: string[][]; related: string[]; example?: object } = {
  "slug": "below-the-content-layer",
  "title": "Before More Content, Make the Business Clear",
  "description": "How to build a reliable business record that connects website copy, people, services, proof and the next action a customer can request.",
  "date": "2026-04-22",
  "category": "BUSINESS TRUTH",
  "intro": "An AI assistant can read a polished service page and still be unsure whether the business fits its customer. More articles will not resolve conflicting service areas, vague offerings or a missing next step. Start with the facts the customer needs to make a decision.",
  "sections": [
    {
      "h": "Find the questions your content leaves unanswered",
      "p": [
        "Imagine an assistant comparing three providers for a homeowner. Each says it offers excellent service and quality products. One explains the exact work it handles, who does it, where it operates and how a consultation begins. That provider is easier to evaluate without a round of clarifying calls.",
        "This is a practical information problem. A business may have the answers scattered across the owner’s memory, sales emails, old pages and directory profiles. The first job is to reconcile those answers, especially the ones that change whether a request is a good fit."
      ]
    },
    {
      "h": "Create one reliable business record",
      "p": [
        "The record should distinguish identity, people, offerings, capabilities, evidence and policies. It does not have to be a complicated database on day one. It does need clear ownership and enough structure to avoid rewriting the same fact inconsistently in six places.",
        "For each important fact, record its source and who can approve a change. An award might link to its issuer. A service-area boundary may come directly from the owner. A product price may come from an approved price list. These sources have different meanings, and a useful system preserves those distinctions."
      ],
      "items": [
        "Identity: trading name, legal entity when relevant, locations and contact routes.",
        "People: owner, team roles, experience and relevant credentials.",
        "Offerings: scope, suitable customers, exclusions, availability and price conditions.",
        "Evidence: completed work, reviews, certifications, awards and their sources.",
        "Next steps: available requests, required information, permission and outcomes."
      ]
    },
    {
      "h": "Turn facts into relationships",
      "p": [
        "A credential is more useful when connected to the person who earned it and the service it supports. A completed project is more useful when its type, location and scope are clear. An award should say who issued it, when and what it recognized.",
        "A connected business model gives those relationships a consistent representation in code. Schema.org and JSON-LD can express many public relationships. Visible pages supply the explanation and evidence. Neither should become a dumping ground for every keyword the business would like to be associated with."
      ],
      "source": "schema"
    },
    {
      "h": "Write for a real buying decision",
      "p": [
        "Use the model to create pages that answer useful questions. A motorized-shades page could explain suitable rooms, power options, installation requirements, the consultation process and examples of comparable projects. A location page should explain actual service coverage and relevant local details.",
        "The goal is to reduce uncertainty, not produce dozens of nearly identical town pages. If two pages answer the same question with only a place name changed, consider whether they need to be separate. Distinct, useful information is easier for both a customer and an assistant to work with."
      ]
    },
    {
      "h": "Connect the answer to what the business can do",
      "p": [
        "Information becomes more valuable when it leads somewhere useful. For every major service, describe the next step that is genuinely available. It could be a consultation request, a question for the owner or a supported booking flow.",
        "The action needs its own rules: what information is necessary, which requests qualify, what the customer must approve and what the response means. If scheduling requires a person, say that. Clear expectations preserve the convenience of delegation without letting software make promises the business cannot honor."
      ]
    },
    {
      "h": "Keep the record current",
      "p": [
        "Assign responsibility for changes in staff, credentials, service areas, products, prices and policies. Update the visible pages, structured data and connected request logic together. A beautiful graph with last year’s service limits can create more confusion than a short accurate page.",
        "Use change events as maintenance triggers. When a credential expires, a service is paused or a new territory opens, the person responsible should know which published facts and workflows need review. Ownership of the site includes ownership of this ongoing accuracy."
      ]
    },
    {
      "h": "A useful first workshop",
      "p": [
        "Take five recent good inquiries and five poor-fit inquiries. Identify the facts that made them different. Could a customer or assistant have discovered those distinctions before making contact? Which questions still needed the owner’s judgment?",
        "That exercise produces a better brief than “we need more SEO content.” It tells you what to publish, what to prove and what to ask before a request reaches the team. More content can follow when it serves a real decision."
      ]
    },
    {
      "h": "What Kodecite builds from that record",
      "p": [
        "The foundation connects human-readable pages and machine-readable business information on infrastructure the client owns. Where there is a suitable action, a separate scope can connect the approved request to the actual business process.",
        "The commercial reason is straightforward: help the right customer, including one using a personal AI assistant, understand the business and move forward with less unnecessary work."
      ]
    }
  ],
  "sources": [
    [
      "Schema.org: About the vocabulary",
      "https://schema.org/docs/about.html"
    ],
    [
      "W3C: JSON-LD 1.1",
      "https://www.w3.org/TR/json-ld11/"
    ]
  ],
  "related": [
    "what-is-an-entity-graph",
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
const WORD_COUNT = 805;
const READ_TIME = '4 min read';
const PUBLISHED = 'April 22, 2026';

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
