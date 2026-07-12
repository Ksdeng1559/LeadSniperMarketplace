# Task: Receipt, Scheduling, and Discovery Orchestration

**Status:** Planned  
**Parent plan:** [Voice-Qualified Business Funding Lead Strategy](./VOICE_QUALIFIED_LEAD_IMPLEMENTATION_PLAN.md)  
**Target outcome:** Every valid funding assessment receives a prompt, consent-aware acknowledgement and a secure path to schedule discovery with either an authorized human agent or a disclosed AI voice assistant.

## 1. Scope

Implement the orchestration layer between assessment submission and completed discovery.

### In scope

- submission receipt and idempotent lead creation;
- on-screen confirmation;
- transactional email acknowledgement;
- consented SMS acknowledgement;
- optional consented voice-drop acknowledgement;
- secure booking link;
- human-agent and AI-assistant appointment choices;
- “help me choose” routing;
- appointment confirmation, reminders, missed-call handling, and rescheduling;
- canonical discovery status updates;
- consent withdrawal and suppression;
- structured handoff into the shared discovery record;
- audit and analytics events; and
- automated tests and operational documentation.

### Out of scope

- financing approval or lender commitment;
- definitive lender, rate, or product advice by AI;
- automated marketplace publication;
- buyer contact-data release;
- unrelated marketing;
- raw recording or transcript delivery to marketplace buyers; and
- implementation of regulated referral-fee arrangements.

## 2. Trigger

The workflow begins after the backend accepts a valid one-minute assessment.

The trigger must:

1. create or update the canonical contact, company, lead, opportunity, attribution, and consent records;
2. assign a unique lead ID and public-safe reference;
3. persist the submission before sending notifications;
4. enqueue notification work through an idempotent outbox or equivalent mechanism; and
5. prevent duplicate email, SMS, voice drop, and booking events when a webhook retries.

The browser must not be treated as authoritative evidence that the submission was stored.

## 3. Receipt confirmation

### On-screen confirmation

Display:

- confirmation that the request was received;
- public-safe reference number;
- brief explanation of discovery;
- expected appointment length;
- secure booking button;
- choice of human or AI-assisted discovery;
- privacy link; and
- contact route for help.

Do not display approval language, approval odds, guaranteed rates, or guaranteed funding.

### Transactional email

Subject: **We received your business-funding request**

Include:

- applicant first name;
- confirmation of receipt;
- public-safe reference;
- purpose of the discovery appointment;
- expected duration;
- secure booking link;
- human and AI-assisted choices;
- rescheduling instructions;
- privacy link; and
- support contact.

Do not include credit, revenue, debt, bank, tax, or other sensitive application details.

### SMS

Example:

> LeadSniper: We received your business-funding request. Choose an authorized agent or our disclosed AI intake assistant for discovery: [secure link]. Reply STOP to opt out.

Requirements:

- send only where the applicable consent and legal basis are recorded;
- identify LeadSniper;
- use a secure short-lived or revocable booking URL;
- support STOP and equivalent withdrawal requests;
- avoid sensitive financial details; and
- record delivery, failure, response, and suppression events.

### Voice drop

Example:

> Hello, this is LeadSniper confirming that we received your business-funding request. We will send a secure scheduling link by text message or email. You may choose an authorized financing agent or our disclosed AI intake assistant to complete the discovery interview.

Requirements:

- send only where explicit applicable consent exists;
- identify the operating organization;
- explain that the message relates to the submitted request;
- provide a valid callback route;
- avoid unrelated promotion;
- suppress after booking, withdrawal, or opt-out; and
- record delivery status.

Legal and privacy review must determine whether the selected technology and use constitute an automatic dialing-announcing device or another regulated communication method in each served jurisdiction.

## 4. Booking experience

The secure booking page must offer three paths.

### Authorized human agent

- clearly identified as human-led discovery;
- available for any applicant requesting a person;
- mandatory for configured complex or high-risk cases;
- calendar availability based on eligible agent capacity; and
- assignment recorded in the canonical CRM.

### AI voice assistant

