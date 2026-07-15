# B-Express Funding Channel

**Status:** Product and implementation specification  
**Channel code:** `B_EXPRESS`  
**Initial market:** British Columbia, Canada  
**Currency:** CAD  
**Primary outcome:** Rapidly qualify and route established-business funding requests without representing an approval or exposing protected borrower information.

## 1. Purpose

B-Express is the expedited business-funding channel within LeadSniper Marketplace. It is designed for established Canadian businesses that need working capital, short-term liquidity, equipment funding, refinancing, or another time-sensitive commercial financing solution.

The channel combines:

- a conversion-focused borrower intake;
- transparent preliminary eligibility screening;
- rapid human qualification;
- internal or marketplace routing;
- lender and buyer matching based on documented eligibility rules;
- auditable consent, contact, and outcome tracking.

B-Express is a distribution and advisory workflow. It must not make automated credit decisions, promise approval, quote a binding rate, or present an estimated funding range as a commitment.

## 2. Target users

### Business owner

An established business owner seeking financing quickly and willing to provide sufficient operating and financial information for preliminary qualification.

### Internal funding advisor

Reviews submissions, validates information, identifies viable product paths, requests documentation, and decides whether to retain, refer, or list the opportunity.

### Approved funding professional

A verified lender, broker, or commercial-finance professional authorized for the product, geography, deal size, and borrower profile.

### Operator or compliance reviewer

Controls channel rules, disclosures, routing policies, access, exceptions, complaints, and audit evidence.

## 3. Supported funding purposes

Initial B-Express product categories:

1. Working-capital loan
2. Business term loan
3. Business line of credit
4. Merchant cash advance or revenue-based financing
5. Business debt consolidation or refinancing
6. Equipment financing or leasing
7. Invoice financing or receivables financing
8. Secured business loan

Commercial mortgages, government programs, grants, equity, startup financing, and complex acquisition financing may be identified during intake but must leave the express path for an advisory workflow.

## 4. Preliminary eligibility profile

The default screening profile is configurable and must be treated as guidance rather than an approval rule.

Initial guidance:

- operating business rather than pre-revenue startup;
- at least 12 months in business;
- average gross monthly revenue of at least CAD 15,000;
- Canadian operating presence;
- business bank account with recent activity;
- identifiable use of funds;
- authorized applicant with consent to collect and share information;
- credit profile and industry compatible with at least one approved funding provider.

Failure to meet one criterion must not automatically reject an applicant. The system should assign the application to one of four preliminary routes:

- `EXPRESS_ELIGIBLE`
- `ADVISORY_REVIEW`
- `DOCUMENTS_REQUIRED`
- `NOT_CURRENTLY_SERVICEABLE`

Only an authorized human qualifier may finalize the route during the initial release.

## 5. Borrower experience

### Step 1 — Express assessment

Capture:

- legal and operating business name;
- province and primary operating location;
- industry;
- time in business;
- approximate monthly gross revenue;
- requested amount;
- intended use of funds;
- desired funding timeline;
- approximate credit range;
- existing business debt and monthly payments;
- presence of equipment, property, receivables, contracts, or card sales;
- applicant name, role, phone, email, and preferred contact channel;
- source attribution and campaign data;
- required consent and disclosure acknowledgements.

### Step 2 — Preliminary result

The interface may display:

- likely product categories;
- indicative funding band;
- expected documents;
- whether an expedited review appears available;
- the next operational step.

Every result must state that it is preliminary, subject to verification, lender review, pricing, documentation, and final approval.

### Step 3 — Secure document request

Documents may include:

- three to six months of business bank statements;
- government-issued identification through an approved secure process;
- void cheque or bank-account verification;
- articles or business registration;
- financial statements or tax filings when required;
- accounts-receivable aging;
- equipment quote;
- existing loan statements;
- commercial lease or property information.

Documents must remain private. They are never included in a marketplace preview and are not automatically released through a lead purchase.

### Step 4 — Qualification and routing

A qualifier validates the submission and chooses:

- internal advisory assignment;
- direct lender or approved partner referral;
- exclusive marketplace listing;
- limited-shared marketplace listing with explicit consent;
- advisory review outside B-Express;
- decline or service-unavailable disposition.

## 6. Service-level objectives

During configured operating hours:

- submission acknowledgement: immediate;
- first automated completeness check: under 60 seconds;
- qualified human review target: under 15 minutes;
- first contact target for high-urgency complete files: under 5 minutes;
- document request: under 30 minutes;
- routing decision for complete standard files: same business day;
- lender response and funding timing: tracked but never guaranteed by the platform.

SLA clocks must pause when required applicant information is missing and resume when the record becomes actionable.

## 7. Qualification model

B-Express uses a transparent rules-assisted score. AI may summarize or recommend classifications, but it cannot approve, decline, publish, or disclose protected data autonomously.

Suggested 100-point score:

- identity, authority, consent, and contact validation: 15;
- business tenure and operating stability: 15;
- revenue quality and consistency: 20;
- financing purpose and amount specificity: 15;
- repayment-capacity indicators: 15;
- collateral or alternative repayment sources: 10;
- urgency and document readiness: 5;
- duplicate, fraud, and restricted-industry confidence: 5.

