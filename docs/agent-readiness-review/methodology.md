# Agent Readiness Review — Methodology

**Classification:** INTERNAL.  
**Use with:** [README.md](./README.md), [maturity-model.md](./maturity-model.md), [operator-runbook.md](./operator-runbook.md).

This is the evidence standard for every review. Do not replace it with an SEO checklist, a schema-presence scan, or a sales script.

Core question: **What can AI reliably understand, verify, recommend, and safely do with this business today?**

---

## How to use this document

For every item below, record:

1. **What is evaluated**
2. **Why it matters to an AI agent**
3. **What public evidence qualifies**
4. **What constitutes conflicting evidence**
5. **What “not observed” means**
6. **What must not be assumed**
7. **Which layer it belongs to**

Then assign one guardrail label from the shared vocabulary.

---

## Shared rules

### Guardrails vocabulary

Use exactly these labels:

- **Missing**
- **Contradictory**
- **Not publicly observable**
- **Not applicable**
- **Intentionally unavailable**
- **Requires business confirmation**
- **Verified and operational**

**Not publicly observable ≠ does not exist.**  
Do not claim controls exist unless they are publicly verifiable or confirmed by the business.  
Do not penalize a business for lacking direct booking or checkout when that is inappropriate for the model.  
Do not claim every AI system reads `llms.txt`, `agent.json`, schema, APIs, or MCP.

### Website vs digital business layer

The website is the human-facing experience. The digital business layer is the machine-facing representation of the same business. The review finds where they agree and where an agent would still guess.

### Evidence quality

A published sentence on the business’s own site is stronger than a directory blurb. A machine-readable contract that matches the site is stronger than either alone. A third-party profile that contradicts the site is a conflict, not “extra SEO.”

Safe **GET** only. Never submit forms, book appointments, send email, or POST to production action endpoints.

### What this methodology refuses to score

- Keyword rankings
- AEO / GEO “readiness scores”
- Lighthouse numbers as a proxy for agent readiness
- Schema existence without agreement to visible facts
- Whether ChatGPT, Gemini, or any other named system currently cites the business
- Whether the business “needs” an autonomous endpoint

---

## Layer 1 — Truth

What is true about the business. Identity, people, services, products, locations, credentials, proof, policies, and limitations should read as one record.

### T1 — Identity

- **What is evaluated:** Legal or operating name, brand name, owner or operator identity when published, and whether the same entity is named consistently.
- **Why it matters to an AI agent:** An agent that cannot resolve *who* the business is will invent a nearby competitor, merge two brands, or recommend the wrong company.
- **What public evidence qualifies:** Homepage, About, footer, Organization / LocalBusiness / Person JSON-LD, `llms.txt`, `agent.json`, published business profiles that use the same name.
- **What constitutes conflicting evidence:** Different legal names, abandoned DBAs, mismatched NAP, or schema that names a different organization than the visible page.
- **What “not observed” means:** No stable name or entity identifier was found on public surfaces. The business may still exist.
- **What must not be assumed:** That the domain owner, Google profile, and About page are automatically the same legal entity.
- **Layer:** Truth

### T2 — People

- **What is evaluated:** Named operators, license-holders, or public-facing specialists when the business publishes them.
- **Why it matters to an AI agent:** High-trust services are often recommended as a person plus a firm. A missing or conflicting person record is a common hallucination source.
- **What public evidence qualifies:** About page, bylines, Person schema, published bios that match the brand.
- **What constitutes conflicting evidence:** Different founders, conflicting tenure claims, or a profile that attributes the business to someone else.
- **What “not observed” means:** No people are named publicly. That can be a privacy choice, not a defect.
- **What must not be assumed:** Staff size, credentials of unnamed people, or that an unnamed operator is less legitimate.
- **Layer:** Truth

### T3 — Services and products

- **What is evaluated:** What is actually offered, what is mentioned in passing, and what is never stated.
- **Why it matters to an AI agent:** Agents fill gaps. Implied services become invented services.
- **What public evidence qualifies:** Service and product pages, explicit lists, capability contracts that enumerate supported categories, schema that matches visible offers.
- **What constitutes conflicting evidence:** Homepage claims a service that no service page or schema supports, or schema offers a service the site never describes.
- **What “not observed” means:** Offers are too vague to distinguish from a generic category (“we do it all”).
- **What must not be assumed:** Adjacent services (repair vs install, residential vs commercial, product sale vs consult) unless stated.
- **Layer:** Truth

