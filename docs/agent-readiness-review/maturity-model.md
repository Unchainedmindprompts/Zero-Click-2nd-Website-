# Agent Readiness Review — Maturity Model

**Classification:** INTERNAL.  
**Use with:** [methodology.md](./methodology.md), [report-template.md](./report-template.md).

This model describes the **system**, not the quality of the business. A careful consult-only trade can be more mature than a business with a noisy chatbot and a “Book now” button that books nothing.

Do **not** assign numeric scores, percentages, letter grades, or a single overall index when layers disagree. Mixed maturity is normal and must be reported as mixed.

More automation is not always higher maturity. A controlled human handoff can be the correct last stage for that action.

---

## Relationship to production outcomes

Production Kodecite language uses five **outcomes**:

Understandable. Verifiable. Recommendable. Actionable. Controlled.

This review uses seven **system stages**. They are compatible, not a second public framework:

| Review stage | Closest production outcome | Difference |
| --- | --- | --- |
| Fragmented | (none) | The record is not yet understandable. |
| Understandable | Understandable | Same idea. |
| Verifiable | Verifiable | Same idea. |
| Recommendable | Recommendable | Same idea. |
| Action-mapped | Actionable (partial) | The next step is named; it may still be human-only. |
| Protected-action-ready | Actionable (prepared) | Rules exist to implement one protected action; it may not be live. |
| Controlled production | Actionable + Controlled | One defined action is live, honest, and bounded. |

Never tell a client they are “Actionable” if the only path is an unlabeled contact form and the report has to guess what success means. Use **Action-mapped** or below.

Never tell a client they are in **Controlled production** because they have schema, `llms.txt`, or a chatbot.

---

## Stages

Progress is evidence-gated. A later stage includes the evidence of earlier stages *for that layer*. A business can sit at **Recommendable** on Truth and **Fragmented** on Action at the same time.

### 1. Fragmented

The public record is scattered or internally at odds. An AI system would have to assemble the business from disconnected pages, directories, and unwritten rules.

**Evidence required (any layer):**

- Identity, services, geography, or next step disagree across owned pages, or
- Important facts exist only as implication, or
- Machine files / schema, if present, name a different business than the page, or
- You cannot state who they are, what they do, and where they work without guessing

**Typical signals:** generic “we do it all”; city names only in blog titles; a directory that does not match the site; leftover template markup.

**Operator language:** “An agent would still have to guess.”

### 2. Understandable

A careful human — and a careful agent reading the owned site — can state who the business is, what it offers, and where it works, in the business’s own words.

**Evidence required:**

- Stable name and a usable description of services
- Geography that is at least explicit enough to avoid inventing a remote market
- A human-readable next step (even if it is only “call” or “use this form”)
- No requirement that machine files exist

**This stage does not require:** schema, `llms.txt`, reviews, or any API.

**Operator language:** “AI can understand the outline if it actually reads the site. It cannot yet check the outline against a second source, and it should not act.”

### 3. Verifiable

The same facts can be checked. Owned pages, and at least one other public surface or a consistent internal machine representation, tell the same story.

**Evidence required:**

- Identity / services / geography agree across two or more public surfaces (site + profile, or site + `llms.txt` / JSON-LD that matches the page), and
- Material conflicts are absent or explicitly documented as unresolved, and
- Credentials or policies that are claimed can be pointed at (or are clearly unpublished — not invented)

**This stage does not require:** that every AI engine has cited the business, or that reviews are numerous.

**Operator language:** “AI can check what it just read. Recommendation is still not safe if policies and limitations are missing.”

### 4. Recommendable

A system could recommend this business for a **defined** service in a **defined** place without inventing a service, a city, a credential, or a next step the business does not publish.

**Evidence required:**

- Understandable + verifiable facts for the services you would allow an agent to name
- Explicit limitations or an honest “not stated” that the report refuses to fill
- Policies that a recommendation must respect are published, **or** the report states that recommendation must stay narrow because policies are incomplete
- Human↔machine agreement on the facts that would appear in a recommendation sentence

**This stage does not require:** a booking link, checkout, MCP, or a protected API.

**Operator language:** “AI can recommend this business for X in Y, then hand the customer a human path. It should not claim a visit, a price, or a purchase unless those are independently staged.”

### 5. Action-mapped

The next authorized step is named. A customer or agent can be told *what to do* and *what that does not complete*.

**Evidence required:**

