# LeadSniper Content Operating System

**Status:** Governing standard  
**Applies to:** Human contributors, ChatGPT, Codex, Claude, Claude Code, Gemini, Kimi, local models, and automated content workflows  
**Product:** LeadSniper Marketplace  
**Last updated:** July 12, 2026

## Purpose

The Content Operating System (COS) governs how LeadSniper researches, prioritizes, produces, validates, publishes, measures, refreshes, consolidates, and retires content.

It is model-agnostic. Model-specific prompts may explain how to execute this standard, but they may not weaken or contradict it.

The operating objective is to create accurate, commercially useful Canadian business-financing content that:

1. Helps business owners make informed financing decisions.
2. Captures high-intent organic search demand.
3. Can be reliably retrieved and cited by AI systems.
4. Generates qualified funding-assessment submissions.
5. Strengthens the LeadSniper content graph.
6. Remains accurate through documented review cycles.

## Authority hierarchy

When requirements conflict, use this order:

1. Legal, privacy, regulatory, accessibility, and platform requirements
2. This Content Operating System
3. Approved product, brand, and compliance requirements
4. Approved evidence and source data
5. Page-specific content brief
6. Model-specific execution instructions
7. Stylistic preferences

Agents must flag unresolved conflicts rather than silently following a lower-authority instruction.

## Operating principles

### Commercial intent first

Every indexable page must serve a defined business-financing decision and conversion objective. Compact keywords should normally contain one to three words, with an optional geographic modifier.

### Evidence before claims

Do not invent rates, statistics, lender terms, program requirements, approvals, testimonials, partnerships, or case outcomes.

Time-sensitive claims require a source, effective date, jurisdiction, reviewer, and next-review date. When current data cannot be verified, label it for review rather than estimating it as fact.

### One canonical intent per page

Every page requires:

- one primary keyword
- one primary search intent
- one canonical URL
- one parent topic
- defined supporting terms
- documented relationships to existing pages

The production workflow must identify cannibalization risks before drafting.

### Specificity over programmatic scale

Industry and geographic pages must contain materially specific eligibility, use-case, market, or regulatory information. Pages may not be created by merely substituting an industry, province, or city name.

### Human and AI readability

Important answers must be direct, self-contained, written in plain language, correctly attributed, and organized under descriptive headings. A retrieved passage should remain understandable outside the full page.

### Conversion without misrepresentation

Calls to action may invite visitors to explore funding options, complete an assessment, request a review, compare potential financing paths, or schedule a discovery conversation.

They must not promise approval, funding, a particular rate, or lender acceptance.

### Connected content graph

Every indexable page must connect to its homepage, parent category, related products, relevant comparison, applicable industry and location content, supporting education, and funding assessment.

### Continuous maintenance

Content is a maintained product asset. Technical health, search performance, conversion performance, and financial accuracy require scheduled review.

## Content production workflow

```text
Research
→ Intent and SERP analysis
→ Domain and content-gap analysis
→ WARM and ROI scoring
→ Content brief
→ Draft and supporting assets
→ Evidence and compliance review
→ SEO, link, accessibility, and schema validation
→ Human approval
→ Publication
→ 72-hour technical validation
→ 21-day tuning
→ 90-day performance and accuracy review
```

Research and validation may not be bypassed merely to increase publishing speed.

## Required content brief

Before drafting, record:

- content type
- primary keyword and intent
- secondary attributes
- target audience
- product, industry, and geography
- reader decision
- target and canonical URLs
- parent and related pages
- conversion objective
- approved sources
- variable claims and effective dates
- exclusions and prohibited claims
- reviewer
- measurement plan

## Supported content types

- Product landing page
- Industry page
- Location page
- Comparison page
- Guide or blog article
- Calculator or interactive resource
- Supporting distribution asset

Articles must support, not cannibalize, their parent commercial page.

## Compact keyword production requirements

Full compact-keyword strategy packages should include:

1. A shortlist of 15–30 compact terms
2. Search intent, geography, notes, and negatives
3. WARM scoring and the Sprint 1 top six
4. Domain and competitive gap analysis
5. Modeled ROI projections
6. Quick wins versus strategic opportunities
7. URL and metadata map
8. Publication-ready page drafts
9. Page-specific JSON-LD
10. Internal-link map
11. GBP, short-video, outreach-email, and social assets
12. Shared negatives and exclusions
13. Pre-publish, 72-hour, 21-day, and 90-day QA
14. Measurement and refresh plan

Modeled ROI must show its assumptions. A recommended model is:

```text
Projected visits = search volume × expected organic CTR
Projected conversions = projected visits × conversion proxy
Traffic value = projected visits × CPC
Projected lead value = projected conversions × approved lead-value proxy
```

Observed keyword data and modeled estimates must never be presented as the same thing.