### T4 — Geography

- **What is evaluated:** Where the business works, where it does not, and whether that edge is stated.
- **Why it matters to an AI agent:** Geography is the most common unsafe recommendation. An agent that only knows “North Idaho” will invent a visit in the wrong city.
- **What public evidence qualifies:** Service-area pages, explicit city lists, “we do not travel to X,” capability-contract geography blocks, LocalBusiness `areaServed`.
- **What constitutes conflicting evidence:** Footer cities that disagree with area pages; a contract that silently expands or shrinks the public map without saying so; a directory in a city the site never claims.
- **What “not observed” means:** Location language is only atmospheric (“proudly local”) with no usable market list.
- **What must not be assumed:** That a city in a blog title is a service area, or that a phone area code equals coverage.
- **Layer:** Truth

### T5 — Credentials

- **What is evaluated:** Licenses, certifications, insurance statements, professional designations, manufacturer relationships — only as published.
- **Why it matters to an AI agent:** Agents treat credentials as permission to recommend. A guessed license is a trust failure.
- **What public evidence qualifies:** Named license type and jurisdiction, published certification marks with a verifiable issuer, About-page claims that can be checked on a public registry *without logging in or creating an account*.
- **What constitutes conflicting evidence:** Expired-looking claims, mismatched license names, or a directory that lists a credential the site does not.
- **What “not observed” means:** No credential is published. Many legitimate businesses publish none.
- **What must not be assumed:** That the business is licensed, bonded, insured, or certified. Label **Requires business confirmation** if the model typically needs a license and none is shown.
- **Layer:** Truth

### T6 — Policies

- **What is evaluated:** Consultation rules, guarantees, warranties, privacy, financing disclaimers, “what we will not do,” commercial vs residential limits.
- **Why it matters to an AI agent:** Policies are the difference between a safe recommendation and a false promise.
- **What public evidence qualifies:** Policy pages, FAQ answers, capability-contract notes, footer legal pages, explicit “this is not a booking / quote / acceptance” language.
- **What constitutes conflicting evidence:** Marketing copy that promises same-day booking while a contract says human follow-up only; a guarantee on one page that another page narrows or retracts.
- **What “not observed” means:** No policy text was found. Do not invent a privacy or guarantee stance.
- **What must not be assumed:** Standard industry policies. Write **Not publicly observable**.
- **Layer:** Truth

### T7 — Limitations

- **What is evaluated:** Work the business refuses, categories it does not sell, customers it does not serve, actions it will not automate.
- **Why it matters to an AI agent:** Limitations are how a system fails closed. Missing limitations become invented availability.
- **What public evidence qualifies:** Explicit refusals, “not offered” lists, capability `neverRequired` / unsupported-intent notes, “booking unavailable” flags.
- **What constitutes conflicting evidence:** A page that says “we do everything” next to a contract that rejects whole intent classes.
- **What “not observed” means:** No limitations are stated. That is a Truth gap, not proof the business has none.
- **What must not be assumed:** That unpublished limitations do not exist, or that published limitations are the complete internal rule set.
- **Layer:** Truth

### T8 — Corroboration

- **What is evaluated:** Whether independent public records repeat the same identity, services, and geography.
- **Why it matters to an AI agent:** Agents triangulate. One owned page plus three conflicting directories is weaker than one owned page plus matching profiles.
- **What public evidence qualifies:** Google Business Profile (public view), professional associations, manufacturer locator pages, published reviews that name the same services and towns.
- **What constitutes conflicting evidence:** Different phone, address, category, hours, or service list on a major profile.
- **What “not observed” means:** No corroborating profile was found, or the profile could not be confirmed as the same entity.
- **What must not be assumed:** That a high review count equals verified truth, or that a missing GBP means the business is not real.
- **Layer:** Truth

### T9 — Conflicts

- **What is evaluated:** Material disagreements across owned pages, machine files, and external profiles.
- **Why it matters to an AI agent:** Conflict is how agents lose confidence — or worse, pick the wrong fact and speak it with certainty.
- **What public evidence qualifies:** Side-by-side quotes and URLs, dated on the day of review.
- **What constitutes conflicting evidence:** This item *is* the conflict register. A conflict is material when it would change a recommendation, a service, a city, a price implication, or an action.
- **What “not observed” means:** No material conflict was found among the surfaces checked. That is not a claim that no conflict exists anywhere.
- **What must not be assumed:** That the newest page is correct, or that schema is more authoritative than visible copy. Note the conflict and ask the business.
- **Layer:** Truth

