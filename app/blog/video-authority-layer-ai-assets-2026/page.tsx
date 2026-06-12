import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Turn Videos Into AI Authority Assets',
  description:
    "Most businesses upload videos and hope the algorithm rewards them. It won't. How structured infrastructure turns video into AI-cited authority assets.",
  alternates: {
    canonical: 'https://www.kodecite.ai/blog/video-authority-layer-ai-assets-2026',
  },
  openGraph: {
    title: "Why Your Videos Stay Trapped on YouTube — And How Owned Infrastructure Turns Them Into AI Authority Assets in 2026",
    description: "Most service businesses upload videos and hope the algorithm rewards them. It won't. Here's how structured infrastructure turns your existing video content into AI-cited authority across ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
    url: 'https://www.kodecite.ai/blog/video-authority-layer-ai-assets-2026',
    type: 'article',
    publishedTime: '2026-03-23',
    authors: ['Mark Abplanalp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.kodecite.ai/blog/video-authority-layer-ai-assets-2026#article',
  headline: "Why Your Videos Stay Trapped on YouTube — And How Owned Infrastructure Turns Them Into AI Authority Assets in 2026",
  description: "Most service businesses upload videos and hope the algorithm rewards them. It won't. Here's how structured infrastructure turns your existing video content into AI-cited authority across ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
  author: {
    '@type': 'Person',
    '@id': 'https://www.kodecite.ai/#founder',
    name: 'Mark Abplanalp',
    jobTitle: 'Founder',
    url: 'https://www.kodecite.ai',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.kodecite.ai/#business',
    name: 'KodeCite.ai',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.kodecite.ai/og-image.png',
      width: 1200,
      height: 630,
    },
  },
  datePublished: '2026-03-23T00:00:00-07:00',
  dateModified: '2026-03-23T00:00:00-07:00',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.kodecite.ai/blog/video-authority-layer-ai-assets-2026',
  },
  url: 'https://www.kodecite.ai/blog/video-authority-layer-ai-assets-2026',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.kodecite.ai/blog-hero.png',
    width: 1200,
    height: 630,
  },
  keywords: [
    'video authority layer',
    'VideoObject schema',
    'AI video visibility',
    'YouTube AI citations',
    'answer engine optimization',
    'AEO local business',
    'video transcript enrichment',
    'ChatGPT video citations',
    'Perplexity local business video',
    'owned media strategy 2026',
  ],
  articleSection: 'AI Search Strategy',
  wordCount: 1600,
  isPartOf: {
    '@type': 'CollectionPage',
    '@id': 'https://www.kodecite.ai/blog',
    name: 'KodeCite.ai Blog',
    url: 'https://www.kodecite.ai/blog',
  },
  about: [
    { '@type': 'DefinedTerm', name: 'VideoObject Schema' },
    { '@type': 'DefinedTerm', name: 'Answer Engine Optimization' },
    { '@type': 'DefinedTerm', name: 'AI Search Visibility' },
  ],
  mentions: [
    { '@type': 'Organization', name: 'ChatGPT', url: 'https://openai.com/chatgpt' },
    { '@type': 'Organization', name: 'Perplexity', url: 'https://www.perplexity.ai' },
    { '@type': 'Thing', name: 'Google AI Overviews', url: 'https://blog.google/products/search/ai-overviews-and-ai-mode/' },
    { '@type': 'Organization', name: 'Gemini', url: 'https://gemini.google.com' },
    { '@type': 'Organization', name: 'YouTube', url: 'https://www.youtube.com' },
  ],
  citation: [
    { '@type': 'CreativeWork', name: 'Schema.org — VideoObject', url: 'https://schema.org/VideoObject' },
    { '@type': 'CreativeWork', name: 'Google Search Central — Video Structured Data', url: 'https://developers.google.com/search/docs/appearance/structured-data/video' },
    { '@type': 'CreativeWork', name: 'Google — AI Overviews', url: 'https://blog.google/products/search/ai-overviews-and-ai-mode/' },
  ],
};

