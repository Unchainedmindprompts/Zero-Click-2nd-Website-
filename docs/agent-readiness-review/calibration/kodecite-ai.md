# Calibration review — KodeCite.ai

**Classification:** INTERNAL calibration example. Not a new public case study.  
**Reviewed as if:** an Agent Readiness Review of Kodecite’s own production site.  
**Surfaces used:** public kodecite.ai pages and published machine files in this repo’s production copy.  
**Observation window:** 23 August 2026.  
**Safety:** The Agent Readiness Review form was **not** submitted. Contact forms were **not** submitted. No production POST. No tokens, secrets, or private payloads.

Public sources:

- https://www.kodecite.ai/
- https://www.kodecite.ai/services
- https://www.kodecite.ai/pricing
- https://www.kodecite.ai/faq
- https://www.kodecite.ai/machine-read
- https://www.kodecite.ai/about
- https://www.kodecite.ai/llms.txt
- https://www.kodecite.ai/llms-full.txt
- https://www.kodecite.ai/agent.json
- https://www.kodecite.ai/blog/from-recommended-to-actionable-luxe-window-works

---

## Required recognition (do not drift)

A correctly run review **must** conclude all of the following:

| Judgment | Verdict |
| --- | --- |
| Identity and discovery foundation | **Strong** |
| Public explanation of services and capability concepts | **Yes** |
| Autonomous agent submission endpoint on kodecite.ai | **No** |
| Agent Readiness Review | **Human-facing form only** (`/machine-read`) |
| Controlled production for autonomous agent action | **Must not be claimed** |

If a review using this package says Kodecite is in **Controlled production** because it has `llms.txt`, `agent.json`, schema, or a Luxe case study, the package was misapplied.

Luxe’s live consult endpoint is **Luxe’s** action, published on luxewindowworks.com. It is production proof that the *infrastructure pattern* can work. It is **not** an action endpoint on kodecite.ai.

---

## Business reviewed

KodeCite.ai (Kodecite) — builds the trusted digital business layer for service businesses. Based in North Idaho; offer is remote, not geo-limited.

## Website

https://www.kodecite.ai/

## Review date

23 August 2026

---

## Executive summary (internal)

Kodecite is the calibration for a business that is **easy to understand and discover** and still **correctly refuses** unattended agent action on its own domain.

The five layers, three commercial offers, Foundation price ($4,995), and the free Agent Readiness Review are explained in human pages and repeated in `llms.txt` / `agent.json`. Those files state they are **identity and discovery**. `agent.json` sets `autonomous_submission` to **false**. The `/machine-read` page states the site does not currently accept autonomous agent submissions.

Maturity is **mixed** and must stay mixed. Distribution and Truth can be Recommendable. Action for autonomous agents is **Intentionally unavailable**. That is not a failed build.

---

## Current maturity by layer

| Layer | Stage | Plain English |
| --- | --- | --- |
| Truth | **Recommendable** | A system can say who Kodecite is, what it sells, what it does not sell, and where the operator is based. |
| Capability | **Action-mapped** (human review / contact) | What may be requested is explained: free review, Foundation, scoped action, sidecar pilot. Machine completion of those requests is **not** offered. |
| Control | **Understandable** on the refusal; **Not publicly observable** on form backends | The public refusal of autonomous submission is clear. Inbox / validation internals of the human form were not probed. |
| Action | **Action-mapped** for humans; **not** Controlled production for agents | A person can request a review or send a contact note. An unattended agent **cannot** submit a supported production action on this host. |
| Distribution | **Recommendable** | Website, FAQ, `llms.txt`, `llms-full.txt`, `agent.json` / `agents.json`, and schema-oriented pages agree on the same boundary. |

**Forbidden synthesis:** “Overall Controlled production.”  
**Correct synthesis:** Strong identity and discovery; human review form; **no** autonomous agent submission endpoint.

---

## Truth

### Identity