---

## Layer 2 — Capability

What can actually be requested. A capability is not a slogan. It is a bounded request with required information, eligibility, and an honest outcome.

### C1 — Requestable intents

- **What is evaluated:** The distinct things a customer or agent may ask for (consult, qualified inquiry, appointment request, human handoff, other published intents).
- **Why it matters to an AI agent:** Without named intents, the agent collapses every desire into “contact them” or invents “book now.”
- **What public evidence qualifies:** Form field options, capability `allowedIntents`, service CTAs that describe a real next step, FAQ that distinguishes intents.
- **What constitutes conflicting evidence:** A button labeled “Book” that the surrounding copy describes as “we will call you”; two pages that list different request types.
- **What “not observed” means:** Only a generic “Contact us” exists, with no stated intent model.
- **What must not be assumed:** That every business needs a long intent taxonomy, or that a marketing CTA is a machine-requestable intent.
- **Layer:** Capability

### C2 — Required information

- **What is evaluated:** What must be provided before the business will accept a request.
- **Why it matters to an AI agent:** Agents either omit required fields and fail, or invent values to “be helpful.”
- **What public evidence qualifies:** Marked-required form fields (observed, not submitted), published `requiredFields` on a capability URL, copy that says “we need X before we can help.”
- **What constitutes conflicting evidence:** A human form that requires different fields than a published machine contract for the same intent.
- **What “not observed” means:** No required-field list is published. Do not scrape a form by submitting it.
- **What must not be assumed:** Internal CRM fields, hidden required values, or that optional fields are required.
- **Layer:** Capability

### C3 — Eligibility

- **What is evaluated:** Which services and geographies qualify, and what happens at the edge (nearby, out of area, commercial, existing-customer, unsupported category).
- **Why it matters to an AI agent:** Eligibility is how an agent decides *not* to recommend an action.
- **What public evidence qualifies:** Service-area rules, “if you are outside X, call,” capability geography and reason codes, published unsupported categories.
- **What constitutes conflicting evidence:** Site says five towns; a contract silently accepts a different map with no policy note; a profile lists a city the site rejects.
- **What “not observed” means:** No eligibility rule is stated. An agent would have to guess.
- **What must not be assumed:** That the business will travel, that commercial work is accepted, or that “surrounding areas” is a usable boundary.
- **Layer:** Capability

### C4 — Human confirmation

- **What is evaluated:** Whether a completed request still requires a person before anything real happens.
- **Why it matters to an AI agent:** This is the difference between “I booked you a visit” and “I delivered a request.”
- **What public evidence qualifies:** Explicit “human follow-up required,” “we will call to schedule,” `requiresHumanFollowUp: true`, copy that refuses unattended completion.
- **What constitutes conflicting evidence:** One surface says a human must confirm; another says the request is confirmed, booked, or accepted as a job.
- **What “not observed” means:** The next human step is not stated. Label **Requires business confirmation** if the model is high-trust and likely needs a person.
- **What must not be assumed:** That a form submission finishes the job, or that human follow-up is a weakness. For many service businesses it is the correct control.
- **Layer:** Capability

### C5 — Success definition

- **What is evaluated:** What a successful request actually means.
- **Why it matters to an AI agent:** Agents narrate outcomes. If success is undefined, they narrate a booking, a price, or a sale.
- **What public evidence qualifies:** Published `successMeans`, confirmation-page language, contract text such as “delivery and acknowledgement — not an appointment.”
- **What constitutes conflicting evidence:** Thank-you copy that says “you’re booked” while another surface says the request is only received.
- **What “not observed” means:** No success definition is published.
- **What must not be assumed:** That HTTP 200, a thank-you page, or an email autoresponder means the business accepted work.
- **Layer:** Capability

### C6 — Non-success

- **What is evaluated:** What success does **not** mean, and how refusal, handoff, or clarification is described.
- **Why it matters to an AI agent:** Non-success is how the agent avoids false booking, pricing, purchase, or acceptance.
- **What public evidence qualifies:** Explicit “does not book / price / check out,” rejected-intent lists, reason codes, “we will not quote by email.”
- **What constitutes conflicting evidence:** Marketing that implies instant quotes next to a contract that marks pricing unavailable.
- **What “not observed” means:** The business never says what a request is not.
- **What must not be assumed:** Industry defaults. If pricing is unpublished, write **Intentionally unavailable** only when the business or contract says so; otherwise **Not publicly observable**.
- **Layer:** Capability

