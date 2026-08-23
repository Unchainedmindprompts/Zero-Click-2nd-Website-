# Agent Readiness Review — Client Report Template

**Classification:** Client-facing output. Write in plain English.  
**Internal instructions (delete before sending) are in italics.**

The customer keeps this report either way. It must be useful if they never hire Kodecite. Do not turn every finding into a sales pitch.

Fill every required section. If a section has no evidence, say so — do not omit the heading.

---

# Agent Readiness Review

## Business reviewed

*{Legal or operating name as they submitted it, plus the name on the site if different.}*

## Website

*{Canonical public URL you reviewed.}*

## Review date

*{Date the public surfaces were checked.}*

---

## Executive summary

*{4–8 sentences. Answer the core question: What can AI reliably understand, verify, recommend, and safely do with this business today?}*

*{State the website vs digital-business-layer idea in one plain sentence: people see a website; machines need the same facts, rules, and next step.}*

*{Name maturity by layer in one short paragraph — mixed is fine. No numeric score.}*

*{Close with what is going well and the single most important caution. Not a pitch.}*

---

## Current maturity by layer

*{One short paragraph per layer. Use the client language from maturity-model.md. Do not invent a sixth layer. Do not average.}*

| Layer | Current stage | In plain English |
| --- | --- | --- |
| Truth | *Fragmented / Understandable / Verifiable / Recommendable / …* | *What is true, and whether it agrees.* |
| Capability | | *What can be requested, and what success does not mean.* |
| Control | | *What the business will not pretend — only if publicly visible.* |
| Action | | *What a customer or agent can actually do today.* |
| Distribution | | *Whether people, search, and machine files tell the same story.* |

*{If one defined action is in Controlled production, say that it applies to that action only.}*

---

## What AI can understand today

*{Identity, services, geography, and people — as published. Quote the business’s own wording where it helps. If understanding depends on a human reading the site, say that. Do not claim every AI system has read it.}*

---

## What AI can verify today

*{Which facts can be checked against a second public source or a matching machine file. Name the sources. If verification is weak, say so.}*

---

## What AI may still misunderstand or invent

*{The guess list. Typical inventions: extra services, extra cities, licenses, prices, booked visits, project acceptance. Tie each risk to a missing or contradictory public fact.}*

*{Use phrases like “not publicly observable” in plain English: “We could not see X on the public site, so an AI system should not assume it.” Never write “you don’t have X” unless absence was proven.}*

---

## What a customer or agent can accomplish today

*{Concrete next steps that exist now: call, form, published consult request, etc.}*

*{If a machine-readable action exists, describe only what the public contract allows. If it does not, say the path is human-facing.}*

*{State booking, pricing, and checkout honestly: available, intentionally unavailable, not applicable, or not publicly observable.}*

---

## What still requires a human

*{Scheduling, quoting, product choice, exceptions, commercial review, warranty, anything the site or contract leaves to a person. Treat this as a feature when it is the real business model.}*

---

## Control and trust gaps

*{False booking / pricing / checkout language. Missing validation or handoff *as far as the public record shows*. Do not claim hidden controls exist. Do not claim hidden controls are missing as if that were proven.}*

*{If controls are not publicly observable, write that an outside agent cannot know they exist.}*

---

## Three highest-priority improvements

1. **{Improvement}** — {Why it changes what AI can understand, verify, recommend, or safely do. One or two sentences.}
2. **{Improvement}**
3. **{Improvement}**

*{Exactly three. Not a laundry list. Not “rank higher in ChatGPT” unless that is somehow the actual evidence problem — it almost never is.}*

---

## Recommended next step

*{One of the honest outcomes. Use offer-mapping.md. Pick one primary outcome.}*

**Choose and keep one heading:**

### No engagement recommended yet

*{Why watching, clarifying, or doing their own cleanup is the honest step.}*

### Business clarification required before technical work

*{The questions that must be answered. Do not start a build in this paragraph.}*

### Existing infrastructure is currently sufficient

*{What already works. What they can ignore. Optional: a small self-serve cleanup that is not a Kodecite project.}*

### Foundation Build — $4,995

*{Only if the gap is owned website, canonical truth, entity graph, discovery, and a capability map.}*

The Foundation Build is a one-time owned website, truth, and discovery foundation. It includes a capability **map**. It does **not** automatically include a protected production action endpoint.

### Agent Capability Build (separately scoped; no published price)

*{Only if truth is reconciled, one real action is selected, rules are known, success is defined, and controls / handoff are possible. Say that this is not included in $4,995.}*

### Platform Capability Layer — Pilot (application-only)

*{Only for selected WordPress / Wix / Squarespace-like cases. State that a Kodecite-built sidecar would be **business-owned**, on infrastructure and a domain they control; that this is a founding pilot, not universally proven; and that a full Next.js rebuild is still the strongest path.}*

*{You may mention a secondary path in one sentence (“If you later want one protected action, that would be scoped separately”). Do not attach a second full proposal.}*

---

## Evidence appendix

*{A short table the customer can follow. Cleaned from the evidence log. No extra PII.}*

| URL | Surface | Date checked | What it showed |
| --- | --- | --- | --- |
| | | | |

*{Optional: two or three short quotes, each with a URL.}*

---

## Important limitations

This was an **Agent Readiness Review**, not an SEO audit, not an AEO/GEO score, and not a Lighthouse report.

It is based on **public** pages and files checked on the review date, plus the business name and website you submitted. It does not claim that any particular AI product (ChatGPT, Gemini, Google, or others) currently cites or will cite this business.

Files such as `llms.txt`, `agent.json`, structured data, sitemaps, APIs, or MCP — if they exist — are delivery surfaces. **Not every AI system reads them.** Their absence does not prove a capability does not exist. Their presence does not prove every AI system understands the business.

This review does **not** submit forms, create appointments, send test emails, or call live action endpoints. Some controls can only be confirmed by you.

A later technical engagement, if any, would agree in writing what must be published and what must work. That is an acceptance conversation, not a promise of rankings or citations.

You keep this report either way.

---

## Operator checklist (delete before sending)

- [ ] Title and facts match the submitted business
- [ ] No numeric overall score
- [ ] Five layers use production names: Truth, Capability, Control, Action, Distribution
- [ ] $4,995 never includes a production action endpoint
- [ ] Booking / pricing / checkout not implied
- [ ] No claim every AI finds them
- [ ] Useful if they never hire Kodecite
- [ ] No secrets, request IDs, Redis IDs, or prospect payload
- [ ] Limitations section left intact
