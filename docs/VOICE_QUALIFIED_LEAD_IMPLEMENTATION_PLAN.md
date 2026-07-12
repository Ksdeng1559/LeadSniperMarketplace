# Voice-Qualified Business Funding Lead Strategy

**Status:** Planned implementation  
**Product:** LeadSniper Marketplace  
**Primary users:** Business funding applicants, internal advisors, business loan agents, and commercial finance brokers

## 1. Outcome

Build a progressive lead-intake system that converts website visitors into consented, structured, voice-qualified business funding opportunities that can be handled internally or distributed through the LeadSniper Marketplace.

The system must support two connected intake experiences:

1. A one-minute funding assessment optimized for conversion.
2. A detailed discovery process completed by long form, disclosed AI voice assistant, or human advisor.

Both experiences update one canonical lead and opportunity record. Applicants must not re-enter previously supplied information.

The AI assistant gathers and structures information. It does not approve financing, promise rates, provide regulated advice, make final lender selections, or independently release leads to buyers.

## 2. Product positioning

LeadSniper will sell access to qualified business funding opportunities rather than raw contact records.

A **Voice-Qualified Business Funding Opportunity** includes:

- completed quick assessment;
- completed AI voice discovery;
- verified telephone connection;
- confirmed funding amount, purpose, and timeline;
- business operating history and revenue indicators;
- existing debt profile;
- approximate credit range;
- security or owner-contribution indicators;
- document-readiness checklist;
- applicant business objective;
- structured discovery summary;
- completeness and confidence indicators;
- human quality-control status where required; and
- timestamped consent authorizing the applicable distribution model.

“Voice qualified” means the applicant participated in the discovery conversation. It does not mean that all statements have been independently verified or that financing is approved.

## 3. Applicant journey

1. Visitor arrives through SEO, advertising, referral, partner, or direct traffic.
2. Visitor completes the one-minute assessment.
3. The platform creates a lead ID, contact, company, opportunity, attribution record, consent record, and initial routing score.
4. The applicant selects:
   - AI discovery call;
   - detailed online discovery form; or
   - human consultation.
5. Discovery responses update the same opportunity.
6. Validation identifies missing, conflicting, or low-confidence fields.
7. A human reviews high-value, complex, sensitive, or marketplace-bound opportunities.
8. The platform creates a sanitized marketplace listing.
9. An eligible buyer reserves or purchases the opportunity.
10. Authorized contact information and the structured discovery brief are released.
11. Buyer activity, submission, funding, return, and revenue outcomes are synchronized.

## 4. One-minute assessment

### Required applicant fields

- financing type or purpose;
- requested amount band;
- time in business;
- average monthly revenue band;
- approximate owner credit range;
- funding timeline;
- province and postal code;
- first and last name;
- business name;
- email; and
- phone.

### Financing-purpose options

- working capital;
- business line of credit;
- equipment financing;
- commercial real estate;
- business acquisition;
- expansion;
- debt refinancing;
- government-supported financing; and
- not sure.

### Hidden attribution fields

- lead ID;
- landing page and product page;
- UTM source, medium, campaign, term, and content;
- referring URL;
- referral partner ID;
- campaign ID;
- initial amount band; and
- submission timestamp.

### Assessment output

The applicant may see a routing outcome such as:

- potential match identified;
- additional review required;
- startup funding review;
- commercial financing review; or
- alternative financing review.

The interface must not communicate approval, approval odds, guaranteed rates, or guaranteed funding.

## 5. Consent model

Consent must be granular, timestamped, versioned, and linked to the lead.

Separate controls are required for:

- contact about the submitted funding request;
- an automated AI discovery call;
- recording and transcription;
- release to one approved financing professional;
- release to multiple approved financing professionals;
- separately identified related-professional referrals;
- optional marketing communications; and
- privacy-policy acknowledgement.

Automated calling, recording, shared distribution, cross-professional referrals, and marketing cannot be bundled into general contact consent.

Withdrawal of consent must stop the related processing and create an audit event.

## 6. Long discovery form