---

## Layer 3 — Control

What the business will not pretend. Controls that cannot be seen must not be claimed.

### K1 — Validation

- **What is evaluated:** Whether public materials show that incomplete, out-of-area, or malformed requests are rejected or held — not silently accepted as jobs.
- **Why it matters to an AI agent:** Unvalidated intake becomes inbox spam and false confidence.
- **What public evidence qualifies:** Published validation rules, required-field lists, reason codes (`incomplete_request`, `out_of_area`), client-side required attributes *observed without submitting*.
- **What constitutes conflicting evidence:** Copy that says “any message is fine, we’ll figure it out” next to a contract that rejects incomplete requests — or the reverse, if one surface claims strict validation and the public form has none visible.
- **What “not observed” means:** No validation behavior is published. Do **not** probe by sending bad data.
- **What must not be assumed:** Server-side validation, schema checks, or that a required asterisk equals a safe machine contract.
- **Layer:** Control

### K2 — Authorization boundaries

- **What is evaluated:** Who may invoke an action (human visitor vs agent), and whether agent traffic is distinguished from human forms.
- **Why it matters to an AI agent:** A public form is not automatically an authorized agent interface. An open POST is not automatically a permitted agent action.
- **What public evidence qualifies:** Published `agentMode`, “available for unattended agent execution,” statements that the site does **not** accept autonomous submissions, auth or key requirements *described without revealing secrets*.
- **What constitutes conflicting evidence:** `agent.json` says no autonomous submission while marketing implies agents can complete work; a capability URL claims agent execution while the owner’s site says discovery-only.
- **What “not observed” means:** No authorization story is published. Default: humans can contact; agents are not known to be authorized.
- **What must not be assumed:** API keys, allowlists, or that “an API exists” means agents are welcome.
- **Layer:** Control

### K3 — Human handoff

- **What is evaluated:** How a request becomes a person-to-person conversation, and whether that path is explicit.
- **Why it matters to an AI agent:** High-trust work usually ends in a human. A missing handoff is how agents over-promise.
- **What public evidence qualifies:** Phone / text / email published as the next step, “we will contact you,” `handoff_required` statuses, consult-then-human language.
- **What constitutes conflicting evidence:** “Fully automated” claims next to a phone-only fulfillment model.
- **What “not observed” means:** No handoff is described.
- **What must not be assumed:** Response-time SLAs, staffing, or that a published phone number is monitored 24/7.
- **Layer:** Control

### K4 — Duplicates and idempotency

- **What is evaluated:** Whether a replay of the same request is described as returning the original result instead of creating a second job.
- **Why it matters to an AI agent:** Agents retry. Duplicate jobs are a real-world harm.
- **What public evidence qualifies:** Published idempotency requirements, case-study descriptions of duplicate suppression, explicit “do not submit twice” *plus* a machine rule — not a plea alone.
- **What constitutes conflicting evidence:** A contract that requires idempotency keys while public copy invites “submit again if you don’t hear back” with no replay rule.
- **What “not observed” means:** No duplicate rule is published. **Do not test this on production.**
- **What must not be assumed:** That a hidden store, Redis, or key exists. Never record storage internals or IDs.
- **Layer:** Control

### K5 — Rate limits

- **What is evaluated:** Whether agent or public intake is described as rate limited.
- **Why it matters to an AI agent:** Unbounded intake is an abuse path. Published thresholds, however, become a game.
- **What public evidence qualifies:** Statements that agent-intended requests are rate limited, `doNotRetryAutomaticallyWhen: rate_limited`, “thresholds are not published.”
- **What constitutes conflicting evidence:** “Unlimited requests” next to a limiter claim.
- **What “not observed” means:** No rate-limit statement. Do not flood the endpoint to discover one.
- **What must not be assumed:** Specific thresholds, shared human/agent buckets, or that a CDN 429 you happened to see is the business’s policy.
- **Layer:** Control

### K6 — Fail-closed behavior

