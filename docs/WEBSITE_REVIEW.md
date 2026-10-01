# Kodecite website review

## Scope

The review branch is based on the verified Vercel production source, `main` at `b019b09d1aa79afe5f05d8794136bb0979ebbca9`, rather than the stale repository default branch. Production is not changed by this branch.

The central message is: make the business easy for the customer's AI assistant to understand, trust and do business with. The implementation connects the customer benefit to business identity, offers and fit, evidence, available capabilities, permission, a useful request and a confirmed result or human handoff.

## Coverage

All 39 app page routes, including all 26 articles, were reviewed and updated. The standalone `/ready` real-estate page and its original noindex policy were also preserved and updated. No article routes were removed or redirected. Existing redirects and indexability remain unchanged. The seven previously hidden articles remain reachable at their original URLs and in the sitemap; they remain outside the public Insights listing as before.

- `/`
- `/about`
- `/blog`
- `/blog/10-millisecond-advantage-wearable-era`
- `/blog/2026-digital-land-rush-ai-visibility`
- `/blog/aeo-geo-making-seo-better`
- `/blog/aeo-technical-seo-done-correctly`
- `/blog/automation-vs-digital-real-estate`
- `/blog/below-the-content-layer`
- `/blog/compressed-search-entity-trust`
- `/blog/custom-audiences-facebook`
- `/blog/entity-first-search-local-businesses`
- `/blog/f1-framework-for-aeo`
- `/blog/facebook-ads-local-business-2026`
- `/blog/false-legacy-layer-ai-visibility`
- `/blog/from-recommended-to-actionable-luxe-window-works`
- `/blog/google-ai-search-smb-entity-infrastructure`
- `/blog/google-reviews-wont-save-you-from-ai-search`
- `/blog/how-to-rank-in-google-ai-overviews-for-local-businesses`
- `/blog/how-we-indexed-49-pages-48-hours`
- `/blog/inw-basecamp-arizona-launch`
- `/blog/schema-markup-complete-guide`
- `/blog/the-ai-search-stack-nobody-is-building-for-small-businesses`
- `/blog/the-shortlist-problem`
- `/blog/video-authority-layer-ai-assets-2026`
- `/blog/what-is-an-entity-graph`
- `/blog/what-is-zero-click-search`
- `/blog/why-is-my-website-traffic-dropping-2026`
- `/blog/why-your-website-cant-talk-to-ai`
- `/case-studies`
- `/contact`
- `/faq`
- `/locations/coeur-dalene`
- `/locations/north-idaho`
- `/locations/spokane`
- `/machine-read`
- `/pricing`
- `/services`
- `/why-now`
- `/ready` (also served as `/ready/index.html`)

## Design and content

- New normally scrolling homepage with visible desktop navigation, accessible mobile navigation, explicit pricing, genuine business images and a clearly labeled interactive illustration
- Shared graphite, leaf-green and ivory system; calmer page backgrounds and panels; readable article layouts; keyboard focus, skip link and reduced-motion support
- Topic-specific article revisions preserve original publication dates and use October 1, 2026 modification dates, matched visible titles/metadata and source links
- Dated discovery screenshots and the recorded Luxe production request test are distinguished from present delivery verification and future results
- Foundation remains $4,995 one-time, client-owned site/accounts, no mandatory retainer; action connections are scoped separately; platform layer remains an application-only pilot
- The separate `/ready` page now points new enquiries to current pricing instead of repeating its conflicting legacy $3,000/$250 package; this does not modify existing client agreements
- Root metadata, social-image endpoint, discovery manifests and sitemap agree with the revised message

## Conversion fix

The readiness form previously promised an emailed review without collecting an email address. It now explicitly asks where to send the review and passes that address through the existing Resend integration as reply-to. The delivery provider, sender and recipient are unchanged. Shared client/server validation rejects malformed input, invalid reply addresses and unsupported website schemes. Provider failures do not display a success state. No live form submissions were made as part of this review.

## Framework maintenance

The old Next.js 14.2.3 line was affected by published security advisories. All 14.x versions were listed as affected in Vercel's May 2026 security release, so the branch uses the supported maintenance version 15.5.27, released September 30, 2026. React stays on the existing 18.x version. Three font families replace six without changing the required typography roles.

References:
- https://vercel.com/changelog/next-js-may-2026-security-release
- https://nextjs.org/blog

## Verification

- `npm run build`: passed from a clean generated cache, including all routes, lint and type validation
- `npm test`: six shared validation tests passed
- `npm run typecheck`: passed
- `git diff --check`: passed
- `node tests/smoke-site.mjs`: route, canonical, H1, JSON-LD, sitemap, linked-anchor, discovery-file and non-sending form-rejection checks; run against a local production server

Visual review and the Vercel preview are separate deployment checks. A successful provider submission, inbox delivery, review turnaround and live Luxe action were not retested. Production promotion and merging require the owner's review.
