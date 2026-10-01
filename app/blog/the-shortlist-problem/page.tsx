import type { Metadata } from 'next';
import Link from 'next/link';

import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';

const article = {
  "slug": "the-shortlist-problem",
  "title": "The Shortlist Problem: Help AI Understand Who You Fit",
  "description": "Help customers and their AI assistants compare your business using specific services, relevant proof, clear conditions, and a useful next step.",
  "date": "2026-03-17",
  "intro": "When a customer asks an assistant to compare businesses, the valuable question is why yours fits that person. A clear offer and relevant proof give the assistant something useful to work with.",
  "sections": [
    {
      "heading": "A shortlist is a decision, not a fixed slot",
      "paragraphs": [
        "Consider a customer asking, “Find a provider who handles this kind of project, serves my area, and can explain the options before I commit.” The assistant has a comparison task. Its answer may be a few candidates, a longer list, or a clarifying question.",
        "There is no universal one-business-per-city slot to claim. Different needs can produce different choices. A company that is a strong fit for a complex project may be unsuitable for a small repair. A provider with excellent credentials may not serve the customer's location.",
        "This is good news for an owner with a genuine specialty. You do not need to describe your business as best for everyone. You need to make its particular fit easy to understand, support, and check."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Publish the criteria your customers actually use",
      "paragraphs": [
        "Start with the questions your team answers before accepting work. Which jobs do you take? What makes a customer suitable? Which locations are covered? What needs an initial conversation? What could prevent a project from proceeding?",
        "These criteria belong near the offer. A service page that answers them can help an assistant explain why the business is worth considering. It can also help an unsuitable customer move on without wasting anyone's time.",
        "For example, a hypothetical consultant might work with owner-led businesses that already have a small team. A specialist installer might cover defined product categories and require an on-site measurement. Neither gains from being described as a universal solution."
      ],
      "items": [
        "The problem and service being offered",
        "Customer or project fit",
        "Geographic and practical availability",
        "Information needed for an estimate or consultation",
        "Relevant experience and verifiable qualifications"
      ],
      "sources": []
    },
    {
      "heading": "Give every important claim an appropriate form of proof",
      "paragraphs": [
        "Different claims require different evidence. A service description establishes what you say you offer. A professional register can support a credential. A dated project example can show experience with a type of work. A review can describe a customer's experience, with the limits of that individual account.",
        "Connect each piece to the person, business, service, or project it concerns. A founder's qualification does not automatically belong to every employee. An award in one category does not establish superiority in another. Precision helps both the human reader and the assistant.",
        "Keep the proof visible. Appropriate structured data can express relationships, but a hidden claim in markup should not carry a stronger story than the page itself."
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
      "heading": "Reduce the unanswered questions in a comparison",
      "paragraphs": [
        "A customer comparing three providers may need more than their specialties. They may need to know whether the consultation is remote or on-site, whether measurements are required, how custom pricing works, or who responds to a request.",
        "Answer what the business can answer reliably. If the final price depends on choices that have not been made, describe those choices and the quote process. If availability is not connected to a live system, explain how it is confirmed. Clear uncertainty is more useful than a false promise.",
        "This makes your business easier to compare on its real merits. It also reduces the risk of an assistant filling a gap with a plausible but incorrect assumption."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "The shortlist should lead somewhere",
      "paragraphs": [
        "Being considered only becomes commercially useful when the customer can engage. Provide a next step that matches the service and the current business process. That may be a phone call, a structured inquiry, or an action an outside assistant can invoke through a supported connection.",
        "Define what information is needed and what the customer approves. State whether the result means a request was received, a time was reserved, or a purchase was completed. Where a person must make the decision, provide a clear handoff.",
        "Luxe Window Works demonstrates one bounded path from an outside AI to a consultation request: one email and a duplicate prevented. That is meaningful evidence of engagement after discovery. It is not a claim that every shortlisted business can automatically book or transact."
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
      "heading": "Test for fit rather than fishing for praise",
      "paragraphs": [
        "Build a handful of scenarios from actual customer questions. Include a straightforward match, a request at the edge of your service area, a specialized job, and an unsuitable request. Ask relevant assistants to compare options and explain their reasons.",
        "Look for factual mistakes and missing evidence. Does the answer understand your specialty? Does it cite a relevant project or merely repeat a slogan? Does it identify the correct next step? Does it overstate availability?",
        "Keep the date, question, sources, and result. Repeat after meaningful corrections, and track the quality of real inquiries separately. A flattering answer is not a conversion report, and a missing mention in one sample is not proof that the business has disappeared."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Be the business that is easy to evaluate",
      "paragraphs": [
        "The practical aim is a customer who understands why your business may be right for the job and knows how to proceed. That holds whether the customer researches personally or delegates the comparison to a personal agent.",
        "KodeCite's work begins with the owned business foundation: identity, offers, people, evidence, and clear capabilities. The $4,995 one-time foundation has no required retainer; a live action is scoped separately.",
        "A shortlist remains the assistant's or customer's decision. Your part is to make the reasons for a good match clear and make the next step work."
      ],
      "items": [],
      "sources": []
    }
  ],
  "takeaways": [
    "Define the customer you serve well",
    "Connect each claim to evidence",
    "Make engagement easy after comparison"
  ],
  "faq": [
    {
      "q": "Will an assistant only recommend one local business?",
      "a": "Not necessarily. The number of options depends on the question, interface, and system. There is no fixed local shortlist size."
    },
    {
      "q": "How do I know whether I am a good match in an AI answer?",
      "a": "Check whether the answer accurately connects your actual service, area, conditions, and evidence to the customer’s specific request."
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
