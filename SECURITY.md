# Security Policy

## Reporting a vulnerability

Do not open a public issue containing vulnerability details, credentials, personal information, or an exploit demonstration. Contact the repository owner privately through an agreed secure channel. Include the affected component, impact, reproduction summary using synthetic data, and suggested mitigation if known.

Do not test against production data or attempt to access another user's information.

## Security-sensitive areas

Changes involving authentication, authorization, direct identifiers, consent, payments, exports, encryption, webhooks, audit events or CRM synchronization require independent review.

## Secrets and data

- Never commit `.env` files, API keys, tokens or production identifiers.
- Use synthetic borrower and buyer records.
- Rotate any credential that is accidentally exposed.
- Keep protected contact data out of URLs, logs, analytics, error trackers and marketplace previews.