Score bands are operational prioritization tools:

- 80–100: priority express review;
- 60–79: standard express review;
- 40–59: advisory or documents-required review;
- below 40: manual serviceability review.

A score is not a credit decision and must never be displayed as an approval probability.

## 8. Routing and matching

Matching must consider:

- funding product;
- minimum and maximum amount;
- province and service territory;
- industry eligibility and exclusions;
- time in business;
- revenue floor;
- credit band;
- collateral type;
- repayment structure;
- urgency and document status;
- buyer capacity and response performance;
- borrower distribution consent;
- internal-retention rules.

Routing priority:

1. borrower suitability and permitted use;
2. internal strategic-retention policy;
3. strongest documented product fit;
4. buyer or lender availability;
5. service-level performance;
6. commercial economics.

Compensation must not override borrower suitability or consent.

## 9. Marketplace preview contract

The public or buyer-visible preview may include:

- province or broad service area;
- industry category;
- years-in-business band;
- monthly-revenue band;
- requested-amount band;
- funding purpose;
- urgency;
- asset or receivable indicators;
- document-readiness status;
- quality band;
- distribution mode and price.

The preview must exclude:

- names;
- exact address;
- phone and email;
- bank names and account information;
- exact revenue where re-identification risk is material;
- uploaded documents;
- free-text content containing direct identifiers;
- credit-report data;
- government identifiers.

## 10. Data ownership

### Atomic CRM and Supabase

Own the complete internal borrower, company, opportunity, qualification, lender-submission, document-status, task, communication, and funded-outcome record.

### Convex

Owns the sanitized B-Express listing, matching eligibility, availability, reservation, purchase, access grant, buyer action, and marketplace outcome record.

### Secure document storage

Owns encrypted documents and access grants. Convex and marketplace buyers receive metadata only unless a separately authorized secure-sharing workflow is completed.

## 11. Core statuses

### Application status

`started → submitted → validating → needs_information → qualified → routed → working → funded/not_funded`

Alternative states:

`withdrawn`, `duplicate`, `consent_revoked`, `not_serviceable`, `expired`.

### Express route

`unassigned`, `express_eligible`, `advisory_review`, `documents_required`, `not_currently_serviceable`.

### Distribution state

`internal`, `direct_referral`, `exclusive`, `shared`, `not_distributed`.

## 12. Required audit events

Record append-only events for:

- application creation and submission;
- consent capture and policy version;
- material field changes;
- score calculation and human override;
- document request, upload, access, and revocation;
- preliminary route and final route;
- listing creation or suppression;
- buyer match, reservation, purchase, view, and export;
- contact disclosure;
- lender or partner submission;
- offer, decline, withdrawal, funding, refund, and complaint;
- consent withdrawal and deletion request.

## 13. Compliance and customer protection

- Obtain Canadian privacy and commercial-lending legal review before production.
- Use plain-language disclosure that LeadSniper Marketplace may act as a broker, referral platform, marketplace, or advisor depending on the transaction.
- Disclose fees, commissions, referral compensation, and conflicts where required.
- Do not use “approved,” “guaranteed,” or “same-day funding” unless the statement is accurate for the specific provider and supported by evidence.
- Present rates, fees, holdbacks, repayment frequency, total repayment, term, security, guarantees, and prepayment conditions before acceptance.
- Require separate consent for shared distribution and related professional services.
- Maintain restricted-industry and prohibited-use rules.
- Provide a complaint and correction workflow.

## 14. Operational dashboard

Track:

- applications by source and campaign;
- completion rate;
- preliminary route;
- median time to first contact;
- median time to qualification;
- documents-required rate;
- express eligibility rate;
- internal, direct, exclusive, and shared routing mix;
- lender or buyer response time;
- offer and funding rate;
- funded amount;
- gross revenue and contribution margin;
- complaint, refund, and consent-revocation rate;
- repeat borrower and repeat buyer rate.

## 15. MVP acceptance scenario

A BC business owner operating for 30 months requests CAD 80,000 for inventory and working capital. The company reports CAD 45,000 in average monthly revenue, completes consent, and submits the required bank statements.

The system validates completeness, assigns a priority express-review recommendation, and creates an Atomic CRM opportunity. An authorized qualifier confirms the route, generates a PII-free preview, and lists the opportunity exclusively in Convex. An eligible verified funding professional reserves and purchases the listing. Contact access is granted only after authoritative payment confirmation. Document access remains blocked until separately authorized. Contact, routing, purchase, access, lender-submission, and outcome events are auditable.

## 16. Delivery sequence

1. Approve this product specification and disclosures.
2. Add B-Express context, workstream, agent boundaries, and ADRs to the Interpretive Contextual Workspace.
3. Define typed intake, consent, score, route, preview, and lender-capability contracts.
4. Implement fixtures and tests with synthetic data.
5. Build the Astro express-assessment experience.
6. Build Atomic CRM qualification and routing workflows.
7. Build Convex sanitized inventory and eligibility matching.
8. Add secure-document metadata and access workflow.
9. Add dashboards, audit evidence, and operational runbooks.
10. Complete security, privacy, legal, and production-readiness review.

Application code must not begin before the repository’s required Phase 0A and Phase 0B foundations are approved.