# LeadSniper Marketplace

A multi-tenant Canadian business-funding lead generation, qualification, verification, distribution, and commerce platform.

LeadSniper Marketplace converts consented funding inquiries into voice-verified, human-reviewed, advisor-ready opportunities and routes them to eligible financing professionals through controlled internal, exclusive, or shared distribution.

**Live site:** <https://leadsniper-marketplace.vercel.app> — production deploys automatically from `main`.

## Current status

The public SEO acquisition layer is live with a funding-first homepage and eight prerendered Canadian business-funding pages. The shared domain workflow for moving an inquiry from assessment through funding outcome is implemented in `src/domain/fundingWorkflow.ts` with unit tests.

| Capability | Status |
|---|---|
| Public funding and SEO pages | Live |
| Lead attribution widget | Live |
| Funding workflow domain model | Implemented in PR #17 |
| Workflow protection tests | Implemented in PR #17 |
| `/funding-assessment` funnel | Next build |
| Convex workflow persistence | Planned |
| AI voice discovery | Planned |
| Buyer marketplace and authentication | Planned |
| Stripe lead commerce | Planned |
| Atomic CRM and n8n synchronization | Planned |

### Public pages

| Page | Path |
|---|---|
| Homepage | `/` |
| Business Funding Hub | `/business-funding-canada` |
| Business Line of Credit | `/business-line-of-credit-canada` |
| Equipment Financing | `/equipment-financing-canada` |
| Commercial Mortgage Rates | `/commercial-mortgage-rates-canada` |
| Commercial Mortgage Guide | `/commercial-mortgage-canada` |
| Business Acquisition Financing | `/business-acquisition-financing` |
| Working Capital Loans | `/working-capital-loans-canada` |
| CSBFP Guide | `/canada-small-business-financing-program` |

## Business-funding workflow

The workflow is evidence-driven. A lead cannot advance because a user or integration merely assigns a higher-value label. Consent, verification, intelligence, human review, payment confirmation, and document readiness must satisfy the applicable transition guards.

```text
Assessment started
→ Assessment submitted
→ Consent verified
→ Initially qualified
→ Discovery scheduled
→ Voice verified
→ Intelligence complete
→ Human review pending
→ Advisor ready
→ Listed
→ Reserved
→ Purchased
→ Advisor contacted
→ Documents requested
→ Application ready
→ Application submitted
→ Conditionally approved
→ Approved
→ Funded
```

Alternative outcomes are `nurture`, `declined`, and `withdrawn`.

### What happens after a business owner shows interest

1. **Assessment** — capture the requested amount, use of funds, business history, revenue range, credit band, debt profile, timing, available security, attribution, and contact preferences.
2. **Consent and verification** — record versioned consent, permitted contact channels, distribution permissions, and contact-verification evidence.
3. **Initial qualification** — determine whether the inquiry should proceed, enter nurture, or be declined without exposing it to marketplace buyers.
4. **AI discovery interview** — confirm the business objective, use of proceeds, operating history, financial profile, constraints, urgency, and document readiness.
5. **Intelligence and analysis** — produce an evidence-backed opportunity summary, confidence score, completeness score, risks, strengths, and recommended financing paths.
6. **Human quality review** — approve, correct, request more information, nurture, or reject the opportunity before marketplace publication.
7. **Marketplace matching** — match the sanitized opportunity to eligible buyer organizations by province, financing type, deal size, credentials, capacity, and distribution rules.
8. **Reservation and purchase** — reserve inventory, confirm authoritative Stripe payment, create an access grant, and preserve a complete audit trail.
9. **Advisor handoff** — release protected lead details only to the authorized buyer or internal assignee and enforce contact and status-update service levels.
10. **Application readiness** — collect the financing-specific document package and promote the opportunity only when the required evidence is substantially complete.
11. **Submission and outcome** — track lender submission, conditions, approval, decline, funding, buyer feedback, and final revenue.
12. **Learning loop** — use outcome data to improve qualification rules, pricing, buyer matching, acquisition sources, discovery questions, and marketplace quality.

## Opportunity tiers

| Tier | Evidence required | Commercial use |
|---|---|---|
| **Assessment Lead** | Completed short intake and valid purpose consent | Internal qualification or nurture |
| **Voice-Verified Lead** | Assessment, verified contact, and completed discovery | Verified but not automatically publishable |
| **Advisor-Ready Opportunity** | Intelligence package, confidence/completeness scores, distribution consent, and human approval | Premium marketplace or internal assignment |
| **Application-Ready Opportunity** | Advisor-ready evidence plus substantially complete financing documents | Highest-value submission-ready opportunity |

