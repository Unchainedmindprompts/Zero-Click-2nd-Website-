# Repo and content forensics — Kodecite repositioning

Recorded before any positioning edits. This PR is a business-direction change, not a visual redesign.

## Verified production identity

| Fact | Value |
| --- | --- |
| Live site | https://www.kodecite.ai |
| GitHub repo | `Unchainedmindprompts/Zero-Click-2nd-Website-` |
| `package.json` name | `kodecite` |
| Vercel project | `zeroclick2` (`prj_NoUvgnmQZTh5WDUCuCUyIwrkVUT6`) |
| Vercel team | Mark Abplanalp's projects (`team_kSZJm7cOUlG3P0G2CaR284qW`) |
| Production domains | `kodecite.ai`, `www.kodecite.ai`, plus `kodecite.com`, `zeroclickstrategies.com`, and project aliases |
| Production branch | `main` |
| Production commit at start | `753cf6506d3ebe4528d0fcf79907cd2bba4cfd7e` (Merge PR #154) |
| Production deployment | `dpl_CxtTwuhNyQJMv9Xg7xhhX2X7hs7S` |
| Live homepage H1 | High-Performance Websites Built to Be Recommended by AI |

The workspace matches this repo, this Vercel project, and this production commit. Work proceeds here only.

## Current category (to replace)

Kodecite currently presents as an AEO / GEO / AI-visibility / citation practice.

Evidence:

- Homepage H1 and metadata: “High-Performance Websites Built to Be Recommended by AI”
- Footer: “Built once. Owned forever. Found by AI.”
- Services: F1 chassis / engine / aero / graphics; WordPress/Wix/Squarespace treated as unhelpable
- Pricing: $4,995 Foundation Build + 60-day citation money-back guarantee
- FAQ: AEO-first questions; “knowing with certainty”; compounding-citation claims
- About: CVT (Clarity / Verification / Trust); “Schema is product, not metadata”
- Insights: AEO/GEO as primary taxonomy; featured land-rush / F1 / paid-media posts
- `llms.txt`, `agent.json`, Organization schema: AEO/GEO service types and CVT framework

## Route inventory

### Core pages

| Path | Current role | Action in this PR |
| --- | --- | --- |
| `/` | 5-slide cinematic homepage | Rebuild narrative; keep slider chrome and images |
| `/faq` | Start Here / AEO FAQ | Rewrite around usable-by-AI infrastructure |
| `/services` | Foundation Build + F1 layers | Five-layer model + three offer paths |
| `/pricing` | $4,995 + 60-day citation guarantee | Redefine Foundation; add scoped offers; remove guarantee |
| `/about` | CVT / AI-readable websites | Operator history + truth-before-technology |
| `/machine-read` | Free Machine Read form | Keep URL; rename offer to Agent Readiness Review |
| `/contact` | Direct inquiry (already distinct) | Keep as direct-contact page; update copy |
| `/blog` | Insights / Playbook | New intro + taxonomy |
| `/case-studies` | Luxe indexing + INW/Facebook | Add flagship Luxe agent case; demote INW |
| `/why-now` | Fear / land-grab urgency | Qualify scarcity language; keep URL |
| `/locations/*` | AEO service-area landings | Keep URLs; remove geo-limited offer framing |

### Insights (audit before index change)

| Slug | Current category | Featured | Disposition |
| --- | --- | --- | --- |
| `what-is-an-entity-graph` | FOUNDATIONS | no | Keep + update conclusion/CTA |
| `why-your-website-cant-talk-to-ai` | TECHNICAL | yes | Keep + update conclusion/CTA |
| `below-the-content-layer` | FOUNDATIONS | no | Keep + update conclusion/CTA |
| `the-ai-search-stack-nobody-is-building-for-small-businesses` | FOUNDATIONS | no | Keep + update conclusion/CTA |
| `compressed-search-entity-trust` | STRATEGY | yes | Keep + update conclusion/CTA |
| `the-shortlist-problem` | STRATEGY | no | Keep + update conclusion/CTA |
| `schema-markup-complete-guide` | TECHNICAL | no | Keep + update conclusion/CTA |
| `video-authority-layer-ai-assets-2026` | STRATEGY | no | Keep + update conclusion/CTA |
| `entity-first-search-local-businesses` | FOUNDATIONS | yes | Rewrite / reframe |
| `aeo-technical-seo-done-correctly` | TECHNICAL | yes | Rewrite / reframe |
| `aeo-geo-making-seo-better` | STRATEGY | no | Rewrite / reframe |
| `google-reviews-wont-save-you-from-ai-search` | STRATEGY | yes | Rewrite / reframe |
| `google-ai-search-smb-entity-infrastructure` | STRATEGY | yes | Rewrite / reframe |
| `automation-vs-digital-real-estate` | STRATEGY | no | Rewrite / reframe |
| `10-millisecond-advantage-wearable-era` | STRATEGY | no | Rewrite / reframe |
| `how-we-indexed-49-pages-48-hours` | CASE STUDY | no | Rewrite / reframe as earlier Luxe chapter |
| `how-to-rank-in-google-ai-overviews-for-local-businesses` | STRATEGY | no | Retain as secondary discovery |
| `what-is-zero-click-search` | FOUNDATIONS | no | Retain as secondary discovery |
| `2026-digital-land-rush-ai-visibility` | STRATEGY | yes | Retire from featured / related (URL stays) |
| `false-legacy-layer-ai-visibility` | STRATEGY | no | Retire from featured / related (URL stays) |
| `f1-framework-for-aeo` | FRAMEWORK | yes | Retire from featured / related (URL stays) |
| `why-is-my-website-traffic-dropping-2026` | DIAGNOSTIC | no | Retire from featured / related (URL stays) |
| `inw-basecamp-arizona-launch` | CASE STUDY | no | Retire from featured / related (URL stays) |
| `facebook-ads-local-business-2026` | PAID MEDIA | no | Retire from featured / related / taxonomy (URL stays) |
| `custom-audiences-facebook` | PAID MEDIA | no | Retire from featured / related / taxonomy (URL stays) |

New flagship URL (this PR): `/blog/from-recommended-to-actionable-luxe-window-works`

No mass redirects. No 410 / noindex of retired articles in this PR. No traffic/backlink evidence was available to justify destructive URL changes.

## Machine-readable files

| File | Current state | Action |
| --- | --- | --- |
| `public/llms.txt` | CVT + AEO services + geo landings | Reposition; keep identity |
| `public/llms-full.txt` | Longer CVT / AEO reference | Reposition |
| `public/agent.json` | Identity/discovery + service list; no action endpoint | Keep discovery-only; say so honestly |
| `public/agents.json` | Duplicate of `agent.json` | Same treatment |
| Layout `#business` / `#founder` / `#website` / `#glossary` | Stable `@id`s | Keep `@id`s; update descriptions |
| `lib/schema.ts` | Stable entity IDs | Do not change `@id`s |

Kodecite does **not** publish an autonomous agent submission endpoint in this repo. Do not invent one.

## Luxe production proof (verified before copy)

Live capability contract fetched from:

`https://www.luxewindowworks.com/api/capabilities/request-in-home-consultation`

Verified public fields:

- `id`: `request-in-home-consultation`
- `contractVersion`: `1.0`
- `readiness`: `request-submission-ready`
- `submissionEnabled`: `true`
- `requiresHumanFollowUp`: `true`
- `directBookingAvailable`: `false`
- `pricingAvailable`: `false`
- `checkoutAvailable`: `false`
- `successMeans`: request delivered for human follow-up — not an appointment

Authorized production-test outcomes (operator-provided; do not expose personal fields, emails, phones, secrets, Redis keys, or full request IDs):

- One valid request → HTTP 200 accepted / `in_service_area`; email reached Luxe inbox
- Identical duplicate → original outcome; no second email
- Same key + changed payload → HTTP 409 `idempotency_conflict`

Visibility screenshots already on site (ChatGPT / Google AI Mode / Bing Copilot / Gemini) are **Discovery Proof**, not the production action proof.

## Visual system to preserve

- Homepage cinematic slider / no-scroll experience (`CinematicHomeSlider`, slide images)
- Typography, color, glass panels, nav overlay, shell CTA placement
- Proof screenshots and lightbox
- Working `/api/machine-read` and `/api/contact` forms (do not send live tests)
- Analytics, accessibility, canonical URLs, stable schema `@id`s

## Unsupported-claim surface (pre-edit)

High-severity claims found in current production copy:

- 60-day citation money-back guarantee (`/pricing`, `/services`)
- Schema / structured data makes AI “know with certainty” (`/faq`)
- WordPress / Wix / Squarespace pages appear blank to AI crawlers (`/services`)
- “Cited by name” / “AI loves to quote” / guaranteed citation framing
- “Built once. Owned forever.” implying no maintenance for active systems
- Unverifiable percentages: 9/10 sites, 20–50% traffic declines, 80–95% automation failure, half-the-time citation, <1% llms.txt adoption
- AEO/GEO as the product category across metadata, schema, nav, and machine files
- “We don’t build on platforms that can’t do this properly”
- Consultation request implied as the booking-adjacent outcome in older Luxe case copy

These are the claims this PR must remove, qualify, or support with verified evidence only.
