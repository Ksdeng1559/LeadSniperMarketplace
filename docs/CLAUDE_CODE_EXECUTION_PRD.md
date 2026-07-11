# Claude Code Execution PRD

## Mortgage, Business Financing and Financial Professional Lead Marketplace

**Version:** 2.0  
**Status:** Approved for implementation planning  
**Primary website:** mortgagesbydenniseng.ca  
**Internal CRM:** Atomic CRM with Supabase  
**Marketplace backend:** Convex  
**Public frontend:** Astro with React islands  
**Authentication:** Clerk for marketplace; Supabase Auth for Atomic CRM  
**Payments:** Stripe  
**Secure documents and AI:** Google Cloud  
**Implementation agent:** Claude Code

---

## 1. Execution Objective

Build a connected platform with three primary products:

1. A public financing and lead-generation website
2. An internal financing CRM for Dennis Eng and authorized staff
3. A marketplace where verified financial professionals can purchase exclusive leads, shared leads and related professional-service opportunities

The platform must support:

- Residential mortgages
- Business loans
- Commercial financing
- Lead qualification
- Internal lead handling
- Exclusive lead sales
- Shared lead sales
- Cross-professional referrals
- Buyer verification
- Stripe payments
- Lead access control
- Lead outcome reporting
- Secure document collection
- Marketing attribution
- Consent and audit records

---

## 2. Product Principles

### 2.1 One source lead, multiple opportunities

A single inquiry may create several legitimate service opportunities.

Example:

```text
Source inquiry:
Business owner purchasing a commercial building

Possible service opportunities:
- Commercial mortgage
- Working capital
- Commercial legal services
- Accounting and tax planning
- Business insurance
- Group benefits
```

Each service opportunity must have independent:

- Consent
- Distribution model
- Marketplace listing
- Pricing
- Buyer eligibility
- Access control
- Outcome tracking

Do not create duplicate contact records for each opportunity.

### 2.2 Separate operational systems

Atomic CRM and Convex serve different purposes.

```text
Atomic CRM
= Internal financing operations

Convex
= External lead marketplace and lead commerce
```

Do not mirror every Atomic CRM table into Convex.

### 2.3 No contact data before purchase

Marketplace previews must never expose:

- Full name
- Email address
- Phone number
- Exact property address
- Identifying company name
- Uploaded documents
- Government identification
- Sensitive financial records

### 2.4 Payment confirmation must be server-authoritative

Do not grant lead access based on a browser redirect.

Access may only be granted after a verified Stripe webhook confirms successful payment.

### 2.5 Consent controls distribution

Do not publish or distribute an opportunity unless its consent record permits that distribution type.

### 2.6 Security must be enforced server-side

Hiding pages, fields or buttons is not authorization.

Every protected query, mutation, API route and file-access request must verify the authenticated user and permissions.

---

## 3. Recommended Repository Structure

Create a monorepo named:

```text
financing-growth-platform
```

Use:

```text
pnpm workspaces
Turborepo
TypeScript
ESLint
Prettier
Vitest
Playwright
```

Recommended structure:

```text
financing-growth-platform/
├── apps/
│   ├── website/
│   ├── marketplace/
│   └── atomic-crm/
├── packages/
│   ├── shared-types/
│   ├── validation/
│   ├── ui/
│   ├── calculators/
│   ├── attribution/
│   ├── consent/
│   ├── integrations/
│   ├── observability/
│   └── config/
├── services/
│   ├── convex/
│   └── cloud-run/
│       ├── lead-intake/
│       ├── atomic-convex-sync/
│       ├── secure-upload/
│       └── ai-analysis/
├── infrastructure/
│   ├── terraform/
│   ├── cloudbuild/
│   ├── docker/
│   └── scripts/
├── docs/
│   ├── architecture.md
│   ├── data-model.md
│   ├── api-contracts.md
│   ├── security.md
│   ├── consent-model.md
│   ├── deployment.md
│   ├── runbooks.md
│   └── adr/
├── .github/workflows/
├── turbo.json
├── pnpm-workspace.yaml
├── package.json
├── CLAUDE.md
└── README.md
```

---

## 4. Application Responsibilities

### 4.1 `apps/website`

