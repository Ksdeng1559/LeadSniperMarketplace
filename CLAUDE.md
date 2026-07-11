# CLAUDE.md — LeadSniper Marketplace

## Mission

Build a trustworthy B2B financial-opportunity marketplace that converts consented business-owner demand into qualified opportunities and routes them to authorized financial professionals.

Read `docs/PRD.md`, `docs/ARCHITECTURE.md`, `docs/CLAUDE_CODE_EXECUTION_PRD.md`, `docs/TECHNICAL_REQUIREMENTS_INTERPRETIVE_CONTEXTUAL_WORKSPACE.md`, and `docs/CLAUDE_GOAL_LOOP_WORKFLOWS.md` before implementation.

## Agent workspace protocol

Before implementing any task:

1. Read `.workspace/WORKSPACE.md` when it exists.
2. Read the assigned goal and task packet.
3. Read the assigned agent definition.
4. Load only the context files listed for the task.
5. Confirm owned and prohibited directories.
6. Set task status to `in_progress`.
7. Implement only the approved scope.
8. Run all required checks.
9. Create a formal handoff record.
10. Await independent evaluation before marking production-impacting work complete.

## `/goal` workflow

Use `/goal` to convert an approved outcome into a durable goal record, measurable success criteria, constraints, a dependency-aware task graph, specialist assignments, and evaluation evidence.

A `/goal` execution must:

- Create or update `.workspace/02-intent/goals/GOAL-####-description/`.
- Define business, user, and technical outcomes.
- Identify in-scope and out-of-scope work.
- Link every generated task packet to the parent goal.
- Respect accepted ADRs and system-of-record boundaries.
- Require evidence before goal closure.
- Update handoffs and durable memory when complete.

`/goal` may plan and sequence work, but it must not silently implement across unrestricted workstreams.

## `/loop` workflow

Use `/loop` only for bounded refinement of an approved task.

Every `/loop` invocation must declare:

- Parent task ID
- Exact objective
- Acceptance criterion being improved
- Allowed and prohibited directories
- Required tests
- Maximum iterations
- Stop conditions
- Escalation conditions

Default limits:

```text
Maximum iterations: 5
Maximum repeated failed approach: 2
Architecture-changing iterations: 1 before ADR review
```

Each iteration must make one bounded change, run the required checks, and record evidence under the parent task. Stop when acceptance criteria pass, the iteration limit is reached, the same failure repeats without new evidence, scope would cross a workstream boundary, an ADR must change, or security, privacy, consent, authorization, payment, credential, or dependency uncertainty requires review.

Never run an open-ended loop. Never weaken tests, validation, authorization, consent, privacy, or payment controls to make a loop pass.

## Non-negotiable product rules

- Support `exclusive`, `shared`, `internal`, and separately consented cross-professional distribution.
- Never expose direct contact information in marketplace previews.
- Verify buyer organization, role, geography, specialty, and account status before purchase.
- Enforce inventory and reservation rules server-side in Convex.
- Make all lead views, reservations, purchases, assignments, exports, refunds, and status changes auditable.
- Record consent source, purpose, timestamp, policy version, and permitted channels.
- Treat financial eligibility output as an estimate, not an approval.
- Keep Convex as marketplace system of record and Atomic CRM/Supabase as internal engagement and workflow system.
- All external synchronization must be idempotent and retryable.
- Stripe webhook verification is authoritative for payment completion and lead-access grants.

## Engineering standards

- TypeScript strict mode; avoid `any`.
- Astro components by default; hydrate only interactive islands.
- Validate all external input with Zod at system boundaries.
- Keep secrets server-side and document variables in `.env.example`.
- Use accessible semantic HTML and WCAG 2.2 AA targets.
- Add tests for pricing, reservation expiry, inventory caps, authorization, consent, protected-data leakage, payments, and CRM synchronization.
- Use Canadian dollars initially; store money as integer cents.
- Store timestamps in UTC and render in the user's locale.
- Use append-only audit events for material marketplace actions.
- Record durable architecture changes through ADRs.
- Promote only verified information into project memory.

## Delivery order

1. Phase 0A: Interpretive Contextual Workspace, `/goal`, and `/loop` foundations
2. Phase 0B: Monorepo, shared tooling, CI, environment templates, and architecture documentation
3. Public Astro website foundation
4. Lead intake and Atomic CRM/Supabase
5. Convex marketplace foundation
6. Exclusive and shared lead commerce
7. Cross-professional opportunities
8. Outcomes, refunds, and buyer performance
9. Secure documents and AI services
10. SEO content, calculators, and conversion optimization

## Definition of done

A feature is complete only when authorization, validation, loading/error/empty states, audit events, tests, relevant documentation, task evidence, formal handoff, and required independent evaluation are included. Do not use mock data beyond explicitly marked development fixtures.

A goal is complete only when its required tasks are approved, success criteria have evidence, open risks are documented, handoffs are complete, and durable memory is updated.
