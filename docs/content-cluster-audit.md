# Content Cluster Audit — Pillar Strategy ("Move 4: Own the Category")

Maps the 27 existing Playbook posts to 5 pillar questions, flags
cannibalization, identifies gaps, and lays out a phased plan.

> **TL;DR:** Don't build all 5 pillars at once. Run **one pillar (P4 — Entity
> Graph) end-to-end as a pilot**, prove the flywheel, then template it. The
> content *merges* (P2/P3/P5) are editorial decisions — park them until the
> pilot proves the approach.

---

## The 5 Pillars

| # | Pillar question | Priority | Why |
|---|-----------------|----------|-----|
| P4 | How do I build an entity graph for my business? | **1st (pilot)** | Coined term, strongest existing content, no merges needed |
| P1 | What is entity SEO for local businesses? | 2nd | Coined term, low competition |
| P3 | Difference between AEO and traditional SEO? | 3rd | Contested; needs a merge first |
| P2 | How do I get my business cited in ChatGPT? | 4th | Contested + content gap (ChatGPT) |
| P5 | Why isn't my business showing up in AI search? | 5th | Overloaded (10 posts), biggest cleanup |

---

## Pillar → cluster mapping

### P4 — "How do I build an entity graph?" (PILOT)
- **Canonical (define):** `what-is-an-entity-graph`
- **Canonical (how-to):** `schema-markup-complete-guide`
- Supporting: `the-ai-search-stack-nobody-is-building`, `below-the-content-layer`
- Status: ✅ Low cannibalization — "what" and "how" complement.

### P1 — "What is entity SEO for local businesses?"
- **Canonical:** `entity-first-search-local-businesses`
- Supporting: `compressed-search-entity-trust`, `below-the-content-layer`
- Gap: no post owns the exact term **"entity SEO"** — reframe canonical to claim it.

### P3 — "AEO vs traditional SEO?"
- **Canonical:** `is-geo-a-replacement-for-seo-or-an-addition`
- 🔴 **MERGE:** `aeo-geo-making-seo-better` → near-duplicate; fold in + 301.
- Supporting: `f1-framework-for-aeo`

### P2 — "How do I get cited in ChatGPT?"
- 🔴 **MERGE:** `ai-overviews-local-businesses` + `how-to-rank-in-google-ai-overviews-for-local-businesses` → essentially the same article; combine into one.
- ⚠️ **GAP:** both cover *Google AI Overviews*; neither targets **ChatGPT/Perplexity** (what the question asks). Broaden the canonical or write the ChatGPT piece.
- Supporting: `false-legacy-layer-ai-visibility`

### P5 — "Why isn't my business showing up in AI search?"
- **Canonical:** `why-is-my-website-traffic-dropping-2026`
- Concept support: `the-shortlist-problem`, `what-is-zero-click-search`, `google-ai-search-smb-entity-infrastructure`, `10-millisecond-advantage-wearable-era`, `2026-digital-land-rush-ai-visibility`
- 🔴 **CONSOLIDATE (platform sub-cluster):** `wordpress-losing-ai-search`, `vercel-vs-wordpress-performance`, `cold-load-vs-cached-ai-crawlers`, `why-website-burning-ai-tokens` → 4 posts arguing the same "platform/speed kills AI visibility." One canonical, rest support.
- ⚠️ Overloaded (10 posts). Split into two sub-themes: *pain-point* (why invisible) vs *technical cause* (platform/speed/crawl).

---

## Not pillars — bucket separately
- **Out of scope (paid social):** `custom-audiences-facebook`, `facebook-ads-local-business-2026`
- **Proof / case studies (link FROM pillars):** `how-we-indexed-49-pages-48-hours`, `inw-basecamp-arizona-launch`
- **Standalone / trend:** `automation-vs-digital-real-estate`, `video-authority-layer-ai-assets-2026`

---

## The 3 cannibalization fixes (editorial — needs sign-off on which wins)
1. **P2:** merge the two Google-AI-Overviews posts into one canonical; 301 the loser.
2. **P3:** merge `aeo-geo-making-seo-better` into `is-geo-a-replacement`.
3. **P5:** consolidate the 4 platform/speed posts into one canonical.

## The 2 content gaps to fill
1. A **ChatGPT/Perplexity-specific** citation pillar (P2).
2. A page that explicitly **owns the term "entity SEO"** (P1).

---

## Schema-linking plan (applies to every pillar)
Each pillar page should, in its existing `Article` schema:
- Add `about: { '@id': '.../#business' }` — ties the topic to the entity.
- Add `mentions` for the concept entities it covers (e.g. entity graph, AEO).
- Add `isPartOf` pointing to the `/blog` CollectionPage (already present on most posts).
- For coined terms, add a **`DefinedTerm`** node ("Entity Graph", "Entity SEO")
  in a `DefinedTermSet` — KodeCite defining its own vocabulary as structured
  data, which matches the product thesis.
- Keep `author → #founder`, `publisher → #business` (already wired).
Also: reference the pillar URLs from `public/llms.txt` so AI agents get a
curated path to the definitive resources.

---

## Phased plan
- **Phase 0 — Capture** (this doc). ✅
- **Phase 1 — Pilot P4 (Entity Graph):** reframe the 2 canonicals, add schema
  links + `DefinedTerm`, internal-link the cluster up, add to `llms.txt`.
- **Phase 2 — P1 (Entity SEO):** claim the term; same template as P4.
- **Phase 3 — Merges (P2, P3):** editorial consolidation + 301s.
- **Phase 4 — P5 platform consolidation.**
- **Phase 5 — Test & measure:** clean-session queries in ChatGPT/Perplexity/
  Google AI Mode; track the *leading* indicator (GPTBot/PerplexityBot/ClaudeBot
  crawler hits + indexation) before expecting citation appearances.

## Realistic expectations
- AI citation is a **lagging** indicator — weeks to months after publish.
- Results are **non-deterministic/personalized** — track trend, not single checks.
- The leading indicator is **crawler activity + indexation**, not appearances.
