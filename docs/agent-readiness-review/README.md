# Agent Readiness Review — Internal Operating Package

**Classification:** INTERNAL documentation only.  
**Audience:** Mark Abplanalp (Kodecite operator).  
**Public promise this package fulfills:** a free written Agent Readiness Review within two business days.  
**This package is not a public page.** Do not publish the methodology, templates, or calibration reports on kodecite.ai in this phase.

The production review request remains the existing human-facing form at `/machine-read`. This folder does not change that form, any production page, or any machine file.

---

## Purpose

Kodecite publicly offers a free Agent Readiness Review. This package is the repeatable, evidence-based operating system for delivering that review.

The job is not to invent a new audit every time a form arrives. The job is to inspect a service business, record public evidence, and produce a client-facing report that answers one question:

**What can AI reliably understand, verify, recommend, and safely do with this business today?**

The report must be valuable even if the business never hires Kodecite.

---

## Intended customer

Established **high-trust, high-value local and service businesses** — operators who already have a reputation, defined services, and real rules about what they will and will not do.

Typical fits (from production Services copy):

- Premium home services — window treatments, remodels, HVAC, roofing
- Realtors and real-estate teams
- Custom home builders and specialty trades
- Specialty dental, med spas, and other considered-purchase practices

This review is not a shortcut for a brand-new business with nothing to verify. It is also not a chatbot pitch, an SEO retainer, or a paid-media audit.

---

## Core question and governing model

Kodecite’s production model is five connected layers. The review uses the same terms, in the same order, as production Services / Pricing / `llms.txt`:

| Layer | Production meaning |
| --- | --- |
| **1. Truth** | What is true about the business: identity, people, services, products, locations and service areas, credentials, proof, policies, and limitations — as one authoritative record. |
| **2. Capability** | What can actually be requested, what information is required, where the business works, which services are available, and what success does — and does not — mean. |
| **3. Control** | What the business will not pretend: human confirmation, authorization, validation, rate limiting, idempotency, and fail-closed behavior. No false booking, pricing, purchase, or acceptance. |
| **4. Action** | The next authorized step: consultation, qualified inquiry, appointment request, or controlled handoff — only what the real business permits. |
| **5. Distribution** | How people, search, and agents find the same truth: website, search, structured data, external profiles, `llms.txt`, `agent.json`, capability discovery, protected APIs, and future MCP or browser agents. These are delivery surfaces, not the product category. |

**Website** = the human-facing experience.  
**Digital business layer** = the verified, machine-facing representation of the same business.

The review looks for where facts, services, geography, policies, permissions, capabilities, and actions **agree** — and where an AI would still have to guess.

Recommendation is only one stage. The larger goal is safe agent participation.

---

## What the review evaluates

Use [methodology.md](./methodology.md). At minimum:

- **Truth:** identity, services, geography, credentials, policies, corroboration, conflicts
- **Capability:** requestable intents, eligibility, human confirmation, success and non-success
- **Control:** validation, auth boundaries, handoff, duplicates, rate limits, fail-closed behavior, PII exposure, honest outcomes, false booking / pricing / checkout risks
- **Action:** human contact, forms, consultation, booking, pricing, checkout, APIs, MCP, browser-agent paths
- **Distribution:** website, search, canonicals / sitemap, structured data, external profiles, `llms.txt`, `agent.json`, capability discovery, protected APIs, browser-agent usability, human↔machine agreement

---

## What this review is not

Do **not** treat the review as any of the following:

- An SEO audit
- An AEO / GEO score
- A Lighthouse or Core Web Vitals report
- A promise that every AI system finds or cites the business
- An automated sales pitch
- A schema-existence-only judgment (“they have LocalBusiness markup, therefore they are agent-ready”)
- A claim that every business needs an autonomous action endpoint
- A claim that every AI system reads `llms.txt`, `agent.json`, schema, APIs, or MCP

Visibility can be evidence that infrastructure is clearer. It is not the product, and it is not a guaranteed outcome.

---

## Commercial offer boundary (must match production)

Map findings with [offer-mapping.md](./offer-mapping.md). Do not invent prices or include action work inside Foundation.

| Offer | Production boundary |
| --- | --- |
| **Foundation Build — $4,995** | Owned website, canonical business truth, entity graph, discovery, and capability mapping. **Does not automatically include a protected production action endpoint.** |
| **Agent Capability Build** | Separately scoped protected action after business rules are understood. One defined action at a time. **No published price.** |
| **Platform Capability Layer — Pilot** | For selected WordPress / Wix / Squarespace-like cases: a **Kodecite-built, business-owned** Next.js / Vercel sidecar on infrastructure and a domain the **client** controls. Application-only. Not universally proven. Not “Kodecite-owned.” A full Next.js rebuild remains the strongest path. |

