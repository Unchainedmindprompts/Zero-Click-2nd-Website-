# Calibration review — Luxe Window Works

**Classification:** INTERNAL calibration example. Not a new public case study.  
**Reviewed as if:** an Agent Readiness Review of a submitted high-trust service business.  
**Surfaces used:** public Luxe website, public capability discovery URL, published Kodecite case study.  
**Observation window:** 23 August 2026 (public GET / published pages).  
**Safety:** No form was submitted. No consultation request was created. No production POST was sent. No private test payloads, request IDs, emails, or storage internals are recorded here.

Public sources:

- https://www.luxewindowworks.com/
- https://www.luxewindowworks.com/areas
- https://www.luxewindowworks.com/llms.txt
- https://www.luxewindowworks.com/api/capabilities/request-in-home-consultation
- https://www.kodecite.ai/blog/from-recommended-to-actionable-luxe-window-works

---

## Required recognition (do not drift)

A correctly run review **must** conclude all of the following:

| Judgment | Verdict |
| --- | --- |
| Business truth | **Strong** |
| Services | **Explicit** |
| Geography | **Explicit** (with a documented eligibility note — see Truth) |
| Public consultation capability | **Yes** — published machine-readable contract |
| Readiness | **request-submission-ready** |
| Human follow-up | **Required** |
| Protected production action | **Yes — one defined in-home consultation request** |
| Booking / pricing / checkout | **Unavailable** (published as false / unpublished) |
| Maturity for that action | **Controlled production** (that action only) |

If a review using this package calls Luxe “not actionable,” “schema-only,” or “needs checkout to mature,” the package was misapplied.

---

## Business reviewed

Luxe Window Works — custom window treatments; human-facing site presents a North Idaho / Inland Northwest consult-and-install practice.

## Website

https://www.luxewindowworks.com/

## Review date

23 August 2026

---

## Executive summary (internal)

Luxe is the calibration for a business whose **website** and **digital business layer** largely agree: identity, products, and service towns are stated in human copy, repeated in `llms.txt`, and bounded in a public capability contract.

An outside agent that reads the public contract can know what may be requested (an in-home consultation), what information is required, how geography is decided, and that success is **delivery for human follow-up** — not a booked visit, a price, or project acceptance.

Booking, pricing, and checkout are **Intentionally unavailable**. That is control, not a missing ecommerce feature.

Controlled production applies to **one defined consult request**. It does not apply to every possible action, and it does not prove every AI system will find or use the contract.

---

## Current maturity by layer

| Layer | Stage | Plain English |
| --- | --- | --- |
| Truth | **Recommendable** | Who they are, what they install, and the core towns are stated clearly enough to recommend without inventing a product line. |
| Capability | **Controlled production** (consult request) | A public contract defines intents, required fields, eligibility, success, and non-success for one action. |
| Control | **Controlled production** (consult request) | Human follow-up, agent-vs-human distinction, idempotency, rate-limit *existence*, and fail-closed statuses are published. Thresholds and internals are correctly unpublished. |
| Action | **Controlled production** (consult request) | A protected production action exists for that consult. Human `/contact` and `/book` paths also exist. Booking / pricing / checkout stay false. |
| Distribution | **Recommendable** | Site, `llms.txt`, area pages, and the capability URL publish the same business. Not every agent is claimed to read those files. |

**Do not** assign one overall score. The correct synthesis: **Controlled production for one defined consultation request; not a general-purpose autonomous business.**

---

## Truth

### Identity

**Verified and operational.** The site and `llms.txt` present Luxe Window Works as a custom window-treatment business based in Post Falls, Idaho, with a named public operator (Mark Abplanalp) and a long-running trade practice described in public copy (consulting / installing window treatments).

### Services

**Verified and operational / Explicit.** Human pages and `llms.txt` list distinct product/service lines (blinds, cellular shades, solar shades, exterior solar shades, roller, banded, roman, shutters, motorization, plus related consult-and-install positioning). The capability contract enumerates supported product categories and allowed intents. This is the opposite of “we do everything.”

### Geography

**Verified and operational / Explicit**, with one **documented** machine-vs-page nuance:

