# Product Requirements Document — LeadSniper Marketplace

**Version:** 1.1  
**Status:** Execution baseline  
**Primary market:** British Columbia, Canada  
**Currency:** CAD

## 1. Product vision

LeadSniper Marketplace is a B2B Financial Growth Operating System that identifies business-owner financing needs, qualifies opportunities, and routes consented leads to suitable financial professionals. It combines an SEO and calculator-driven acquisition layer, a real-time Convex marketplace, Atomic CRM workflows, and an expedited B-Express channel for time-sensitive established-business funding requests.

## 2. Outcomes

- Generate qualified mortgage, commercial-finance, and business-loan opportunities.
- Retain high-value opportunities internally when strategically appropriate.
- Monetize exclusive and limited-shared inventory.
- Improve speed-to-contact, matching quality, traceability, and buyer confidence.
- Create repeatable distribution infrastructure for additional professional verticals.
- Provide a governed express path for urgent working-capital and business-financing requests without representing an automated approval.

## 3. Users

- **Business owner/borrower:** requests financing or a growth assessment.
- **Buyer:** an approved broker, lender, accountant, lawyer, benefits advisor, or wealth advisor.
- **Qualifier:** verifies consent, completeness, suitability, urgency, and lead quality.
- **Operator/admin:** controls pricing, inventory, buyers, refunds, rules, and reporting.
- **Auditor:** read-only access to consent, access and transaction evidence.

## 4. Distribution modes

| Mode | Rule | Contact disclosure |
|---|---|---|
| Exclusive | One completed purchase; inventory closes immediately | After confirmed payment |
| Shared | Up to a configured purchase cap | After each confirmed payment |
| Internal | Assigned to an internal organization; never publicly purchasable | On authorized assignment |
| Direct referral | Routed to one approved provider under a documented referral workflow | After authorized assignment and required consent |

A reservation temporarily reduces available inventory. Expired and failed reservations release it. Purchase limits must be enforced atomically on the server.

## 5. Lead lifecycle

`draft → qualified → listed → reserved → sold/assigned → working → dispositioned`

Alternative terminal states: `withdrawn`, `expired`, `refunded`. Revoked consent blocks further distribution and triggers an operational review.

## 6. MVP functional requirements

### Owner acquisition and intake

- Financing pages for mortgages, commercial financing and business loans.
- Structured intake with financing purpose, amount, geography, timeline, business profile and contact information.
- Explicit consent with policy version, purpose, source, timestamp and channels.
- Duplicate detection and progressive save.
- Calculators may provide illustrations but must not represent approval.

### B-Express funding channel

- Expedited intake for established businesses seeking time-sensitive working capital, term loans, lines of credit, revenue-based financing, refinancing, equipment financing, invoice financing, or secured business loans.
- Configurable preliminary screening using time in business, monthly revenue, geography, funding purpose, amount, credit band, existing debt, collateral indicators, and document readiness.
- Preliminary route values: `EXPRESS_ELIGIBLE`, `ADVISORY_REVIEW`, `DOCUMENTS_REQUIRED`, and `NOT_CURRENTLY_SERVICEABLE`.
- Immediate acknowledgement and completeness checking.
- Human-controlled final qualification, routing, publication, and protected-data disclosure.
- Indicative product categories and funding bands may be displayed only with clear non-approval disclosures.
- Secure document request and metadata tracking; documents are never included in marketplace previews or automatically released after purchase.
- Routing to internal assignment, direct referral, exclusive listing, limited-shared listing, advisory review, or service-unavailable disposition.
- Service-level clocks for acknowledgement, first contact, qualification, document request, and routing decision.
- Complete requirements are defined in [B-Express Funding Channel](B_EXPRESS_FUNDING_CHANNEL.md).

### Qualification console

- Review and correct submissions.
- Assign vertical, quality score, urgency, region, pricing and distribution mode.
- Verify consent and suppress invalid or duplicate opportunities.
- Generate a PII-free marketplace summary.
- Route internally, directly refer, or publish inventory.
- Record human overrides of rules-assisted B-Express recommendations.

### Buyer onboarding

- Organization and user registration.
- Professional role, license/credential where applicable, specialty, geography and capacity.
- Administrative approval and suspension.
- Acceptance of marketplace, confidentiality and permitted-use terms.
- Funding-provider capability profiles including product, amount, geography, industry, tenure, revenue, credit, collateral, and capacity rules.

