# LeadSniper Marketplace

A multi-tenant financial lead-generation, qualification, distribution, and commerce platform for residential mortgages, business loans, commercial financing, and related professional services.

**Live site:** <https://leadsniper-marketplace.vercel.app> — auto-deploys from `main`.

## What's live now

The public SEO acquisition layer is deployed: a funding-first homepage plus eight prerendered Canadian business-funding pages, all sharing `FundingLayout` (navy/gold design system, JSON-LD structured data, lead attribution, mobile nav, and a shared assessment entry widget).

| Page | Path |
|------|------|
| Homepage | `/` |
| Business Funding Hub | `/business-funding-canada` |
| Business Line of Credit | `/business-line-of-credit-canada` |
| Equipment Financing | `/equipment-financing-canada` |
| Commercial Mortgage Rates (rates intent) | `/commercial-mortgage-rates-canada` |
| Commercial Mortgage Guide (guide intent) | `/commercial-mortgage-canada` |
| Business Acquisition Financing | `/business-acquisition-financing` |
| Working Capital Loans | `/working-capital-loans-canada` |
| CSBFP Guide | `/canada-small-business-financing-program` |

Not yet built: the assessment funnel behind the widget (`/funding-assessment`), the Convex marketplace, auth, and payments. See implementation order below.

## Getting started

```bash
npm install
npm run dev        # local dev server (astro dev)
npm run build      # astro check + astro build
npm test           # vitest (domain logic)
npm run check      # astro check + tsc --noEmit
```

## Deployment

- **Host:** Vercel project `leadsniper-marketplace`, connected to this GitHub repository — every push to `main` deploys to production automatically.
- **Adapter:** `@astrojs/vercel@^8` (pinned — v9+ requires Astro 6+; this repo is Astro 5). Do not bump without upgrading Astro.
- **Rendering:** `output: "server"` with `export const prerender = true` on every current page. SEO pages ship as static HTML; server output is reserved for the future assessment funnel and API routes.
- **Environment:** no env vars required for the current static pages. `.env.example` lists the variables for later phases (Convex, auth, Stripe, CRM).
- **Domain:** `leadsniperai.ca` is the canonical domain hardcoded in `FundingLayout` but not yet connected in Vercel.

## Content and research directories

- `src/pages/` + `src/layouts/FundingLayout.astro` + `src/components/` — the live SEO site
- `preview/` — standalone single-file HTML preview of the SEO pages with per-page production SEO specs (titles, meta descriptions, URL slugs) in comments
- `knowledge-base/` — source research (BDC, CSBFP program terms) feeding page copy
- Rate data on pages is dated **July 2026** and must be re-verified against lender published rates on a recurring cadence

## Product model

LeadSniper Marketplace supports four operating paths:

1. **Internal** — retained and managed by Mortgages by Dennis Eng or an assigned internal team.
2. **Exclusive** — sold once to one approved broker or financial professional.
3. **Shared** — sold to a controlled number of approved professionals, subject to explicit client consent.
4. **Cross-professional** — distributed as a separately consented opportunity to accountants, lawyers, benefits specialists, insurance advisors, wealth advisors, and other approved professionals.

A single source inquiry may create multiple legitimate service opportunities. Each opportunity must maintain separate consent, pricing, buyer eligibility, access control, distribution status, and outcome tracking.

## Platform architecture

```text
Consumers and business owners
              ↓
Astro financing website
              ↓
Lead intake, consent, attribution, and qualification
              ↓
Atomic CRM / Supabase internal opportunity record
              ↓
Routing and opportunity discovery
        ┌─────┴──────────────┐
        ↓                    ↓
Internal financing       Convex marketplace
        ↓                    ↓
Dennis and team          Verified professionals
                             ↓
                 Exclusive / shared / related leads
                             ↓
                   Stripe purchase and access
                             ↓
                     Outcome and revenue tracking
```

## Core technology