## WARM prioritization

Score each candidate using:

- **W — Win Probability:** competition, current authority, and ranking feasibility
- **A — Action Intent:** commercial proximity and assessment likelihood
- **R — Revenue Proxy:** CPC, partner value, and approved lead-value assumptions
- **M — Market Fit:** product alignment, demand, and strategic relevance

Initial weighting:

| Dimension | Weight |
|---|---:|
| Win Probability | 25% |
| Action Intent | 30% |
| Revenue Proxy | 25% |
| Market Fit | 20% |

Missing inputs reduce confidence; they must not silently become zero. Manual overrides require a recorded reason.

## Drafting standards

Every landing page must address, where applicable:

- what the financing is
- who it is for
- common uses
- eligibility
- amounts and pricing structure
- timing
- security
- required documents
- benefits and limitations
- alternatives
- process
- illustrative scenario
- frequently asked questions
- funding-assessment transition
- sources, reviewer, dates, and disclosure

Every supporting article must answer its primary question quickly, provide a decision framework, link to its parent commercial page, and avoid duplicating the parent page's principal intent.

## SEO and AI-retrieval standards

Each page requires:

- unique title and meta description
- self-referencing canonical URL
- one H1 and logical heading hierarchy
- descriptive internal anchors
- breadcrumbs
- indexability and sitemap rules
- concise, self-contained answers
- source attribution and review dates
- appropriate structured data based on visible content

Do not add Review, AggregateRating, FAQPage, or Article schema unless the visible content qualifies.

Use `/llms.txt` for the site-level LLM-readiness file. Maintain page-level content so important answers remain useful without relying on this file.

## Conversion and measurement

Preserve the originating keyword, content type, landing page, campaign parameters, and referral context through the assessment.

Track:

- impressions
- clicks and CTR
- average position
- CTA impressions and clicks
- assessment starts and completions
- qualified opportunities
- funding-partner referrals
- cost per lead
- revenue attribution

Sensitive financial responses must not be sent to general analytics systems.

## Quality gates

Content may be marked **READY TO PUBLISH** only when:

- intent is clear and distinct
- content is materially useful and original
- factual claims are supported
- variable data is dated
- metadata is unique and within limits
- schema matches visible content
- required internal links are present
- disclosures and reviewer information are included
- conversion tracking is defined
- no unresolved cannibalization issue exists
- human review is complete where required

## Required output states

Every content task must end with one status:

- **READY TO PUBLISH**
- **READY AFTER LISTED CORRECTIONS**
- **RESEARCH REQUIRED**
- **BLOCKED BY CONFLICTING REQUIREMENTS**

List all unresolved claims, missing evidence, required corrections, and human decisions.

## Review cadence

### Within 72 hours

- confirm rendering and indexability
- validate canonical URL and structured data
- test internal links and assessment attribution
- verify analytics events

### After 21 days

- review impressions, CTR, indexing, and observed queries
- improve titles and descriptions
- expand FAQs only when supported by real demand
- correct unexpected internal-link or conversion behavior

### Every 90 days

- verify financial claims and variable data
- review rankings, CTR, conversions, and attributed revenue
- consolidate cannibalizing content
- improve underperforming sections
- recalculate WARM and ROI scores
- refresh, redirect, merge, or retire content as evidence requires

## Multi-LLM execution

All models must preserve this standard. If a model lacks browsing, keyword intelligence, repository access, analytics, or schema validation, it must:

1. Complete only the work it can perform reliably.
2. Label assumptions and modeled estimates.
3. Identify unavailable verification.
4. Never present an estimate as observed data.
5. Return a verification checklist.

### Claude and Claude Code

Inspect repository context, registries, routes, schemas, and existing pages before editing. Plan the affected files, implement the smallest complete change, run available validation, and report files changed, sources used, tests performed, unresolved claims, and publishing status.

### ChatGPT and Codex

Separate verified facts, assumptions, and recommendations. Use current authoritative Canadian sources when tools permit. Produce the requested content package and finish with a publishing-status verdict.

### Models without live research

Do not invent current facts or citations. Mark time-sensitive fields for verification, label projections as modeled, and return a research checklist with the draft.

## Command palette

- `/research` — domain, SERP, competitor, keyword, and gap research
- `/score` — WARM scoring, ROI modeling, and prioritization
- `/draft` — content brief, page copy, metadata, URLs, and schema
- `/assets` — GBP, video, outreach, and social assets
- `/iterate` — evidence-based performance revisions
- `/negatives` — exclusions and negative-keyword governance

## Human accountability

AI systems may research, recommend, draft, analyze, and validate. An authorized human reviewer remains accountable for material financial claims, compliance decisions, publishing approval, and representations about lenders, programs, rates, or eligibility.
