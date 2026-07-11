# CLAUDE.md — LeadSniper Marketplace

## Mission

Build a trustworthy B2B financial-opportunity marketplace that converts consented business-owner demand into qualified opportunities and routes them to authorized financial professionals.

Read `docs/PRD.md` and `docs/ARCHITECTURE.md` before implementation.

## Non-negotiable product rules

- Support `exclusive`, `shared`, and `internal` distribution.
- Never expose direct contact information in marketplace previews.
- Verify buyer organization, role, geography, and specialty before purchase.
- Enforce inventory and reservation rules server-side in Convex.
- Make all lead views, reservations, purchases, assignments, exports, refunds, and status changes auditable.
- Record consent source, purpose, timestamp, policy version, and permitted channels.
- Treat financial eligibility output as an estimate, not an approval.
- Keep Convex as marketplace system of record and Atomic CRM as engagement/workflow system.
- All external synchronization must be idempotent and retryable.

## Engineering standards

- TypeScript strict mode; avoid `any`.
- Astro components by default; hydrate only interactive islands.
- Validate all external input with Zod at system boundaries.
- Keep secrets server-side and document variables in `.env.example`.
- Use accessible semantic HTML and WCAG 2.2 AA targets.
- Add tests for pricing, reservation expiry, inventory caps, authorization, consent, and CRM sync.
- Use Canadian dollars initially; store money as integer cents.
- Store timestamps in UTC and render in the user's locale.
- Use append-only audit events for material marketplace actions.

## Delivery order

1. Project shell, authentication and organizations
2. Convex schema and authorization
3. Owner intake and consent
4. Admin qualification and lead packaging
5. Buyer inventory, previews and filters
6. Atomic reservation and purchase flow
7. Stripe test-mode payment integration
8. Atomic CRM outbox synchronization
9. Audit, reporting and operational controls
10. SEO content, calculators and conversion optimization

## Definition of done

A feature is complete only when authorization, validation, loading/error/empty states, audit events, tests, and relevant documentation are included. Do not use mock data beyond explicitly marked development fixtures.
