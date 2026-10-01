import type { Metadata } from 'next';
import Link from 'next/link';

import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';

const article = {
  "slug": "what-is-zero-click-search",
  "title": "What Zero-Click Search Means for Your Business",
  "description": "Understand zero-click search, distinguish attention from customer outcomes, and help people or their AI assistants take the right next step.",
  "date": "2026-01-15",
  "intro": "Zero-click search describes a search that does not lead to a result click. It can change how customers encounter a business, but a missing website visit does not tell you whether the customer found an answer, made contact, or gave up.",
  "sections": [
    {
      "heading": "The definition needs a little care",
      "paragraphs": [
        "A search can end without a click because the person reads an answer, checks a phone number, changes the query, or leaves the session. Featured snippets, maps, knowledge panels, and AI-generated summaries can all be part of that journey.",
        "Different research studies define and measure clicks differently. A click to another property owned by the search platform is not the same as a click to an independent website. Browser-based measurements may not capture every device, app, or later customer action.",
        "For an owner, the question is what changed for the business. Fewer visits to an informational article may matter differently from fewer requests for a core service. Begin with that distinction before assuming every zero-click search is a lost customer."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "What the research shows, and what it cannot tell you",
      "paragraphs": [
        "SparkToro's 2024 study with Datos documented substantial zero-click activity in its US and EU Google search sample. It is historical evidence of the pattern, rather than a current measurement of your market or proof that AI caused every search without a click.",
        "Pew Research Center examined March 2025 browsing from 900 US adults. Traditional-result clicks occurred on 8% of visits with an AI summary and 15% without one. Those observed groups show a meaningful difference, but they do not establish the effect on every business or every local-service query.",
        "Use this research as a reason to investigate your own customer journey. It does not replace site data, inquiry records, or conversations with customers about how they found you."
      ],
      "items": [],
      "sources": [
        {
          "label": "SparkToro: the 2024 zero-click search study",
          "href": "https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/"
        },
        {
          "label": "Pew Research Center: March 2025 search behavior study",
          "href": "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/"
        }
      ]
    },
    {
      "heading": "An answer can still influence a business decision",
      "paragraphs": [
        "A person may read about a service in a search summary, ask an assistant for more detail, and contact the business later through another route. Another person may get a complete factual answer and have no reason to hire anyone. Those are different outcomes even when neither first interaction produces a visit.",
        "Make the public description of your business accurate enough to be useful in a short explanation. Identify what you do, who it fits, where you operate, and what evidence supports the choice. Put important qualifications and conditions near the offer.",
        "Do not turn every article into a sales pitch. An answer that genuinely helps someone can build understanding. The relevant next step should be available when the person's need does call for a provider."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Separate being named from being engaged",
      "paragraphs": [
        "A mention is a form of exposure. A qualified inquiry is a person with a relevant need. A completed action means something actually happened, such as a request being received or an appointment being reserved. A sale is another distinct outcome.",
        "Track those stages with the evidence you can obtain. Ask new customers how they found you, preserve useful referral information, and connect inquiries to the team's follow-up. Some attribution will remain unknown; recording “unknown” is better than assigning every unexplained lead to AI.",
        "If traffic falls while good inquiries stay steady, the business may be seeing a change in how people arrive. If both fall, investigate the specific services and channels affected. Neither pattern proves the cause without more evidence."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Give a customer’s assistant a useful route forward",
      "paragraphs": [
        "A personal agent may help someone compare options and make contact to save time. The website should explain what can happen next and what the assistant needs to complete that step.",
        "For a consultation request, that might mean approved contact details, a short description of the need, and an accurate receipt. A human may then need to confirm the scope or availability. If a live booking connection exists, it needs a real reserved slot before the assistant can call it booked.",
        "Luxe Window Works demonstrates an external AI consultation request that produced one email and prevented a duplicate. This is a useful engagement outcome beyond an informational answer. It does not establish automated pricing, booking, or checkout."
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
      "heading": "Improve information and action together",
      "paragraphs": [
        "Choose one important service. Review its public description, provider identity, qualifications, project evidence, and contact route. Correct conflicting facts and make the essential information easy to read. Use suitable structured data to describe what is visible.",
        "Then test how a person or a relevant assistant handles a realistic question. Save the answer and its sources. Check for inaccurate service claims or an incorrect next step. Fix the source information you control and repeat the test after a meaningful update.",
        "A supporting file such as llms.txt can organize links for a documented use case. It is not a universal requirement for being seen by AI systems. Prioritize the quality of the information and the working journey over a checklist of file names."
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
      "heading": "A broader measure of success",
      "paragraphs": [
        "Website traffic is still useful. So are calls, qualified requests, successful handoffs, and customers who arrive with accurate expectations. A good measurement plan keeps those outcomes connected without pretending they are the same thing.",
        "The task is to make your business easy for a customer's AI assistant to understand, trust, and do business with. Zero-click behavior makes that task worth examining, but it does not make the business invisible by definition.",
        "Start with the specific point where your customers lose clarity or momentum. An Agent Readiness Review can help establish whether the next improvement belongs in the business facts, the evidence, or the route to engagement."
      ],
      "items": [],
      "sources": []
    }
  ],
  "takeaways": [
    "No click does not explain the outcome",
    "Keep historical research in context",
    "Connect accurate answers to useful action"
  ],
  "faq": [
    {
      "q": "Does zero-click mean the customer was lost?",
      "a": "No. The person may have found information, changed the query, or contacted the business through another route. You need outcome data to know."
    },
    {
      "q": "Are AI summaries the only cause?",
      "a": "No. Maps, snippets, knowledge panels, query changes, and abandoned searches can also produce no result click."
    },
    {
      "q": "What should a service business measure?",
      "a": "Track relevant traffic alongside qualified inquiries, follow-up, and completed outcomes. Keep uncertain attribution explicit."
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