The public Astro website is responsible for:

- SEO pages
- Residential mortgage pages
- Business financing pages
- Commercial financing pages
- Location pages
- Industry pages
- Articles
- Calculators
- Lead forms
- Referral forms
- Consent capture
- Attribution capture
- Conversion events

The website must not contain privileged Supabase, Convex, Stripe or Google Cloud credentials.

### 4.2 `apps/marketplace`

The marketplace application is responsible for:

- Buyer registration
- Organization accounts
- Professional verification
- Marketplace browsing
- Listing previews
- Exclusive lead purchases
- Shared lead purchases
- Purchased lead access
- Credits and subscriptions
- Outcome reporting
- Refund and replacement requests
- Buyer dashboards
- Marketplace administration

Use Astro for routing and page structure, with React islands for interactive marketplace functionality.

### 4.3 `apps/atomic-crm`

Atomic CRM is responsible for:

- Internal contacts
- Companies
- Financing opportunities
- Residential pipeline
- Business financing pipeline
- Commercial financing pipeline
- Properties
- Tasks
- Activities
- Notes
- Lender submissions
- Referral partners
- Internal document status
- Marketplace routing decisions
- Revenue tracking
- Funded outcomes

### 4.4 `services/convex`

Convex is responsible for:

- Marketplace accounts
- Marketplace organizations
- Professional profiles
- Licence records
- Lead source records approved for marketplace use
- Service opportunities
- Sanitized marketplace listings
- Reservations
- Purchases
- Buyer entitlements
- Lead delivery
- Credits
- Subscriptions
- Notifications
- Refunds
- Replacements
- Outcomes
- Buyer performance
- Marketplace audit events

### 4.5 `services/cloud-run`

Cloud Run services are responsible for:

- Validating public submissions
- Upserting Atomic CRM records
- Sending approved opportunities to Convex
- Processing secure file uploads
- Synchronizing status between Supabase and Convex
- Running document and AI processing
- Handling retry queues
- Keeping privileged credentials server-side

---

## 5. Public Website Routes

```text
/
├── mortgages/
│   ├── home-purchase/
│   ├── refinancing/
│   ├── renewals/
│   ├── debt-consolidation/
│   ├── self-employed/
│   ├── private-mortgages/
│   ├── reverse-mortgages/
│   ├── second-mortgages/
│   └── construction-mortgages/
├── business-financing/
│   ├── working-capital/
│   ├── lines-of-credit/
│   ├── equipment-financing/
│   ├── expansion-financing/
│   ├── merchant-cash-advance/
│   ├── acquisition-financing/
│   ├── franchise-financing/
│   └── debt-consolidation/
├── commercial-financing/
│   ├── commercial-mortgages/
│   ├── bridge-financing/
│   ├── construction-financing/
│   ├── development-financing/
│   ├── commercial-refinancing/
│   ├── multi-family/
│   ├── mixed-use/
│   ├── industrial/
│   ├── retail/
│   ├── office/
│   └── land-financing/
├── professionals/
│   ├── accountants/
│   ├── business-lawyers/
│   ├── group-benefits/
│   ├── life-insurance/
│   ├── wealth-management/
│   └── commercial-advisors/
├── calculators/
├── locations/
├── industries/
├── resources/
├── referral-partners/
├── about/
├── contact/
├── privacy/
├── terms/
└── disclaimers/
```

---

## 6. Marketplace Routes

```text
/
├── marketplace/
│   ├── mortgage-leads/
│   ├── business-financing-leads/
│   ├── commercial-financing-leads/
│   ├── professional-service-leads/
│   └── leads/[listingId]/
├── dashboard/
├── matched-leads/
├── purchased-leads/
├── purchased-leads/[purchaseId]/
├── reservations/
├── credits/
├── subscriptions/
├── purchases/
├── outcomes/
├── refunds/
├── notifications/
├── organization/
├── profile/
├── verification/
├── support/
└── admin/
```

---

## 7. Shared Type Definitions

Create `packages/shared-types` with common enums for financing division, distribution type, opportunity status, consent purpose and professional category. All applications must import these shared definitions.

Required distribution models:

```text
internal
exclusive
shared
preferred_partner
direct_assignment
referral_fee
revenue_share
subscription_included
manual_review
nurture
rejected
```