- **What is evaluated:** Whether unclear, unauthorized, or unsupported requests are refused or handed off — not silently treated as accepted work.
- **Why it matters to an AI agent:** Fail-open systems teach agents to invent.
- **What public evidence qualifies:** Rejected statuses, “capability not ready,” unsupported-contract-version handling, explicit “we will not pretend.”
- **What constitutes conflicting evidence:** Copy that says every request is accepted, while a contract lists reject reasons — or a contract that only lists `accepted`.
- **What “not observed” means:** Failure behavior is unpublished.
- **What must not be assumed:** That a 4xx you must not trigger exists, or that fail-closed is in place because the owner is careful.
- **Layer:** Control

### K7 — PII and sensitive data

- **What is evaluated:** What personal or financial data the public path asks for, and whether the business over-collects relative to the stated action.
- **Why it matters to an AI agent:** Agents will fill every field they see. Extra PII is extra blast radius.
- **What public evidence qualifies:** Visible form labels, published required/optional/never-required field lists. Record field *names*, not values.
- **What constitutes conflicting evidence:** A consult request that also demands payment card fields; a privacy page that contradicts the form.
- **What “not observed” means:** Intake fields are not visible without interacting in a way that submits data. Stop.
- **What must not be assumed:** Storage practices, encryption, or retention. Never copy submitted values, emails from tests, or tokens into the log.
- **Layer:** Control

### K8 — Honest outcomes

- **What is evaluated:** Whether the system’s described result matches the real-world result.
- **Why it matters to an AI agent:** The agent will quote the outcome to a customer.
- **What public evidence qualifies:** Contract outcome language, published status lists, case-study statements that an authorized test did *not* create a booking or price.
- **What constitutes conflicting evidence:** “You’re all set / booked / approved” language for a consult-only intake.
- **What “not observed” means:** Outcome language is missing or only “thanks.”
- **What must not be assumed:** Inbox delivery, SLA, or production-test results you did not perform and that are not already published.
- **Layer:** Control

### K9 — False booking, pricing, and checkout risks

- **What is evaluated:** Labels, buttons, schema (`Offer`, `ReserveAction`, `BuyAction`), and agent copy that could make a system claim a booking, price, or purchase the business does not perform this way.
- **Why it matters to an AI agent:** These are the three most harmful invented actions for service businesses.
- **What public evidence qualifies:** Visible CTAs, schema action types, capability flags such as `directBookingAvailable`, `pricingAvailable`, `checkoutAvailable`.
- **What constitutes conflicting evidence:** A “Book now” button plus a contract that sets booking false; an `Offer` with a price the site never shows a customer how to pay.
- **What “not observed” means:** No booking / pricing / checkout surface was found. For many consult-first trades that is **Not applicable** or **Intentionally unavailable**, not a failure.
- **What must not be assumed:** That lacking checkout is immaturity. Do not recommend checkout to make the score “higher.”
- **Layer:** Control

---

## Layer 4 — Action

The next authorized step — only what the real business permits. Not every client needs every action. A production action is a separately scoped Agent Capability Build, not part of Foundation Build.

### A1 — Human contact

- **What is evaluated:** Published phone, text, email, or address paths a person can use.
- **Why it matters to an AI agent:** This is often the only safe action today. An agent should be able to hand a customer a real contact path without inventing a booking.
- **What public evidence qualifies:** Visible contact details on the site, `ContactPoint` schema that matches, `llms.txt` contact blocks.
- **What constitutes conflicting evidence:** Different numbers or inboxes across pages and profiles.
- **What “not observed” means:** No human contact path is published.
- **What must not be assumed:** That the number is staffed, or that publishing a phone equals agent-submittable action.
- **Layer:** Action

### A2 — Human-facing forms

- **What is evaluated:** Contact or review-request forms a person can complete in a browser.
- **Why it matters to an AI agent:** A form is a human path. It is not, by itself, an autonomous agent endpoint.
- **What public evidence qualifies:** Visible form on a contact or review page. Observe fields only. **Do not submit.**
- **What constitutes conflicting evidence:** Form title says “book your appointment” while confirmation copy (if visible without submitting) says “we will call.”
- **What “not observed” means:** No form is published.
- **What must not be assumed:** That the form emails anyone, writes to a CRM, or is available to unattended agents.
- **Layer:** Action

### A3 — Consultation request

