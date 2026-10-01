import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';
import { blogPosts } from '@/lib/blog';

type Section = { h: string; p: string[]; items?: string[]; source?: string };
const ARTICLE: { slug: string; title: string; description: string; date: string; category: string; intro: string; sections: Section[]; sources: string[][]; related: string[]; example?: object } = {
  "slug": "aeo-geo-making-seo-better",
  "title": "SEO, AEO and GEO: One Business, Many Ways to Be Found",
  "description": "How search visibility, AI recommendations and delegated customer requests connect through accurate business information and a useful next step.",
  "date": "2026-03-08",
  "category": "DISCOVERY",
  "intro": "Your customer wants a good decision with less work. Sometimes that starts with a Google search. Sometimes it starts with asking a personal AI assistant to compare providers and contact the right one. Your business needs to make sense throughout that journey.",
  "sections": [
    {
      "h": "Start with the customer’s job",
      "p": [
        "An owner can spend a lot of time deciding which acronym to buy. SEO usually describes work on search visibility. AEO emphasizes answers, while GEO emphasizes generative search. Agencies use those terms differently. A useful buying question is more concrete: what will this work help a customer understand or accomplish?",
        "Consider a homeowner researching motorized shades. They need to know whether a provider serves their town, offers the right products, understands the installation, and can arrange a consultation. A ranking, an AI mention and a submitted request each describe a different part of that experience. None is a substitute for the others."
      ]
    },
    {
      "h": "Build facts that can travel between channels",
      "p": [
        "A clear service page can help a person reading it, a search engine indexing it, and an assistant gathering information for a comparison. The information should survive being summarized: what the service includes, who it is suitable for, where it is available, what affects cost, and how to move forward.",
        "Put the same facts in the visible page and the appropriate machine-readable representation. Connect the service to the business that provides it, and connect important claims to evidence. This creates a reusable source of business information rather than a different story written for every interface."
      ]
    },
    {
      "h": "What the original GEO research contributes",
      "p": [
        "The GEO research accepted at KDD 2024 studied how changes to source content affected visibility within a generative-search benchmark. It reported improvements of up to 40% in its evaluations, with effectiveness varying by domain. Those are experimental results from that setting, not a forecast for a service business or a guarantee across current products.",
        "The useful lesson is to pay attention to how information is presented and supported, then test what happens in the relevant environment. A research result about answer visibility also leaves a separate business question: can the interested customer make a qualified request and get a useful response?"
      ],
      "source": "geo"
    },
    {
      "h": "Keep the overlap, without promising identical results",
      "p": [
        "Readable pages, useful content, crawl access and consistent information are sensible foundations across channels. Google’s own guidance says the established SEO fundamentals remain relevant to its AI search features. That is a useful reference for Google; it is not a specification for every AI assistant.",
        "Different systems retrieve different sources and may use browsing, search indexes, platform feeds or configured tools. Their answers also depend on the question and context. Improving the foundation does not guarantee a particular ranking or recommendation. Test the channels your customers actually use instead of declaring that one change wins everywhere."
      ],
      "source": "google"
    },
    {
      "h": "Give the assistant reasons to choose you",
      "p": [
        "A list of keywords says little about fit. A named owner, relevant experience, a real credential, a completed project and a review of similar work give the customer a better basis for a decision. Publish the issuer and date of an award where relevant. Explain which service a credential supports. Link to the original source when one is public.",
        "This is particularly valuable for established service businesses whose reputation is stronger than their website explains. The goal is to make the real reason a customer would choose the business easier to find and check. It is not to dress ordinary claims in more technical markup."
      ]
    },
    {
      "h": "Prepare the step after the recommendation",
      "p": [
        "An assistant may be asked to go further than research. The customer might say, “Ask whether they can help with my project.” A useful business interface explains the available request, the information needed, the conditions that apply and what will happen next.",
        "That requires actual working software when a request is submitted. A descriptive page or schema block can describe an offer, but it does not deliver an inquiry or create an appointment. The receiving system must confirm the real result. If a person needs to discuss timing or price, the customer should hear that clearly."
      ]
    },
    {
      "h": "Measure the journey in separate steps",
      "p": [
        "Track whether the business information is correct, whether important pages are accessible, what assistants actually say, and what happens to resulting inquiries. Keep dated examples of the question, answer and source links. A favorable answer is useful evidence of that test, not permanent ownership of a position.",
        "On the business side, measure qualified inquiries, appointments, won work and the time required to respond. A smaller number of well-matched inquiries can matter more than a rise in mentions. Those observations help decide whether the next investment belongs in clearer information, stronger proof or a better request flow."
      ],
      "items": [
        "Discovery: can customers and assistants find accurate information?",
        "Evaluation: can they understand suitability and check evidence?",
        "Engagement: does the next step work and return a clear outcome?"
      ]
    },
    {
      "h": "Choose an engagement by its deliverables",
      "p": [
        "Ask a provider to show the business record they will build, the pages and code you will own, the evidence they will reconcile, and the tests that define completion. If actions are included, ask which ones and who maintains them. This is easier to evaluate than an open-ended promise to make you “AI visible.”",
        "Kodecite starts with an owned foundation and scopes live actions separately. The larger aim stays the same across search engines, personal assistants and outside agents: make your business easy to understand, trust and do business with."
      ]
    }
  ],
  "sources": [
    [
      "Google Search Central: AI features and your website",
      "https://developers.google.com/search/docs/appearance/ai-features"
    ],
    [
      "Schema.org: About the vocabulary",
      "https://schema.org/docs/about.html"
    ],
    [
      "GEO: Generative Engine Optimization, KDD 2024 research",
      "https://arxiv.org/abs/2311.09735"
    ]
  ],
  "related": [
    "aeo-technical-seo-done-correctly",
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
  "geo": [
    "GEO: Generative Engine Optimization, KDD 2024 research",
    "https://arxiv.org/abs/2311.09735"
  ]
};
const PAGE_URL = `https://www.kodecite.ai/blog/${ARTICLE.slug}`;
const WORD_COUNT = 911;
const READ_TIME = '5 min read';
const PUBLISHED = 'March 8, 2026';

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
