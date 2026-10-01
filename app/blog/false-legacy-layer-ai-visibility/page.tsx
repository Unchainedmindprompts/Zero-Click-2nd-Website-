import type { Metadata } from 'next';
import Link from 'next/link';

import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';

const article = {
  "slug": "false-legacy-layer-ai-visibility",
  "title": "Your Business Appears in AI. What Does That Prove?",
  "description": "Turn an AI mention into useful evidence: inspect accuracy, sources, customer fit, and the next step before deciding what to improve.",
  "date": "2026-03-07",
  "intro": "Seeing your business in an AI answer is a useful observation. Check what it says, why it fits the customer, and what happens next before treating that mention as a reliable source of new business.",
  "sections": [
    {
      "heading": "Start by taking the mention seriously",
      "paragraphs": [
        "If an assistant recommends your business, there may be real reasons for it: relevant services, useful content, customer reviews, or independent coverage. A site does not have to use a particular framework or an AI-specific file to be included.",
        "The phrase “False Legacy Layer” once framed existing visibility as temporary or unearned. That is too strong a conclusion to draw from a result. Without evidence about a system's selection process, we cannot know that a business appeared only because its competitors had not improved their sites.",
        "The useful concern is narrower: one answer does not establish repeatable customer discovery, accurate representation, or completed business. Treat it as the start of an investigation. Preserve what is working and find the specific gaps."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Record the context before drawing a conclusion",
      "paragraphs": [
        "Save the actual question, assistant, date, answer, and linked sources. Note the location and any preferences included in the request. If a previous conversation influenced the answer, record that too.",
        "Then separate three things: a factual description of your business, a recommendation for the particular need, and a proposed next step. An answer can get one right and another wrong. It might identify the company correctly but assign it a service it does not offer.",
        "A broad “best provider near me” question can also hide the criteria that matter. Ask follow-ups about the customer's actual job, service area, budget constraints where relevant, and timing. See whether the business remains a sensible fit once the question becomes specific."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Trace claims back to evidence",
      "paragraphs": [
        "Open the cited pages and check whether they support the details in the answer. Look for old addresses, retired services, expired credentials, or a phone number belonging to another branch. A citation beside a sentence is not proof that every claim in that sentence appears in the source.",
        "If the source is your site, correct the underlying page and any related structured information together. If it is an external profile you manage, update the relevant record. If you cannot change a source, publish accurate information in the places you control and use the platform's correction process when appropriate.",
        "Do not erase genuine evidence just because it is older. A dated project or award can remain valuable when its time and scope are clear. The objective is current business facts supported by an honest history."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Test more than one route to the business",
      "paragraphs": [
        "A customer who asks for a named business has already made part of the discovery journey. An unnamed comparison request is a different test. So is a request from outside the service area or for a service the business does not perform.",
        "Use a small set of real customer scenarios and keep them stable enough to compare over time. Sample multiple relevant assistants rather than assuming one system represents them all. Results can vary; record the variation instead of selecting only the flattering answer.",
        "Avoid treating a handful of tests as a market-share statistic. They are useful for finding misunderstandings and improving public information. Evidence of commercial value needs actual inquiries and outcomes as well."
      ],
      "items": [
        "Named-business question: is the description correct?",
        "Unbranded service question: is the business relevant?",
        "Specific constraints: is the fit explained accurately?",
        "Poor-fit request: are the limits recognized?"
      ],
      "sources": []
    },
    {
      "heading": "Follow the recommendation all the way through",
      "paragraphs": [
        "If the answer suggests contacting the business, test the route. Does the link work? Is the right service available? Does the form ask for sensible information? Does a person receive the request? Can the customer tell what has happened?",
        "A capable outside agent needs the same clarity. A consultation request should not be described as a confirmed appointment. A price range should not become a binding quote. The customer should know when the business must review the request and respond.",
        "For a connected action, test repeated submissions and failures as well as the happy path. A credible receipt is valuable. A confident sentence saying “all booked” when nothing was reserved creates work and damages trust."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Measure the asset you can improve",
      "paragraphs": [
        "You do not own an assistant's answer. You can own clear business pages, connected proof, working contact routes, and a process for keeping them current. You can also record whether customers arrive with the right expectations and whether the team completes the promised follow-up.",
        "Google's published guidance says inclusion in AI Overviews or AI Mode is not guaranteed, even when a page meets its requirements. Other systems have their own methods. A provider should explain what it will build and verify rather than sell a permanent place in a recommendation list.",
        "When deciding what to fund, distinguish an observed problem from a prediction. A wrong service description or broken inquiry route deserves a concrete fix. A claim that a competitor will erase your business overnight does not establish a diagnosis."
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
      "heading": "A better question than “is my visibility borrowed?”",
      "paragraphs": [
        "Ask whether a customer can be accurately introduced to your business, assess its fit, and complete a useful next step. That question leads to improvements you can inspect.",
        "An Agent Readiness Review should connect sampled answers to the source information and the actual customer journey. Sometimes the right recommendation is a targeted update. Sometimes a deeper foundation needs work. Existing mentions are part of the evidence, not something to dismiss to justify a rebuild."
      ],
      "items": [],
      "sources": []
    }
  ],
  "takeaways": [
    "Check accuracy before celebrating reach",
    "Trace claims to real sources",
    "Verify the journey after the mention"
  ],
  "faq": [
    {
      "q": "Does an AI mention prove my website is agent-ready?",
      "a": "It proves the business appeared in that answer. Agent readiness also requires accurate facts, useful evidence, and a verified way to complete the supported next step."
    },
    {
      "q": "Can a competitor permanently take my AI position?",
      "a": "There is no fixed owned position to transfer. Answers depend on the system, question, context, and available sources."
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