- **Astro + TypeScript** — public SEO website, landing pages, financing education, and marketplace application shell
- **React islands** — calculators, conditional forms, real-time marketplace inventory, dashboards, and buyer workspaces
- **Atomic CRM + Supabase** — internal contacts, companies, opportunities, pipelines, tasks, activities, referrals, and funded outcomes
- **Convex** — marketplace organizations, professional profiles, listings, matching, reservations, purchases, lead access, and real-time workflows
- **Clerk** — marketplace authentication and organization membership
- **Stripe** — verified payments, lead purchases, refunds, credits, and future subscriptions
- **Google Cloud** — private document storage, secure processing, Cloud Run integrations, analytics, and AI services
- **Open Knowledge Format** — structured domain knowledge for agent retrieval and reusable financing playbooks

## System ownership boundaries

### Atomic CRM and Supabase own

- Internal contacts and companies
- Internal mortgage, business-loan, and commercial-financing opportunities
- Financing pipelines, tasks, notes, and activities
- Lender submissions and funded outcomes
- Internal referral relationships
- Marketplace-routing decisions

### Convex owns

- Marketplace users and organizations
- Professional verification and service territories
- Sanitized lead inventory
- Exclusive and shared availability
- Matching and buyer eligibility
- Reservations, purchases, and access grants
- Lead delivery, outcomes, refunds, and buyer performance

Atomic CRM and Convex must not become competing systems of record. They exchange only the information required for distribution, delivery, and outcome synchronization.

## Interpretive Contextual Workspace Method

Development is governed by an agent-oriented filesystem workspace. Claude Code and subagents must use repository context, workstream, task, handoff, evaluation, and memory folders rather than relying on one large transient prompt.

The required execution cycle is:

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

The planned workspace structure is:

```text
.workspace/
├── 00-governance/
├── 01-context/
├── 02-intent/
│   └── goals/
├── 03-architecture/
├── 04-workstreams/
├── 05-agents/
├── 06-tasks/
├── 07-handoffs/
├── 08-decisions/
├── 09-evaluations/
├── 10-memory/
├── 11-runbooks/
├── templates/
└── 99-archive/
```

Each subagent must have a bounded role, approved writable directories, explicit inputs and outputs, required tests, escalation conditions, and a formal handoff. Agents may not mark their own work independently verified.

## Claude Code `/goal` workflow

`/goal` converts an approved business or technical outcome into:

- A durable goal record
- Measurable success criteria
- Explicit constraints
- A dependency-aware task graph
- Specialist subagent assignments
- Evaluation and closure evidence

Goals are stored under `.workspace/02-intent/goals/GOAL-####-description/`. Every task created from a goal must link back to it. A goal is not complete until required tasks are approved, evidence supports its success criteria, open risks are documented, handoffs are complete, and durable memory is updated.

Example:

```text
/goal Implement Phase 0A of the Interpretive Contextual Workspace Method.
Create workspace folders, eight subagent contracts, templates, governance files,
a task register, and independent review evidence. Do not create application code,
database schemas, or production cloud resources.
```

## Claude Code `/loop` workflow

`/loop` provides controlled iterative improvement for one approved task. It may refine code, tests, documentation, architecture, or user experience only within the task's permitted scope.

Each loop must define:

- Parent task
- Exact objective
- Acceptance criterion
- Allowed and prohibited directories
- Required tests
- Maximum iterations
- Stop and escalation conditions

Default limits are five iterations, two repetitions of the same failed approach, and one architecture-changing iteration before ADR review. Open-ended loops are prohibited.

Each iteration must make one bounded change, run checks, and record evidence. The loop stops when criteria pass, its limit is reached, scope would expand, an ADR must change, or security, consent, privacy, authorization, payment, credential, or dependency uncertainty requires review.

Example:

```text
/loop TASK-0004 Improve the listing sanitizer until all protected-data tests pass.
Maximum four iterations. Modify only the sanitizer package and its tests.
Stop and escalate if the public listing contract must change.
```

