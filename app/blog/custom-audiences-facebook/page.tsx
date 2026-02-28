import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Three Custom Audiences Every Local Business Needs on Facebook',
  description:
    'Most businesses set up one broad audience and wonder why their ads don\'t convert. These three layered audiences — awareness, intent, and retargeting — are the foundation of every campaign we build.',
  openGraph: {
    title: 'The Three Custom Audiences Every Local Business Needs on Facebook',
    description:
      'The three-audience system that replaces broad interest targeting and makes Facebook ads work for local service businesses.',
    url: 'https://zeroclickstrategies.com/blog/custom-audiences-facebook',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Three Custom Audiences Every Local Business Needs on Facebook',
  description:
    'Most businesses set up one broad audience and wonder why their ads don\'t convert. These three layered audiences — awareness, intent, and retargeting — are the foundation of every campaign we build.',
  datePublished: '2026-02-27',
  dateModified: '2026-02-27',
  wordCount: 900,
  keywords: 'Facebook custom audiences, video view audience, website retargeting, lookalike audiences, Meta pixel, local business Facebook ads, audience segmentation',
  author: {
    '@type': 'Organization',
    name: 'Zero Click Strategies',
    url: 'https://zeroclickstrategies.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Zero Click Strategies',
    logo: {
      '@type': 'ImageObject',
      url: 'https://zeroclickstrategies.com/logo.png',
    },
  },
  url: 'https://zeroclickstrategies.com/blog/custom-audiences-facebook',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://zeroclickstrategies.com/blog/custom-audiences-facebook',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zeroclickstrategies.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://zeroclickstrategies.com/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Three Custom Audiences for Local Businesses',
      item: 'https://zeroclickstrategies.com/blog/custom-audiences-facebook',
    },
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a custom audience on Facebook?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom audience is a targeting group built from your own data — website visitors tracked by the Facebook pixel, video viewers, email lists, or customer files — rather than Facebook\'s interest and demographic categories. Custom audiences are more precise and typically produce significantly lower cost-per-lead than cold interest-based audiences because they target people who already have some connection to your business.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need the Facebook pixel to use custom audiences?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For website visitor custom audiences, yes — the Meta Pixel must be installed on your website. For video view audiences, no pixel is needed — those audiences are built from engagement with your Facebook and Instagram content within Meta\'s platform. Starting with video view audiences allows you to begin building warm audiences even before your pixel has collected significant data.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many website visitors do I need before retargeting audiences are effective?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Facebook requires a minimum of 100 people in a custom audience before it can be used for advertising. In practice, retargeting audiences become statistically reliable at around 1,000 monthly website visitors. Below that threshold, video view audiences are a more practical starting point for building warm audiences without requiring existing website traffic.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a lookalike audience and how does it differ from a custom audience?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A lookalike audience is built by Facebook\'s algorithm to find people who share characteristics with a source custom audience such as your customer list or best website visitors. Custom audiences retarget people who already know your business. Lookalike audiences find new people who resemble your best customers — making them the most efficient cold-targeting method available and the scaling engine of a mature Facebook ad strategy.',
      },
    },
  ],
};