**Verified and operational.** KodeCite.ai / Kodecite; founder Mark Abplanalp; North Idaho (About / schema locality). Production thesis: trusted digital business layer; website remains the human-facing experience.

### Services

**Verified and operational / Explicit.**

- Foundation Build — $4,995; owned website, truth, entity graph, discovery, capability **map**; **does not automatically include a production action endpoint**
- Agent Capability Build — one defined action; no published price
- Platform Capability Layer — Pilot — Kodecite-built, **business-owned** Next.js / Vercel sidecar; application-only; not universally proven
- Agent Readiness Review — free; written within two business days

Also explicit **non-services:** not a chatbot agency, generic automation shop, SEO retainer, or paid-media practice.

### Geography

**Verified and operational** for the offer: based in North Idaho, built for service businesses **anywhere**. Location landing pages exist; production copy says the offer is not geo-limited.

### Policies / limitations

**Verified and operational.** Model only what the real business permits. No false booking, pricing, purchase, or acceptance. Client owns repo / site / deploy. No mandatory retainer. Active capabilities may need maintenance. Acceptance testing is not a citation money-back guarantee. MCP / action endpoints are not published without reconciling the real business.

### Corroboration

Owned machine files match the human pages on the core claims above. Luxe is cited as **client / production proof**, not as Kodecite’s own endpoint.

### Conflicts

None that would merge Kodecite with Luxe’s action API if the reviewer reads `agent_interaction` and the machine-read disclaimer. A sloppy reviewer who treats the Luxe URL as “Kodecite’s API” would create a **false** Controlled production label — that is the failure this calibration exists to catch.

---

## Capability

| Item | Guardrail | Observation |
| --- | --- | --- |
| Requestable intents | **Verified and operational** (human) | Request an Agent Readiness Review; direct contact; later commercial offers described, not machine-executed. |
| Required information | **Not fully observed** | Review form fields are on `/machine-read`. They were **not** submitted. Do not enumerate a prospect payload. |
| Eligibility | **Verified and operational** (as copy) | High-trust service businesses; not every platform or every action. |
| Human confirmation | **Verified and operational** | Review is a written human deliverable. Primary CTA is a form, not an agent POST. |
| Success | **Verified and operational** | Public promise: free written review within two business days. `agent.json` primary CTA: “This is a review request, not a booking.” |
| Non-success | **Verified and operational** | Not a booking, not an autonomous submission, not a guaranteed citation. |
| Autonomous capability | **Intentionally unavailable** | `agent.json` `autonomous_submission`: false. Reason: identity/discovery only; no public action endpoint. |

---

## Control

| Item | Guardrail | Observation |
| --- | --- | --- |
| Authorization | **Verified and operational** | Autonomous submission explicitly **false**. |
| Human handoff | **Verified and operational** | Senior human reply path; review within two business days. |
| Form validation / duplicates / rate limits / fail-closed internals | **Not publicly observable** | Must not be claimed from this review. Must not be tested by POSTing. |
| False booking / pricing / checkout | **Intentionally unavailable** on this site | Foundation price is published as a **human offer**, not a checkout action for agents. |
| Honest outcomes | **Verified and operational** | Files say they are discovery. The review form is described as a review, not a booking. |

Do not infer that unpublished form controls are strong or weak.

---

## Action

| Path | Guardrail | Notes |
| --- | --- | --- |
| Human contact | **Verified and operational** | `/contact` exists as a separate direct line. |
| Human form | **Verified and operational** | **Agent Readiness Review remains a human-facing form** at `/machine-read`. URL preserved from the older “Machine Read” name. |
| Consultation (Kodecite’s own) | **Action-mapped, human-only** | The review *is* the consult-like first step. |
| Booking | **Not applicable** / **Intentionally unavailable** | |
| Agent POST / protected action on kodecite.ai | **Intentionally unavailable** | |
| MCP | **Not publicly observable** as a live interface | Discussed as a future **component**, not a live Kodecite endpoint. |
| Luxe capability URL | **Other business** | May be cited as proof of the *pattern*. Must not be filed as Kodecite Action-layer Controlled production. |