- Human site and area pages emphasize five canonical communities: Coeur d’Alene, Post Falls, Hayden, Rathdrum, Sandpoint, plus surrounding North Idaho / Kootenai County language.
- The public capability contract states that **canonical website service-area pages stay the original five** (`websiteCanonicalMarketsUnchanged`) and also publishes a more precise eligibility policy (approved markets, nearby postal patterns, distant rejection). Additional eligible markets appear in that contract (including greater Spokane-area cities) as **policy**, not as a silent rewrite of the five area pages.

Calibration judgment: this is **modeled geography**, not “no geography.” A review should note the nuance so an agent does not treat the five HTML area pages as the entire eligibility list. It is **not** a reason to call Truth fragmented.

### Credentials / proof / policies

**Verified and operational** as published marketing and policy claims (lifetime installation guarantee, free in-home consultation, years-in-trade claims, public review excerpts). This calibration does **not** independently re-verify licenses or manufacturer agreements. Unchecked credential depth is **Requires business confirmation** if a live review needed a license fact — it is not required to reach the judgments in the table above.

### Corroboration

Public site points at Google reviews; Kodecite’s published Luxe case study is additional public narrative. Corroboration is **sufficient for calibration**, not a review-score of ratings.

### Conflicts

No material conflict that would make an agent invent a different company. The geography nuance above is a **documented expansion rule**, not a NAP collision.

---

## Capability

Public contract (GET): `https://www.luxewindowworks.com/api/capabilities/request-in-home-consultation`

| Item | Guardrail | Observation |
| --- | --- | --- |
| Requestable intents | **Verified and operational** | Named `allowedIntents` (new treatments, motorization, commercial, price-only, existing-customer, speak-to-human, etc.). |
| Required information | **Verified and operational** | Published required / optional / never-required fields. Values were not collected. |
| Eligibility | **Verified and operational** | Geography and category / intent policies published. |
| Human confirmation | **Verified and operational** | `requiresHumanFollowUp: true`. |
| Success | **Verified and operational** | Success means request delivered for human follow-up — not an appointment. |
| Non-success | **Verified and operational** | Booking, pricing, checkout flags false; reject / handoff reason codes published. |
| Readiness | **Verified and operational** | `readiness`: **request-submission-ready**; `submissionEnabled`: true; `readinessBlockers`: empty. |

---

## Control

All of the following are **public contract or already-published case-study facts**. This file does **not** add a new production test.

| Item | Guardrail | Observation |
| --- | --- | --- |
| Validation | **Verified and operational** (as published) | Incomplete / out-of-area / unsupported reasons exist on the contract. |
| Auth boundary | **Verified and operational** | Agent-intended requests are distinguished from human forms; User-Agent is ignored (per contract). |
| Handoff | **Verified and operational** | Human follow-up required; humans can still use `/contact` or `/book`. |
| Duplicates | **Verified and operational** (published behavior) | Contract requires an idempotency key; published case study describes identical replay vs conflicting payload. **Do not re-test.** Do not record keys or IDs. |
| Rate limits | **Verified and operational** (existence only) | Agent-intended requests are rate limited; **thresholds are not published** — correctly. |
| Fail-closed | **Verified and operational** | Reject / handoff statuses; do-not-retry-when not ready / rate limited / infrastructure unavailable. |
| PII | **Verified and operational** (field names only) | Required personal fields are named. Never-required includes budget and payment. No values stored in this file. |
| Honest outcomes | **Verified and operational** | Contract and case study: success is not booking, price, purchase, or acceptance. |
| False booking / price / checkout | **Intentionally unavailable** | `directBookingAvailable`, `pricingAvailable`, `checkoutAvailable` are false. |

Published case study (already public — cited, not reproduced as a new test): one authorized valid request was described as accepted for in-area work with inbox delivery; an identical duplicate was described as returning the original outcome without a second email; a same-key changed payload was described as an idempotency conflict. **Personal fields, secrets, storage keys, and full request IDs stay out of that article and out of this file.**

---

## Action