export default function CustomAudiencesFacebook() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-[#0A1628] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm font-poppins text-[#8A9BB5] mb-8">
            <Link href="/" className="hover:text-[#D4A94A] transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-[#D4A94A] transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white truncate">Three Custom Audiences</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">Facebook Ads</span>
            <span className="text-[#8A9BB5] text-sm font-poppins">6 min read</span>
          </div>

          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            The Three Custom Audiences Every{' '}
            <span className="text-[#D4A94A]">Local Business Needs on Facebook</span>
          </h1>

          <p className="text-[#8A9BB5] text-xl font-poppins leading-relaxed max-w-3xl">
            One broad audience is not a strategy. The businesses consistently generating leads from Facebook run three layered custom audiences that together create a pipeline from cold awareness to warm conversion.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D4A94A] flex items-center justify-center">
                <span className="text-[#0F1E3C] font-bold text-sm font-poppins">ZC</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold font-poppins">Zero Click Strategies</p>
                <p className="text-[#8A9BB5] text-xs font-poppins">February 27, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Article + Sidebar */}
      <section className="py-16 bg-[#0F1E3C] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <article className="lg:col-span-2">
              <div className="prose-content font-poppins">

                <p className="text-[#8A9BB5] text-lg leading-relaxed mb-8">
                  Most local businesses running Facebook ads use one audience: a broad demographic and interest-based targeting set they defined when they set up their first campaign and never revisited. That audience is their best performer on good days and a budget drain on bad ones. The businesses that consistently generate leads from Facebook have a different architecture: three layered custom audiences that together create a pipeline from cold awareness to warm conversion.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Why Custom Audiences Outperform Interest Targeting
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  The Problem With Interest-Based Targeting
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Interest-based targeting — selecting demographics and categories from Facebook&apos;s menu of options — is a best-guess approximation of your customer profile. Facebook assigns interest categories based on content engagement, page likes, and behavioral signals. Someone categorized as interested in &ldquo;home improvement&rdquo; might be a homeowner actively seeking renovation contractors or a renter who occasionally reads HGTV articles. The signal quality is low, and the audience size is large — which means your ad budget is spread across a wide range of people with varying relevance.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Interest-based audiences also don&apos;t improve over time. The same broad category that was available when you set up your account two years ago is the same category today. There&apos;s no feedback loop, no learning from your actual customers, no compounding efficiency. The cost per lead stays roughly constant because the input stays constant.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  How Custom Audiences Use Your Real Data
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Custom audiences are built from your actual business data — the people who have watched your videos, visited your website, or become your customers. These are real signals of real interest, not inferred categories. A person who watched 75% of your window cleaning demonstration video and then visited your estimate page is a demonstrably high-intent prospect. Targeting that person specifically, with messaging that acknowledges their familiarity, converts at a fraction of the cost of targeting a broad interest category that might contain them — mixed with millions of irrelevant users.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Audience 1 — Video View Audiences (Awareness Layer)
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Building a Video View Custom Audience
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  A video view custom audience captures everyone who has watched a specified percentage of a video you&apos;ve run as an ad or posted organically. In Facebook Ads Manager, navigate to Audiences, create a new Custom Audience, select Video as the source, choose your video, and select a view threshold — 50%, 75%, or 95%. We recommend building separate audiences for each threshold so you can target the more engaged 75%+ viewers with different messaging than the 50%+ viewers.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The video itself can be anything that demonstrates your work: a 30 to 60 second job walkthrough, a before-and-after transformation, a customer testimonial. The production quality matters less than the authenticity. Real job footage from a smartphone consistently outperforms stock imagery or professionally produced brand videos for local service businesses. People evaluating a local contractor want to see real work. Show them real work.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Using View Depth for Qualification
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  View depth is a qualification signal. Someone who watches 25% of a video probably saw it autoplay in their feed and kept scrolling. Someone who watches 75% made a deliberate choice to watch something that required attention. Treat these two groups differently. The 25% viewers belong in a broad awareness retargeting bucket. The 75%+ viewers belong in a high-intent retargeting bucket with stronger conversion messaging. Segmenting by view depth typically cuts cost-per-lead in half compared to treating all video viewers as the same audience.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Audience 2 — Website Visitor Retargeting (Intent Layer)
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Pixel Setup and Event Tracking
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The Meta Pixel is a snippet of JavaScript placed on every page of your website. Once installed, it tracks every page visit and can be configured to track specific events — form submissions, phone number clicks, estimate page visits, thank-you page loads. If you don&apos;t have the pixel installed on your site, installing it is the single highest-priority action you can take before running any Facebook ads. A website with no pixel is generating traffic that produces zero audience data for future campaigns.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Standard event tracking should capture at minimum: PageView (all pages), ViewContent (service-specific pages), Lead (any form submission), and Contact (phone or email link clicks). These event types allow you to build segmented audiences based on what actions visitors took rather than just that they visited the site.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Segmenting Visitors by Page and Behavior
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Not all website visitors are equal. Build separate custom audiences for: all website visitors (last 30 days), estimate or contact page visitors who did not submit (highest intent, did not convert), service-specific page visitors (medium intent, researching), and thank-you page visitors (past leads or customers — exclude from conversion campaigns, include in upsell or referral campaigns). Each of these segments requires different ad messaging. Serving the same &ldquo;call for a free estimate&rdquo; ad to someone who just submitted an estimate request as to someone who visited your homepage once is a waste of budget and a poor user experience.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Audience 3 — Customer Lookalikes (Scaling Layer)
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Building the Source Audience
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  A lookalike audience requires a source — a custom audience that Facebook uses to identify characteristics of your best customers and find similar people. The source can be a customer email list, a list of converted leads, a website visitor audience filtered to people who submitted a form, or a video view audience of 95%+ viewers. The higher the quality and specificity of the source, the higher the quality of the resulting lookalike.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  For most local service businesses, the highest-quality source is a customer email list. Upload your customer database (minimum 100 records, ideally 500+) as a Custom Audience, then create a 1% Lookalike from that audience targeting your service area. Facebook identifies the common characteristics — age, income range, behavioral signals, content preferences — of your actual customers and finds similar people who haven&apos;t encountered your brand yet.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Lookalike Percentage and Scale Trade-offs
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Lookalike audiences are built in percentage increments from 1% to 10%, where 1% is the most similar to your source and 10% is the broadest match. For local service businesses, we always start at 1% — the tightest match, the smallest audience, the highest similarity to your actual customers. As you scale budget, you can expand to 2% or 3%. Going beyond 3% typically produces audiences that are too dissimilar from your customer profile to convert efficiently.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Connecting the Three Audiences Into a System
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Exclusion Lists That Keep Audiences Clean
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Exclusion lists prevent audience overlap and control where budget is spent. Your awareness campaigns targeting cold lookalike audiences should exclude current website visitors and video viewers (who should be in retargeting campaigns). Your retargeting campaigns should exclude past customers (who should be in a separate upsell or referral campaign). Your customer lookalike campaigns should exclude all existing customers. Without these exclusions, the same person appears in multiple campaigns simultaneously — you bid against your own campaigns for the same impression.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Refreshing and Maintaining Audience Quality
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-8">
                  Custom audiences are not set-and-forget. Video view audiences should be set to rolling 30 to 90 day windows so they capture recent engagement, not engagement from two years ago. Website visitor audiences should be refreshed to 30-day windows unless your conversion cycle is longer. Customer lookalike source audiences should be updated whenever you add a significant number of new customers — quarterly at minimum, monthly if you have high booking volume. An audience built from stale data produces stale results. Maintain these audiences as actively as you maintain any other business system.
                </p>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#D4A94A] font-semibold font-poppins hover:text-[#E8C478] transition-colors"
                  >
                    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Back to The Playbook
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">

                <div className="bg-[#162444] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">THE THREE AUDIENCES</p>
                  <div className="space-y-4">
                    <div className="border-b border-white/10 pb-4">
                      <p className="text-[#D4A94A] font-bold text-sm font-poppins mb-1">Audience 1</p>
                      <p className="text-white text-sm font-semibold font-poppins">Video View Custom Audience</p>
                      <p className="text-[#8A9BB5] text-xs font-poppins mt-1">50%+ and 75%+ view thresholds, segmented</p>
                    </div>
                    <div className="border-b border-white/10 pb-4">
                      <p className="text-[#D4A94A] font-bold text-sm font-poppins mb-1">Audience 2</p>
                      <p className="text-white text-sm font-semibold font-poppins">Website Visitor Retargeting</p>
                      <p className="text-[#8A9BB5] text-xs font-poppins mt-1">Pixel-based, segmented by page visited</p>
                    </div>
                    <div>
                      <p className="text-[#D4A94A] font-bold text-sm font-poppins mb-1">Audience 3</p>
                      <p className="text-white text-sm font-semibold font-poppins">Customer Lookalike</p>
                      <p className="text-[#8A9BB5] text-xs font-poppins mt-1">1% lookalike from customer email list</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#162444] rounded-xl border border-[#D4A94A]/20 p-6">
                  <p className="font-poppins font-bold text-white text-lg mb-3 leading-snug">
                    Running One Audience?
                  </p>
                  <p className="text-[#8A9BB5] text-sm font-poppins leading-relaxed mb-5">
                    We build and manage the full three-audience system — with proper pixel setup, audience segmentation, exclusion lists, and creative tailored to each layer.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Get the Full System
                  </Link>
                </div>

                <div className="bg-[#162444] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/facebook-ads-local-business-2026" className="block group">
                      <p className="text-white text-sm font-semibold font-poppins leading-snug group-hover:text-[#D4A94A] transition-colors">
                        Facebook Ads for Local Service Businesses: The Flywheel Method
                      </p>
                      <p className="text-[#8A9BB5] text-xs font-poppins mt-1">9 min read</p>
                    </Link>
                    <div className="border-t border-white/10 pt-4">
                      <Link href="/blog/what-is-zero-click-search" className="block group">
                        <p className="text-white text-sm font-semibold font-poppins leading-snug group-hover:text-[#D4A94A] transition-colors">
                          What Is Zero Click Search and Why Your Business Is Invisible
                        </p>
                        <p className="text-[#8A9BB5] text-xs font-poppins mt-1">8 min read</p>
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

      <section className="py-20 bg-[#0A1628] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">STOP GUESSING ON AUDIENCES</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            Your Customers Are Already on Facebook. Build the System to Find Them.
          </h2>
          <p className="text-[#8A9BB5] font-poppins mb-8 leading-relaxed">
            The three-audience system turns your pixel data, video engagement, and customer list into a compounding lead generation engine. Let&apos;s build it for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Start the Conversation
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
