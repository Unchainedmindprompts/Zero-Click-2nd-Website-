import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';
import { blogPosts } from '@/lib/blog';

type Section = { h: string; p: string[]; items?: string[]; source?: string };
const ARTICLE: { slug: string; title: string; description: string; date: string; category: string; intro: string; sections: Section[]; sources: string[][]; related: string[]; example?: object } = {
  "slug": "facebook-ads-local-business-2026",
  "title": "Paid Traffic and an Owned Website: Lessons for Service Businesses",
  "description": "An updated archival guide to matching paid traffic with a clear offer, useful evidence, qualified inquiries and honest measurement.",
  "date": "2026-02-12",
  "category": "ARCHIVE",
  "intro": "This article began as a paid-media guide. Paid media is not part of Kodecite’s current offer, but the underlying lesson still matters: a visitor from an ad, search result or AI assistant needs a clear business and a useful next step.",
  "sections": [
    {
      "h": "Start with the outcome the business can serve",
      "p": [
        "An ad can attract attention before someone has decided what they need. A service business should therefore be clear about which customers, projects and locations it wants to serve. Cheap clicks are not useful if they consistently lead to requests outside the business’s scope.",
        "Write down what makes an inquiry worthwhile before measuring the campaign. Project type, geography, timing and expectations may matter more than a large contact count. The website can explain many of those distinctions before anyone fills out a form."
      ]
    },
    {
      "h": "Keep the promise consistent from ad to page",
      "p": [
        "A customer should recognize the same offer after clicking. If an ad discusses a consultation, the page should explain that consultation: what it covers, who it suits and how it starts. Do not replace a specific promise with a generic homepage.",
        "Use evidence that is relevant to the promoted work. A completed project, a properly attributed review or a product explanation can help someone decide whether to continue. Avoid presenting a testimonial as a typical financial or performance outcome unless there is evidence for that broader claim."
      ]
    },
    {
      "h": "Make the inquiry useful to both sides",
      "p": [
        "Ask for information that helps route or qualify the request. A service area, project category and short description may be useful. A long form demanding details the customer does not yet know can create unnecessary friction.",
        "Explain what submission means. If someone will call to discuss the project, say so. If an appointment is genuinely being booked through a connected calendar, show the confirmed details. A request and a booking should never share an ambiguous success message."
      ]
    },
    {
      "h": "Measure beyond the platform dashboard",
      "p": [
        "Advertising platforms report events according to their settings and attribution models. A recorded lead is not necessarily a qualified inquiry, an appointment or a sale. Keep those stages separate in the business’s own records.",
        "Review a sample of actual inquiries with the person who handles them. What was useful? Which questions were repeatedly missing? Did the customer expect a price or service that was not available? These observations can improve the page even before a campaign has enough data for confident conclusions."
      ]
    },
    {
      "h": "Use audience and tracking data responsibly",
      "p": [
        "Tracking and customer-list tools involve sharing information with a platform. Check the current product rules and the permissions applicable to the data and audience before implementation. Do not assume a customer relationship grants every advertising use.",
        "Product options and targeting controls change. Use Meta’s current documentation and the available account settings for implementation rather than relying on a dated sequence of button clicks. The durable principle is to collect and use only appropriate data for a defined purpose."
      ],
      "source": "meta"
    },
    {
      "h": "Avoid a guaranteed “flywheel” story",
      "p": [
        "Retargeting, creative testing and landing-page improvements can be useful, but they do not create automatic compounding returns. Small local audiences can saturate. Weak offers can generate clicks without worthwhile requests. Measurement can be incomplete.",
        "Set a review process and a spending boundary. Compare the quality and cost of actual outcomes, not only the cheapest event the platform can optimize. A campaign that needs a different offer or better follow-up should not be scaled simply because its click-through rate looks attractive."
      ]
    },
    {
      "h": "The same foundation helps delegated customers",
      "p": [
        "A customer arriving through a personal AI assistant may already have compared providers. They still need accurate facts, relevant evidence and a next step that works. The site’s information should remain consistent regardless of where the visitor came from.",
        "That is the connection to Kodecite’s current work: an owned business foundation that makes the service easier to understand and engage with. Where appropriate, a separately scoped capability can let an outside assistant submit a defined request and receive a real result."
      ]
    },
    {
      "h": "A useful handoff to your media partner",
      "p": [
        "If you work with an advertising specialist, give them the approved business facts, suitable project criteria, evidence and request process. Agree how the team will report qualified inquiries and closed work back into the review.",
        "Kodecite’s present focus is the owned website and agent-facing business foundation. This archival article is retained for its customer-journey lessons, without implying that a paid-media retainer is included."
      ]
    }
  ],
  "sources": [
    [
      "Meta Business Help Center",
      "https://www.facebook.com/business/help"
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
const WORD_COUNT = 734;
const READ_TIME = '4 min read';
const PUBLISHED = 'February 12, 2026';

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