- clearly labelled as an AI intake assistant;
- never described as an agent, broker, lender, advisor, or underwriter;
- requires specific AI-call consent;
- requires separate recording/transcription consent where recording is enabled;
- provides online-form and human alternatives;
- uses the shared discovery schema; and
- cannot provide approval, rate promises, or definitive lender selection.

### Help me choose

Apply transparent routing rules based on complexity and applicant preference. A recommendation must not prevent an applicant from requesting a human.

## 5. Routing rules

Route directly to an authorized human when:

- the applicant requests a person;
- AI or recording consent is absent for the requested AI route;
- commercial real estate is involved;
- the requested amount exceeds the configured human-review threshold;
- multiple businesses or complex ownership are involved;
- tax arrears, insolvency, active legal disputes, unclear liens, or material contradictions appear;
- previous lender declines require interpretation;
- identity or fraud concerns appear; or
- policy requires human handling for the applicable opportunity tier.

Straightforward preliminary discovery may use the AI route only after the applicant knowingly selects or consents to it.

## 6. Appointment lifecycle

Implement the following canonical statuses:

1. `assessment_received`
2. `confirmation_queued`
3. `confirmation_sent`
4. `booking_link_delivered`
5. `appointment_not_booked`
6. `appointment_scheduled`
7. `reminder_sent`
8. `discovery_in_progress`
9. `discovery_completed`
10. `appointment_missed`
11. `rescheduling_requested`
12. `human_review_required`
13. `qualified_opportunity`
14. `suppressed`
15. `closed`

Transitions must be validated server-side and recorded as audit events. Notification delivery status must not be confused with discovery or qualification status.

## 7. Reminder cadence

Make cadence configurable. Initial operating default:

- immediately: on-screen confirmation and transactional email;
- immediately: SMS where consent permits;
- 15–30 minutes: optional voice drop if unbooked and consent permits;
- 24 hours: first booking reminder;
- 72 hours: final booking reminder;
- after booking: confirmation and calendar event;
- 24 hours before: appointment reminder;
- one hour before: final reminder; and
- after a missed appointment: one rescheduling message.

Stop future reminders when the applicant:

- books;
- completes discovery;
- withdraws consent;
- opts out;
- requests no further contact;
- selects a human path requiring manual control; or
- reaches the configured contact-frequency cap.

## 8. Discovery-channel parity

Human, AI voice, and long-form discovery must write to the same canonical discovery schema.

Every answer must retain:

- source channel;
- collector identity or AI workflow version;
- captured timestamp;
- applicant-confirmed status;
- confidence where AI extraction is used;
- correction history; and
- responsible reviewer where applicable.

All channels must produce:

- structured discovery fields;
- advisor brief;
- missing-information list;
- document-readiness checklist;
- risk and complexity flags;
- follow-up tasks;
- consent status; and
- quality-control status.

## 9. Security and privacy requirements

- use revocable, expiring booking tokens that expose no sensitive data;
- do not place applicant financial data in URLs;
- authenticate administrative and agent views;
- enforce purpose- and role-based access;
- encrypt data in transit and at rest;
- store consent wording, version, time, source, and evidence;
- separate transactional contact consent from marketing consent;
- process STOP and withdrawal promptly;
- maintain internal suppression lists;
- define retention for messages, recordings, transcripts, and scheduling events;
- sanitize logs and error reports;
- prevent third-party calendar descriptions from containing sensitive financial information; and
- complete privacy, telecommunications, and professional review before production launch.

## 10. Audit events

At minimum, record:

- assessment accepted;
- consent recorded or changed;
- confirmation queued, sent, delivered, failed, or suppressed;
- booking link created, delivered, opened, expired, or revoked;
- appointment selected, scheduled, changed, cancelled, missed, or completed;
- discovery channel selected;
- AI disclosure delivered;
- recording consent confirmed or declined;
- human transfer requested or completed;
- discovery summary generated, corrected, reviewed, and approved; and
- qualification status changed.

## 11. Analytics

Measure:

- time from submission to confirmation;
- email, SMS, and voice-drop delivery;
- booking-link click rate by channel;
- booking conversion;
- human versus AI selection;
- time to appointment;
- appointment completion and no-show rate;
- discovery completion;
- human escalation;
- opt-out and withdrawal;
- notification failure;
- duplicate-message prevention;
- qualification rate by discovery channel; and
- privacy or service complaints.

