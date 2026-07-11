# Developer Workflow

## Operating model

Work is organized as a sequence of small, reviewable vertical slices. GitHub issues are the unit of assignment; pull requests are the unit of delivery; Architecture Decision Records are the unit of durable technical judgment.

## Roles

| Role | Primary responsibility |
|---|---|
| Product owner | Outcomes, priority, acceptance and scope |
| Technical lead | Architecture, boundaries, sequencing and final technical review |
| Frontend developer | Astro pages, accessible UI, forms and interactive islands |
| Convex developer | Schema, queries, mutations, authorization and scheduled functions |
| Integration developer | Stripe, Atomic CRM, webhooks, outbox and observability |
| Quality/security reviewer | Test strategy, privacy, authorization and failure-mode review |
| Content/SEO developer | Pillar pages, structured content, schema markup and conversion paths |

One person may hold multiple roles, but high-risk changes still require independent review.

## Issue lifecycle

`Backlog → Ready → In progress → In review → Validation → Done`

- **Backlog:** valuable but not sufficiently defined.
- **Ready:** scope, owner, dependencies and acceptance criteria are clear.
- **In progress:** assigned developer has announced work.
- **In review:** draft or ready PR is linked.
- **Validation:** CI passes and acceptance evidence is available.
- **Done:** approved, merged, documented and deployed to the applicable environment.

Blocked work stays in its current state and receives the `blocked` label with a concise reason.

## Parallel workstreams

Developers may work concurrently within these boundaries:

1. **Experience:** design system, public content and interface components.
2. **Identity:** authentication, organizations, roles and buyer verification.
3. **Supply:** owner intake, consent, qualification and lead packaging.
4. **Marketplace:** inventory, search, reservation and protected reveal.
5. **Commerce:** payments, refunds, disputes and financial reconciliation.
6. **CRM:** Atomic CRM mapping, outbox workers and dispositions.
7. **Operations:** audit, dashboards, alerts, runbooks and privacy controls.

Shared schema, authorization primitives, audit format, routing, global styles and environment configuration are coordination points. Changes to them require an issue comment describing impact before implementation.

## Weekly cadence

- **Planning:** move defined work into Ready; confirm dependencies and owners.
- **Build:** developers claim issues and open draft PRs early.
- **Review:** prioritize small PRs and high-risk invariants.
- **Demo:** validate working vertical slices against acceptance criteria.
- **Retrospective:** capture one or two workflow improvements, not a large process rewrite.

## Handoff format

When pausing or transferring work, comment on the issue with:

- current outcome and branch/PR
- completed and remaining acceptance criteria
- important decisions
- commands and tests run
- known failures or risks
- exact next action

## Release gates

### Preview

- CI passes
- synthetic fixtures only
- issue acceptance criteria demonstrated
- no unresolved high-risk review comments

### Production

- authentication and authorization matrix validated
- signed and idempotent payment webhooks
- privacy and consent review completed
- Atomic CRM retry/dead-letter workflow operational
- monitoring, backups, incident response and rollback documented
- product owner and technical lead approval