Tier advancement is derived from evidence and is separate from the workflow stage. Upgrading a lead creates a new qualification snapshot rather than silently changing what a previous buyer purchased.

## Critical protection rules

- No marketplace listing without valid distribution consent.
- Shared distribution requires explicit multiple-professional consent.
- Cross-professional opportunities require separate purpose and distribution consent.
- No advisor-ready status without intelligence evidence and human approval.
- No personal contact information appears in marketplace previews.
- No completed purchase or access grant without authoritative server-side payment confirmation.
- No application-ready status without substantially complete documents.
- Sensitive documents remain private and are not automatically included with a lead purchase.
- Every assignment, view, reservation, purchase, export, delivery, and status change must be auditable.
- Authorization is enforced server-side; UI visibility is not an authorization control.

## Product and distribution model

LeadSniper Marketplace supports four operating paths:

1. **Internal** — retained and managed by Mortgages by Dennis Eng or an authorized internal team.
2. **Exclusive** — sold once to one approved broker, lender, or financing professional.
3. **Shared** — sold to a small disclosed number of approved professionals under explicit client consent.
4. **Cross-professional** — created as a separately consented opportunity for accountants, lawyers, benefits specialists, insurance advisors, wealth advisors, and other approved professionals.

One source inquiry may create multiple legitimate opportunities. Each opportunity maintains separate consent, qualification, pricing, buyer eligibility, access control, distribution status, and outcome tracking.

## Platform architecture

```text
Business owner
    ↓
Astro acquisition site and funding assessment
    ↓
Consent, attribution, verification, and qualification
    ↓
AI discovery and intelligence mission
    ↓
Human review and immutable qualification snapshot
    ↓
Atomic CRM / Supabase internal opportunity
    ↓
Routing decision
 ┌───────────────┴────────────────┐
 ↓                                ↓
Internal assignment          Convex marketplace
 ↓                                ↓
Dennis / internal team       Eligible buyer tenants
                                  ↓
                      Exclusive or shared offer
                                  ↓
                    Reservation and Stripe payment
                                  ↓
                      Scoped protected access
                                  ↓
                  Advisor follow-up and application
                                  ↓
                     Outcome and revenue learning
```

## System ownership

### Astro and React

- Public acquisition pages
- Progressive assessment and discovery interfaces
- Buyer marketplace and operator interfaces
- Calculators and dashboards

### Convex

- Marketplace organizations, users, and memberships
- Sanitized opportunity inventory
- Matching and buyer eligibility
- Reservations, purchases, and scoped access grants
- Marketplace audit events and real-time workflows

### Atomic CRM and Supabase

- Internal contacts and companies
- Internal funding opportunities and pipelines
- Tasks, notes, activities, referrals, and advisor follow-up
- Lender submissions and funded outcomes
- Marketplace-routing decisions

### Stripe

- Authoritative payment events
- Lead purchases, refunds, disputes, credits, and subscriptions

### Eve, ICM, and AI services

- Discovery-interview orchestration
- Intelligence mission planning
- Evidence-backed analysis and opportunity summaries
- Recommendations within bounded authority
- Human-review queue preparation

### n8n

- External triggers and integration workflows
- Notifications and communication handoffs
- CRM, voice, email, SMS, and reporting synchronization

Notion remains the strategy, operating-system, SOP, scorecard, and executive-planning layer. It must not store raw applicant PII, authoritative consent evidence, protected purchased-lead records, or payment state.

## Core technology

- **Astro + TypeScript** — public website and server application shell
- **React islands** — dynamic forms, calculators, marketplace inventory, and dashboards
- **Vitest** — domain workflow and protection-rule tests
- **Convex** — tenant-aware marketplace state and commerce workflows
- **Clerk** — authentication and organization membership
- **Atomic CRM + Supabase** — internal relationship and financing operations
- **Stripe** — authoritative commerce events
- **Google Cloud** — private documents, secure processing, analytics, and AI services
- **Open Knowledge Format** — structured financing knowledge and reusable playbooks

## Repository structure

```text
src/
├── components/              # Shared Astro and React UI
├── domain/
│   ├── distribution.ts      # Exclusive/shared inventory rules
│   ├── fundingWorkflow.ts   # Funding lifecycle and transition guards
│   └── fundingWorkflow.test.ts
├── layouts/                 # Shared funding-page layouts
└── pages/                   # Public SEO and future application routes

convex/
└── schema.ts                # Marketplace foundation schema

docs/
├── BUSINESS_FUNDING_WORKFLOW.md
├── PRD.md
├── ARCHITECTURE.md
├── BACKLOG.md
└── CLAUDE_GOAL_LOOP_WORKFLOWS.md

knowledge-base/              # Financing research and source material
preview/                     # Standalone SEO previews and specifications
```

