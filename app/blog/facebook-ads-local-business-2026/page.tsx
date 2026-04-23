import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Facebook Ads for Local Service Businesses in 2026: The Flywheel Method',
  description:
    'Stop running ads that drain budget. Build a Facebook ad system that compounds — pixel data feeding audiences, retargeting warming leads, and lookalikes scaling what works. The Flywheel Method explained.',
  openGraph: {
    title: 'Facebook Ads for Local Service Businesses in 2026: The Flywheel Method',
    description:
      'The compounding Facebook ad system that local service businesses use to lower cost-per-lead over time instead of staying constant.',
    url: 'https://www.kodecite.ai/blog/facebook-ads-local-business-2026',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Facebook Ads for Local Service Businesses in 2026: The Flywheel Method',
  description:
    'Stop running ads that drain budget. Build a Facebook ad system that compounds — pixel data feeding audiences, retargeting warming leads, and lookalikes scaling what works.',
  datePublished: '2026-02-12T00:00:00+00:00',
  dateModified: '2026-02-12T00:00:00+00:00',
  wordCount: 950,
  keywords: 'Facebook ads local business, Meta ads, custom audiences, retargeting, lookalike audiences, local service marketing, flywheel method, pixel data',
  author: { '@id': 'https://www.kodecite.ai/#founder' },
  publisher: { '@id': 'https://www.kodecite.ai/#organization' },
  url: 'https://kodecite.ai/blog/facebook-ads-local-business-2026',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kodecite.ai/blog/facebook-ads-local-business-2026',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://kodecite.ai/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Facebook Ads: The Flywheel Method',
      item: 'https://kodecite.ai/blog/facebook-ads-local-business-2026',
    },
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much should a local service business spend on Facebook ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The right budget depends on your service area and average job value, but most local service businesses see diminishing returns below $1,500 per month. The Flywheel Method requires at minimum three campaign layers running simultaneously, and underfunding any layer collapses the system. A $2,500 to $4,000 monthly budget allows meaningful testing across all three layers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take for Facebook ads to work for a local business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The awareness layer needs approximately 4 to 6 weeks to accumulate sufficient pixel data for meaningful retargeting audiences. Expect the first 30 days to be primarily data-gathering, with conversion efficiency improving significantly in weeks 5 through 12 as retargeting and lookalike audiences mature. Businesses that stop ads before the 6-week mark miss the point where the system becomes efficient.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of ad creative works best for local service businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Video consistently outperforms static images for awareness-layer campaigns because it enables view-based audience segmentation. For retargeting and conversion campaigns, before-and-after imagery and direct offers such as free estimates or same-day booking with clear CTAs consistently outperform brand-focused creative. Real job photos outperform stock imagery for trust and click-through rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Facebook ads work for high-ticket local services like window treatments or HVAC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but the strategy differs from lower-ticket services. High-ticket services require longer nurture sequences and should use lead generation forms rather than direct booking CTAs. The Flywheel Method is particularly effective for high-ticket services because it builds multiple touchpoints before asking for commitment — reducing resistance at the conversion stage significantly.',
      },
    },
  ],
};