- **What is evaluated:** Whether a consultation or in-home / in-office visit request is a defined action, and whether it is human-only or also machine-discoverable.
- **Why it matters to an AI agent:** For high-trust services this is the usual first safe action.
- **What public evidence qualifies:** Consult CTAs, `/book` or `/contact` consult copy, a published consultation capability URL.
- **What constitutes conflicting evidence:** Consult promised as instant scheduling while the contract says request-for-follow-up.
- **What “not observed” means:** Consultation is not a distinct published action.
- **What must not be assumed:** That “free consultation” is a reserved calendar slot.
- **Layer:** Action

### A4 — Booking

- **What is evaluated:** Whether a specific time can be reserved by a customer or agent without a human confirming.
- **Why it matters to an AI agent:** Booking is a high-risk action. False booking is a control failure.
- **What public evidence qualifies:** A live scheduler that shows real inventory *without creating a booking*, or an explicit `directBookingAvailable: true` plus matching human UI. If you cannot observe inventory without writing, stop and write **Requires business confirmation**.
- **What constitutes conflicting evidence:** “Book online” with no scheduler; a contract that sets booking false next to ReserveAction schema.
- **What “not observed” means:** No booking system is visible.
- **What must not be assumed:** That a Calendly-style embed is authorized for agents, or that every service business should book online. If booking is the wrong model, label **Not applicable** or **Intentionally unavailable**.
- **Layer:** Action

### A5 — Pricing

- **What is evaluated:** Whether the business publishes prices an agent could honestly state, or a price-request path that is not a quote.
- **Why it matters to an AI agent:** Invented prices destroy trust.
- **What public evidence qualifies:** Published price lists, “starting at” figures on the business’s own site, capability `pricingAvailable`, explicit “we do not quote before a visit.”
- **What constitutes conflicting evidence:** Directory prices that the site never shows; “see pricing” that opens a contact form.
- **What “not observed” means:** No prices are published. Common and often correct.
- **What must not be assumed:** Typical job cost, or that Foundation / competitor pricing applies to this business.
- **Layer:** Action

### A6 — Checkout / purchase

- **What is evaluated:** Whether a customer can pay or place an order online.
- **Why it matters to an AI agent:** Checkout is commerce, not consult. Most high-trust service businesses should not be described as buyable.
- **What public evidence qualifies:** A cart / checkout flow visible without completing a purchase, or `checkoutAvailable: true`.
- **What constitutes conflicting evidence:** Offer schema with a price and availability when no checkout exists.
- **What “not observed” means:** No checkout. Often **Not applicable**.
- **What must not be assumed:** Payment processors, or that adding checkout would raise maturity.
- **Layer:** Action

### A7 — Public APIs and protected action endpoints

- **What is evaluated:** Whether a machine-callable action exists, what it does, and whether it is protected and honestly scoped.
- **Why it matters to an AI agent:** This is the Action layer that Foundation Build does **not** automatically include.
- **What public evidence qualifies:** A documented public capability or API URL that describes one action; published constraints; owner statements that no autonomous endpoint exists.
- **What constitutes conflicting evidence:** Marketing “agent-ready checkout” with only a contact form; a discovery file that lists an action URL that 404s on GET.
- **What “not observed” means:** No public action API. Default for most businesses. Not a penalty.
- **What must not be assumed:** That an API route you found by guessing exists, or that you may POST to prove it. GET the discovery document only.
- **Layer:** Action

### A8 — MCP or similar tool interfaces

- **What is evaluated:** Whether the business publishes an MCP server or equivalent tool interface, and whether it is bound to real permissions.
- **Why it matters to an AI agent:** MCP without a reconciled business is a dangerous component, not a maturity upgrade.
- **What public evidence qualifies:** A published MCP endpoint or docs the business owns. Kodecite production copy treats MCP as a future delivery surface, not the product.
- **What constitutes conflicting evidence:** “We have MCP” with no owned description of what tools may do.
- **What “not observed” means:** No MCP. Expected. Label **Not publicly observable** or **Not applicable**, not Missing, unless the business claims MCP and you cannot find it.
- **What must not be assumed:** That MCP is required, or that Kodecite should recommend it from a review alone.
- **Layer:** Action

### A9 — Browser-agent path