Required professional categories include mortgage brokers, commercial mortgage brokers, business finance specialists, accountants, bookkeepers, fractional CFOs, business lawyers, commercial real estate lawyers, group-benefits specialists, life-insurance advisors, wealth advisors, financial planners, business brokers, commercial Realtors and appraisers.

---

## 8. Atomic CRM and Supabase Schema

Create migrations for:

```text
contacts
companies
opportunities
properties
activities
tasks
consent_records
marketplace_distribution_events
financing_scenarios
lender_submissions
document_requests
document_metadata
referral_partners
referral_relationships
audit_events
integration_events
```

`opportunities` must include:

```text
financing_division
financing_subtype
financing_purpose
requested_amount
estimated_value
pipeline_stage
priority
lead_score
assigned_user_id
expected_closing_date
expected_revenue
distribution_type
marketplace_eligible
marketplace_status
convex_opportunity_id
referral_source_id
lost_reason
```

Every sensitive Supabase table must use row-level security.

---

## 9. Convex Schema

Create strongly validated Convex tables:

```text
users
organizations
organizationMembers
professionalProfiles
professionalLicences
serviceTerritories
verificationRequests
sourceLeads
serviceOpportunities
opportunityRelationships
consentRecords
marketplaceListings
listingEligibility
matchingResults
leadReservations
leadPurchases
leadAccessGrants
leadDeliveries
payments
creditAccounts
creditTransactions
subscriptions
pricingRules
leadOutcomes
refundRequests
replacementRequests
buyerPerformance
notifications
supportCases
auditEvents
integrationEvents
```

Protected source-lead information must never be returned through unrestricted listing queries.

---

## 10. Lead Intake API

Implement:

```text
services/cloud-run/lead-intake
POST /v1/leads
```

Responsibilities:

1. Verify bot-protection token.
2. Validate request with Zod.
3. Normalize email and phone.
4. Create idempotency key.
5. Search for an existing contact.
6. Create or update contact.
7. Create company where applicable.
8. Create opportunity.
9. Save consent records.
10. Save attribution.
11. Create initial activity.
12. Create initial task.
13. Calculate preliminary lead score.
14. Return a public-safe confirmation.

Do not allow the browser to write directly to privileged Atomic CRM tables.

---

## 11. Routing Engine

Implement deterministic initial routing rules.

Possible routes:

```text
internal
marketplace
preferred_partner
manual_review
nurture
reject
```

Initial rules:

- Existing clients default to internal review.
- Direct requests for Dennis default to internal.
- Important referral-partner leads default to internal.
- Out-of-jurisdiction mortgage leads may route to marketplace.
- Specialist opportunities may route to qualified marketplace buyers.
- Commercial opportunities default to exclusive or preferred partner.
- Shared distribution requires multiple-professional consent.
- Cross-professional opportunities require related-services consent.
- Unclear or high-risk leads require manual review.

---

## 12. Opportunity Discovery Engine

Implement a rule-based first version that suggests, but does not automatically publish, related opportunities.

Examples:

- Self-employed mortgage → accountant
- Business acquisition → business lawyer
- Commercial property purchase → commercial lawyer
- Business with employees → group benefits
- Shareholder-owned business → life insurance or succession planning
- Equipment expansion → equipment financing
- Commercial property → appraisal or environmental services

All suggested opportunities require review or explicit approval before marketplace publication.

---

## 13. Atomic CRM to Convex Publication

Implement:

```text
services/cloud-run/atomic-convex-sync
POST /v1/publish-opportunity
```

The service must:

1. Authenticate the internal request.
2. Verify marketplace eligibility.
3. Verify valid consent.
4. Load approved opportunity data.
5. Create a sanitized marketplace payload.
6. Create or update protected Convex source records.
7. Create service opportunities.
8. Create a marketplace listing draft.
9. Return Convex identifiers.
10. Update Atomic CRM integration records.
11. Record audit and integration events.

Only fields required for matching and listing may be sent to Convex.

---

## 14. Listing Preview Rules

Marketplace previews may include:

