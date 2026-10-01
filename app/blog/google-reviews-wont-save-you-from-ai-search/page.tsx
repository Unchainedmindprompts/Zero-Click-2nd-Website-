import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';
import { blogPosts } from '@/lib/blog';

type Section = { h: string; p: string[]; items?: string[]; source?: string };
const ARTICLE: { slug: string; title: string; description: string; date: string; category: string; intro: string; sections: Section[]; sources: string[][]; related: string[]; example?: object } = {
  "slug": "google-reviews-wont-save-you-from-ai-search",
  "title": "Turn Your Reputation Into Evidence an AI Assistant Can Check",
  "description": "Reviews matter. Connect them with relevant services, people, credentials and project evidence so customers and their assistants can assess fit.",
  "date": "2026-07-02",
  "category": "BUSINESS TRUTH",
  "intro": "A strong reputation is worth making easy to understand. Your reviews may show that customers trust you, while still leaving their AI assistant unsure what you do, which projects fit and how to move a request forward.",
  "sections": [
    {
      "h": "Reviews answer an important question",
      "p": [
        "Reviews describe customer experiences. They can reveal responsiveness, workmanship, communication and the kinds of problems a business has solved. They remain useful to people evaluating a provider, and Google says review count and positive ratings can help local ranking.",
        "That does not make a review total a universal ranking formula. A specific customer may need a particular service, qualification, location or timescale. A highly rated business can be a poor fit for that request, while a less familiar specialist can be relevant. The missing information often concerns suitability rather than popularity."
      ],
      "source": "reviews"
    },
    {
      "h": "A small visibility test cannot explain causation",
      "p": [
        "An earlier version of this article described a local test in which a highly reviewed HVAC business was absent from several ChatGPT answers. That observation can prompt a useful investigation. It cannot establish that reviews are irrelevant, that the website platform caused the omission or that schema would have changed the result.",
        "AI answers vary with the query, location, available sources, timing and product behavior. If you test your own visibility, record those conditions and preserve the answers. Treat the result as a sample of what happened, not a complete diagnosis of how an engine chooses businesses."
      ]
    },
    {
      "h": "Customer research supports a broader evidence strategy",
      "p": [
        "BrightLocal’s March 2026 report found that 45% of its survey respondents had used AI tools for local business recommendations. The research used a representative panel of 1,002 US adults; some AI-specific results used the subset of 455 respondents who had used those tools. That is a reported survey result, not a measurement of every customer in your market.",
        "The report also found that many AI users check original review sources. For an owner, the useful implication is to make evidence easy to inspect after an assistant introduces the business. Maintain the original profiles and the relevant context on your own site, so a customer can move from a summary to the details that matter to them."
      ],
      "source": "brightlocal"
    },
    {
      "h": "Connect reputation to the work being considered",
      "p": [
        "A homeowner comparing providers for custom shades benefits from reviews of comparable work. The context matters: product category, installation complexity, communication and aftercare. A broad five-star summary provides less detail than a truthful account of a relevant project.",
        "Organize existing evidence around the questions customers ask. Link a service page to an appropriate completed project and to public review sources where available. Keep quotations accurate and attributed. Do not turn one customer’s experience into a claim that every project produces the same result."
      ]
    },
    {
      "h": "Add evidence reviews cannot supply",
      "p": [
        "Reviews do not establish every important fact. Credentials should identify the holder and issuing organization. Awards should name the category and year. A dealer relationship should match the manufacturer’s current description. Service coverage and availability need an owner-approved source.",
        "Use evidence proportionately. A membership can support a membership claim; it does not prove superior workmanship. A project photograph can demonstrate experience with that type of work; it does not establish a professional license. Clear distinctions make the business easier to assess honestly."
      ]
    },
    {
      "h": "Publish a consistent picture",
      "p": [
        "The website, public profiles and structured data should agree on the business identity, services and geography. Connect evidence to the specific claims it supports. An assistant that retrieves a page should find enough visible explanation to understand the context without relying on hidden markup.",
        "Schema.org can help express relationships between a business, its people and its offerings. It is a publishing format, not an independent endorsement. Adding an award field does not make an award genuine, and adding a rating does not guarantee stars or inclusion in an AI answer."
      ]
    },
    {
      "h": "Make the next step match the promise",
      "p": [
        "Trust can be lost after discovery if the contact process is confusing. A customer who asks their assistant to arrange a consultation needs to know what can actually happen: what details are required, whether their area qualifies and whether the response confirms a request or a scheduled appointment.",
        "That is where reputation and capability meet. If the business promises personal attention, a useful handoff should preserve the project context for the person who follows up. The assistant should not need to invent an answer merely because the website has no way to explain the next step."
      ]
    },
    {
      "h": "A reputation-to-evidence audit",
      "p": [
        "Start with the reasons recent customers chose you. Gather the existing sources that support those reasons, then check whether the website makes the connections visible."
      ],
      "items": [
        "Choose three services where the business is a particularly good fit.",
        "Identify relevant completed work, reviews and professional evidence for each.",
        "Check the recipient, issuer, dates and current status of credentials or awards.",
        "Remove unsupported superlatives and outdated claims.",
        "Confirm that a customer can request the right next step without losing context."
      ]
    },
    {
      "h": "Measure a better outcome than being named",
      "p": [
        "Keep tracking reviews and search visibility, but also watch the quality of inquiries. Do customers understand the offering? Are fewer requests outside your scope? Does the team spend less time correcting assumptions?",
        "Those are useful signs that the business is being understood. Kodecite’s work starts with making that real business and its evidence legible, then adds the appropriate action when there is a defined process to support it."
      ]
    }
  ],
  "sources": [
    [
      "Google Business Profile: Local ranking guidance",
      "https://support.google.com/business/answer/7091?hl=en"
    ],
    [
      "Schema.org: About the vocabulary",
      "https://schema.org/docs/about.html"
    ],
    [
      "BrightLocal: Local recommendations and AI trust, March 2026",
      "https://www.brightlocal.com/research/lcrs-ai-trust/"
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
  ],
  "brightlocal": [
    "BrightLocal: Local recommendations and AI trust, March 2026",
    "https://www.brightlocal.com/research/lcrs-ai-trust/"
  ]
};
const PAGE_URL = `https://www.kodecite.ai/blog/${ARTICLE.slug}`;
const WORD_COUNT = 899;
const READ_TIME = '5 min read';
const PUBLISHED = 'July 2, 2026';

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
