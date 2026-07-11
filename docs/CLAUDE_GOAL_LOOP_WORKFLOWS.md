# Claude Code Goal and Loop Workflows

## Purpose

Claude Code may use two controlled workflows within the Interpretive Contextual Workspace Method:

- `/goal` turns an approved outcome into a structured goal, measurable success criteria, and bounded task graph.
- `/loop` iteratively improves one approved task until its acceptance criteria pass or a documented stop condition is reached.

Neither workflow may bypass task packets, agent boundaries, tests, independent evaluation, handoffs, ADRs, or durable memory.

## `/goal`

Create each goal under `.workspace/02-intent/goals/GOAL-####-description/` with:

- `GOAL.md`
- `CONTEXT.md`
- `SUCCESS-CRITERIA.md`
- `CONSTRAINTS.md`
- `TASK-GRAPH.md`
- `STATUS.md`
- `EVIDENCE.md`
- `CLOSURE.md`

The orchestrator must interpret the outcome, identify affected workstreams, resolve dependencies, create bounded task packets, assign specialist agents, and define evaluation evidence.

A goal is complete only when its required tasks are approved, evidence supports its success criteria, open risks are documented, handoffs are complete, and durable project memory is updated.

## `/loop`

Each loop must belong to an approved task and be recorded under `.workspace/06-tasks/TASK-####-description/loops/LOOP-##/` with:

- `OBJECTIVE.md`
- `BASELINE.md`
- `CHANGE.md`
- `TEST-RESULTS.md`
- `REVIEW.md`
- `DECISION.md`

Each loop must declare its parent task, exact objective, permitted directories, prohibited directories, required tests, maximum iterations, stop conditions, and escalation conditions.

Default limits:

```text
Maximum iterations: 5
Maximum repeated failed approach: 2
Architecture-changing iterations: 1 before ADR review
```

A loop must stop when acceptance criteria pass, its iteration limit is reached, the same material failure repeats without new evidence, scope would cross a workstream boundary, an ADR must change, or a security, privacy, consent, authorization, payment, credential, or external-dependency issue requires review.

When a loop stops without success, preserve the latest working state, record all attempts and evidence, mark the task blocked or revision required, and identify the correct reviewer or specialist. Never weaken tests, validation, authorization, consent, or payment controls to complete a loop.

## Workflow relationship

```text
/goal
→ goal record
→ task graph
→ bounded task packets
→ specialist subagents
→ /loop when refinement is required
→ independent evaluation
→ handoff
→ durable memory
```

`/goal` may plan and sequence work but may not silently implement across unrestricted workstreams. `/loop` may refine only the approved task scope and may not expand it.

## Phase 0A additions

Create:

```text
.workspace/02-intent/goals/
.workspace/templates/GOAL_TEMPLATE.md
.workspace/templates/LOOP_TEMPLATE.md
.workspace/11-runbooks/goal-workflow.md
.workspace/11-runbooks/loop-workflow.md
```

The orchestrator contract must describe how goals create task graphs and how loops are authorized, bounded, evaluated, stopped, and escalated.

## Example goal

```text
/goal Implement Phase 0A of the Interpretive Contextual Workspace Method.
Create workspace folders, eight subagent contracts, templates, governance files,
a task register, and independent review evidence. Do not create application code,
database schemas, or production cloud resources.
```

## Example loop

```text
/loop TASK-0004 Improve the listing sanitizer until all protected-data tests pass.
Maximum four iterations. Modify only the sanitizer package and its tests.
Stop and escalate if the public listing contract must change.
```

Every goal and loop must record its initiating instruction, context files, responsible agent, files changed, tests executed, decisions, iteration count, stop reason, and review result.