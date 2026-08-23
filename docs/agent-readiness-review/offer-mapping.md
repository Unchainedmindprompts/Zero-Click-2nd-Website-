# Agent Readiness Review — Offer Mapping

**Classification:** INTERNAL decision framework.  
**Must match production** `/pricing`, `/services`, and `lib/positioning.ts`.  
**If this file and the live site disagree, the live site wins.**

The review can end in a sale, a clarification, or a no. All three are successful outcomes.

Foundation Build **never** automatically includes a protected production action endpoint. Do not imply otherwise to close a gap.

---

## How to use this file

After [operator-runbook.md](./operator-runbook.md) Steps 11–12:

1. Name the three highest-priority gaps.
2. For each gap, choose **one** primary outcome from this file.
3. Choose **one** recommended next step for the client report (the customer should not receive a three-offer buffet).
4. A second offer may be mentioned in one sentence as a later possibility — never as a bundled $4,995 action endpoint.

Do **not** recommend work because “agents exist,” because a competitor has a chatbot, or because Luxe has a live consult contract.

---

## Commercial boundary (copy these sentences)

Use this language or a close paraphrase:

- **Foundation Build — $4,995:** an owned website, canonical business truth, entity graph, discovery, and capability mapping. **It does not automatically include a production action endpoint.**
- **Agent Capability Build:** one defined protected action at a time, scoped after the real business rules are understood. **No published price.**
- **Platform Capability Layer — Pilot:** for selected WordPress / Wix / Squarespace (or similar) businesses remaining on those platforms: a **Kodecite-built, business-owned** Next.js / Vercel sidecar deployed on infrastructure and a domain **the client controls**. Application-only. Not universally proven. Not Kodecite-owned infrastructure. A full Next.js rebuild is still the strongest path.

You own the repo, the site, and the deployed infrastructure. No required retainer. Active capabilities may need maintenance and third-party costs.

---

## Outcome A — Foundation Build ($4,995)

### When to recommend

The highest-priority problem is that people, search, and agents **cannot share one authoritative record**.

Typical evidence:

- Identity, services, or geography are fragmented or contradictory
- The site cannot support a recommendable sentence without guessing
- There is no coherent owned website / entity graph / discovery foundation
- A capability **map** is missing (what can be requested, required information, eligibility, what success does not mean) — and that map is the need, not a live POST
- The stack is a candidate for an owned Next.js rebuild (or they already want to leave a fragile site)

### When not to recommend

- Truth is already recommendable and the only gap is one protected action (that is Agent Capability Build, or no engagement)
- The business needs clarification before anyone should touch infrastructure (Outcome E)
- They asked for a chatbot, SEO retainer, or paid media — Kodecite is the wrong shop
- You are recommending Foundation **so that** you can slip a production action into the same $4,995
- A sidecar pilot is the honest path because they will not move off WordPress / Wix / Squarespace and a full rebuild is not on the table (consider Outcome C, or no)

### What Foundation includes (say this)

Owned website (Next.js where appropriate), canonical truth, entity graph, services and geography, corroboration, machine discovery (`llms.txt` / `agent.json` where they help), and a capability **map**. Client-owned GitHub and Vercel.

### What Foundation does not include (say this every time)

A custom protected production action endpoint. Consultation APIs, agent POST routes, booking, pricing, and checkout are out of scope unless separately agreed as an Agent Capability Build.

Discovery files are publication formats. They do not make every AI system read the business with certainty.

---

## Outcome B — Agent Capability Build (no published price)

### When to recommend

All of the following are true:

1. **Truth is reconciled** (or will be, via an already-sufficient site or a completed Foundation) for the services and geography the action would touch.
2. **One real action is selected** — for example, request an in-home consultation — not “make us agent-ready.”
3. **Rules are known or knowable:** required information, eligibility, authorization, what a human must still do.
4. **Success is defined,** and non-success is defined (not a booking, not a price, not acceptance — unless that *is* the permitted action and the owner says so).
5. **Controls and handoff are possible:** validation, fail-closed, duplicate handling, rate limiting, honest outcomes, human follow-up.

This is custom-scoped work. Different actions carry different rules and risk.

### When not to recommend

- Because “agents exist” or a homepage slider would look more advanced
- Because the business has `llms.txt` / schema / MCP curiosity
- Because Luxe has a live endpoint (transfer the *sequence*, not the contract)
- While Truth is still fragmented — do not automate a contradictory business
- When the honest action is “call us” and the owner does not want a machine path
- When booking / pricing / checkout are desired but the business will not permit them — do not build the false version
- As a free add-on inside Foundation

### What to write in the report

One defined action at a time: contract, validation, security and abuse controls, idempotency, human handoff, production acceptance testing. Booking, pricing, and checkout stay false until the business actually permits them. No published price because the rules are the cost.

Kodecite’s own site is not a template for “every client gets an endpoint.” Production copy: a Foundation Build can stop at truth and discovery.

---

## Outcome C — Platform Capability Layer — Pilot

### When to recommend

All of the following are true:

1. The business is on **WordPress, Wix, Squarespace, or a similar** closed / plugin-centered platform **and intends to stay**.
2. The case is **selected**, not default. You can name why a sidecar could publish truth / capability without pretending the CMS is equivalent to an owned Next.js system.
3. The client will **own** the sidecar: Next.js / Vercel on **their** infrastructure and **their** domain. Kodecite builds it; Kodecite does not keep it.
4. They understand this is a **founding pilot**, application-only, **not universally proven**.
5. No WordPress plugin dependency is being sold as the product.