- Financing category and subtype
- General region
- Amount range
- Property type
- Industry
- Time-in-business range
- Revenue range
- Lead score band
- Documentation readiness
- Urgency
- Lead age
- Exclusive or shared status
- Remaining shared positions
- Price

Marketplace previews must not include:

- Full contact name
- Exact email or phone
- Exact street address
- Exact legal company name
- Identifying free text
- Uploaded files
- Tax identifiers
- Government identification numbers

Add automated tests that attempt to leak identifying data.

---

## 15. Buyer Verification

Buyer onboarding must include:

- Clerk account
- Organization profile
- Professional category
- Licence number where applicable
- Licence jurisdiction and expiry
- Service territories
- Financing specialties
- Deal-size preferences
- Agreement acceptance
- Billing profile

Verification statuses:

```text
unverified
pending
approved
rejected
suspended
expired
```

Only approved buyers may purchase leads.

---

## 16. Matching Engine

Match buyers using:

- Professional category
- Licence jurisdiction
- Service territory
- Financing specialty
- Deal-size range
- Industry
- Property type
- Buyer and organization status
- Subscription entitlement
- Credit balance
- Buyer performance

The buyer must not be able to modify the resulting eligibility decision.

---

## 17. Marketplace Purchase Models

### Exclusive

- Maximum completed purchases: one
- One active reservation at a time
- Listing closes after verified payment
- One organization receives access

### Shared

- Maximum purchases are configurable
- Recommended initial maximum: three
- Reservations may not exceed remaining inventory
- Transactions must prevent overselling
- Buyers must be told the lead is shared

### Cross-professional

- Separate service opportunity and listing
- Separate consent verification
- Restricted to the relevant professional category
- Buyer receives only service-relevant information

---

## 18. Reservation Logic

Implement transactional Convex reservations.

A reservation must:

1. Authenticate the buyer.
2. Verify buyer approval.
3. Verify listing status.
4. Verify buyer eligibility.
5. Calculate available inventory.
6. Prevent overselling.
7. Create a time-limited reservation.
8. Increment reserved inventory.
9. Return checkout metadata.

Recommended reservation duration: ten minutes.

Expired reservations must restore inventory.

---

## 19. Stripe Workflow

```text
Buyer selects lead
→ Convex creates reservation
→ Server creates Stripe Checkout Session
→ Buyer pays
→ Stripe sends webhook
→ Webhook signature is verified
→ Purchase transaction completes
→ Inventory updates
→ Access grant is created
→ Lead is delivered
```

Webhook processing must be idempotent, logged, retry-safe and signature-verified.

Do not grant access from a success-page redirect.

---

## 20. Lead Access Control

Every purchased-lead query must verify:

1. The user is authenticated.
2. The user belongs to the purchasing organization.
3. The purchase exists.
4. Payment is complete.
5. An active access grant exists.
6. Access has not expired or been revoked.
7. Requested fields are within the granted scope.

Record first access, subsequent access, exports, downloads and outcome updates.

---

## 21. Lead Delivery and Outcomes

After access is granted:

1. Create a delivery record.
2. Notify the buyer.
3. Display the purchased-lead workspace.
4. Require acknowledgement.
5. Start first-contact timing.
6. Allow outcome updates.
7. Record the delivery in the audit log.
8. Synchronize marketplace status to Atomic CRM.

Outcome values:

```text
not_reviewed
acknowledged
contact_attempted
contacted
appointment_booked
application_started
submitted
approved
funded
not_qualified
unreachable
client_declined
duplicate
invalid
closed_lost
```

---

## 22. Refund and Replacement Workflow

Buyers may submit a reason, description, supporting evidence and requested resolution.

Possible valid reasons:

- Invalid email and phone
- Duplicate previously sold to the same buyer
- Consumer denies the inquiry
- Material listing misclassification
- Oversold shared lead
- Exclusive lead distributed incorrectly

All administrator decisions must create audit events.

---

## 23. Secure Document Workflow

Use private Google Cloud Storage.

```text
Authorized user requests upload
→ Server verifies identity and opportunity access
→ Server issues signed upload URL
→ File uploads directly to private bucket
→ Metadata is stored in Supabase
→ Atomic CRM displays document status
→ Authorized user requests signed viewing URL
→ Access is logged
```

