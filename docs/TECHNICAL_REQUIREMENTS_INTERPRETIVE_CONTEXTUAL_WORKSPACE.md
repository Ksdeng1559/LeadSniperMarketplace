# Technical Requirements: Interpretive Contextual Workspace Method

## Status

Required before Phase 0 application implementation.

## Purpose

The project shall use an **Interpretive Contextual Workspace Method** as its agent-operating model. The workspace will provide persistent, reviewable context for Claude Code and specialized subagents while preserving clear system boundaries between the Astro website, Atomic CRM/Supabase, Convex marketplace, Stripe commerce and Google Cloud services.

The required lifecycle is:

```text
Intent
→ Context
→ Interpretation
→ Plan
→ Execution
→ Verification
→ Handoff
→ Memory
```

The workspace supplements the Claude Code Execution PRD. It does not replace product, security, consent or architecture requirements.

---

## 1. Required Repository Structure

Create the following top-level workspace:

```text
.workspace/
├── README.md
├── WORKSPACE.md
├── ORCHESTRATOR.md
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

### 1.1 Governance

`.workspace/00-governance/` must contain:

```text
product-principles.md
security-boundaries.md
privacy-and-consent.md
coding-standards.md
data-ownership.md
agent-permissions.md
prohibited-actions.md
definition-of-done.md
```

Mandatory governance rules include:

- Atomic CRM/Supabase owns internal operational records.
- Convex owns marketplace commerce, buyer access and marketplace transaction records.
- Astro owns public content, acquisition flows and presentation.
- Stripe webhook verification is authoritative for payment completion.
- Google Cloud owns private documents and specialized processing services.
- Marketplace previews must never disclose protected personal information.
- Shared-lead distribution requires consent allowing contact by multiple professionals.
- Cross-professional distribution requires related-services consent.
- No subagent may weaken authentication, authorization, validation or tests to complete a task.

### 1.2 Context

`.workspace/01-context/` must contain stable project context:

```text
business-model.md
user-personas.md
financing-products.md
marketplace-model.md
atomic-crm-context.md
convex-context.md
astro-context.md
google-cloud-context.md
glossary.md
constraints.md
```

### 1.3 Intent

`.workspace/02-intent/` must contain:

```text
product-vision.md
business-outcomes.md
user-outcomes.md
marketplace-outcomes.md
compliance-outcomes.md
quality-objectives.md
current-priorities.md
```

### 1.4 Architecture

`.workspace/03-architecture/` must contain:

```text
system-overview.md
bounded-contexts.md
data-flow.md
data-ownership-matrix.md
authentication.md
authorization.md
integration-contracts.md
event-model.md
deployment-topology.md
diagrams/
```

### 1.5 Workstreams

`.workspace/04-workstreams/` must include:

```text
website/
lead-intake/
atomic-crm/
marketplace/
payments/
matching/
consent/
documents/
analytics/
infrastructure/
quality-assurance/
```

Each workstream must contain:

```text
README.md
scope.md
requirements.md
dependencies.md
interfaces.md
tasks.md
risks.md
acceptance-criteria.md
status.md
```

---

## 2. Required Subagent Registry

Create initial subagents under `.workspace/05-agents/`:

```text
orchestrator/
product-architect/
astro-website/
atomic-crm-supabase/
convex-marketplace/
stripe-commerce/
security-privacy-reviewer/
test-integration/
```

Additional agents may be added for lead intake, matching, consent, Google Cloud documents, DevOps, analytics, SEO content and documentation.

Each agent directory must contain:

```text
AGENT.md
CONTEXT.md
TOOLS.md
BOUNDARIES.md
INPUTS.md
OUTPUTS.md
CHECKLIST.md
HANDOFF.md
```

### 2.1 Standard Agent Contract

Every `AGENT.md` must define:

- Role
- Mission
- Owned scope
- Readable context
- Inputs
- Outputs
- Constraints
- Required tests
- Escalation conditions
- Handoff requirements

Agents must be assigned explicit owned and prohibited directories.

---

## 3. Orchestrator Requirements

The orchestrator shall:

1. Interpret the approved PRD and current objective.
2. Select the correct workstream and specialist agent.
3. Assemble a bounded context packet.
4. Create a task packet before work begins.
5. Confirm dependencies and system boundaries.
6. Review the specialist handoff.
7. Assign an independent evaluator.
8. Update project status and durable memory.
9. Move work to the next lifecycle state only after evidence is complete.

The orchestrator must not treat its own implementation as independently verified.

Required orchestration pattern:

```text
Objective
→ Orchestrator
→ Context packet
→ Specialist subagent
→ Implementation and evidence
→ Independent evaluator
→ Approval or revision
→ Memory and next task
```

---

## 4. Task Packet Requirements

Every delegated task must have a folder under `.workspace/06-tasks/`:

```text
TASK-####-description/
├── TASK.md
├── CONTEXT.md
├── INPUTS.md
├── PLAN.md
├── STATUS.md
├── OUTPUTS.md
├── TEST-RESULTS.md
└── REVIEW.md
```

`TASK.md` must define:

- Objective
- Assigned agent
- Dependencies
- In scope
- Out of scope
- Owned directories
- Prohibited directories
- Acceptance criteria
- Required tests
- Escalation conditions

Allowed task statuses:

```text
proposed
context_ready
planned
in_progress
testing
under_review
revision_required
approved
completed
blocked
archived
```

---

## 5. Handoff Requirements

Every completed implementation must create a handoff record under `.workspace/07-handoffs/`.

Required sections:

```text
Task
Completed work
Files changed
Decisions made
Tests run
Known limitations
Risks
Required next agent
Recommended next task
```

No task is complete without a handoff and test evidence.

---

## 6. Architecture Decision Records

Use `.workspace/08-decisions/` for ADRs.

Initial ADRs must include:

```text
ADR-0001-atomic-crm-system-of-record.md
ADR-0002-convex-marketplace-boundary.md
ADR-0003-stripe-webhook-authority.md
ADR-0004-lead-consent-model.md
ADR-0005-exclusive-shared-inventory.md
ADR-0006-private-document-storage.md
ADR-0007-agent-workspace-method.md
```

Agents must not silently reverse an accepted ADR. Proposed changes require a new or superseding ADR.

---

## 7. Independent Evaluation

Store evaluations under `.workspace/09-evaluations/TASK-####/`.

