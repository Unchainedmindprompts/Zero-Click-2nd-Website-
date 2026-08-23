# Agent Readiness Review — Evidence Log Template

**Classification:** INTERNAL worksheet.  
**Do not commit** completed logs that contain prospect submissions, customer PII, tokens, secrets, Redis IDs, or private test payloads.

Copy this file privately for each review. The client-facing appendix is a cleaned subset — see [report-template.md](./report-template.md).

---

## Review header

| Field | Value |
| --- | --- |
| Business reviewed | |
| Canonical website | |
| Submitted URL (if different) | |
| Review date | |
| Operator | Mark Abplanalp |
| Related methodology version | `docs/agent-readiness-review/` in this repo |

**Necessary public identifiers only.** Prefer business name, website, and published city / region. Do not paste the prospect’s inbox thread.

---

## How to fill a row

| Field | Instruction |
| --- | --- |
| **URL** | Exact page or file you opened. |
| **Surface type** | Website page · Policy page · JSON-LD · `robots.txt` · Sitemap · `llms.txt` · `agent.json` · Capability discovery · External profile · Published case study · Other public GET |
| **Date checked** | The calendar date of the GET / visit. |
| **Observed fact** | Quote or close paraphrase of what the surface *says*. No improvement. |
| **Conflicting evidence** | URL + disagreement, or “None observed among surfaces checked.” |
| **Confidence** | High (direct statement) · Medium (clear but incomplete) · Low (ambiguous) |
| **Layer** | Truth · Capability · Control · Action · Distribution |
| **Screenshot or source note** | Optional. Describe where on the page. No form values, cookies, or auth headers. |
| **Verified fact vs inference** | **Verified fact** or **Inference** |
| **Follow-up question for the business** | Only if the fact cannot be closed from public evidence |

**Guardrail label** (add in notes or a final column): Missing · Contradictory · Not publicly observable · Not applicable · Intentionally unavailable · Requires business confirmation · Verified and operational

---

## Privacy red lines

Never put in this log:

- Credentials or session tokens
- Private form submissions (yours or theirs)
- Emails copied from test payloads
- Secrets, API keys, webhook URLs that are not meant to be public
- Redis IDs or other storage internals
- Full request IDs from private tests
- Unnecessary PII (home addresses of private individuals, extra phone numbers, children’s names, medical detail)

If a published capability contract lists field *names*, record the names. Never record field *values*.

---

## Log

Duplicate the empty row as needed.

### Entry

| Field | Value |
| --- | --- |
| URL | |
| Surface type | |
| Date checked | |
| Observed fact | |
| Conflicting evidence | |
| Confidence | |
| Layer | |
| Screenshot or source note | |
| Verified fact vs inference | |
| Guardrail label | |
| Follow-up question for the business | |

### Entry

| Field | Value |
| --- | --- |
| URL | |
| Surface type | |
| Date checked | |
| Observed fact | |
| Conflicting evidence | |
| Confidence | |
| Layer | |
| Screenshot or source note | |
| Verified fact vs inference | |
| Guardrail label | |
| Follow-up question for the business | |

### Entry

| Field | Value |
| --- | --- |
| URL | |
| Surface type | |
| Date checked | |
| Observed fact | |
| Conflicting evidence | |
| Confidence | |
| Layer | |
| Screenshot or source note | |
| Verified fact vs inference | |
| Guardrail label | |
| Follow-up question for the business | |

---

## Conflict register

| Topic | Source A (URL + quote) | Source B (URL + quote) | Why it matters | Follow-up |
| --- | --- | --- | --- | --- |
| | | | | |

---

## Layer roll-up (internal)

Complete after the log, using [maturity-model.md](./maturity-model.md).

| Layer | Stage | Guardrail summary | Notes |
| --- | --- | --- | --- |
| Truth | | | |
| Capability | | | |
| Control | | | |
| Action | | | |
| Distribution | | | |

**Do not average these into one score.**

---

## Three highest-priority gaps (internal draft)

1.
2.
3.

Offer or non-offer mapping (see [offer-mapping.md](./offer-mapping.md)):

1.
2.
3.

---

## Final privacy check

- [ ] No prospect payload committed or pasted into a public PR
- [ ] No secrets or storage IDs
- [ ] Inferences are labeled and will not be written as facts in the client report
