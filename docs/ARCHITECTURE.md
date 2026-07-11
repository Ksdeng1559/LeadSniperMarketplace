# Architecture

## System boundaries

- **Astro:** SEO pages, intake presentation, buyer/admin interfaces and server endpoints.
- **Convex:** authorization-aware application data, inventory, reservations, purchases and audit events.
- **Payment provider:** payment intent, confirmation, refund and dispute events.
- **Atomic CRM:** downstream relationship and opportunity execution.
- **Agent/knowledge layer:** structured research and recommendations; never bypasses authorization or publication approval.

## Data ownership

| Data | System of record |
|---|---|
| Lead inventory, reservation, purchase, consent reference | Convex |
| Engagement tasks, conversations, pipeline activity | Atomic CRM |
| Payment status and provider transaction evidence | Payment provider, mirrored in Convex |
| Product rules and domain knowledge | Versioned repository/OKF |
| Analytics views | Derived from audited source events |

## Critical transaction

Reservation and purchase authorization must run in a Convex mutation:

1. Authenticate the buyer.
2. Verify active user and organization.
3. Verify buyer scope and lead eligibility.
4. Expire stale reservations.
5. Calculate remaining inventory.
6. Create one active reservation with an expiry.
7. On verified payment webhook, create the purchase once using provider idempotency.
8. Increment purchase count and transition inventory status.
9. Append audit event.
10. Enqueue Atomic CRM synchronization.

The browser cannot set price, purchase count, distribution mode, buyer organization, payment status, or contact-data access.

## Privacy separation

Marketplace preview documents contain generalized business attributes only. Direct identifiers remain in encrypted owner profiles and are returned only through an authorization-checked query after a paid purchase or internal assignment.

## Atomic CRM integration

Use a transactional outbox represented by `crmSyncJobs`. Workers claim due jobs, send idempotent requests, store results, and retry with exponential backoff. Repeated events must converge on the same CRM contact and opportunity.

Suggested CRM keys:

- External contact key: `lead:{publicId}:owner`
- Opportunity key: `lead:{publicId}:buyer:{organizationId}`
- Source: `LeadSniper Marketplace`

## Agent workspace

Use bounded agents for research, qualification recommendations and content production. Inputs and outputs use structured JSON contracts, include evidence references, and are treated as untrusted recommendations. Agents cannot reveal PII, publish inventory, change pricing, or complete purchases.

## Deployment stages

- Local: Astro dev server, Convex development deployment, Stripe test mode.
- Preview: isolated Convex deployment and test CRM workspace per branch.
- Production: server-rendered Astro runtime, production Convex, managed secrets, monitoring and backups.

No production deployment occurs until authentication, payment webhooks, authorization tests, privacy review and operational runbooks pass.
