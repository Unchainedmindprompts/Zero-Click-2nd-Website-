import type { Metadata } from 'next';
import Link from 'next/link';

import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';

const article = {
  "slug": "how-to-rank-in-google-ai-overviews-for-local-businesses",
  "title": "Google AI Overviews: A Practical Guide for Local Businesses",
  "description": "Check Google AI search eligibility, improve service information and evidence, and measure the customer journey without promising AI Overview placement.",
  "date": "2026-03-10",
  "intro": "There is no guaranteed method for getting a local business into an AI Overview. There is useful work you can do: make your pages eligible, answer real customer questions, support your claims, and provide a dependable next step.",
  "sections": [
    {
      "heading": "Know what Google actually requires",
      "paragraphs": [
        "Google says a supporting page must be indexed and eligible to appear with a snippet. It adds no special technical requirements for AI Overviews or AI Mode. No particular schema type or AI text file is required, and eligibility does not guarantee selection.",
        "That makes a basic technical review a sensible first step. Establish whether the relevant page is accessible and indexed before assuming a content format or a missing file explains its absence. A query may also produce no AI Overview at all.",
        "Treat inclusion as an outcome to observe, not a fixed ranking you can buy. An assistant's summary and a traditional search result can serve different parts of the customer journey, but both need accurate, useful source material."
      ],
      "items": [],
      "sources": [
        {
          "label": "Google Search Central: AI features and your website",
          "href": "https://developers.google.com/search/docs/appearance/ai-features"
        }
      ]
    },
    {
      "heading": "Step one: inspect the page that should answer the need",
      "paragraphs": [
        "Choose a priority service and a realistic customer question. Identify which page should explain the fit. Check that the URL works, the main content is present, and the navigation links to it from a sensible place.",
        "Use Search Console's URL Inspection and indexing information to investigate access or indexing problems. Review relevant crawl and snippet controls before changing them; some exclusions may be intentional. Check mobile usability and the next-step form as part of the same journey.",
        "Do not infer a platform-wide failure from one score. A performance issue needs an actual diagnosis. A service page that is absent, blocked, or inaccurate has a concrete problem regardless of which website technology produced it."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Step two: answer the questions that determine fit",
      "paragraphs": [
        "Describe the service, the customer it is for, the service area, and the process. Put important answers close to clear headings. A customer should not need to read an entire general guide to discover whether you perform the work they need.",
        "Be explicit about information that cannot be final on a public page. If an estimate requires measurements, say what is measured and when a quote is issued. If a consultation request requires review, explain that process rather than imply instant availability.",
        "Use questions your customers actually ask. A single strong service page may answer several related questions. Creating a thin page for every variation is unlikely to make the decision easier."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Step three: show why the claims deserve confidence",
      "paragraphs": [
        "Identify the people providing the service and the evidence relevant to their work. Credentials, dated projects, original explanations, and independent reviews can answer different customer concerns.",
        "Describe each precisely. A project example shows work in a particular context; it does not promise the same result for everyone. A review describes that reviewer's experience. An award should name the issuer and date. Link to original evidence where appropriate and permitted.",
        "Google's people-first content guidance encourages clear authorship and evidence of experience and expertise. Use that as a quality check on the material, not as a claim that adding a biography directly triggers an AI citation."
      ],
      "items": [],
      "sources": [
        {
          "label": "Google Search Central: helpful, reliable, people-first content",
          "href": "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
        }
      ]
    },
    {
      "heading": "Step four: align the public business information",
      "paragraphs": [
        "Check the facts across the site and the profiles that customers use. Correct old locations, wrong phone numbers, retired services, and misleading hours. Keep the distinction between a physical address and a service area clear.",
        "Where structured data is appropriate, make it match the visible information. Use stable business and person identities, and connect the relevant pages. Validate the implementation and review its meaning manually.",
        "A useful FAQ can help customers understand a process. It does not need to be presented as a special admission ticket to an AI Overview. Likewise, trivial formatting differences in an address are not evidence by themselves that a search system has lost confidence in the business."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Step five: inspect the result and the next step",
      "paragraphs": [
        "Sample realistic questions and record the date, context, answer, and sources. Inspect whether the facts and the proposed next step are correct. A missing mention does not reveal the cause on its own, and a single successful mention does not establish predictable traffic.",
        "Follow any link or contact route that the answer recommends. Does the customer reach the right service? Does the form explain what is being requested? Does the business receive it and return an accurate confirmation?",
        "Track qualified inquiries and completed outcomes alongside search metrics. If customers increasingly delegate contact to an outside assistant, a supported request path may be useful. Scope and test that action separately from the work of publishing the business facts."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Keep Google in the wider customer journey",
      "paragraphs": [
        "AI Overviews are one surface. People may use other AI search engines, a personal agent, direct referrals, or a conventional search result. Clear identity, evidence, and offers should support all of those journeys.",
        "KodeCite's focus is the owned foundation that makes the business understandable and usable across these routes. The foundation is $4,995 one time with no required retainer. A live action is separately scoped.",
        "Start with an Agent Readiness Review when you need to identify the actual gaps. Ask for evidence, priorities, and a testable outcome. A promised citation within a fixed number of weeks is not a substitute for that work."
      ],
      "items": [],
      "sources": []
    }
  ],
  "takeaways": [
    "Check eligibility and real access",
    "Publish specific answers and proof",
    "Measure qualified customer outcomes"
  ],
  "faq": [
    {
      "q": "Is structured data required for an AI Overview?",
      "a": "Google does not require special schema for AI Overviews. Accurate structured data can still be useful when it describes the visible content appropriately."
    },
    {
      "q": "Can anyone guarantee inclusion?",
      "a": "No. Eligibility and good implementation do not guarantee Google will select a page."
    },
    {
      "q": "Should I measure only AI mentions?",
      "a": "No. Also track accurate representation, suitable inquiries, and completed customer outcomes. Mentions are one observation, not the whole business result."
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
