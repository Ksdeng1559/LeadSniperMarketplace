# Business Funding Opportunity Workflow

## Purpose

This workflow converts a consented business-funding inquiry into a verified, advisor-ready, purchasable, application-ready opportunity and records the final financing outcome.

It is implemented first as domain logic so Astro forms, Eve agents, Convex mutations, Atomic CRM synchronization, Stripe webhooks, and n8n automations can share the same lifecycle rules.

## Lifecycle

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

## Product tiers

| Tier | Minimum evidence | Commercial use |
|---|---|---|
| Assessment Lead | Completed short intake | Internal qualification or nurture |
| Voice-Verified Lead | Verified contact and completed discovery interview | Verified but not yet approved for marketplace distribution |
| Advisor-Ready Opportunity | Intelligence summary and human approval | Premium marketplace or internal assignment |
| Application-Ready Opportunity | Documents substantially complete | Highest-value financing opportunity |

## Mandatory gates

1. A lead cannot become submitted without a completed assessment.
2. Contact consent must be captured before qualification continues.
3. Contact verification and discovery completion are required for voice-verified status.
4. An intelligence summary is required before human review.
5. Human quality approval is required before advisor-ready status.
6. Distribution consent is required before marketplace listing.
7. Authoritative payment confirmation is required before purchase completion or protected access.
8. Documents must be substantially complete before application-ready status.

## System responsibilities

| System | Responsibility |
|---|---|
| Astro/React | Assessment, progressive intake, consent presentation, applicant status experience |
| Eve/ICM | Discovery planning, interview reasoning, intelligence mission, opportunity summary and recommendations |
| Convex | Workflow state, marketplace inventory, reservations, purchases, buyer access and audit events |
| Stripe | Authoritative payment, refund and dispute events |
| Atomic CRM/Supabase | Internal contacts, engagement, advisor follow-up, lender submissions and funded outcomes |
| n8n | Notifications and integration orchestration; it does not own workflow truth |
| Notion | Strategy, SOPs, scorecards, decisions and implementation planning; no raw applicant PII |

## Domain API

`src/domain/fundingWorkflow.ts` exposes:

- `createFundingWorkflow()`
- `transitionFundingWorkflow(record, nextStage, evidencePatch)`
- `deriveFundingOpportunityTier(stage, evidence)`
- `InvalidFundingWorkflowTransition`

All application and backend adapters should use these rules or an equivalent server-side implementation. UI controls must not be treated as authorization.

## Events for later adapters

Recommended durable events:

- `funding.assessment_submitted`
- `funding.consent_verified`
- `funding.initially_qualified`
- `funding.discovery_scheduled`
- `funding.voice_verified`
- `funding.intelligence_completed`
- `funding.human_approved`
- `funding.opportunity_listed`
- `funding.opportunity_reserved`
- `funding.payment_confirmed`
- `funding.advisor_contacted`
- `funding.documents_requested`
- `funding.application_ready`
- `funding.application_submitted`
- `funding.conditionally_approved`
- `funding.approved`
- `funding.funded`
- `funding.declined`
- `funding.withdrawn`

Every event should include an idempotency key, actor or system identity, aggregate ID, timestamp, previous stage, new stage, evidence references, and policy version.

## MVP implementation sequence

1. Connect `/funding-assessment` to the workflow and persist progressive intake.
2. Create a versioned consent ledger and duplicate-detection process.
3. Add AI discovery scheduling and transcript/evidence references.
4. Generate a PII-safe intelligence summary and human-review queue.
5. Map approved opportunities into Convex marketplace inventory.
6. Add reservation and Stripe-confirmed purchase transitions.
7. Synchronize advisor assignment, contact SLA, document requests, application and outcome states to Atomic CRM.
8. Add KPI reporting for stage conversion, time-in-stage, funded outcomes, buyer quality and lead-source performance.

## Acceptance criteria

- Invalid stage skipping is rejected.
- Marketplace listing is impossible without explicit distribution consent.
- Purchase completion is impossible without authoritative payment confirmation.
- Tier advancement is evidence-based rather than manually asserted.
- Terminal states cannot silently restart.
- Nurture re-entry is limited to approved operational stages.
- Unit tests cover the primary path and critical consent, payment and stage-order guards.