The long form is the asynchronous alternative to voice or human discovery. It should be prefilled from the assessment and use conditional logic.

### Modules

1. Applicant and business identity
2. Ownership and legal structure
3. Funding objective and timing
4. Revenue, profitability, and seasonality
5. Existing obligations
6. Security, assets, and owner contribution
7. Credit range and financing history
8. Business objectives, constraints, and risks
9. Document availability
10. Referral attribution and consent

Conditional sections must appear only when relevant. Business website, additional notes, and referral fields should not be universally required.

## 7. AI voice discovery

### Opening requirements

The assistant must:

- identify the operating organization;
- clearly disclose that it is an AI assistant;
- state that it is not a lender or financing advisor;
- explain the purpose of the conversation;
- disclose recording and transcription;
- request confirmation of consent; and
- offer an online-form or human alternative.

If consent is refused or withdrawn, recording and discovery must stop and the applicant must be offered an alternative channel.

### Conversation modules

- identity confirmation;
- business profile;
- funding objective;
- requested amount and timing;
- revenue and cash-flow indicators;
- existing debts and payments;
- assets and security;
- approximate credit range and previous declines;
- available documents;
- intended business outcome;
- risks and obstacles;
- preferred follow-up; and
- final confirmation.

### Conversation rules

- ask one question at a time;
- read back material amounts and dates;
- distinguish monthly and annual figures;
- label estimates separately from confirmed figures;
- allow “unknown” and “discuss with advisor” responses;
- avoid repeating assessment answers;
- explain why sensitive information is relevant;
- do not collect passwords, banking credentials, or unnecessary government identifiers;
- do not recommend a definitive lender, rate, or approval outcome; and
- escalate when uncertainty or complexity exceeds policy thresholds.

## 8. Human escalation

A human review or transfer is required when:

- the applicant requests a person;
- consent is unclear;
- the assistant fails to understand an answer after two attempts;
- responses materially conflict;
- the request exceeds a configured amount threshold;
- commercial real estate, multiple companies, complex ownership, insolvency, tax arrears, legal disputes, or unclear liens are involved;
- a lender decline requires interpretation;
- the conversation enters advice, approval, rates, or final lender selection;
- fraud or identity concerns appear; or
- the opportunity will be listed as premium, application-ready, or complex commercial.

## 9. Structured discovery output

The system must create:

- applicant and company snapshot;
- requested amount, purpose, and timeline;
- operating history;
- revenue and profitability indicators;
- existing obligations;
- available security;
- approximate credit range;
- document-readiness checklist;
- business objective;
- material risks;
- missing or conflicting information;
- recommended financing categories for human review;
- follow-up questions;
- consent permissions;
- AI confidence by field; and
- human corrections and approval status.

The structured record is authoritative only after validation rules and required human review are satisfied. The raw transcript must never silently overwrite confirmed structured data.

## 10. Opportunity tiers

| Tier | Minimum deliverable | Distribution |
|---|---|---|
| Assessment Lead | Quick assessment and contact consent | Nurture or controlled shared |
| Voice-Qualified Lead | Assessment and completed AI discovery | Exclusive or controlled shared |
| Advisor-Ready Opportunity | Discovery, human QA, clear funding fit | Exclusive |
| Application-Ready Opportunity | Human QA and core documents available | Premium exclusive |
| Complex Commercial Mandate | Specialized, high-value opportunity | Direct assignment or permitted referral |

## 11. Marketplace preview

A pre-purchase listing may include:

- province or broad region;
- industry;
- years in business;
- requested amount band;
- funding purpose;
- revenue band;
- credit band;
- security status;
- funding timeline;
- discovery completion percentage;
- document availability;
- qualification tier;
- listing age;
- exclusive or shared availability; and
- professional specialization required.

A preview must not expose:

- applicant or owner names;
- phone or email;
- exact street address;
- bank or tax identifiers;
- government identification;
- raw documents;
- recordings; or
- transcripts.

## 12. Buyer eligibility and matching

Match buyers using:

- province, licensing, and service territory;
- loan-size preferences;
- product and industry specialization;
- commercial mortgage capability;
- lender access;
- minimum revenue or credit criteria;
- security requirements;
- active capacity;
- response performance;
- acceptance history; and
- funded outcomes.

A buyer must be verified, eligible, and authorized for the opportunity before reservation or purchase.

## 13. Commerce models

### Exclusive

One approved professional receives marketplace access. Suitable for advisor-ready, larger, acquisition, or commercial real-estate opportunities.

### Controlled shared

A limited number of eligible professionals may purchase access only when the applicant explicitly consented to multiple-professional distribution. Buyer caps must be enforced server-side.

### Outcome-based referral

A qualified professional accepts the opportunity and pays a permitted fee when funding closes. Legal and professional review is required for each jurisdiction and buyer category.

### Hybrid

A reservation or access fee plus a permitted funded-outcome fee.

Pricing must be driven by qualification tier, readiness, scarcity, transaction size, specialty, freshness, and exclusivity rather than protected personal characteristics.

## 14. Quality-control release gate

Marketplace release requires:

- a valid contact and company record;
- confirmed applicant participation;
- required fields above the completeness threshold;
- material figures read back or otherwise confirmed;
- conflicts resolved or clearly disclosed;
- valid consent for the selected distribution model;
- a sanitized preview;
- eligible buyer classification;
- fraud and duplicate screening;
- human review when required; and
- an immutable release audit event.

No AI-generated opportunity may be published automatically until the pilot demonstrates acceptable accuracy and the governance owner approves automation.

## 15. Buyer deliverable

After authoritative payment or assignment confirmation, the authorized buyer receives:

- applicant contact information;
- structured discovery brief;
- funding-needs profile;
- financial snapshot;
- existing obligations;
- credit and security bands;
- document-readiness checklist;
- missing-information list;
- recommended follow-up questions;
- relevant consent evidence;
- contact history; and
- best contact time.

Raw recordings, transcripts, and sensitive documents are excluded by default and require separately defined purpose, consent, authorization, and retention controls.

## 16. Buyer service level

Buyers must:

- accept or decline within the configured window;
- begin contact within the service level;
- follow the permitted contact cadence;
- update opportunity status;
- report submission and funding outcomes;
- protect applicant information;
- prohibit redistribution;
- honour consent limitations and withdrawal;
- return opportunities only under the documented policy; and
- provide evidence for return requests.

## 17. Return policy

Potentially valid return reasons:

- invalid contact information;
- applicant denies submitting the request;
- required distribution consent is absent;
- material qualification data was misrepresented by the platform;
- an exclusive opportunity was improperly duplicated; or
- another objective marketplace warranty failed.

Invalid reasons include:

- mismatch with only one lender;
- ordinary additional discovery work;
- buyer response outside the service level;
- applicant selects another solution; or
- buyer preference that was not an advertised eligibility condition.

## 18. Data ownership boundaries

### Atomic CRM and Supabase

Own the complete identifiable contact, company, internal opportunity, advisor workflow, consent record, activities, documents, submissions, and funded outcome.

### Convex

Own marketplace organizations, verified professionals, sanitized listings, matching, eligibility, reservations, purchases, access grants, delivery, refunds, and marketplace performance.

### Private storage

Own recordings, transcripts, and applicant documents with purpose-specific permissions and retention.

Convex must not become a duplicate CRM. Identifiable data is released only after an authoritative authorization event.

## 19. Non-functional requirements

- server-side authorization for every sensitive action;
- immutable audit events for consent, views, release, purchase, export, and status changes;
- idempotent webhooks and integrations;
- encryption in transit and at rest;
- role- and purpose-based access;
- configurable retention and deletion;
- transcript and summary correction workflow;
- duplicate detection;
- source attribution preservation;
- observability for call, workflow, and payment failures;
- accessibility for form and voice alternatives; and
- English-first architecture with future French support.

## 20. Success metrics