A marketplace purchase must not automatically release documents.

---

## 24. Authentication and Authorization

### Marketplace

Use Clerk with roles:

```text
marketplace_owner
marketplace_admin
compliance_reviewer
organization_admin
buyer
team_member
read_only_analyst
```

### Atomic CRM

Use Supabase Auth with roles:

```text
owner
administrator
mortgage_advisor
business_finance_advisor
commercial_finance_advisor
assistant
auditor
```

Every database operation must verify identity, role, organization membership, record assignment and permitted action.

---

## 25. Feature Flags

Implement:

```text
ENABLE_EXCLUSIVE_LEADS
ENABLE_SHARED_LEADS
ENABLE_CROSS_PROFESSIONAL_LEADS
ENABLE_CREDITS
ENABLE_SUBSCRIPTIONS
ENABLE_PREFERRED_PARTNERS
ENABLE_REVENUE_SHARE
ENABLE_AI_OPPORTUNITY_DISCOVERY
ENABLE_DOCUMENT_RELEASE
```

Initial MVP defaults:

```text
ENABLE_EXCLUSIVE_LEADS=true
ENABLE_SHARED_LEADS=true
ENABLE_CROSS_PROFESSIONAL_LEADS=true
ENABLE_CREDITS=false
ENABLE_SUBSCRIPTIONS=false
ENABLE_REVENUE_SHARE=false
ENABLE_AI_OPPORTUNITY_DISCOVERY=false
```

---

## 26. Testing Requirements

### Unit tests

Test:

- Normalization
- Validation
- Lead scoring
- Routing
- Opportunity discovery
- Listing sanitization
- Pricing
- Inventory calculations
- Consent checks
- Matching
- Access-grant authorization

### Integration tests

Test:

- Website submission to Supabase
- Duplicate contact handling
- Opportunity creation
- Atomic-to-Convex publication
- Listing creation
- Exclusive and shared reservations
- Reservation expiry
- Stripe webhook processing
- Access-grant creation
- Refund handling
- Atomic marketplace-status synchronization

### End-to-end tests

Required journeys:

1. Submit each primary lead type.
2. Approve a lead for marketplace publication.
3. Purchase an exclusive lead.
4. Prevent a second exclusive purchase.
5. Sell all positions of a shared lead.
6. Prevent purchases beyond the shared limit.
7. Keep cross-professional opportunities separate.
8. Block unverified buyers.
9. Block access after failed payment.
10. Restore inventory after reservation expiry.
11. Block unauthorized purchased-lead access.
12. Verify contact data never appears in previews.
13. Prevent new distribution after consent withdrawal.

### Security tests

Test organization boundaries, roles, IDOR attempts, personal-data leakage, Stripe webhook spoofing, reservation race conditions, Supabase row-level security, Convex protected queries, signed URL expiry, malicious payloads, duplicate webhooks and rate limits.

---

## 27. Observability

Implement:

- Structured logs
- Correlation IDs
- Intake IDs
- Integration event IDs
- Stripe event IDs
- Error reporting
- Marketplace audit logs
- Failed synchronization queue
- Administrator alerts

Track submission failures, CRM write failures, Convex publication failures, payment failures, webhook failures, reservation conflicts, access denials, refunds, complaints and lead-delivery latency.

---

## 28. Build Phases

### Phase 0: Repository and architecture

Deliver:

- Monorepo
- Workspace configuration
- Shared TypeScript configuration
- Linting and formatting
- Unit-test framework
- CI pipeline
- Architecture documentation
- Environment templates
- Feature flags

Exit criteria:

- All applications build.
- CI passes.
- Shared packages import correctly.

### Phase 1: Public website foundation

Deliver Astro website, design system, core layouts, content collections, SEO, structured data and initial residential, business and commercial pages.

### Phase 2: Lead intake and Atomic CRM

Deliver forms, consent, attribution, intake API, Supabase migrations, Atomic CRM resources, three pipelines, duplicate handling, tasks and activities.

### Phase 3: Convex marketplace foundation

Deliver Convex schema, Clerk authentication, organizations, professional profiles, verification, marketplace shell, admin shell, listing sanitizer and Atomic-to-Convex synchronization.

### Phase 4: Exclusive and shared lead commerce