Required evaluation types include:

- Architecture review
- Security review
- Privacy and consent review
- Data-boundary review
- Test review
- User-experience review
- Deployment-readiness review

Allowed evaluation results:

```text
approved
approved_with_conditions
revision_required
blocked
```

Production-impacting tasks require an evaluator different from the implementing agent.

---

## 8. Durable Project Memory

Use `.workspace/10-memory/` for verified, durable information only:

```text
project-state.md
completed-capabilities.md
open-risks.md
known-issues.md
technical-debt.md
integration-status.md
external-dependencies.md
lessons-learned.md
```

Do not use unfiltered conversation logs as project memory. Memory entries must be concise, attributable and verified.

---

## 9. Context Assembly Rules

Each subagent should receive the smallest sufficient context set.

Context packets must satisfy:

- Relevance: every file is required for the assigned task.
- Sufficiency: the task can be completed without hidden assumptions.
- Isolation: unrelated workstreams are excluded.
- Provenance: sources and decisions are identifiable.
- Economy: duplicated or obsolete context is removed.
- Freshness: current ADRs and status files take precedence over archived material.

Task packets must list exact context files. Subagents must not automatically ingest the entire repository when bounded context is sufficient.

---

## 10. Root `CLAUDE.md` Requirements

The root `CLAUDE.md` must require Claude Code and subagents to:

1. Read `.workspace/WORKSPACE.md`.
2. Read the assigned task packet.
3. Read the assigned agent definition.
4. Load only listed context files.
5. Confirm owned and prohibited directories.
6. Set task status to `in_progress`.
7. Implement only defined scope.
8. Run required checks.
9. Create a handoff record.
10. Await independent evaluation before completion.

Mandatory rules:

- Do not modify another workstream without an approved task.
- Do not duplicate system-of-record data.
- Do not expose personal information in marketplace previews.
- Do not grant access from client-side payment state.
- Do not publish without valid consent.
- Do not weaken authorization, validation or tests.
- Record architecture changes through ADRs.
- Promote only verified information into durable memory.

---

## 11. Workspace Lifecycle

Every task must pass through:

```text
Intake
→ Interpret
→ Context Assembly
→ Plan
→ Execute
→ Test
→ Evaluate
→ Approve
→ Handoff
→ Remember
```

No application feature may bypass testing, evaluation or handoff because it was generated by an agent.

---

## 12. Phase 0A: Agent Workspace Foundation

Phase 0A must be completed before application code, schemas or cloud infrastructure are implemented.

Required deliverables:

- `.workspace` directory structure
- Governance documents
- Context documents
- Architecture templates
- Workstream templates
- Initial eight agent definitions
- Task packet template
- Handoff template
- ADR template
- Evaluation template
- Memory rules
- Agent permission matrix
- Updated root `CLAUDE.md`
- Initial task register

### Phase 0A acceptance criteria

- All required workspace directories exist.
- Each initial subagent has a complete contract.
- Each agent has owned and prohibited scope.
- Task, handoff, ADR and evaluation templates exist.
- Root `CLAUDE.md` enforces the protocol.
- System-of-record boundaries are documented.
- Consent and protected-data boundaries are documented.
- An independent reviewer approves the workspace structure.
- No application feature or database schema has been created during Phase 0A.

---

## 13. First Claude Code Instruction

```text
Implement Phase 0A only.

Create the Interpretive Contextual Workspace Method under `.workspace/`.
Add governance, context, architecture, workstream, agent, task, handoff,
decision, evaluation and memory structures.

Create the initial eight agent definitions and all required templates.
Update the root CLAUDE.md to require bounded task packets, scoped context,
independent evaluation, handoffs and durable memory.

Do not implement application features.
Do not create database schemas.
Do not configure production cloud resources.
Do not begin Phase 1 until Phase 0A is reviewed and approved.
```

---

## 14. Relationship to the Execution PRD

This document is a mandatory technical requirement of `docs/CLAUDE_CODE_EXECUTION_PRD.md`.

The execution order is now:

```text
Phase 0A — Interpretive Contextual Workspace Foundation
Phase 0B — Monorepo, shared tooling, CI and architecture documentation
Phase 1  — Public website foundation
Phase 2  — Lead intake and Atomic CRM
Phase 3  — Convex marketplace foundation
Phase 4  — Exclusive and shared lead commerce
Phase 5  — Cross-professional opportunities
Phase 6  — Outcomes, refunds and performance
Phase 7  — Secure documents and AI
```

Claude Code must treat Phase 0A as a launch gate for all subsequent implementation.