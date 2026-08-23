# Agent Readiness Review — Operator Runbook

**Classification:** INTERNAL.  
**Operator:** Mark Abplanalp.  
**Target working time:** about 60–90 minutes once familiar.  
**Customer SLA:** written report within two business days.  
**Quality rule:** never sacrifice evidence quality for speed. If the record is messy, take the extra time.

Follow these steps in order. Use [methodology.md](./methodology.md) for item rules and [maturity-model.md](./maturity-model.md) for stages.

---

## Before you start

- Work from the existing `/machine-read` submission. Do not ask the prospect to fill a second public form unless a submitted URL is unusable.
- Copy [evidence-log-template.md](./evidence-log-template.md) to a **private** working file (local notes, not this repo).
- Copy [report-template.md](./report-template.md) when you are ready to write.
- Safe **GET** only. Never submit their forms, create appointments, send them email as a “test,” or POST to a production action endpoint.
- Do not store tokens, secrets, Redis IDs, private payloads, or extra personal data.

If you cannot finish honestly in one sitting, pause after Step 8 with URLs and dates recorded. Resume. Do not fill gaps from memory.

---

## Step 1 — Confirm the submitted business and website

**Goal:** Review the business they asked you to review.

1. Read the submission: business name, website, and any note they sent.
2. Open the submitted URL in a normal browser.
3. Confirm the live site matches the submitted name (or record the mismatch as a Truth conflict).
4. If the URL redirects, record both URLs. Review the **canonical public site**, and note the redirect.
5. If the site is down, parked, or obviously the wrong company, stop the technical review. Write a short report that the site could not be reviewed, and ask for a corrected URL. That is still a completed review.

**Do not:** start reviewing a better-looking related domain you found in search unless they submitted it.

---

## Step 2 — Record only necessary public information

**Goal:** Identify the business without building a prospect dossier.

Record:

- Submitted business name
- Canonical website URL
- Review date (the day you inspect, not the day they submitted, if those differ)
- Public locality if the site states one (city / region only)
- Public contact *paths* (phone exists / form exists) — not a CRM export

Do **not** record:

- Extra people from the form who are not needed to identify the business
- Payment details, tokens, or anything that looks like a secret
- Screenshots that contain their submitted email sitting in your inbox header, if that header is unnecessary

If they sent a long note, keep only facts about the business. Do not paste the whole message into the client report.

---

## Step 3 — Inspect the human-facing website

**Goal:** See what a careful customer would understand.

Visit, at minimum:

- Home
- About (if present)
- Services / products (or the equivalent)
- Areas / locations (if present)
- Contact / book / consult
- Footer and any policy / FAQ / privacy pages linked from the footer

Read as a person first. Note:

- Who they are
- What they sell or perform
- Where they work
- What they ask the customer to do next
- What they say they will not do

Do not score design, Lighthouse, or “AI vibe.”

---

## Step 4 — Identify canonical identity, services, geography, policies, and limitations

**Goal:** Write the authoritative human record *as the site states it*.

Produce five short internal statements:

1. **Identity:** “This business presents itself as …”
2. **Services:** “They explicitly offer …”
3. **Geography:** “They explicitly serve … and they say they do not / do not say.”
4. **Policies:** “Published rules include …”
5. **Limitations:** “Published refusals include …”

Mark each statement **Verified and operational** (stated on the site) or **Not publicly observable**.

These statements become the baseline for later conflict checks. Do not improve them with industry knowledge.

---

## Step 5 — Inspect machine-readable surfaces

**Goal:** See what a machine is *offered*, not what you hope it reads.

Safe GET / view-source only:

- `/robots.txt`
- Sitemap declared by robots (if any)
- Canonical link tags on key pages
- JSON-LD / visible structured data on home, a service page, a location page, contact
- `/llms.txt` and `/llms-full.txt` if present
- `/agent.json` and `/agents.json` if present
- Any capability or API discovery URL **linked or published** by the business (or already published in a public Kodecite case study for that business)

For each file: does it agree with Step 4?

Do **not** claim that ChatGPT, Gemini, or any other system consumes the file.

Do **not** guess API routes that are not published.

---

## Step 6 — Inspect public corroborating profiles

**Goal:** Triangulate, not “do local SEO.”

Search the exact business name plus the published city.

Open public views only:

- Google Business Profile (or note that you could not confirm the same entity)
- One or two major directories or manufacturer locators if the site claims them
- Published reviews only as corroboration of *named services and towns*, not as a rating score

Record matches and conflicts. Do not create, claim, or message a profile.

---

## Step 7 — Safe GET only

**Hard stop.**

Allowed:

- Opening public pages
- GET on published machine files and published capability discovery URLs
- Viewing source / public JSON

Forbidden:

- Submitting contact, consult, booking, or checkout forms
- Clicking a control that creates an appointment, sends email, or charges a card
- Production POST / PUT / PATCH / DELETE
- Replaying Luxe or any other authorized test
- Driving a browser agent to “complete the funnel”
- Using credentials, test inboxes, or internal smoke-test tools against their production system

If a fact can only be learned by writing, label it **Requires business confirmation** or **Not publicly observable**.

---