### When not to recommend

- As the default for every WP / Wix / Squarespace inbound
- As “just as strong as a rebuild”
- As a Kodecite-hosted / Kodecite-owned platform
- When the real need is a full owned rebuild and they are willing
- When platform limits (forms, auth, routing, lock-in) make an honest contract unlikely — say so and choose clarification or no

### Platform limits to state

Those platforms are not blank to every AI crawler. The usual problem is scattered truth and missing control. A sidecar can publish a cleaner record beside the existing site. It cannot dissolve every CMS constraint. Protected actions are “where appropriate,” not automatic.

---

## Outcome D — No engagement recommended yet

### When to use

- The business is not a fit (brand-new with nothing to verify; wants a chatbot / retainer / ads; wrong category)
- The public record is so incomplete that a paid build would be guessing
- The only “gap” is vanity (more files, more automation) that would not change what AI can safely do
- They need time to decide what they will and will not permit
- Recommending work would oversell Kodecite relative to the evidence

### What to write

Say what you would *not* do, and why that protects them. Leave the report as the deliverable. Invite them to return if facts change. Do not leave a fake “maybe later package” price.

---

## Outcome E — Business clarification required before technical work

### When to use

Public evidence is not enough to choose an honest build. Typical questions:

- Which name, license, or entity is canonical?
- Which cities are actually served?
- Which services are real vs aspirational?
- Is the next step a consult, a quote, a booked slot, or a human call — and which of those may a machine complete?
- Will they move off the current platform?
- Who may authorize an agent request?

### What to write

List the questions. State that technical work should wait. Do **not** start Foundation or an action build “while we figure it out.”

This outcome can sit in front of A, B, or C. It is not a polite no. It is a stop sign.

---

## Outcome F — Existing infrastructure is currently sufficient

### When to use

- Truth is recommendable, distribution agrees, and the human next step is honest
- Booking / checkout are correctly **Intentionally unavailable** or **Not applicable**
- A live protected action already exists for the one action they need (see Luxe calibration), **or** they do not want one
- Further Kodecite work would be optional polish, not a missing layer

### What to write

Name what already works. Name the residual risks (if any) as optional self-serve cleanups. Do not invent a project to remain in the conversation.

If they later want a *new* defined action, that would be a new Agent Capability Build — mentioned once, not sold in the same breath as “you’re fine.”

---

## Decision sequence

```
Is the submitted site the right business and reviewable?
  no  → Outcome E (or a short failed-review note)
  yes →
Are identity / services / geography / policies coherent enough to avoid inventing a business?
  no, and they want an owned foundation → Outcome A
  no, and they will stay on WP/Wix/Squarespace → Outcome C or E
  no, and they cannot answer basic rules → Outcome E
  no, and they are not a fit → Outcome D
  yes →
Is the honest next step only a clearer human path / cleanup they can do themselves?
  yes → Outcome F (or D if you should not stay involved)
  no →
Is there one defined action, with known rules, that should be a protected machine path?
  no  → Outcome A (map only), F, or D
  yes, truth already sufficient → Outcome B
  yes, but truth / owned site still missing → Outcome A now; B later (never bundled into $4,995)
  yes, but they remain on a selected CMS → Outcome C (pilot), still no invented price
```

---

## Anti-patterns

| Anti-pattern | Correct move |
| --- | --- |
| “Foundation includes the Luxe-style endpoint.” | It does not. |
| “Add checkout to raise maturity.” | Only if the business sells that way. |
| “They have no `llms.txt`, so they need Foundation.” | File absence alone is not the offer. |
| “They need MCP.” | Not from a review. MCP is a component, not the category. |
| “WordPress is invisible to AI, so sidecar is mandatory.” | False. Scattered truth is the usual problem. |
| “Quote Agent Capability Build because the category is hot.” | Require the five conditions in Outcome B. |
| “Give them all three offers to choose.” | One recommended next step. |
| “Controlled production on kodecite.ai means every client needs an endpoint.” | Kodecite’s site is discovery + a human form. See calibration. |

---

## Price facts you may state

| Item | Public fact |
| --- | --- |
| Foundation Build | $4,995 one-time |
| Extra service or area pages | $250 each, or 5 for $1,000 (Foundation add-on) |
| Decision-support articles | $350 each, or 3 for $900 (Foundation add-on) |
| Rush delivery | +$1,500 (Foundation add-on) |
| Additional location or second vertical | $2,500 (Foundation add-on) |
| Agent Capability Build | No published price |
| Platform Capability Layer — Pilot | No invented price; application-only |
| Agent Readiness Review | Free; written within two business days |

Do not invent a citation money-back guarantee. Production removed that.

Add-ons extend the owned foundation. They are not action endpoints and not retainers.

---

## Mapping the three gaps

For the internal log:

| Gap | Layer | Why it matters to an agent | Outcome | Why this outcome and not another |
| --- | --- | --- | --- | --- |
| 1 | | | A–F | |
| 2 | | | A–F | |
| 3 | | | A–F | |

The client report’s **Recommended next step** is the single best outcome, with the other two gaps explained as part of that story or as later optional work.
