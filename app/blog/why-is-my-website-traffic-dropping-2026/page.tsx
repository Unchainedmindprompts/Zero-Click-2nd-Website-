import type { Metadata } from 'next';
import Link from 'next/link';

import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';

const article = {
  "slug": "why-is-my-website-traffic-dropping-2026",
  "title": "Why Is Your Website Traffic Dropping? Diagnose It First",
  "description": "Investigate a traffic drop with tracking, indexing, query, and customer-outcome checks before attributing it to AI Overviews or zero-click search.",
  "date": "2026-03-11",
  "intro": "AI answers can affect search clicks, but a falling traffic chart does not identify the cause. Check measurement, technical changes, demand, and the affected pages before choosing a fix.",
  "sections": [
    {
      "heading": "First establish what actually fell",
      "paragraphs": [
        "“Traffic is down” can mean fewer analytics sessions, fewer Google clicks, fewer visits to one article, or fewer qualified inquiries. Those measures are related but not interchangeable.",
        "Compare a meaningful period with the previous period and with the same season last year where data exists. Separate core service pages from general informational content. Note site releases, marketing changes, tracking changes, and unusual business conditions near the start of the decline.",
        "Ask the team what changed in actual inquiries and completed work. A measurement failure needs a different response from a demand drop. A widely read article losing casual visits may matter differently from the loss of a page that consistently generates suitable customers."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Rule out tracking and technical problems",
      "paragraphs": [
        "Check whether the analytics setup still records visits and important events correctly. A consent change, altered tag, or new form can change the chart without an equivalent change in customer behavior. Compare independent evidence such as Search Console clicks, server records where available, and received inquiries.",
        "For affected pages, inspect access, indexing, redirects, canonical references, and accidental exclusions. Check whether a deployment changed URLs or removed important content. Review service outages and any relevant Search Console warnings.",
        "Google's traffic-drop guidance identifies technical issues, ranking changes, security or spam problems, seasonality, and migrations among the possible causes. Its recommended comparison across pages, queries, devices, and regions is a useful way to narrow the investigation."
      ],
      "items": [],
      "sources": [
        {
          "label": "Google Search Central: diagnosing traffic drops",
          "href": "https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops"
        }
      ]
    },
    {
      "heading": "Read query patterns without overclaiming the cause",
      "paragraphs": [
        "A fall in both impressions and clicks may reflect reduced demand, less search visibility, or a change in the queries for which a page appears. Stable impressions with fewer clicks can point toward a changed results page, a less compelling snippet, or different query intent. Neither pattern alone proves an AI effect.",
        "Average position can hide changes in the mix of queries and devices. Compare similar groups rather than relying only on the whole-site average. Look separately at named-business searches, service searches, and general informational questions.",
        "Inspect current results for a representative sample and record what is present: ads, maps, snippets, AI summaries, and competing pages. One manual search is a snapshot, not a reconstruction of every result a customer saw during the decline."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "What the AI click studies contribute",
      "paragraphs": [
        "Ahrefs's April 2025 analysis of 300,000 keywords associated AI Overviews with an estimated 34.5% lower average click-through rate for the top-ranking page, using informational keyword groups and a historical comparison. This was a study estimate, not a measured percentage loss for every website.",
        "Pew Research Center's March 2025 browsing study of 900 US adults observed traditional-result clicks on 8% of visits with an AI summary, compared with 15% without. It provides additional evidence that click behavior differs, with its own sample and methodology.",
        "These dated studies justify considering AI summaries as one possible contributor. They do not establish that a particular local business's decline was caused by AI or that adding schema will restore the lost visits."
      ],
      "items": [],
      "sources": [
        {
          "label": "Ahrefs: April 2025 AI Overview click-through study",
          "href": "https://ahrefs.com/blog/ai-overviews-reduce-clicks/"
        },
        {
          "label": "Pew Research Center: March 2025 search behavior study",
          "href": "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/"
        }
      ]
    },
    {
      "heading": "Choose the correction that matches the evidence",
      "paragraphs": [
        "If a technical change blocked an important page, correct it and verify recovery of access and indexing. If the offer became outdated, update the facts. If demand is seasonal, adjust expectations using the business cycle. If competing results answer the customer better, improve the substance and usefulness of the page.",
        "If the results page is meeting an informational need without a click, reconsider what that page is meant to accomplish. It may still educate customers, support the business's expertise, or lead a smaller group to a high-value next step. Avoid replacing every useful article with a sales page in response to one metric.",
        "Where the next step is weak, fix it. Make service fit, evidence, required information, and the request process clear. This can improve the journey for people who arrive through search, referrals, or an AI assistant, even if raw visit counts do not return to an earlier peak."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Add a business-outcome view",
      "paragraphs": [
        "Track qualified inquiries, response time, booked work where confirmed, and the reasons inquiries do not proceed. Ask customers how they found the business without treating their answer as perfect attribution.",
        "For supported agent actions, distinguish an attempt from a completed request and a completed request from a sale. Log enough to diagnose failures and duplicate submissions while minimizing unnecessary personal information.",
        "An outside assistant may help a customer make contact without producing the same browser journey your old analytics assumed. That possibility is worth measuring, not a reason to label every unattributed lead as AI-generated. Keep uncertain sources explicit."
      ],
      "items": [
        "Relevant search and referral traffic",
        "Correct descriptions of priority services",
        "Qualified requests received",
        "Timely human follow-up",
        "Confirmed appointments or completed work"
      ],
      "sources": []
    },
    {
      "heading": "A practical investigation brief",
      "paragraphs": [
        "Before buying a rebuild or a visibility campaign, prepare a short record: when the decline began, which pages and query groups changed, what business outcomes changed, recent releases, and the evidence for the leading explanation.",
        "A useful review should show what is known, what remains uncertain, and which next test would resolve the uncertainty. It should not diagnose an unseen website from a general industry statistic.",
        "KodeCite's Agent Readiness Review can examine whether the business is easy to understand, verify, and engage through current customer journeys. When traffic diagnosis requires private analytics or search data, that access and the investigation need to be explicit. Clear evidence should determine the next investment."
      ],
      "items": [],
      "sources": []
    }
  ],
  "takeaways": [
    "Separate measurement from demand",
    "Treat AI as a hypothesis to test",
    "Use customer outcomes to choose the fix"
  ],
  "faq": [
    {
      "q": "Do stable rankings and falling clicks prove AI is responsible?",
      "a": "No. Query mix, snippets, competing search features, and measurement changes can also affect the pattern. Investigate the affected pages and queries."
    },
    {
      "q": "Will schema recover my lost traffic?",
      "a": "There is no such guarantee. Fixes should address the demonstrated cause, and structured data should accurately describe visible information."
    },
    {
      "q": "Should I stop tracking visits?",
      "a": "No. Keep traffic data and add qualified inquiries, follow-up, and completed outcomes so the business impact is visible."
    }
  ]
};
const canonical = `https://www.kodecite.ai/blog/${article.slug}`;
const modified = '2026-10-01T00:00:00Z';
const published = `${article.date}T00:00:00-07:00`;
const imageUrl = "https://www.kodecite.ai/blog-hero.png";
const articleText = [article.intro, ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...section.items]), ...article.faq.flatMap((item) => [item.q, item.a])].join(' ');
const wordCount = articleText.trim().split(/\s+/).length;
const readingTime = Math.max(1, Math.ceil(wordCount / 200));
const publishedLabel = new Date(`${article.date}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const sources = article.sections.flatMap((section) => section.sources).filter((source, index, list) => list.findIndex((item) => item.href === source.href) === index);

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical },
  openGraph: {
    title: article.title,
    description: article.description,
    url: canonical,
    type: 'article',
    publishedTime: published,
    modifiedTime: modified,
    authors: ['Mark Abplanalp'],
    images: [{ url: imageUrl }],
  },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [imageUrl] },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${canonical}#article`,
  headline: article.title,
  description: article.description,
  author: articleAuthor,
  publisher: articlePublisher,
  datePublished: published,
  dateModified: modified,
  mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  url: canonical,
  image: imageUrl,
  isPartOf: blogCollectionPage,
  about: [businessRef],
  articleSection: 'AI Business Strategy',
  wordCount,
  citation: sources.filter((source) => source.href.startsWith('https://')).map((source) => ({ '@type': 'CreativeWork', name: source.label, url: source.href })),
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${canonical}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.kodecite.ai/blog' },
    { '@type': 'ListItem', position: 3, name: article.title, item: canonical },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${canonical}#faq`,
  mainEntity: article.faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="bg-[var(--d-bg)] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--d-fg-dim)] mb-6 font-inter">
            <Link href="/" className="hover:text-[var(--d-accent)] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[var(--d-accent)] transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--d-fg)]">{article.title}</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--d-accent)] font-inter">AI Business Strategy</span>
            <span className="text-[var(--d-fg-dim)] text-xs font-inter">·</span>
            <span className="text-xs text-[var(--d-fg-dim)] font-inter">{readingTime} min read</span>
          </div>
          <h1 className="font-inter text-4xl md:text-5xl lg:text-6xl text-[var(--d-fg)] leading-tight mb-6">{article.title}</h1>
          <p className="font-inter text-lg text-[var(--d-fg-dim)] max-w-3xl mb-8 leading-relaxed">{article.intro}</p>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-[var(--d-accent)] flex items-center justify-center text-white font-inter font-semibold text-sm">MA</div>
            <div>
              <p className="font-inter font-semibold text-sm text-[var(--d-fg)]">Mark Abplanalp</p>
              <p className="font-inter text-xs text-[var(--d-fg-dim)]"><time dateTime={article.date}>{publishedLabel}</time> · Updated <time dateTime="2026-10-01">October 1, 2026</time></p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />
      <section className="bg-[var(--d-bg)] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            <article className="lg:col-span-2 prose-content font-inter text-[var(--d-fg-dim)]">
              {article.sections.map((section, index) => (
                <section key={section.heading} aria-labelledby={`section-${index}`}>
                  <h2 id={`section-${index}`} className="font-inter text-3xl text-[var(--d-fg)] mt-12 mb-5">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="leading-relaxed mb-6">{paragraph}</p>)}
                  {section.items.length > 0 && <ul className="list-disc pl-6 space-y-3 mb-8">{section.items.map((item) => <li key={item} className="leading-relaxed">{item}</li>)}</ul>}
                  {section.sources.length > 0 && <ul className="space-y-2 mb-8">{section.sources.map((source) => <li key={source.href}><a href={source.href} className="text-sm text-[var(--d-accent)] hover:underline">{source.label}</a></li>)}</ul>}
                </section>
              ))}
              <section aria-labelledby="article-faq" className="mt-12 pt-8 border-t border-[var(--d-line)]">
                <h2 id="article-faq" className="font-inter text-3xl text-[var(--d-fg)] mb-6">Frequently asked questions</h2>
                {article.faq.map((item) => <div key={item.q} className="mb-8"><h3 className="font-inter font-semibold text-xl text-[var(--d-fg)] mb-3">{item.q}</h3><p className="leading-relaxed">{item.a}</p></div>)}
              </section>
              <div className="mt-12 pt-8 border-t border-[var(--d-line)]">
                <Link href="/blog" className="text-[var(--d-accent)] font-semibold hover:underline">Back to the articles</Link>
              </div>
            </article>
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="sticky top-28 space-y-6">
                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="eyebrow mb-4 text-xs">THE PRACTICAL TAKEAWAY</p>
                  <ul className="space-y-4">{article.takeaways.map((takeaway) => <li key={takeaway} className="text-sm leading-relaxed text-[var(--d-fg)]">{takeaway}</li>)}</ul>
                </div>
                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="font-inter font-semibold text-[var(--d-fg)] text-lg mb-3">See what your customer’s assistant can understand</p>
                  <p className="text-[var(--d-fg-dim)] text-sm font-inter leading-relaxed mb-5">Review the business facts, evidence, and next step before deciding what to build.</p>
                  <Link href="/machine-read" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">Request an Agent Readiness Review</Link>
                </div>
                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/what-is-an-entity-graph" className="block text-sm text-[var(--d-fg)] hover:text-[var(--d-accent)]">How an entity graph connects the business facts</Link>
                    <Link href="/blog/from-recommended-to-actionable-luxe-window-works" className="block text-sm text-[var(--d-fg)] hover:text-[var(--d-accent)]">The Luxe Window Works consultation-request proof</Link>
                    <Link href="/blog" className="block text-sm text-[var(--d-fg)] hover:text-[var(--d-accent)]">More practical guides for AI-ready businesses</Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <div className="section-divider" />
      <section className="py-20 bg-[var(--d-bg-3)] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">BE UNDERSTOOD. BE CHOSEN. MAKE THE NEXT STEP WORK.</p>
          <h2 className="font-inter text-3xl md:text-4xl text-[var(--d-fg)] mb-4">Make your business easy for your customer’s AI assistant to understand, trust and do business with.</h2>
          <p className="text-[var(--d-fg-dim)] font-inter mb-8 leading-relaxed">Start with an Agent Readiness Review. The owned foundation is $4,995 one time, with no required retainer. A live action is separately scoped; a platform-layer pilot is a separate engagement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/machine-read" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">Request an Agent Readiness Review</Link>
            <Link href="/blog" className="btn-gold-outline text-base font-bold px-8 py-4 rounded-md inline-block">Read more articles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
