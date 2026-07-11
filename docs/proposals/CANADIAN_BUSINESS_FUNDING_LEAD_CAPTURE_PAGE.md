# Proposed Lead Capture Page — Canadian Business Funding

**Status:** Implementation-ready proposal  
**Market:** Canada, with British Columbia as the initial operating region  
**Primary audience:** Canadian business owners seeking financing  
**Benchmark:** Swoop Funding Canada marketplace model, adapted for LeadSniper Marketplace  
**Implementation phase:** Public Astro website, after Phase 0A and Phase 0B approval

## 1. Purpose

Create a high-conversion business-funding landing page that helps Canadian business owners identify suitable financing options, complete a structured funding assessment, and consent to follow-up by LeadSniper Marketplace and approved financial professionals.

The page must not promise approval or present financing illustrations as lender commitments. Its purpose is to capture, qualify, score, and route legitimate financing opportunities.

## 2. Primary outcome

Convert qualified Canadian business-owner traffic into structured financing opportunities containing:

- financing purpose
- requested amount
- province and business location
- business profile
- revenue and time-in-business indicators
- urgency and intended use of funds
- preferred contact method
- explicit consent and distribution permissions

## 3. Positioning

### Core value proposition

**Find the right funding path for your Canadian business.**

Compare potential business loans, lines of credit, equipment financing, commercial mortgages, acquisition financing, and cash-flow solutions through one guided assessment.

### Supporting message

Tell us what your business is trying to accomplish. We will organize your information, identify relevant financing categories, and connect you with an appropriate financing professional where suitable.

### Trust statements

- One guided funding assessment
- Multiple potential financing paths
- No obligation to proceed
- Canadian business-financing focus
- Human review before marketplace distribution
- Your information is not publicly displayed

## 4. Page goals

1. Explain business funding in outcome-based language.
2. Avoid forcing visitors to understand technical lending terminology.
3. Capture enough information to support preliminary product matching.
4. Separate internal, exclusive, shared, and related-professional consent.
5. Minimize abandonment through progressive disclosure.
6. Produce a structured lead compatible with Atomic CRM, Supabase, and Convex.
7. Provide useful next-step guidance even when the lead is not immediately financeable.

## 5. Recommended page structure

## 5.1 Header

Minimal navigation:

- Funding Options
- How It Works
- Resources
- For Financial Professionals
- Sign In

Primary header CTA:

**Check My Funding Options**

## 5.2 Hero section

### Headline

**Business funding built around your goals**

### Subheadline

Explore potential Canadian business loans, lines of credit, equipment financing, commercial mortgages, acquisition financing, and working-capital solutions through one guided assessment.

### Primary CTA

**Find My Funding Options**

### Secondary CTA

**Speak With a Financing Advisor**

### Hero reassurance

- Takes approximately 3–5 minutes
- No obligation to proceed
- No public listing of personal contact information
- Preliminary matching only; final approval is subject to lender review

## 5.3 Funding-purpose selector

Prompt:

**What would you like funding to help your business accomplish?**

Options:

1. Manage cash flow
2. Purchase inventory
3. Buy equipment or vehicles
4. Expand or renovate
5. Purchase commercial property
6. Refinance or consolidate business debt
7. Buy a business or franchise
8. Fulfil a large contract or purchase order
9. Fund construction or development
10. Start a business
11. Access grants, tax credits, or innovation funding
12. Something else

Each option should map to one or more product families.

## 5.4 Product families

The homepage should prioritize the most widely relevant Canadian funding products:

### Cash flow

- Business line of credit
- Working-capital loan
- Invoice financing
- Inventory financing

### Growth

- Term business loan
- Equipment financing or leasing
- Purchase-order financing
- Government-backed small-business financing

### Property

- Owner-occupied commercial mortgage
- Commercial refinance
- Bridge financing
- Construction financing

### Transactions

- Business acquisition financing
- Franchise financing
- Partner buyout
- Succession financing

### Restructuring

- Business debt consolidation
- Merchant-cash-advance refinance
- CRA obligation financing, where available and appropriate
- Asset-based refinancing

## 5.5 How it works

### Step 1 — Tell us your goal

Describe how much funding you need, what it will be used for, and when it is required.

### Step 2 — Complete the business assessment

Provide basic information about the business, revenue, operating history, location, and current financing.

### Step 3 — Receive potential funding paths

The system identifies relevant product categories and flags missing information or preparation steps.

### Step 4 — Human review and matching

A qualified team member reviews the request before internal assignment or consented distribution to an approved professional.

## 6. Lead capture experience

Use a multi-step form with autosave and a visible progress indicator.

### Step 1 — Funding objective

Required fields:

- funding purpose
- requested amount band
- requested exact amount, optional initially
- desired funding timeline
- province or territory

Recommended amount bands:

- Under $25,000
- $25,000–$49,999
- $50,000–$99,999
- $100,000–$249,999
- $250,000–$499,999
- $500,000–$999,999
- $1 million–$2.49 million
- $2.5 million or more