## Step 8 — Record evidence URLs and the observation date

**Goal:** Every later claim has a pointer.

For each material fact, fill one evidence-log row:

- URL
- Surface type
- Date checked (today)
- Observed fact
- Conflicting evidence (or none)
- Confidence
- Layer
- Screenshot or source note (optional; no PII)
- Verified fact vs inference
- Follow-up question (if any)

If you cannot cite a URL, you do not have a verified fact.

---

## Step 9 — Separate verified facts from inference

**Goal:** Keep your experience out of their record.

Read the log. Mark each row:

- **Verified fact:** stated on a public surface you opened
- **Inference:** something you believe as an operator

Inferences do not enter the client report as facts. They may become **Requires business confirmation** questions.

Examples of inference to strip:

- “They are probably licensed.”
- “That Book button likely emails Mark.”
- “Agents will find the `llms.txt`.”
- “They need a production action endpoint.”

---

## Step 10 — Identify contradictions

**Goal:** List disagreements that would change a recommendation or an action.

Write a short conflict register:

| Topic | Source A | Source B | Why it matters |
| --- | --- | --- | --- |
| | URL + quote | URL + quote | Service / city / action / policy |

If there are no material conflicts among surfaces you checked, write that. Do not claim the entire internet agrees.

---

## Step 11 — Determine maturity by layer

**Goal:** Stage the system, not the people.

Assign one stage per layer using [maturity-model.md](./maturity-model.md):

- Truth
- Capability
- Control
- Action
- Distribution

Rules:

- No single overall number
- Control cannot exceed what is publicly observable
- Appropriate absence of booking / checkout is not a demotion
- Discovery files alone cannot produce Controlled production for autonomous action

---

## Step 12 — Identify the three highest-priority gaps

**Goal:** Three, not thirty.

Choose gaps that most change what AI can understand, verify, recommend, or safely do.

Priority usually follows the model:

1. Truth conflicts and missing geography / services
2. Capability honesty (success / non-success, eligibility)
3. Control and false-action language
4. Distribution agreement
5. A defined action — only if truth is already coherent

Do not pick “add MCP,” “add checkout,” or “get cited in ChatGPT” as a default top-three.

---

## Step 13 — Map each gap to a correct Kodecite offer — or none

**Goal:** Honest commercial boundary.

Use [offer-mapping.md](./offer-mapping.md).

For each of the three gaps, write one of:

- Foundation Build ($4,995) — truth, owned site, entity graph, discovery, capability **map**. **No automatic protected production action.**
- Agent Capability Build — only if truth is reconciled and one real action is selected
- Platform Capability Layer — Pilot — only for selected WP / Wix / Squarespace-like cases; business-owned sidecar; not universally proven
- No engagement recommended yet
- Business clarification required before technical work
- Existing infrastructure is currently sufficient

Do not map every gap to a sale.

---

## Step 14 — Produce the client-facing report

**Goal:** A document they can use without hiring Kodecite.

Write from [report-template.md](./report-template.md) in plain English.

Include every required section. Keep the evidence appendix readable. Do not attach your raw private inbox. Do not turn every paragraph into a proposal.

Working time for this step is part of the 60–90 minutes once the template is familiar. If writing runs long, that is preferable to a thin report.

---

## Step 15 — Final unsupported-claim and privacy review

**Goal:** Nothing ships that you cannot defend.

Read the report once as a skeptic:

- [ ] Every factual sentence can be traced to the evidence log
- [ ] “Not publicly observable” was not written as “you don’t have X”
- [ ] No claim that every AI system reads a file or will cite them
- [ ] No implied booking, price, or checkout
- [ ] Foundation is never described as including a production action endpoint
- [ ] Platform sidecar is business-owned, Kodecite-built, pilot, not universal
- [ ] No prospect email, phone, or form payload appears unless they need it to recognize their own business — prefer business name and URL only
- [ ] No tokens, secrets, Redis IDs, request IDs, or test payloads
- [ ] Calibration reports were not pasted in as if they were this customer’s proof
- [ ] Three gaps and the recommended next step agree with [offer-mapping.md](./offer-mapping.md)

Then send the report through the normal human reply path you already use. This package does not add email sending.

---

## Time box (guidance, not a quota)

Once familiar, a clean review often looks like:

| Steps | Approximate share of 60–90 min |
| --- | --- |
| 1–4 Human site and canonical facts | 20–25 min |
| 5–6 Machine surfaces and profiles | 15–20 min |
| 7–10 Log, facts vs inference, conflicts | 10–15 min |
| 11–13 Maturity, gaps, offer mapping | 10–15 min |
| 14–15 Report and final review | 15–20 min |

A conflicted or thin site takes longer. Use the two-business-day SLA; do not invent clarity to hit 60 minutes.

---

## If you are stuck

- Wrong site or offline site → short report + clarification (Step 1).
- Fact only available by submitting → **Requires business confirmation**.
- Tempted to POST “just once” → stop. See Step 7.
- Tempted to recommend Agent Capability Build because the category is exciting → reread [offer-mapping.md](./offer-mapping.md).
- Tempted to use Luxe as proof that this customer already has a live endpoint → they do not, unless their public evidence shows it.