export default function FacebookAdsLocalBusiness() {
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
      <section className="pt-36 pb-16 bg-[#f8f5f0] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm font-poppins text-[#6a5a48] mb-8">
            <Link href="/" className="hover:text-[#a0723a] transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-[#a0723a] transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0a0806] truncate">Facebook Ads: The Flywheel</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">Facebook Ads</span>
            <span className="text-[#6a5a48] text-sm font-poppins">9 min read</span>
          </div>

          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#0a0806] mb-6 leading-tight">
            Facebook Ads for Local Service Businesses:{' '}
            <span className="text-[#a0723a]">The Flywheel Method</span>
          </h1>

          <p className="text-[#6a5a48] text-xl font-poppins leading-relaxed max-w-3xl">
            Most local businesses run ads that drain budget and produce inconsistent results. The Flywheel Method is how you build a system that compounds — where each campaign layer feeds the next, and cost-per-lead decreases over time.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[rgba(100,70,30,0.2)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-poppins">ZC</span>
              </div>
              <div>
                <p className="text-[#0a0806] text-sm font-semibold font-poppins">KodeCite.ai</p>
                <p className="text-[#6a5a48] text-xs font-poppins">February 12, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Article + Sidebar */}
      <section className="py-16 bg-[#f8f5f0] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <article className="lg:col-span-2">
              <div className="prose-content font-poppins">

                <p className="text-[#6a5a48] text-lg leading-relaxed mb-8">
                  Most local service businesses run Facebook ads the wrong way. They pick an audience, set a budget, write an ad, and wait. When it doesn&apos;t work, they change the creative and try again. When that doesn&apos;t work, they conclude that Facebook ads don&apos;t work for their business. The problem isn&apos;t Facebook. It&apos;s the absence of a system. The Flywheel Method is how we build ad campaigns that compound — where each element feeds the next, and the cost to acquire a customer decreases over time.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Why Spray-and-Pray Facebook Ads Fail
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  The Single Audience Problem
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Most local businesses run all their budget into a single broad audience — a geographic radius around their service area, layered with some demographic filters and interest targeting they set up once and never revisited. This audience contains people at every stage of the buying journey simultaneously: some have never heard of your business, some have visited your website, some have watched your videos, some are past customers. The same ad is shown to all of them, which means it&apos;s optimized for none of them.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  A first-time exposure ad that introduces your brand is the wrong message for someone who visited your estimate request page yesterday. A retargeting ad with an offer is the wrong message for someone who has never interacted with your brand before. When you treat every person in your geographic area as the same audience, you waste budget on the wrong messages for most of them.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Why Cold Audiences Are Your Worst Performers
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Cold interest-based audiences — people who match demographic and interest criteria but have had no prior contact with your business — have the highest cost per lead of any audience type. They don&apos;t know you, they have no reason to trust you yet, and they&apos;re seeing your ad for the first time. Asking a cold audience to book an estimate or call for a quote is asking for a significant commitment from someone who has zero relationship with your business.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Businesses that run all their ad budget at cold audiences are perpetually in acquisition mode — spending the same amount to reach new people every month with no compounding return. The alternative is building audiences from your own data: people who already know you exist, have demonstrated some interest, and are significantly more likely to convert at a fraction of the cost.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Flywheel Framework Explained
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  The Three Layers Every Campaign Needs
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The Flywheel Method organizes your Facebook ad campaigns into three layers that correspond to the three stages of the customer journey. Layer one is awareness — reaching cold audiences who match the profile of your ideal customer, with creative designed to build brand recognition and generate engagement signals, not direct conversions. Layer two is intent — retargeting warm audiences who have already engaged with your content or visited your website, with messaging that acknowledges their familiarity and moves them toward booking. Layer three is scaling — using lookalike audiences built from your best customers to find new cold prospects who most closely resemble the people who have already hired you.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  How Each Layer Feeds the Next
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The system compounds because each layer generates the inputs for the next. Your awareness campaigns generate video views and website visits — the raw data that feeds your retargeting audiences. Your retargeting campaigns convert warm leads and add them to your customer list — the source data for your lookalike audiences. Your lookalike campaigns find new cold prospects who closely resemble your best customers, who then enter the awareness layer and begin the cycle again. The longer the system runs, the better each audience becomes and the lower the cost per conversion falls.
                </p>

                {/* Flywheel visual */}
                <div className="bg-[#f2ede4] rounded-xl border border-white/5 p-6 my-8">
                  <p className="eyebrow mb-5 text-xs">THE FLYWHEEL LAYERS</p>
                  <div className="space-y-3">
                    {[
                      { layer: 'Layer 1', name: 'Awareness', desc: 'Cold interest audiences — brand introduction, video views, pixel data accumulation', color: 'text-[#6a5a48]' },
                      { layer: 'Layer 2', name: 'Intent', desc: 'Warm retargeting — video viewers, website visitors, estimate page traffic', color: 'text-[#0a0806]' },
                      { layer: 'Layer 3', name: 'Scale', desc: 'Lookalike audiences from customer list — most efficient cold targeting', color: 'text-[#a0723a]' },
                    ].map((item) => (
                      <div key={item.layer} className="flex items-start gap-4 p-4 bg-[#f8f5f0] rounded-lg border border-white/5">
                        <div className="flex-shrink-0">
                          <p className="text-[#a0723a] text-xs font-bold font-poppins">{item.layer}</p>
                          <p className={`${item.color} text-sm font-semibold font-poppins`}>{item.name}</p>
                        </div>
                        <p className="text-[#6a5a48] text-xs font-poppins leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Layer 1 — Awareness: Reaching Cold Audiences Profitably
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Interest and Behavior Targeting for Local Services
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  For awareness campaigns targeting cold audiences, interest and behavior-based targeting is your starting point. For a local service business, this means targeting homeowners in your service area who match behavioral signals associated with home improvement spending — recent home purchases, home improvement interest categories, household income brackets that correlate with willingness to spend on professional services. The goal of this audience isn&apos;t to convert immediately. It&apos;s to generate the signal data — video views, profile visits, website clicks — that will fuel your more efficient retargeting campaigns.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  The Video View Strategy That Builds Pixel Data
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The most effective awareness creative for local service businesses is a 30 to 60 second video showing your work — real job footage, before-and-after transitions, a brief customer testimonial. The video doesn&apos;t need production polish. Authenticity outperforms slick production in local service categories consistently. The point of this video isn&apos;t to convert viewers. It&apos;s to identify people who watch 50% or more of the video — a strong signal of genuine interest that can be captured as a custom audience and retargeted in layer two.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Layer 2 — Intent: Retargeting Warm Visitors
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Setting Up Video View Retargeting
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Video view custom audiences capture everyone who watched 50%, 75%, or 95% of your awareness video. These are people who have seen your brand, spent meaningful time engaging with your content, and demonstrated genuine interest. They are dramatically warmer than any cold interest audience. A retargeting campaign to 50%+ video viewers typically produces cost-per-lead 40 to 70% lower than cold audience campaigns — because you&apos;re talking to people who already know you exist.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Website Visitor Retargeting with Urgency Messaging
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Website visitor retargeting — powered by the Facebook pixel — captures everyone who has visited your site. Segment this audience by page visited: people who viewed your estimate request page but didn&apos;t submit are your highest-intent segment and should receive direct conversion messaging with a clear offer. People who visited service pages without reaching the estimate page are mid-funnel and should receive social proof ads — reviews, job photos, and a soft CTA. Treat each segment differently. The same ad for all website visitors is only marginally better than no retargeting at all.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Layer 3 — Conversion: Lookalike Audiences That Scale
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Building Lookalikes from Your Best Customers
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Once you have 100 or more customers in your CRM, you have the source data to build a lookalike audience. Upload your customer email list to Facebook&apos;s Custom Audiences tool, create a 1% lookalike targeting the most similar people in your geographic area, and run your awareness creative to this audience. Because lookalikes are algorithmically matched to your actual customer profile — not to broad interest categories — they convert at rates comparable to warm retargeting audiences, even on first exposure.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  How to Feed the Flywheel Over Time
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  The flywheel compounds because the inputs improve continuously. More video views means richer retargeting audiences. More conversions means a larger and more representative customer list. A larger customer list means a more accurate lookalike audience. A more accurate lookalike means lower cost-per-click in the awareness layer. Lower cost-per-click means more video views for the same budget. Every component feeds every other component, and the system becomes more efficient every month it runs. This is why businesses that run the flywheel for 90 days see fundamentally different economics than businesses that keep restarting campaigns from scratch.
                </p>

                <div className="mt-12 pt-8 border-t border-[rgba(100,70,30,0.2)]">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#a0723a] font-semibold font-poppins hover:text-[#E8C478] transition-colors"
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

                <div className="bg-[#f2ede4] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">FLYWHEEL BENCHMARKS</p>
                  <div className="space-y-4">
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">6wk</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">to meaningful retargeting data</p>
                    </div>
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">60%</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">lower CPL: retargeting vs cold</p>
                    </div>
                    <div>
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">1%</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">lookalike starting point</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.2)] p-6">
                  <p className="font-poppins font-bold text-[#0a0806] text-lg mb-3 leading-snug">
                    Build the Flywheel for Your Business
                  </p>
                  <p className="text-[#6a5a48] text-sm font-poppins leading-relaxed mb-5">
                    We set up the full three-layer system — awareness, retargeting, and lookalike — with proper pixel tracking, audience segmentation, and creative tailored to each stage.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Start the Conversation
                  </Link>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/custom-audiences-facebook" className="block group">
                      <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                        The Three Custom Audiences Every Local Business Needs on Facebook
                      </p>
                      <p className="text-[#6a5a48] text-xs font-poppins mt-1">6 min read</p>
                    </Link>
                    <div className="border-t border-[rgba(100,70,30,0.2)] pt-4">
                      <Link href="/blog/what-is-zero-click-search" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                          What Is Zero Click Search and Why Your Business Is Invisible
                        </p>
                        <p className="text-[#6a5a48] text-xs font-poppins mt-1">8 min read</p>
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

      <section className="py-20 bg-[#f8f5f0] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">STOP WASTING AD BUDGET</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#0a0806] mb-4">
            Build a Facebook System That Gets More Efficient Every Month
          </h2>
          <p className="text-[#6a5a48] font-poppins mb-8 leading-relaxed">
            One campaign layer isn&apos;t a strategy. The Flywheel is. Let&apos;s build the three-layer system for your business and start compounding your ad results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Get a Campaign Audit
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