### Step 2 — Business profile

Required fields:

- legal or operating business name
- industry
- business structure
- years in business
- city
- province or territory
- approximate annual revenue band
- number of employees, optional

Revenue bands:

- Pre-revenue
- Under $100,000
- $100,000–$249,999
- $250,000–$499,999
- $500,000–$999,999
- $1 million–$2.49 million
- $2.5 million–$4.99 million
- $5 million or more

### Step 3 — Financing profile

Fields should branch based on the selected purpose.

Common fields:

- profitable in the most recent fiscal year: yes, no, unsure
- approximate monthly revenue
- existing monthly business debt payments
- outstanding tax obligations: yes, no, prefer to discuss
- business property ownership: yes, no
- available equipment or receivables: yes, no, unsure
- financial statements available: yes, no, in progress
- personal credit range, optional and self-declared

Purpose-specific examples:

- equipment type and estimated purchase price
- commercial property type and purchase price
- acquisition target price and buyer equity
- invoice balance and customer payment terms
- purchase-order value and supplier cost
- existing debt balances and monthly payments

### Step 4 — Contact information

Required fields:

- first name
- last name
- email
- phone
- preferred contact channel
- best time to contact

Optional:

- professional advisor currently involved
- referral source
- preferred language

### Step 5 — Consent and review

Display a plain-language summary before submission.

Required consent:

- permission to store and review the financing request
- permission to contact the applicant about this request
- acknowledgement that the assessment is not an approval or commitment
- acceptance of privacy notice and terms version

Optional, separate consent controls:

- permit matching with one approved financing professional
- permit limited sharing with a stated maximum number of approved professionals
- permit contact about separately identified related professional services
- permit marketing communications

Unchecked optional permissions must not block submission for internal review.

## 7. Dynamic result page

After submission, display a preliminary funding-readiness summary.

### Result components

- financing goal
- requested amount band
- business profile summary
- likely product categories
- preparation checklist
- missing-information flags
- assigned next step
- expected contact channel

### Example product-match output

**Potential financing paths to review**

1. Working-capital term loan
2. Secured or unsecured business line of credit
3. Equipment financing
4. Commercial mortgage refinance

Required disclaimer:

> These are preliminary financing categories for discussion. They are not offers, approvals, commitments, rates, or guarantees. Final eligibility and terms are determined by financing providers after complete underwriting.

## 8. Product-matching rules for MVP

Use transparent rules rather than autonomous credit adjudication.

Examples:

- cash-flow purpose + established revenue → line of credit or working-capital loan
- equipment purchase → equipment loan or lease
- property purchase or refinance → commercial mortgage workflow
- unpaid B2B invoices → invoice financing workflow
- confirmed purchase order → purchase-order financing workflow
- business purchase → acquisition-financing workflow
- high-cost existing debt → debt-consolidation review
- pre-revenue startup → startup, government-program, grant, or equity education workflow

Rules may recommend categories but must not declare approval probability as fact.

## 9. Lead quality scoring inputs

Map the form to the PRD’s 0–100 quality framework.

### Completeness — 20 points

- core business fields complete
- amount and purpose defined
- financing timeline supplied
- contact details validated

### Consent and contact validation — 20 points

- required consent recorded
- email validation
- phone validation
- policy version and timestamp stored

### Financing fit and specificity — 20 points

- use of funds is specific
- requested amount is plausible relative to revenue or asset value
- appropriate product family can be identified

### Urgency and timeline — 15 points

- immediate deadline identified
- reason for deadline captured
- documents available or preparation status known

### Geographic and serviceability fit — 15 points

- Canadian business
- province captured
- supported product and professional coverage available

### Duplicate and fraud confidence — 10 points

- duplicate detection
- velocity and abuse checks
- contact consistency
- suspicious-input flags

## 10. Data contract

Suggested top-level submission object:

```ts
interface CanadianBusinessFundingLead {
  id: string;
  source: string;
  attribution: {
    landingPage: string;
    referrer?: string;
    campaign?: string;
    medium?: string;
    keyword?: string;
  };
  fundingRequest: {
    purpose: string;
    amountBand: string;
    requestedAmount?: number;
    timeline: string;
    notes?: string;
  };
  business: {
    legalName: string;
    operatingName?: string;
    industry: string;
    structure: string;
    yearsInBusiness: number;
    city: string;
    provinceTerritory: string;
    annualRevenueBand: string;
    monthlyRevenue?: number;
    employeeCount?: number;
  };
  financingProfile: {
    profitableLastYear?: boolean;
    monthlyDebtPayments?: number;
    taxObligations?: string;
    ownsBusinessProperty?: boolean;
    hasEquipmentOrReceivables?: boolean;
    financialStatementsStatus?: string;
    declaredCreditRange?: string;
    purposeSpecific?: Record<string, unknown>;
  };
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    preferredChannel: string;
    bestContactTime?: string;
    preferredLanguage?: string;
  };
  consent: {
    requiredReviewConsent: boolean;
    contactConsent: boolean;
    privacyTermsVersion: string;
    singleProfessionalMatch?: boolean;
    limitedSharedMatch?: boolean;
    maximumSharedProfessionals?: number;
    relatedServicesConsent?: boolean;
    marketingConsent?: boolean;
    capturedAt: string;
    captureSource: string;
  };
}
```