### Marketplace

- Search and filter by vertical, location, financing purpose, amount band, urgency, age and quality.
- Preview without direct identifiers.
- Show price, distribution mode and remaining shared inventory.
- Reserve inventory for a short checkout window.
- Reveal authorized contact details only after payment/assignment.
- Prevent buyer access outside approved scope.
- Match B-Express inventory only to providers whose documented capability profile permits the opportunity.

### Payments

- Stripe test-mode checkout for MVP.
- Idempotent webhook processing.
- CAD integer-cent accounting.
- Refund and dispute states with audit events.
- No success state based solely on client-side redirects.

### Atomic CRM

- Create/update contact, company and opportunity after a paid purchase or internal assignment.
- Create an internal opportunity when a B-Express application becomes actionable, before marketplace distribution.
- Synchronize owner, buyer, source, consent reference, lead ID, channel, product, value and lifecycle state.
- Use an outbox with idempotency keys, retries and dead-letter visibility.
- Do not make marketplace purchase completion depend on synchronous CRM availability.

### Administration and reporting

- Lead funnel, qualification rate, listing rate, sell-through, time-to-first-contact, revenue, refund rate and buyer repeat rate.
- Inventory by mode, vertical and geography.
- B-Express completion, eligibility, documents-required, route, offer, funding, response-time and funded-amount metrics.
- Full audit timeline for sensitive records.
- CSV export restricted by role and recorded as an audit event.

## 7. Quality scoring

MVP quality score is a transparent 0–100 rules-based score:

- Completeness: 20
- Consent and contact validation: 20
- Financing fit/specificity: 20
- Urgency and timeline: 15
- Geographic/serviceability fit: 15
- Duplicate/fraud confidence: 10

B-Express may use a channel-specific operational score for prioritization and routing. Neither score is an approval probability or credit decision.

AI may recommend classifications, but a human qualifier controls publication during MVP.

## 8. Security and compliance requirements

- Apply Canadian privacy requirements and obtain legal review before production.
- Data minimization, least privilege and purpose limitation.
- Encrypt direct identifiers at the application boundary; never place PII in logs or analytics.
- Separate preview data from protected owner profiles.
- Append-only audit events for material actions.
- Retention and deletion policy with legal-hold capability.
- Rate limiting, abuse controls, secret rotation and dependency scanning.
- Production launch requires documented incident response and privacy-impact review.
- Do not represent preliminary B-Express screening as approval, guaranteed funding, or a binding offer.
- Disclose applicable fees, commissions, referral compensation, conflicts, repayment structure, and material financing terms where required.

## 9. Success metrics

- Median response to qualified submissions under 5 minutes during operating hours.
- Qualification-to-listing rate tracked by source and vertical.
- Exclusive sell-through and shared seat utilization.
- Purchase-to-contact SLA adherence.
- Buyer repeat purchase rate.
- Refund/dispute and lead-quality complaint rates.
- Revenue and contribution margin per lead/source.
- Consent, audit and CRM-sync exception counts.
- B-Express median time to first contact, qualification, routing, offer, and funding outcome.

Targets will be baselined during the first 30 days rather than invented before traffic exists.

## 10. MVP exclusions

- Automated lending decisions or credit adjudication.
- Open access to raw contact data.
- Cross-border launch.
- Auction pricing.
- Buyer-to-buyer resale.
- Fully autonomous publication.
- Native mobile applications.
- Guaranteed same-day funding claims.
- Automatic release of borrower documents to marketplace buyers.

## 11. Acceptance scenarios

### Marketplace shared lead

A consented BC business-loan inquiry is qualified and listed as shared with two seats. Two verified buyers can independently reserve and purchase it. A third cannot. Contact data appears only after confirmed payment. Both purchases generate audit events and independent Atomic CRM opportunities. Expired reservations restore inventory.

### B-Express exclusive lead

A BC business owner operating for 30 months requests CAD 80,000 for inventory and working capital, reports CAD 45,000 in average monthly revenue, completes consent, and supplies required bank statements. A rules-assisted check recommends priority express review. An authorized qualifier confirms eligibility and creates a PII-free exclusive listing. An eligible verified funding professional purchases it. Contact access is granted after authoritative payment confirmation, while document access remains blocked until separately authorized. All screening, override, routing, purchase, disclosure, submission, and outcome actions are auditable.