Honest non-sale outcomes are first-class results: no engagement yet, clarification required, or existing infrastructure currently sufficient.

---

## How Mark uses this package

1. A prospect submits the existing Agent Readiness Review form on `/machine-read`.
2. Follow [operator-runbook.md](./operator-runbook.md) in order.
3. Record public evidence in a copy of [evidence-log-template.md](./evidence-log-template.md).
4. Score maturity **by layer** with [maturity-model.md](./maturity-model.md). Do not force one misleading overall score when layers differ.
5. Map the three highest-priority gaps with [offer-mapping.md](./offer-mapping.md), or state that no engagement is necessary.
6. Write the client-facing report from [report-template.md](./report-template.md).
7. Use [calibration/](./calibration/) only as internal examples of judgment. Do not send them as public case studies.

Target time once familiar: **about 60–90 minutes**. Never sacrifice evidence quality for speed. A slower honest review beats a fast invented one.

The public turnaround remains **within two business days**. The 60–90 minute figure is operator working time, not the customer SLA.

---

## Acceptable evidence

Record only what can be shown from **public** surfaces, plus facts the business itself submitted on the review form (business name, website, and any notes they chose to send).

Acceptable:

- Public website pages and visible copy
- Public machine files (`robots.txt`, sitemap, `llms.txt`, `agent.json`, JSON-LD that is already published)
- Public capability-discovery URLs
- Public profiles (Google Business, professional directories, published reviews)
- Public case studies and published contracts
- Safe **GET** responses that do not submit a form, create an appointment, or trigger a production write

Not acceptable:

- Inferred licenses, insurance, or credentials
- Assumed booking, pricing, or checkout just because a button looks like one
- Private form submissions, test emails, tokens, secrets, Redis IDs, or request payloads
- Claims that unpublished controls exist
- Production POST / PUT / PATCH / DELETE against a live action endpoint
- Re-running authorized tests on another business’s production system

---

## What must never be inferred

If it is not publicly observable or confirmed by the business, write **Not publicly observable** or **Requires business confirmation**. Do not upgrade that to “does not exist,” “broken,” or “ready.”

Never infer:

- That a contact form is a booking
- That a “Get a quote” label is live pricing
- That schema markup is read by every AI system
- That `llms.txt` or `agent.json` makes the business known with certainty
- That the absence of a file means the capability does not exist
- That more automation is always higher maturity
- That every high-trust service business should expose a protected action
- That Foundation Build includes a production action endpoint
- Personal data beyond what is needed to identify the submitted business

---

## Guardrails vocabulary

Use these labels consistently across the evidence log, internal notes, and (in plain English) the client report:

| Label | Meaning |
| --- | --- |
| **Missing** | A surface or fact that should be checkable for this business model was looked for and was not found. |
| **Contradictory** | Two or more public sources disagree. |
| **Not publicly observable** | No public evidence was found. This is **not** the same as “does not exist.” |
| **Not applicable** | The item does not fit this business model (example: checkout for a consult-only trade). |
| **Intentionally unavailable** | The business or a published contract states that the action or data is withheld on purpose. |
| **Requires business confirmation** | A human at the business must answer before the fact can be treated as true. |
| **Verified and operational** | Public evidence shows the fact or behavior, and it matches the human-facing story. |

---

## Package contents

| File | Role |
| --- | --- |
| [methodology.md](./methodology.md) | Evidence rules for every review item |
| [maturity-model.md](./maturity-model.md) | System stages by layer — no false numeric precision |
| [operator-runbook.md](./operator-runbook.md) | Step-by-step review workflow |
| [evidence-log-template.md](./evidence-log-template.md) | Internal evidence worksheet |
| [report-template.md](./report-template.md) | Client-facing report |
| [offer-mapping.md](./offer-mapping.md) | Honest next-step framework |
| [calibration/luxe-window-works.md](./calibration/luxe-window-works.md) | Internal calibration — Luxe |
| [calibration/kodecite-ai.md](./calibration/kodecite-ai.md) | Internal calibration — Kodecite |

---

## Safety and privacy rules

- Safe GET only. Never submit forms, create appointments, send emails, or perform production POST requests.
- Do not commit real prospect submissions, customer PII, tokens, secrets, Redis IDs, or private test payloads to this repo.
- Do not add analytics, prospect databases, production API routes, or email sending as part of this package.
- Do not change production website pages, components, machine files, or the `/machine-read` form to “operationalize” the review.

---

## Related production sources (do not edit for this package)

Canonical public language lives in `lib/positioning.ts`, `/services`, `/pricing`, `/machine-read`, `/faq`, `public/llms.txt`, and `public/agent.json`. If this folder and production copy ever disagree, **production wins** — update the internal docs, not the live site, unless Mark separately directs a public change.