- At least one requestable intent is explicit (consult, qualified inquiry, appointment request, or human handoff)
- Required information is visible or honestly marked unknown
- Success and non-success are stated or clearly inferred as **Requires business confirmation** — never silently treated as booking / price / sale
- Booking, pricing, and checkout are labeled **Verified and operational**, **Intentionally unavailable**, **Not applicable**, or **Not publicly observable** — not implied

**This stage does not require:** a live machine POST.

**Operator language:** “The action is mapped. Fulfillment may still be a person. That can be correct.”

### 6. Protected-action-ready

The business could support **one** defined protected action without inventing rules. The action may not be in production yet.

**Evidence required:**

- Truth is reconciled for the services and geography that action would touch
- One real action is selected (not “agents in general”)
- Eligibility, required fields, human confirmation, and success / non-success can be written as a contract
- Control needs are known: validation, authorization boundary, handoff, duplicate handling, fail-closed, PII scope
- Owner permission is known or marked **Requires business confirmation**

**This stage does not require:** that Kodecite has been hired, or that an endpoint is live.

**This stage is not:** “they should buy an Agent Capability Build because agents exist.”

**Operator language:** “The rules are knowable. A protected action could be scoped. Foundation Build still does not include that endpoint.”

### 7. Controlled production

**One defined action** is live in production, discoverable, honest, and bounded. A successful call does only what the contract says. Booking, pricing, and checkout remain false unless those *are* the defined action and the evidence shows they work.

**Evidence required:**

- A public capability or equivalent contract an outside party can GET
- Readiness that matches the human story (for example, request-submission-ready + human follow-up required)
- Explicit non-success: what the action will not do
- Public description of controls that matter (human follow-up, idempotency, rate limiting existence, fail-closed statuses) — not unpublished internals
- Authorization boundary is stated (agent vs human, or “no autonomous submission”)
- You did **not** create this evidence by POSTing during the review

Published third-party proof (such as Kodecite’s Luxe case study) may be cited when it is already public. Do not re-run production tests.

**Operator language:** “Controlled production applies to *this* action, not to the whole company, and not to every future action.”

If only discovery files exist, the business is **not** in Controlled production for autonomous agent action.

---

## Layered scoring (required)

Score each layer independently:

| Layer | What you are staging |
| --- | --- |
| Truth | How complete and consistent the business record is |
| Capability | How clearly requests, eligibility, and outcomes are defined |
| Control | How honestly the system refuses and hands off — only from public evidence |
| Action | What can actually be accomplished today, by a human and by a machine |
| Distribution | How findable and consistent the same record is across surfaces |

**Example of a valid mixed result:**

- Truth: Recommendable
- Capability: Action-mapped
- Control: Not publicly observable (do not invent a stage above Fragmented / Understandable if controls are invisible)
- Action: Action-mapped (human form only)
- Distribution: Verifiable

That business is **not** “mostly Controlled production.”

When Control evidence is missing, the highest honest Control stage is usually **Fragmented** or **Understandable** (“we can see a human path; we cannot see machine controls”). Do not skip to Protected-action-ready because the owner seems competent.

---

## Stage assignment rules

1. **Evidence over vibe.** A polished brand can be Fragmented. A plain site can be Recommendable.
2. **No average.** Do not write “overall 4.2 / 7.”
3. **Narrow Controlled production.** If one consult endpoint is live and checkout is not, say so in one sentence.
4. **Do not penalize appropriate absence.** Consult-only, no public prices, no checkout, no MCP — often **Intentionally unavailable** or **Not applicable**.
5. **Do not reward unsafe automation.** An unauthenticated “agent can book and pay” claim without controls is not a later stage. It is a Control gap, often Fragmented, with a false-action risk.
6. **Foundation ≠ Controlled production.** Publishing truth and discovery can reach Recommendable or Action-mapped. A production action endpoint is a separate offer.
7. **Kodecite itself is a worked example of the distinction.** Strong discovery does not make kodecite.ai Controlled production for autonomous submission. See [calibration/kodecite-ai.md](./calibration/kodecite-ai.md).

---

## Language for the client report

Use plain English. Map stages to sentences:

- **Fragmented:** “Today, AI would still have to guess important facts.”
- **Understandable:** “AI can understand the outline from your website.”
- **Verifiable:** “AI can check those facts against more than one public source.”
- **Recommendable:** “AI could recommend you for a specific service in a specific area without inventing the rest.”
- **Action-mapped:** “A customer or agent can be told the next step, and what that step does not complete.”
- **Protected-action-ready:** “The rules for one defined action could be written down and built — they are not live as a protected machine action yet.”
- **Controlled production:** “One defined action is live, limited, and honest about what it will not do.”

Then name the three highest-priority gaps. Do not turn the stage list into a pitch ladder.
