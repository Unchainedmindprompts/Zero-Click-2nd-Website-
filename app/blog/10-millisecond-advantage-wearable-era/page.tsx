import type { Metadata } from 'next';
import Link from 'next/link';

import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';

const article = {
  "slug": "10-millisecond-advantage-wearable-era",
  "title": "When Customers Ask Their AI to Find a Business",
  "description": "Prepare for customers who delegate to AI assistants: clear business facts, credible evidence, useful next steps, and a website that works across devices.",
  "date": "2026-03-17",
  "intro": "A customer may ask a phone, glasses, or a personal assistant to find a business and handle the next step. The useful preparation starts with making your business easy to understand and act with, whatever device they use.",
  "sections": [
    {
      "heading": "Convenience is the reason to pay attention",
      "paragraphs": [
        "Imagine a homeowner leaving work who says, “Find someone who can help with the west-facing windows at home. Compare a few options and ask about a consultation.” The appeal is straightforward: fewer searches, fewer tabs, and less repeating the same details.",
        "That is the customer behavior worth preparing for. A personal agent, sometimes described as a digital twin, can carry a person's preferences into a task. It might help research providers, compare their fit, draft a request, or complete an available action with permission. What it can actually do depends on the assistant and the business connection.",
        "Wearables could make this kind of delegation easier to start. Phones and laptops already provide an interface for it. A business does not need a prediction about the winning device or its launch date to make its information clearer today."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "A spoken answer needs useful reasons",
      "paragraphs": [
        "A voice conversation may favor a brief answer, but there is no fixed rule that an assistant must recommend exactly one or two businesses. It can offer alternatives, ask a follow-up question, send links to a screen, or explain that it cannot establish a match.",
        "The important question for an owner is what the assistant can say about the business beyond its name. “They offer window treatments” is much less useful than an accurate explanation of service area, consultation format, relevant product options, and evidence of similar work. Specific facts help a customer compare without opening every page.",
        "Write the reasons a suitable customer would choose you. Also make the limits plain. A business serving residential customers in one region should not appear to offer every service everywhere. A good match is worth more than a vague recommendation that becomes an unsuitable inquiry."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Put the business facts where they can be checked",
      "paragraphs": [
        "Begin with the company and the people behind it. Identify the owner, the service providers, what each person does, and the qualifications that matter for the work. Link to the relevant issuer or profile when a credential or award can be independently verified. Give awards their actual year and category.",
        "Then connect that identity to the offer: who the service fits, where it is available, what it includes, and the process a customer should expect. A project example should explain the problem and work performed rather than imply every customer gets the same result.",
        "Represent those visible facts in appropriate structured data. Keep the same business identity across service pages, biographies, articles, and relevant external profiles. Markup is a description of the evidence; it does not create a credential or guarantee that any assistant will choose you."
      ],
      "items": [],
      "sources": [
        {
          "label": "Google Search Central: structured data guidelines",
          "href": "https://developers.google.com/search/docs/appearance/structured-data/sd-policies"
        }
      ]
    },
    {
      "heading": "Speed matters as a service quality issue",
      "paragraphs": [
        "A reliable page and a working form make the journey easier. A broken link, inaccessible service description, or submission that disappears is a concrete problem to fix. Measure the actual site on real devices and check what arrives in the page response before deciding to replace its technology.",
        "A well-built WordPress site can work. A poorly built Next.js site can be slow. A CDN may improve delivery, but it cannot keep a price current or decide whether a requested service is appropriate. Choose hosting, rendering, and maintenance arrangements for the requirements you can demonstrate.",
        "Core Web Vitals assess loading, interaction responsiveness, and visual stability. They are useful experience measurements, not an AI recommendation score. There is no substantiated ten-millisecond threshold that wins a local recommendation."
      ],
      "items": [],
      "sources": [
        {
          "label": "web.dev: Core Web Vitals",
          "href": "https://web.dev/articles/vitals"
        },
        {
          "label": "Google Search Central: JavaScript and rendering",
          "href": "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics"
        }
      ]
    },
    {
      "heading": "Make the next step as clear as the introduction",
      "paragraphs": [
        "Suppose the assistant has found a plausible provider. It should be able to establish whether the next step is an inquiry, a consultation request, a live appointment booking, or a purchase. Those are different capabilities.",
        "For a consultation request, publish the information needed to send it, the permission required from the customer, and what happens afterward. A returned request reference can confirm receipt. It cannot confirm an appointment time that no scheduling system has reserved.",
        "KodeCite's Luxe Window Works proof covers an external AI consultation request, one email, and a duplicate prevented. It demonstrates a specific handoff. Automatic pricing, booking, and checkout were not established by that test. Those would need their own scope and verification."
      ],
      "items": [],
      "sources": [
        {
          "label": "Read the Luxe Window Works implementation",
          "href": "/blog/from-recommended-to-actionable-luxe-window-works"
        }
      ]
    },
    {
      "heading": "Treat discovery files as supporting material",
      "paragraphs": [
        "An llms.txt file can collect useful links and context. It began as a proposal; publishing one does not establish that every assistant reads it. A custom agent.json file likewise needs a known consumer and an agreed format before it can support an integration.",
        "Spend first on accurate pages, accessible evidence, and an honest next step. Add supporting files when they help a documented use case, and test the consumer that is meant to use them. Keep the files synchronized with the business rather than treating them as a one-time shortcut."
      ],
      "items": [],
      "sources": [
        {
          "label": "Answer.AI: the original llms.txt proposal",
          "href": "https://www.answer.ai/posts/2024-09-03-llmstxt.html"
        }
      ]
    },
    {
      "heading": "A practical readiness check",
      "paragraphs": [
        "Ask someone unfamiliar with your business to answer a customer's real request using only your website. Can they identify the best-fitting service, show why it fits, identify anything still unknown, and take a useful next step?",
        "Repeat that exercise with the AI assistants relevant to your customers. Save the question, date, answer, and sources so you can see whether a correction helped. Treat a sample as a sample, not a permanent market position.",
        "The durable goal is simple: make your business easy for your customer's AI assistant to understand, trust and do business with. A better device will not supply missing business facts. You can supply them now."
      ],
      "items": [
        "Clarify one important service and the customers it fits",
        "Connect real credentials and examples to that service",
        "Test the full inquiry journey, including its confirmation",
        "Fix misunderstandings before adding more channels"
      ],
      "sources": []
    }
  ],
  "takeaways": [
    "Prepare for delegated customer journeys",
    "Explain why your business fits",
    "Verify what the next step actually completes"
  ],
  "faq": [
    {
      "q": "Do I need to rebuild for wearable AI?",
      "a": "Only if your current site cannot meet a demonstrated requirement. Check content access, accuracy, performance, and the customer journey first."
    },
    {
      "q": "Does publishing agent.json make booking possible?",
      "a": "No. A supported connection, live business rules, customer permission, and a verified booking result are needed for an actual booking."
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