- **What is evaluated:** Whether a careful browser agent could complete a *permitted* human path without guessing hidden fields — and whether that would still be the wrong kind of automation.
- **Why it matters to an AI agent:** Some agents operate by driving websites. Usability is not authorization.
- **What public evidence qualifies:** Visible labels, stable form structure, honest button language. Observe only.
- **What constitutes conflicting evidence:** A bot-friendly form that claims a booked result.
- **What “not observed” means:** The human path is not usable enough to describe, or you stopped to avoid a write.
- **What must not be assumed:** That browser automation is approved. Never complete the form “to see what happens.”
- **Layer:** Action

---

## Layer 5 — Distribution

How people, search, and agents find the same truth. Delivery surfaces are not the product category.

### D1 — Website as human-facing system

- **What is evaluated:** Whether a customer can learn identity, services, geography, and the next step from ordinary pages.
- **Why it matters to an AI agent:** Agents still read sites. A site that cannot explain the business to a person will not explain it to a machine.
- **What public evidence qualifies:** Working public pages for home, services, area, about, contact.
- **What constitutes conflicting evidence:** Thin pages that disagree with each other; a site that is only a splash page plus a form.
- **What “not observed” means:** No usable public site, or the submitted URL does not resolve.
- **What must not be assumed:** That a beautiful site is machine-usable, or that WordPress / Wix / Squarespace is invisible to every crawler.
- **Layer:** Distribution

### D2 — Search presence

- **What is evaluated:** Whether the business is findable enough that an agent *could* encounter the owned site or a matching profile — not whether it ranks.
- **Why it matters to an AI agent:** If the owned record cannot be found, the agent uses whoever is easier to retrieve.
- **What public evidence qualifies:** The site appears for the business’s own name; a matching public profile exists. Optional: published discovery screenshots the business or Kodecite has already released.
- **What constitutes conflicting evidence:** Search results that attach the name to a different company or address.
- **What “not observed” means:** You could not confirm a name-level presence. That is not a ranking failure.
- **What must not be assumed:** Rankings, AI Overview citations, or that visibility will follow any engagement.
- **Layer:** Distribution

### D3 — Canonicals and sitemap

- **What is evaluated:** Whether the site publishes a coherent URL set (canonical tags, `sitemap.xml`, `robots.txt`) that points at the same pages a human uses.
- **Why it matters to an AI agent:** Duplicate URLs and blocked important pages make agents pick stale or thin copies.
- **What public evidence qualifies:** GET `/robots.txt`, GET sitemap URL declared there, visible canonical link tags on key pages.
- **What constitutes conflicting evidence:** Sitemap lists URLs that redirect elsewhere or 404; robots blocks the pages the business wants understood.
- **What “not observed” means:** No sitemap or robots file. The site may still be crawlable.
- **What must not be assumed:** That a sitemap guarantees indexing, or that every AI crawler honors robots.
- **Layer:** Distribution

### D4 — Structured data and entity graph

- **What is evaluated:** Whether published JSON-LD / microdata states the same identity, services, and geography as the visible page — and whether nodes connect.
- **Why it matters to an AI agent:** Structured data is a language. It helps when it matches. It harms when it lies.
- **What public evidence qualifies:** View-source or public JSON-LD on key pages; stable `@id`s; Organization / Service / Place graph that agrees with copy.
- **What constitutes conflicting evidence:** Markup for a different city, leftover template data, Offer / Reserve actions the business does not support.
- **What “not observed” means:** No structured data found. That is incomplete distribution, not proof the business is false.
- **What must not be assumed:** That schema existence equals agent readiness, or that every system consumes JSON-LD.
- **Layer:** Distribution

### D5 — External profiles

- **What is evaluated:** Public profiles that an agent might treat as equally authoritative.
- **Why it matters to an AI agent:** Profiles are often easier to retrieve than owned pages. They must corroborate, not compete.
- **What public evidence qualifies:** GBP, professional directories, manufacturer locators — public view only.
- **What constitutes conflicting evidence:** See T8 / T9.
- **What “not observed” means:** No profile found, or identity could not be matched.
- **What must not be assumed:** Review velocity, or that you should create profiles during the review.
- **Layer:** Distribution

### D6 — `llms.txt`

- **What is evaluated:** Whether a `/llms.txt` (and optional `llms-full.txt`) exists and agrees with the site.
- **Why it matters to an AI agent:** Some systems look for this file. Many do not. It is a delivery surface.
- **What public evidence qualifies:** Successful GET of `https://{domain}/llms.txt` whose facts match the site.
- **What constitutes conflicting evidence:** File lists services, cities, or actions the site does not; stale phone or offer.
- **What “not observed” means:** File absent or empty. **Not publicly observable** that any given model uses it.
- **What must not be assumed:** That publishing `llms.txt` makes AI know the business, or that missing it means AI cannot read the site.
- **Layer:** Distribution