- landing-page assessment conversion;
- assessment completion;
- automated-call consent rate;
- speed to first contact;
- AI call answer and completion;
- long-form completion;
- human escalation;
- discovery completeness;
- field-level correction rate;
- qualified-opportunity rate;
- document readiness;
- marketplace acceptance and purchase;
- time to buyer contact;
- submission and funding conversion;
- revenue per lead source and tier;
- return and refund rate;
- consent withdrawal; and
- privacy or service complaints.

## 21. Delivery phases

### Phase A — Data and consent foundation

- define the canonical lead and opportunity fields;
- define consent records and versioning;
- implement attribution;
- create event and audit contracts;
- define status transitions; and
- document privacy, retention, and escalation policy.

### Phase B — One-minute assessment

- implement the branded assessment route;
- use Tally as the initial benchmark or temporary capture layer;
- connect submissions to Atomic CRM/Supabase;
- create the lead ID and initial score;
- add the next-step selector; and
- test mobile conversion and attribution.

### Phase C — Long discovery form

- implement prefill from the assessment;
- add conditional discovery modules;
- add validation and save/resume;
- implement the shared discovery schema; and
- generate the advisor brief.

### Phase D — Controlled voice pilot

- allow applicant-requested calls only;
- implement AI and recording disclosure;
- add explicit consent checks;
- map voice responses to the discovery schema;
- require human review of every pilot summary;
- add online and human alternatives; and
- measure accuracy against completed forms and advisor interviews.

### Phase E — Marketplace qualification

- implement completeness and confidence rules;
- create opportunity tiers;
- add sanitization and duplicate screening;
- implement human release approval;
- build buyer matching and eligibility; and
- add listing previews.

### Phase F — Commerce and delivery

- implement reservations and expiration;
- add Stripe payment confirmation;
- grant access server-side;
- deliver structured briefs;
- implement buyer service levels;
- add return and refund workflows; and
- synchronize outcomes.

### Phase G — Controlled optimization

- evaluate the voice pilot;
- refine prompts and validation;
- automate only approved low-risk steps;
- add performance-based buyer ranking;
- test pricing by tier and exclusivity; and
- expand languages and specialized discovery modules.

## 22. Acceptance criteria

The planned implementation is complete when:

1. Both forms update one canonical opportunity without duplicate data entry.
2. Attribution survives from landing page through marketplace outcome.
3. Consent is granular, versioned, auditable, and enforceable.
4. AI identity and recording purposes are disclosed before discovery.
5. Applicants can choose form, AI voice, or human discovery.
6. Voice responses produce validated structured fields and an advisor brief.
7. Human escalation and correction work end to end.
8. Marketplace previews contain no prohibited identifying or sensitive data.
9. Only eligible buyers can reserve or purchase an opportunity.
10. Contact access occurs only after authoritative authorization.
11. Shared distribution never exceeds the applicant’s consent or buyer cap.
12. Recordings and transcripts are excluded from ordinary buyer delivery.
13. Buyer service-level, outcome, return, and refund events are auditable.
14. Automated decisions do not communicate financing approval or regulated advice.
15. Security, privacy, legal, and professional review approve production launch.

## 23. Required governance decisions

Before production implementation, create or approve ADRs covering:

- Tally transition and canonical intake ownership;
- voice provider and data residency;
- recording and transcript retention;
- AI disclosure and consent wording;
- human-review thresholds;
- scoring purpose and prohibited uses;
- marketplace sanitization contract;
- exclusive and shared distribution;
- document release;
- pricing, referral, and outcome-fee legality;
- buyer verification; and
- complaint, correction, withdrawal, return, and refund processes.

## 24. First execution goal

```text
/goal Implement the LeadSniper progressive intake foundation.

Deliver the canonical lead, company, opportunity, attribution, consent, discovery,
and audit contracts. Implement the one-minute assessment integration and the
long-discovery schema. Preserve the existing public SEO pages.

Do not implement automated marketplace release, buyer contact-data access,
payments, or unsupervised voice qualification. Provide tests, privacy and
security review evidence, documentation, handoff records, and independent
evaluation.
```