## 11. System routing

```text
Astro lead capture page
        ↓
Server-side validation and anti-abuse controls
        ↓
Supabase lead intake record
        ↓
Atomic CRM contact, company, and opportunity
        ↓
Human qualification
        ↓
Internal assignment OR consented Convex listing
        ↓
Verified professional match or purchase
        ↓
Outcome tracking and CRM synchronization
```

No personally identifying contact information may appear in a marketplace preview.

## 12. CRM field mapping

### Contact

- first and last name
- email
- phone
- preferred channel
- language
- consent reference

### Company

- legal and operating name
- industry
- structure
- years in business
- city and province
- revenue band

### Opportunity

- financing purpose
- requested amount
- timeline
- product family
- quality score
- urgency
- source and campaign
- internal or marketplace routing decision
- assigned professional
- lifecycle stage
- funded amount and outcome

## 13. SEO landing-page cluster

The main page should serve as the hub for supporting Canadian funding pages:

- Business loans Canada
- Business line of credit Canada
- Working-capital loans Canada
- Small-business loans in British Columbia
- Equipment financing Canada
- Commercial mortgages Canada
- Business acquisition financing Canada
- Invoice financing Canada
- Purchase-order financing Canada
- Business debt consolidation Canada
- Canada Small Business Financing Program guide
- Financing for self-employed business owners

Each page should use the same structured intake component while preserving page-specific attribution.

## 14. Accessibility and UX requirements

- WCAG 2.2 AA target
- keyboard-operable form
- descriptive labels, not placeholder-only inputs
- inline validation with error summary
- plain-language consent
- saved progress without exposing sensitive data in browser storage
- mobile-first layout
- no deceptive countdowns or false scarcity
- no preselected optional consent
- back button must retain entered data safely

## 15. Compliance safeguards

- Obtain Canadian privacy and financial-services legal review before production.
- Record consent text, version, source, timestamp, and distribution scope.
- Separate internal review from marketplace distribution permission.
- Do not expose personal or business identifiers in public or buyer previews.
- Do not present product matching as underwriting or approval.
- Do not advertise rates without source, assumptions, and update controls.
- Provide consent withdrawal and data-access workflows.
- Apply retention, deletion, and legal-hold policies.

## 16. Analytics events

Recommended events:

- `funding_page_viewed`
- `funding_assessment_started`
- `funding_purpose_selected`
- `funding_step_completed`
- `funding_assessment_abandoned`
- `funding_assessment_resumed`
- `funding_assessment_submitted`
- `single_match_consent_granted`
- `shared_match_consent_granted`
- `related_services_consent_granted`
- `advisor_contact_requested`
- `result_page_viewed`

Analytics must not contain raw PII or sensitive financial values.

## 17. Success metrics

- visitor-to-assessment-start rate
- start-to-submit conversion rate
- completion by device type
- completion by funding purpose
- qualified submission rate
- duplicate and invalid submission rate
- median time to first contact
- consent rate by distribution mode
- internal-assignment rate
- marketplace listing rate
- opportunity-to-funded conversion
- funded amount and contribution margin by source

Initial targets should be baselined from real traffic rather than invented.

## 18. Acceptance criteria

The proposal is implementation-ready when the future build can demonstrate:

1. A Canadian business owner can complete the assessment on mobile and desktop.
2. Required fields and conditional fields validate server-side.
3. Required consent is stored with version and timestamp.
4. Optional distribution permissions remain separate and unchecked by default.
5. A structured lead record is created without logging PII.
6. The lead is available for human qualification.
7. A PII-free preview can be generated only after consented routing.
8. The result screen clearly states that no approval or commitment has been issued.
9. Attribution is retained across the form submission.
10. Accessibility and security checks pass before release.

## 19. Recommended implementation sequence

After Phase 0A and Phase 0B are approved:

1. Create the Astro page shell and reusable funding-purpose cards.
2. Build the multi-step React intake island.
3. Add shared validation schemas and conditional question rules.
4. Add secure server-side submission handling.
5. Create Supabase and Atomic CRM mappings.
6. Implement consent evidence and audit events.
7. Add rules-based product-category matching.
8. Create the result page and preparation checklist.
9. Add analytics with PII suppression.
10. Complete accessibility, privacy, security, and integration review.

## 20. Future enhancements

- bank-statement and accounting integrations with explicit permission
- business funding capacity calculator
- document-readiness checklist
- advisor appointment scheduling
- French-language Canadian experience
- lender-specific eligibility matrices
- grant and tax-credit discovery
- annual financing review reminders
- business-health dashboard
- cross-professional opportunity discovery with separate consent
