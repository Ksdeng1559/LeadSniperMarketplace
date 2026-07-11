# LeadSniper Marketplace

A multi-tenant financial lead-generation, qualification, distribution, and commerce platform for residential mortgages, business loans, commercial financing, and related professional services.

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

Development is governed by an agent-oriented filesystem workspace. Claude Code and subagents must use the repository context, workstream, task, handoff, evaluation, and memory folders rather than relying on one large transient prompt.

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
├── 03-architecture/
├── 04-workstreams/
├── 05-agents/
├── 06-tasks/
├── 07-handoffs/
├── 08-decisions/
├── 09-evaluations/
├── 10-memory/
├── 11-runbooks/
└── 99-archive/
```

Each subagent must have a bounded role, approved writable directories, explicit inputs and outputs, required tests, escalation conditions, and a formal handoff. Agents may not mark their own work independently verified.

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

Create the Interpretive Contextual Workspace Method, governance rules, context files, workstreams, agent contracts, task templates, handoff templates, ADRs, evaluation records, and durable project memory.

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

## Repository status

This repository currently contains the product and technical requirements for the platform. The next implementation milestone is **Phase 0A: Interpretive Contextual Workspace Foundation**.

## Documentation

- [Claude Code Execution PRD](docs/CLAUDE_CODE_EXECUTION_PRD.md)
- [Interpretive Contextual Workspace Technical Requirements](docs/TECHNICAL_REQUIREMENTS_INTERPRETIVE_CONTEXTUAL_WORKSPACE.md)
- [Product Requirements](docs/PRD.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Claude Code instructions](CLAUDE.md)
- [Implementation backlog](docs/BACKLOG.md)

## First Claude Code instruction

```text
Implement Phase 0A only.

Create the Interpretive Contextual Workspace Method under `.workspace/`.
Add governance, context, architecture, workstream, agent, task, handoff,
decision, evaluation, memory, and runbook structures.

Create the initial eight agent definitions and reusable templates.
Update the root CLAUDE.md to require bounded task packets, scoped context,
independent evaluation, formal handoffs, and durable memory updates.

Do not implement application features.
Do not create database schemas.
Do not start Phase 0B until the workspace structure and agent contracts
are reviewed and approved.
```
