import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';
import { blogPosts } from '@/lib/blog';

type Section = { h: string; p: string[]; items?: string[]; source?: string };
const ARTICLE: { slug: string; title: string; description: string; date: string; category: string; intro: string; sections: Section[]; sources: string[][]; related: string[]; example?: object } = {
  "slug": "how-we-indexed-49-pages-48-hours",
  "title": "How We Indexed 49 New Pages in 48 Hours: The Earlier Luxe Chapter",
  "description": "The reported Luxe Window Works indexing result, what the foundation work addressed, and how discovery later connected to an agent-submitted consultation request.",
  "date": "2026-02-01",
  "category": "CASE STUDIES",
  "intro": "Luxe Window Works is the founder’s own window-treatment business. The original case study reported an increase from 75 to 124 indexed pages within 48 hours. That is one historical indexing observation, useful as a foundation story and separate from the later live consultation-capability test.",
  "sections": [
    {
      "h": "What the reported result establishes",
      "p": [
        "The original report described 49 additional indexed URLs after website and publishing work. Indexing matters because it can make pages available to the search systems using that index. It does not establish that every page was recommended by an assistant, that the business won new work or that one technical change caused the increase.",
        "These are historical figures from the original case study, not a fresh Search Console measurement. The result is not a delivery promise for another business. Crawl and indexing decisions depend on the site, content and search system, and can change after launch."
      ]
    },
    {
      "h": "The business information came before the page count",
      "p": [
        "Luxe needed to explain a real service business: custom window treatments, the products and work it handles, the customers it suits and the geography it serves. Useful service and area pages make that information easier for a homeowner to find and compare.",
        "A page exists to answer a decision, not merely to increase the number of URLs. A customer exploring motorized shades needs different information from someone asking whether a provider works in their town. Those pages should connect to the same business identity and an appropriate next step."
      ]
    },
    {
      "h": "The reusable technical work",
      "p": [
        "A foundation review should check accessible pages, canonical URLs, internal links, redirects and sitemaps. Obsolete or conflicting URLs can confuse visitors and search systems. Fix the underlying navigation and publishing problems rather than treating a sitemap submission as a guarantee.",
        "Google describes sitemaps as a way to inform search engines about relevant URLs. A sitemap does not force crawling or indexing. Keep it aligned with the live site, then use the appropriate search tools to observe what has actually been processed."
      ],
      "source": "sitemap"
    },
    {
      "h": "Structured facts need the right test",
      "p": [
        "The earlier build included structured descriptions of the business and its services. The practical value is a consistent representation of the provider, offering and area. Validation can catch format and vocabulary issues before those descriptions are published.",
        "Earlier versions of this case treated several schema types as automatic rich-result outcomes. That is too broad. Vocabulary validity, eligibility for a particular search feature and the appearance of that feature are different things. Google has also retired its FAQ rich-result feature. Neither a validation result nor a page count should be presented as proof of AI preference."
      ],
      "source": "updates"
    },
    {
      "h": "Discovery evidence is a second observation",
      "p": [
        "Kodecite later published dated screenshots of AI answers involving Luxe, captured April 1, 2026. Those examples belong to specific queries and systems. They are evidence that the business appeared in those answers at that time.",
        "They do not isolate whether content, business reputation, structured data, search retrieval or another factor drove the result. Keep the question, date and source alongside the answer. That lets an owner understand the evidence without converting a useful observation into a universal promise."
      ]
    },
    {
      "h": "The next chapter moved from reading to doing",
      "p": [
        "The later Luxe project gave an outside AI a defined way to request an in-home consultation. It could read the published capability, determine whether the request qualified and submit the required information.",
        "The authorized production test delivered one email. Repeating the same request did not send another, and reusing its identity with changed information was rejected. A person still had to follow up. That is a different kind of proof from indexing: an actual request moved into the business process with an honest response."
      ]
    },
    {
      "h": "What another owner can take from the sequence",
      "p": [
        "Start by documenting the business and building useful pages that express it clearly. Check what search and assistant systems can retrieve. Then, where there is demand, scope one useful action and test it against the real operating rules."
      ],
      "items": [
        "Foundation: accurate identity, services, fit, geography and evidence.",
        "Discovery: dated observations of what customers and assistants find.",
        "Engagement: a tested request flow and confirmed delivery.",
        "Business outcome: human follow-up, appointments and won work tracked separately."
      ]
    },
    {
      "h": "Choose proof that matches the claim",
      "p": [
        "An indexing report supports an indexing claim. A screenshot supports a claim about that answer. An inbox and response test support a delivery claim. Revenue or time savings need their own measurement.",
        "The value of the Luxe sequence is that the work can be examined in stages. It shows how an owned business foundation can support a more useful interaction when a customer delegates the next step to an assistant."
      ]
    }
  ],
  "sources": [
    [
      "Google Search Central: Sitemaps",
      "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview"
    ],
    [
      "Google Search documentation updates",
      "https://developers.google.com/search/updates"
    ],
    [
      "Luxe Window Works: Public consultation capability",
      "https://www.luxewindowworks.com/api/capabilities/request-in-home-consultation"
    ]
  ],
  "related": [
    "from-recommended-to-actionable-luxe-window-works",
    "schema-markup-complete-guide"
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
const WORD_COUNT = 774;
const READ_TIME = '4 min read';
const PUBLISHED = 'February 1, 2026';

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