## Getting started

```bash
npm install
npm run dev        # local Astro development server
npm run build      # astro check + production build
npm test           # Vitest domain tests
npm run check      # astro check + TypeScript validation
```

## Deployment

- **Host:** Vercel project `leadsniper-marketplace`
- **Deployment branch:** `main`
- **Adapter:** `@astrojs/vercel@^8` — pinned because v9+ requires Astro 6+
- **Rendering:** server output with current SEO pages prerendered as static HTML
- **Environment:** current static pages require no environment variables; `.env.example` documents future integrations
- **Canonical domain:** `leadsniperai.ca`, pending connection in Vercel

Rate data currently displayed on public pages is dated **July 2026** and requires recurring verification against authoritative lender or program sources.

## Implementation sequence

1. Build `/funding-assessment` with progressive save, attribution, and versioned consent.
2. Connect assessment submissions to the workflow domain rules.
3. Persist inquiries, verification evidence, qualification snapshots, workflow events, and audit records.
4. Add contact verification, discovery scheduling, and the AI voice interview.
5. Add intelligence missions, evidence provenance, scoring, and the human-review queue.
6. Build PII-free opportunity previews and buyer capability matching.
7. Implement exclusive and two-seat shared inventory with atomic reservations.
8. Connect Stripe-confirmed purchases and scoped access grants.
9. Synchronize advisor follow-up, documents, applications, and outcomes with Atomic CRM.
10. Add KPI dashboards, buyer-quality scoring, refunds, subscriptions, and continuous learning loops.

## Workflow validation

The domain test suite covers:

- The primary journey to advisor-ready status
- Rejection of stage skipping
- Distribution-consent protection
- Human-approval protection
- Authoritative payment-confirmation protection
- Document-readiness protection
- Evidence-derived tier advancement

Run:

```bash
npm test
npm run check
```

## Interpretive Contextual Workspace Method

Development follows an agent-oriented filesystem method rather than relying on one large transient prompt:

```text
Intent
→ Context
→ Interpretation
→ Plan
→ Execution
→ Verification
→ Handoff
→ Durable memory
```

The planned `.workspace/` structure contains governance, context, goals, architecture, workstreams, agent contracts, tasks, handoffs, decisions, evaluations, memory, runbooks, templates, and an archive.

Every agent has a bounded role, approved writable directories, explicit inputs and outputs, required tests, escalation conditions, and a formal handoff. Agents may not independently verify their own work.

### `/goal`

`/goal` converts an approved outcome into a durable goal, measurable success criteria, explicit constraints, a dependency-aware task graph, specialist assignments, and closure evidence.

### `/loop`

`/loop` performs controlled iterative improvement for one approved task. Every loop defines its objective, acceptance criterion, writable scope, required tests, maximum iterations, and stop conditions. Open-ended loops are prohibited.

See [Claude Code Goal and Loop Workflows](docs/CLAUDE_GOAL_LOOP_WORKFLOWS.md).

## Documentation

- [Business Funding Workflow](docs/BUSINESS_FUNDING_WORKFLOW.md)
- [Product Requirements](docs/PRD.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Implementation Backlog](docs/BACKLOG.md)
- [Claude Code Execution PRD](docs/CLAUDE_CODE_EXECUTION_PRD.md)
- [Interpretive Contextual Workspace Technical Requirements](docs/TECHNICAL_REQUIREMENTS_INTERPRETIVE_CONTEXTUAL_WORKSPACE.md)
- [Claude Code Goal and Loop Workflows](docs/CLAUDE_GOAL_LOOP_WORKFLOWS.md)
- [Claude Code Instructions](CLAUDE.md)

## Immediate build objective

Prove one complete Canadian business-funding path:

- One progressive funding assessment
- One versioned consent record
- One verified contact
- One completed AI discovery interview
- One evidence-backed intelligence package
- One human-approved qualification snapshot
- One PII-free shared offer with two seats
- Two eligible buyer organizations
- Two reservations and confirmed test payments
- No third purchase
- Two scoped access grants
- Two Atomic CRM opportunity synchronizations
- Complete audit evidence from inquiry through outcome

A capability is complete only when authorization, consent, validation, audit events, privacy controls, loading and error states, automated tests, documentation, handoff evidence, and independent review are included.