## 12. Suggested implementation boundaries

### Astro

- confirmation screen;
- secure booking experience;
- channel-selection interface; and
- accessible form fallback.

### Atomic CRM and Supabase

- canonical lead and opportunity;
- consent and suppression;
- assignment;
- appointment and activity records;
- discovery output;
- follow-up tasks; and
- advisor workflow.

### Notification service

- transactional email;
- consented SMS;
- optional consented voice drop;
- delivery webhooks;
- templates; and
- suppression enforcement.

### Calendar integration

- eligible calendars and availability;
- booking, rescheduling, and cancellation;
- calendar invitations;
- reminder triggers; and
- agent assignment.

### Voice platform

- AI call scheduling;
- disclosure and consent confirmation;
- discovery conversation;
- human transfer;
- structured extraction; and
- call outcome webhooks.

### Convex

Convex receives only marketplace-appropriate opportunity state after the discovery, quality, consent, and release gates pass. It does not own applicant scheduling.

## 13. Acceptance criteria

1. A valid assessment creates exactly one canonical lead and opportunity.
2. Webhook retries do not create duplicate records or messages.
3. The applicant receives an on-screen confirmation and transactional email.
4. SMS and voice drop occur only when the required consent is recorded.
5. Messages contain no sensitive financial details.
6. Every applicant receives a secure booking path.
7. Human and AI choices are plainly distinguished.
8. The AI route cannot proceed without required consent.
9. An applicant can choose an online form or human alternative.
10. Complexity rules route required cases to a human.
11. Booking, reminders, missed appointments, and rescheduling update canonical status.
12. STOP, withdrawal, booking, or completion suppresses future automated reminders.
13. Human, AI, and form discovery write to one shared schema.
14. AI-originated fields retain confidence, workflow version, and correction history.
15. Completed discovery produces the structured brief and missing-information list.
16. No discovery result is automatically published to the marketplace.
17. All material actions create auditable events.
18. Relevant unit, integration, webhook replay, authorization, and end-to-end tests pass.
19. Privacy, security, telecommunications, and professional reviews approve launch.
20. Operational runbooks cover failed delivery, consent disputes, rescheduling, provider outage, and human takeover.

## 14. Required tests

- duplicate form-webhook replay;
- duplicate notification-provider webhook replay;
- SMS without consent is blocked;
- voice drop without consent is blocked;
- AI booking without AI consent is blocked;
- recording is disabled when recording consent is declined;
- STOP suppresses future messages;
- booking suppresses unbooked reminders;
- completed discovery suppresses reminders;
- expired and tampered booking tokens fail safely;
- unauthorized appointment access is denied;
- complex opportunities route to a human;
- AI disclosure is recorded before discovery;
- human transfer preserves lead context;
- discovery fields preserve source and correction history;
- notification templates exclude prohibited sensitive fields;
- provider failure creates retry and operator alert;
- calendar rescheduling remains idempotent; and
- marketplace publication is unavailable from this workflow.

## 15. Implementation order

1. Finalize message, consent, suppression, and retention policies.
2. Define event contracts and state transitions.
3. Implement idempotent submission and notification outbox.
4. Add confirmation page and transactional email.
5. Add secure booking tokens and calendar workflow.
6. Add human-agent selection and assignment.
7. Add consented SMS and opt-out processing.
8. Pilot optional consented voice drop.
9. Add disclosed AI voice booking and discovery.
10. Implement human escalation and transfer.
11. Normalize discovery output across channels.
12. Complete security, privacy, legal, operational, and end-to-end review.

## 16. Execution goal

```text
/goal Implement receipt, scheduling, and discovery orchestration.

After a valid one-minute assessment, create one canonical lead and opportunity,
send an idempotent transactional acknowledgement, and provide a secure booking
path for either an authorized human agent or a disclosed AI voice assistant.

Implement consent-aware SMS and optional voice drop, booking and reminder state,
suppression, human routing, shared discovery output, audit events, tests, and
operational runbooks.

Do not implement financing approval, definitive lender advice, automated
marketplace publication, buyer contact-data release, or unrelated marketing.
Require privacy, security, telecommunications, and professional review before
production activation.
```