Deliver pricing, reservations, inventory, Stripe Checkout, webhooks, purchases, access grants, lead delivery and the purchased-lead workspace.

### Phase 5: Cross-professional opportunities

Deliver service-opportunity splitting, professional categories, consent checks, separate listings and category-specific access scopes.

### Phase 6: Outcomes, refunds and performance

Deliver acknowledgements, outcome tracking, refunds, replacements, buyer performance, marketplace reporting and Atomic CRM synchronization.

### Phase 7: Secure documents and AI

Deliver private Cloud Storage, signed uploads, document metadata, access logging and optional AI analysis interfaces.

---

## 29. Claude Code Execution Rules

Claude Code must:

1. Read this PRD before modifying code.
2. Maintain `docs/implementation-status.md`.
3. Implement one phase at a time.
4. Run tests before marking a phase complete.
5. Never hardcode secrets.
6. Never bypass authorization to simplify development.
7. Never expose contact data in listing previews.
8. Never grant access based on client-side payment state.
9. Use migrations rather than manual production database changes.
10. Document major architecture decisions in `docs/adr/`.
11. Add tests for every production bug fixed.
12. Update API documentation when contracts change.
13. Keep Atomic CRM and Convex responsibilities separate.
14. Use shared types and validators.
15. Preserve idempotency in lead intake, synchronization and Stripe webhooks.
16. Document blockers when external credentials are unavailable.
17. Use feature flags for incomplete commercial models.
18. Do not claim completion until acceptance tests pass.

---

## 30. Definition of Done

A feature is complete only when:

- Code is implemented.
- Type checking passes.
- Linting passes.
- Unit tests pass.
- Relevant integration tests pass.
- Relevant Playwright tests pass.
- Authorization is tested.
- Error states are handled.
- Logging is implemented.
- Documentation is updated.
- No secrets are committed.
- User-facing states work on mobile and desktop.

---

## 31. MVP Acceptance Criteria

The MVP is ready for controlled production use when:

1. The Astro website is deployed.
2. Residential, business and commercial forms work.
3. Atomic CRM receives correct contacts and opportunities.
4. Duplicate handling works.
5. Consent records are retained.
6. Opportunities can be approved for marketplace publication.
7. Convex creates sanitized listings.
8. Buyer registration and verification work.
9. Exclusive and shared purchasing work.
10. Cross-professional listings can be created.
11. Stripe webhooks are verified.
12. Purchases create access grants.
13. Unpaid buyers cannot access leads.
14. Exclusive leads cannot be sold twice.
15. Shared leads cannot exceed their maximum.
16. Purchased lead data is organization-protected.
17. Marketplace previews expose no contact details.
18. Buyers can acknowledge and update outcomes.
19. Refund requests can be reviewed.
20. Atomic CRM receives marketplace status updates.
21. Audit events are available.
22. Security tests pass.
23. Backup and recovery procedures are documented.
24. Production monitoring and alerts are configured.

---

## 32. Initial Launch Configuration

Launch categories:

```text
Residential mortgage leads
Business financing leads
Commercial financing leads
Accounting opportunities
Business legal opportunities
Group-benefits opportunities
Life-insurance opportunities
Wealth-advisory opportunities
```

Enabled models:

```text
Exclusive leads
Shared leads
Cross-professional leads
Preferred-partner assignments
```

Initial payment model:

```text
Fixed-price Stripe purchases
```

Deferred behind feature flags:

```text
Credit packages
Monthly subscriptions
Territory subscriptions
Automated revenue sharing
Automated AI opportunity publication
Automatic document release
```

---

## 33. Final System Model

```text
Consumers and business owners
              ↓
Astro financing website
              ↓
Lead intake, consent and qualification
              ↓
Atomic CRM internal opportunity record
              ↓
Routing and opportunity splitting
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

The system must treat every lead as a protected business relationship, not a commodity record. Marketplace revenue must be generated through accurate qualification, appropriate consent, controlled distribution and qualified professional matching.

---

## Initial Claude Code Instruction

> Implement Phase 0 only. Create the monorepo, shared tooling, architecture documentation, environment templates, CI and implementation checklist. Do not begin application features until Phase 0 tests pass.