### D7 — `agent.json` / `agents.json`

- **What is evaluated:** Whether an agent-discovery file exists, what it claims about actions, and whether that claim is honest.
- **Why it matters to an AI agent:** This file is where businesses over-claim autonomous action.
- **What public evidence qualifies:** GET `/agent.json` or `/agents.json`. Note `autonomous_submission` or equivalent.
- **What constitutes conflicting evidence:** File lists an action endpoint the site denies, or denies an action the capability URL publishes.
- **What “not observed” means:** File absent. Common. Not a moral failure.
- **What must not be assumed:** That any particular agent runtime loads this file.
- **Layer:** Distribution

### D8 — Capability discovery

- **What is evaluated:** Whether a machine can find *what may be requested* without inferring it from marketing.
- **Why it matters to an AI agent:** Discovery of a contract is how an outside agent avoids guessing.
- **What public evidence qualifies:** Public capability URL linked from the site, `llms.txt`, case study, or `agent.json`.
- **What constitutes conflicting evidence:** Discovery URL listed but GET fails; contract for an action the site never offers humans.
- **What “not observed” means:** No capability-discovery surface. Default. Foundation work may later add a map without adding an endpoint.
- **What must not be assumed:** That a capability map is a live POST endpoint.
- **Layer:** Distribution

### D9 — Protected APIs as distribution

- **What is evaluated:** Whether a protected action, if it exists, is discoverable as a contract and not merely hidden in source.
- **Why it matters to an AI agent:** An unpublished endpoint cannot be used safely by an outside agent. A published unprotected one cannot be used safely either.
- **What public evidence qualifies:** Public contract that describes execution without exposing secrets.
- **What constitutes conflicting evidence:** Blog claims a live agent API with no discovery URL.
- **What “not observed” means:** No protected API is published. Do not port-scan or guess routes.
- **What must not be assumed:** Internal routes, environment names, or that Foundation includes this.
- **Layer:** Distribution

### D10 — Browser-agent usability of distribution surfaces

- **What is evaluated:** Whether important facts are available as readable HTML / JSON, not only as images, PDFs, or client-only widgets.
- **Why it matters to an AI agent:** Facts trapped in an inaccessible widget are facts an agent may skip or invent.
- **What public evidence qualifies:** Key facts appear in page text or public JSON. Note heavy client-only rendering as a risk, not as “invisible to all crawlers.”
- **What constitutes conflicting evidence:** Visible design claims that contradict the HTML text.
- **What “not observed” means:** You could not read the fact without interacting in a forbidden way.
- **What must not be assumed:** That WordPress / Wix / Squarespace pages are blank to every AI crawler. Production FAQ: they are not.
- **Layer:** Distribution

### D11 — Human ↔ machine agreement

- **What is evaluated:** The whole-system check: do website, profiles, discovery files, and any capability contract tell the same story about identity, services, geography, policies, permissions, and actions?
- **Why it matters to an AI agent:** This is Kodecite’s production agreement rule. Disagreement is where agents guess.
- **What public evidence qualifies:** A filled evidence log that can be read side by side. This item is the synthesis, not a new crawl.
- **What constitutes conflicting evidence:** Any material mismatch across layers.
- **What “not observed” means:** Not enough surfaces exist to compare. State that plainly.
- **What must not be assumed:** That agreement on Truth implies Action is safe, or that a live action implies the human site is complete.
- **Layer:** Distribution (synthesis across all five)

---

## Applying labels in mixed cases

A business may be **Verified and operational** on Truth and **Intentionally unavailable** on booking. That is a coherent system, not a low score.

A business may have `llms.txt` (**Verified and operational** as a file) and still be **Not publicly observable** as “read by ChatGPT.” Do not merge those.

If one layer is strong and another is guessed, keep them separate. See [maturity-model.md](./maturity-model.md).

---

## Offer mapping is not part of the evidence

Methodology stops at what is true and what is observable. Which Kodecite offer, if any, fits the gaps is a later judgment in [offer-mapping.md](./offer-mapping.md). Do not let a desired offer change a label.