export default function VideoAuthorityLayer2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-[var(--d-bg)] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm font-inter text-[var(--d-fg-dim)] mb-8">
            <Link href="/" className="hover:text-[var(--d-accent)] transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-[var(--d-accent)] transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[var(--d-fg)] truncate">Why Your Videos Stay Trapped on YouTube</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AI Search Strategy</span>
            <span className="text-[var(--d-fg-dim)] text-sm font-inter">9 min read</span>
          </div>

          <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--d-fg)] mb-6 leading-tight">
            Why Your Videos Stay Trapped on YouTube —{' '}
            <span className="text-[var(--d-accent)]">And How Owned Infrastructure Turns Them Into AI Authority Assets in 2026</span>
          </h1>

          <p className="text-[var(--d-fg-dim)] text-xl font-inter leading-relaxed max-w-3xl">
            Most service and professional businesses upload videos and hope the algorithm rewards them. It won&apos;t. Here&apos;s how structured infrastructure turns your existing video content into AI-cited authority across ChatGPT, Perplexity, Gemini, and Google AI Overviews.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[var(--d-line)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-inter">MA</span>
              </div>
              <div>
                <p className="text-[var(--d-fg)] text-sm font-semibold font-inter">Mark Abplanalp</p>
                <p className="text-[var(--d-fg-dim)] text-xs font-inter">March 23, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-16 bg-[var(--d-bg)] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <article className="lg:col-span-2">
              <div className="prose-content font-inter">

                <p className="text-[var(--d-fg-dim)] text-lg leading-relaxed mb-8">
                  Video creation has never been easier. iPhone in hand, tripod from Amazon, a CapCut template — and you&apos;ve got a 90-second service walkthrough, process explainer, or expert answer ready to post. The problem isn&apos;t production. The problem is distribution architecture.
                </p>

                <p className="text-[var(--d-fg-dim)] text-lg leading-relaxed mb-8">
                  Right now, thousands of service and professional business owners — contractors, attorneys, financial advisors, real estate agents, healthcare providers, home service pros — are uploading genuinely useful videos to YouTube, boosting them with paid social, watching the spike, watching the flatline, and repeating the cycle. The content exists. The authority it should be building doesn&apos;t.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-8">
                  In 2026, the businesses that win in search — and increasingly in AI — aren&apos;t the ones who create the most content. They&apos;re the ones who&apos;ve built the infrastructure to make that content findable, citable, and trustworthy across every AI system that matters.
                </p>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  The Trap: Rented Visibility That Vanishes When You Stop Paying
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Let&apos;s be direct about how most service businesses use video right now. You film a process walkthrough, an FAQ answer, or a client testimonial. You post it to YouTube. Maybe you run $300 in Meta ads to seed early views. The algorithm gives you a small bump. You get some profile visits, maybe a few inquiries. Then it fades.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Next month, you do it again. This isn&apos;t a content strategy. It&apos;s a treadmill.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-8">
                  Platform-native optimization helps at the margins, but it&apos;s still channel-siloed. Your video might rank on YouTube for a specific search. It will almost certainly never surface when someone asks ChatGPT who the best local plumber, attorney, or financial advisor is, or when Perplexity assembles a response about the best service providers in your area. That&apos;s the trap — and most business owners don&apos;t even know they&apos;re in it.
                </p>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  The Gap: AI Doesn&apos;t Watch Videos — It Reads Structure
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Here&apos;s what most video strategies miss entirely: AI systems don&apos;t watch your videos. They read your data. When ChatGPT, Perplexity, Gemini, or Google AI Overviews decide whether to cite your content, they&apos;re not evaluating production quality. They&apos;re evaluating whether there&apos;s structured metadata that accurately describes this content, whether there&apos;s a transcript that answers identifiable questions, whether this content is hosted on a fast trusted crawlable domain, and whether the schema signals who created this, when, and why it&apos;s authoritative.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-8">
                  Most websites — including expensive subscription platforms marketed to service professionals — fail this test completely. They serve templated, bloated pages that load slowly, carry no VideoObject schema, and offer no transcript data for AI extraction. Your video exists. The infrastructure to make it citable doesn&apos;t.
                </p>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  The Solution: KodeCite.AI&apos;s Video Authority Layer
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The Video Authority Layer isn&apos;t a plugin or a bolt-on. It&apos;s a foundational build decision. When we build a client&apos;s site, videos aren&apos;t just embedded — they&apos;re architected as citable intelligence assets.
                </p>

                <h3 className="font-inter font-semibold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  VideoObject Schema: The Full Stack
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  We implement complete VideoObject structured data on every intent-driven page that features video content. Not partial schema — full implementation. Every property is a signal to AI systems about what this content is, who made it, and whether it can be trusted:
                </p>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6 my-8">
                  <p className="eyebrow mb-5 text-xs">VIDEOOBJECT SCHEMA PROPERTIES WE IMPLEMENT</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { prop: 'name', desc: 'Question-framed title for AI extraction' },
                      { prop: 'description', desc: 'Answer-first paragraph AI can cite directly' },
                      { prop: 'thumbnailUrl', desc: 'High-res, crawlable image URL' },
                      { prop: 'uploadDate', desc: 'ISO 8601 format — never omitted' },
                      { prop: 'duration', desc: 'ISO 8601 duration (PT4M32S)' },
                      { prop: 'embedUrl + contentUrl', desc: 'Both present for max crawler coverage' },
                      { prop: 'transcript', desc: 'Inline or linked structured transcript' },
                      { prop: 'hasPart', desc: 'Clip-level schema with timestamps' },
                      { prop: 'creator + publisher', desc: 'Entity-linked authorship / E-E-A-T signals' },
                    ].map((item, i) => (
                      <div key={i} className="p-3 bg-[var(--d-bg)] rounded-lg border border-[var(--d-line)]">
                        <p className="text-[var(--d-accent)] text-xs font-bold font-inter mb-1">{item.prop}</p>
                        <p className="text-[var(--d-fg-dim)] text-xs font-inter leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="font-inter font-semibold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Transcript Enrichment: The Substance AI Actually Reads
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-8">
                  Raw transcripts are nearly worthless for AI citation. Auto-generated YouTube captions are full of errors, lack structure, and offer no semantic anchoring. We enrich transcripts with question-first structure, precise timestamps mapped to hasPart schema, entity density with named services, locations, and expertise signals, and clean formatting. A properly enriched transcript turns a 4-minute explainer video — whether it&apos;s a contractor walking through a renovation process or an attorney answering a common client question — into something Perplexity can extract two or three specific factual answers from.
                </p>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  The Compounding Loop
                </h2>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6 my-8">
                  <p className="eyebrow mb-5 text-xs">THE COMPOUNDING LOOP</p>
                  <div className="space-y-2">
                    {[
                      { step: '01', label: 'AI cites your video', desc: 'ChatGPT, Perplexity, AI Overviews surface your structured content in answers' },
                      { step: '02', label: 'External traffic hits your page', desc: 'Users click through from AI responses to your edge-hosted site' },
                      { step: '03', label: 'YouTube receives authority signal', desc: 'Off-platform traffic signals to YouTube that your video has real-world relevance' },
                      { step: '04', label: 'YouTube distributes further', desc: 'Algorithm surfaces your video more broadly within the platform' },
                      { step: '05', label: 'More citations follow', desc: 'Increased visibility feeds back into AI citation frequency — the loop compounds' },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-4 p-4 bg-[var(--d-bg)] rounded-lg border border-[var(--d-line)]">
                        <div className="flex-shrink-0">
                          <p className="text-[var(--d-accent)] font-bold text-lg font-inter">{item.step}</p>
                        </div>
                        <div>
                          <p className="text-[var(--d-fg)] text-sm font-semibold font-inter mb-1">{item.label}</p>
                          <p className="text-[var(--d-fg-dim)] text-xs font-inter leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-8">
                  This is the opposite of the paid social treadmill. It doesn&apos;t require ongoing spend. It compounds in the background.
                </p>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  The Hybrid Ramp Strategy
                </h2>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6 my-8">
                  <p className="eyebrow mb-5 text-xs">THREE-PHASE RAMP</p>
                  <div className="space-y-4">
                    {[
                      { phase: 'Phase 1', label: 'Build the foundation first', desc: 'Edge-optimized site, VideoObject schema, enriched transcripts, intent pages. Non-negotiable. Paid traffic to an unstructured page is wasted spend.' },
                      { phase: 'Phase 2', label: 'Seed with paid early', desc: 'Run targeted campaigns ($500–$1,500) for the first 30–60 days to accelerate initial view counts and engagement signals.' },
                      { phase: 'Phase 3', label: 'Pull back paid, let owned compound', desc: 'As AI citations accumulate and YouTube distribution picks up organically, reduce paid dependence. You own the infrastructure — not the platform.' },
                    ].map((item) => (
                      <div key={item.phase} className="flex items-start gap-4 p-4 bg-[var(--d-bg)] rounded-lg border border-[var(--d-line)]">
                        <div className="flex-shrink-0 min-w-[80px]">
                          <p className="text-[var(--d-accent)] text-xs font-bold font-inter">{item.phase}</p>
                          <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug mt-0.5">{item.label}</p>
                        </div>
                        <p className="text-[var(--d-fg-dim)] text-xs font-inter leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  Why This Matters Most for Local and Regional Service Businesses
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Hyper-local video content is exactly what AI systems are poorly served by today. A roofing contractor explaining how to spot storm damage. A family law attorney walking through what to expect in mediation. A financial planner breaking down the real cost of waiting to invest. These are the kinds of specific, trust-building answers that AI systems want to cite — and almost no local business has the infrastructure in place to deliver them.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The business owner who builds a properly structured video library for their service area in 2026 becomes the default AI-recommended authority in that market. Not because they outspent anyone — because they outbuilt them.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-8">
                  Consider real estate as one example: a local agent&apos;s neighborhood walkthrough isn&apos;t competing with Zillow. It&apos;s answering questions Zillow doesn&apos;t answer. That same dynamic plays out across every service category — the independent expert who structures their knowledge correctly beats the national platform every time in AI-cited, local-intent queries.
                </p>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  If You&apos;re Chasing Cheap Boosts, This Isn&apos;t It
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  We cap at 3–5 clients per month. The Video Authority Layer requires owning your infrastructure: a custom-built Next.js site on edge/Vercel, full schema stack, enriched content architecture, and a site you actually own outright. One-time build. No monthly platform fees. No rented visibility.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-8">
                  If you&apos;ve been burning $400–$800/month on a platform that hasn&apos;t moved your needle, do the math. The businesses that establish AI citation authority now — regardless of industry — are building a moat that gets harder to cross with every month that passes.
                </p>

                <div className="mt-12 pt-8 border-t border-[var(--d-line)]">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[var(--d-accent)] font-semibold font-inter hover:text-[#8a5f2e] transition-colors"
                  >
                    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Back to The Playbook
                  </Link>
                </div>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="eyebrow mb-4 text-xs">THE VIDEO AUTHORITY GAP</p>
                  <div className="space-y-4">
                    <div className="border-b border-[var(--d-line)] pb-4">
                      <p className="text-[var(--d-accent)] font-bold text-3xl font-inter">0</p>
                      <p className="text-[var(--d-fg-dim)] text-sm font-inter mt-1">VideoObject schema on most local service business sites</p>
                    </div>
                    <div className="border-b border-[var(--d-line)] pb-4">
                      <p className="text-[var(--d-accent)] font-bold text-3xl font-inter">5×</p>
                      <p className="text-[var(--d-fg-dim)] text-sm font-inter mt-1">more AI-citable with enriched transcripts vs raw captions</p>
                    </div>
                    <div>
                      <p className="text-[var(--d-accent)] font-bold text-3xl font-inter">∞</p>
                      <p className="text-[var(--d-fg-dim)] text-sm font-inter mt-1">owned infrastructure compounds — paid social doesn&apos;t</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="font-inter font-bold text-[var(--d-fg)] text-lg mb-3 leading-snug">
                    Turn Your Videos Into AI Assets
                  </p>
                  <p className="text-[var(--d-fg-dim)] text-sm font-inter leading-relaxed mb-5">
                    Find out exactly what&apos;s missing from your current video infrastructure — and what it would take to make your content citable across every AI system that matters.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Get My Free Machine Read
                  </Link>
                </div>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/2026-digital-land-rush-ai-visibility" className="block group">
                      <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                        The 2026 Digital Land Rush: Why Waiting on AI Visibility Could Cost Your Business Everything
                      </p>
                      <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">8 min read</p>
                    </Link>
                    <div className="border-t border-[var(--d-line)] pt-4">
                      <Link href="/blog/what-is-zero-click-search" className="block group">
                        <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                          What Is Zero Click Search and Why Your Business Is Invisible
                        </p>
                        <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">8 min read</p>
                      </Link>
                    </div>
                    <div className="border-t border-[var(--d-line)] pt-4">
                      <Link href="/blog/schema-markup-complete-guide" className="block group">
                        <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                          Schema Markup: The Complete Guide for Local Service Businesses
                        </p>
                        <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">12 min read</p>
                      </Link>
                    </div>
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
          <p className="eyebrow mb-4">OWN YOUR AI FUTURE</p>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-[var(--d-fg)] mb-4">
            Your Videos Already Exist. Make Them Work Harder.
          </h2>
          <p className="text-[var(--d-fg-dim)] font-inter mb-8 leading-relaxed">
            The False Legacy Layer is real — and it has an expiration date. A Machine Read shows you exactly what AI systems can verify about your business right now, and where the gaps are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Get My Free Machine Read
            </Link>
            <Link href="/blog" className="btn-gold-outline text-base font-bold px-8 py-4 rounded-md inline-block">
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