The full requirements are documented in [Claude Code Goal and Loop Workflows](docs/CLAUDE_GOAL_LOOP_WORKFLOWS.md).

## Initial subagents

Phase 0A will define these initial agents:

1. Orchestrator
2. Product architect
3. Astro website agent
4. Atomic CRM and Supabase agent
5. Convex marketplace agent
6. Stripe commerce agent
7. Security and privacy reviewer
8. Test and integration agent

Additional agents may be introduced only when their scope and boundaries are documented.

## Required implementation order

### Phase 0A — Agent workspace foundation

Create the Interpretive Contextual Workspace Method, `/goal` and `/loop` runbooks and templates, governance rules, context files, workstreams, agent contracts, task templates, handoff templates, ADRs, evaluation records, and durable project memory.

No application feature or database schema work should begin until Phase 0A is reviewed and approved.

### Phase 0B — Engineering foundation

Create the monorepo, shared tooling, TypeScript configuration, testing, continuous integration, environment templates, documentation, and implementation status tracking.

### Subsequent phases

1. Public Astro website
2. Lead intake and Atomic CRM
3. Convex marketplace foundation
4. Exclusive and shared lead commerce
5. Cross-professional opportunities
6. Outcomes, refunds, and buyer performance
7. Secure documents and AI services

## Delivery principles

- Consent and purpose limitation are first-class data.
- Shared distribution requires explicit multiple-professional consent.
- Cross-professional opportunities require separate related-services consent.
- No personal contact data is exposed in marketplace previews.
- Lead access is granted only after authoritative server-side payment confirmation.
- Every assignment, view, reservation, purchase, export, delivery, and status change is auditable.
- Authorization is enforced server-side in Supabase, Convex, API services, and document access.
- Sensitive documents are stored privately and are not automatically released through a lead purchase.
- Durable architectural changes are recorded through Architecture Decision Records.
- A task is not complete until tests, documentation, handoff, and independent evaluation are complete.
- `/goal` and `/loop` may organize and refine work, but they cannot bypass governance or expand agent permissions.

## Repository status

The public Astro SEO website (homepage + eight Canadian business-funding pages) is implemented and deployed to Vercel with continuous deployment from `main`. Domain logic scaffolding (`src/domain/distribution.ts`) and the Convex schema exist with passing tests.

Next implementation milestones:

1. **Assessment funnel** — the intake flow behind the `#assessment` widget (`/funding-assessment`), carrying `window.__leadAttribution` (keyword, landing page, amount band) into structured intake with consent capture.
2. **E-E-A-T completion** — real reviewer byline, attributed testimonials, and author/credentials page (placeholders are marked `TODO PRODUCTION` in `src/components/AssessmentWidget.astro`).
3. **Phase 0A governance workspace** (below) before marketplace, auth, or payment features.

## Documentation

- [Claude Code Execution PRD](docs/CLAUDE_CODE_EXECUTION_PRD.md)
- [Interpretive Contextual Workspace Technical Requirements](docs/TECHNICAL_REQUIREMENTS_INTERPRETIVE_CONTEXTUAL_WORKSPACE.md)
- [Claude Code Goal and Loop Workflows](docs/CLAUDE_GOAL_LOOP_WORKFLOWS.md)
- [Product Requirements](docs/PRD.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Claude Code instructions](CLAUDE.md)
- [Implementation backlog](docs/BACKLOG.md)

## First Claude Code instruction

```text
/goal Implement Phase 0A only.

Create the Interpretive Contextual Workspace Method under `.workspace/`.
Add governance, context, architecture, workstream, agent, task, handoff,
decision, evaluation, memory, templates, and runbook structures.

Create the initial eight agent definitions and reusable templates.
Implement the bounded `/goal` and `/loop` workflows and document their
iteration limits, stop conditions, evidence, evaluation, and handoff rules.

Do not implement application features.
Do not create database schemas.
Do not start Phase 0B until the workspace structure and agent contracts
are reviewed and approved.
```