---

## Distribution

| Surface | Guardrail |
| --- | --- |
| Website | **Verified and operational** |
| `llms.txt` / `llms-full.txt` | **Verified and operational** as discovery files; agree on no autonomous endpoint. **Not** “every AI reads this.” |
| `agent.json` / `agents.json` | **Verified and operational** and **honest** about `autonomous_submission: false` |
| Structured data / sitemap / robots | Present in the production site model. Helpful distribution. **Not** an action layer. |
| Human↔machine agreement | **Strong** on the discovery-only boundary |

---

## What AI can understand / verify / still invent

- **Understand:** Kodecite builds owned business infrastructure so AI can understand, verify, recommend, and take **authorized** next steps with *clients’* businesses. Five layers. Three offers plus a free review.
- **Verify:** The same boundary on Services, Pricing, FAQ, `llms.txt`, and `agent.json`.
- **May still invent:** That kodecite.ai accepts agent-submitted jobs; that Foundation includes a live action API; that the Luxe consult URL is Kodecite’s API; that `llms.txt` means every model already cites Kodecite; that this site is Controlled production for autonomous action.

---

## What a customer or agent can accomplish today

- A **person** can request an Agent Readiness Review or use the contact page.
- An **unattended agent** can read identity and discovery files. It **cannot** complete a supported autonomous submission on kodecite.ai.
- An agent can be pointed at Luxe’s **separate** public contract if the question is “has this pattern ever shipped?” — that is evidence about Luxe, not an action on this host.

## What still requires a human

Scoping Foundation or Agent Capability work, accepting a review request, writing the report, and any commercial agreement.

---

## Three highest-priority improvements (calibration)

These are **not** automatic sales recommendations against Kodecite itself:

1. Keep the human form and the discovery files in lockstep whenever offers change (already the production rule).
2. Do not add an autonomous endpoint on kodecite.ai unless Mark separately decides that is a real permitted action — that would be an Agent Capability Build **on Kodecite**, not a review finding that the current site is incomplete.
3. Do not publish this methodology folder as a public page in this phase.

## Recommended next step

**Existing infrastructure is currently sufficient** for Kodecite’s chosen public model: discovery + human review form.

An Agent Capability Build on kodecite.ai would be appropriate **only** if the business decided to permit one defined autonomous action and could state rules, success, and controls. This review **must not** recommend that merely because agents exist or because Luxe has an endpoint.

Foundation Build does not apply as a “fix” for the missing agent POST. The omission is **intentional**.

---

## Offer-mapping check

| Offer | Correct calibration use |
| --- | --- |
| Foundation Build $4,995 | Describes what Kodecite **sells**. Not a gap on kodecite.ai’s own discovery foundation. |
| Agent Capability Build | **Do not** recommend for kodecite.ai from this review. No selected autonomous action. |
| Platform sidecar pilot | **Not applicable** to this Next.js site. |
| Existing infrastructure sufficient | **Correct** for the discovery + human-form model. |

---

## Contrast with Luxe (operator memory aid)

| | Luxe Window Works | KodeCite.ai |
| --- | --- | --- |
| Truth | Strong, explicit services and geography | Strong identity and offer truth |
| Discovery files | Present | Present and explicit about limits |
| Human consult / review | Yes | Yes — Agent Readiness Review form |
| Protected production action | **Yes** — one consult request on **Luxe’s** domain | **No** autonomous submission on **Kodecite’s** domain |
| Booking / pricing / checkout | Intentionally unavailable | Not an agent checkout; human pricing page only |
| Controlled production (autonomous action) | **Yes, for that one action** | **No** |

---

## Privacy confirmation

No form payloads, no secrets, no Redis or request IDs. No prospect PII.

---

## Important limitations

Internal example only. Does not authorize publishing this folder. Does not authorize adding an action endpoint. Does not claim every AI system reads Kodecite’s discovery files.