| Path | Guardrail | Stage note |
| --- | --- | --- |
| Human contact | **Verified and operational** | Public phone / contact / book paths exist. Details not copied here. |
| Human forms | **Verified and operational** (observed, not submitted) | `/contact` and `/book` are published human paths. |
| Consultation | **Verified and operational** | Human consult **and** protected machine consult request. |
| Booking | **Intentionally unavailable** | Not a maturity defect. |
| Pricing | **Intentionally unavailable** | Price-only is an *intent* that does not become a machine quote. |
| Checkout | **Intentionally unavailable** | |
| Protected API | **Verified and operational** | One defined production action. |
| MCP | **Not publicly observable** | Not required for this calibration. |
| Browser-agent | **Not a substitute for the contract** | Driving `/contact` is not the same as the protected agent action. Do not complete the form. |

---

## Distribution

| Surface | Guardrail |
| --- | --- |
| Human website | **Verified and operational** |
| `llms.txt` | **Verified and operational** as a discovery file that agrees on identity, products, and core towns. **Not** proof every model reads it. |
| Capability discovery URL | **Verified and operational** |
| Structured data / search / profiles | Not fully re-audited for this calibration. Sufficient public agreement exists to remain **Recommendable**. Absence of a complete schema crawl here is **not** a reason to deny Controlled production of the consult action. |
| Human↔machine agreement | **Strong** on identity, services, consult-not-booking. Geography uses an **explicit** contract policy beyond the five HTML area pages. |

Do not claim every AI system reads `llms.txt`, schema, or the capability URL.

---

## What AI can understand / verify / still invent

- **Understand:** A window-treatment consult-and-install business in the published North Idaho core markets, with named product categories.
- **Verify:** The same story on the site, `llms.txt`, and the capability contract; additional narrative on the public Kodecite case study.
- **May still invent:** That a successful request is a reserved appointment; that prices or checkout exist; that every city in the Inland Northwest is automatically in-area without reading the contract; that every AI product has already cited Luxe. Discovery screenshots mentioned in public Kodecite materials are **visibility evidence**, not this review’s product and not re-verified here.

---

## What a customer or agent can accomplish today

- A person can request a free in-home consultation through human pages.
- An outside agent can **discover** the consult capability at the public URL and, if authorized by Luxe’s contract, submit that **one** request type. This calibration **did not submit**.
- A human still has to follow up.
- Nobody should be told a visit is booked, priced, or purchased by the machine path.

## What still requires a human

Scheduling the visit, product recommendation, quoting, commercial review, warranty / existing-customer handling, and any intent the contract routes to a person.

---

## Three highest-priority improvements (calibration, not a pitch)

Luxe is the “already working” calibration. Honest gaps are residual, not Foundation-shaped:

1. Keep human area pages and the contract eligibility policy **easy to narrate together** so agents do not over-narrow to five towns or over-widen to “all of the Northwest.”
2. Do not let marketing “Book” language outrun the contract’s “not an appointment” rule on any future page.
3. Do not treat additional actions (pricing, checkout, generic MCP) as the next maturity step unless the business actually permits them.

## Recommended next step

**Existing infrastructure is currently sufficient** for the defined consult action.

Do **not** map Luxe to Foundation Build in order to “add an endpoint.” The endpoint already exists.  
Do **not** map Luxe to Agent Capability Build merely because agents exist. A *new* action would be a new scope.  
Do **not** use Luxe as proof that every Kodecite client automatically receives the same endpoint (published case study already states that).

---

## Offer-mapping check

| Offer | Correct calibration use |
| --- | --- |
| Foundation Build $4,995 | **Not** the live need for this already-built truth + discovery + one action. Sequence is transferable; the SKU is not implied. |
| Agent Capability Build | Only if Luxe wanted a **different** defined action. Not because the consult path is missing. |
| Platform sidecar pilot | **Not applicable** — this is not a “stuck on Wix” example. |
| No engagement / sufficient | **Correct** for the consult action as published. |

---

## Privacy confirmation

This file contains no prospect PII, no test emails, no tokens, no Redis or storage IDs, and no request identifiers. Phone, street address, and inbox details from public pages are **intentionally omitted**. Field *names* from the public contract may be discussed; field *values* are not.

---

## Important limitations

Internal example only. Safe GET / already-published case study. Not a promise that every AI system uses the contract. Not a license to POST.
