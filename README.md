# LeadSniper Marketplace

A multi-tenant B2B financial lead marketplace for discovering, qualifying, distributing, and monetizing business-financing opportunities.

## Product model

LeadSniper Marketplace supports three lead distribution modes:

1. **Exclusive** — sold once to one approved professional.
2. **Shared** — sold to a controlled number of approved professionals.
3. **Internal** — retained by Mortgages by Dennis Eng or an assigned internal team.

Initial buyers include mortgage brokers, commercial-finance specialists, business-loan officers, accountants, lawyers, benefits advisors, and business-owner wealth advisors.

## Core stack

- **Astro + TypeScript** — public SEO site and application shell
- **Convex** — marketplace data, real-time inventory, reservations, purchases, and workflows
- **Atomic CRM** — relationship management and post-purchase opportunity workflow
- **Stripe Connect** — planned checkout, payouts, refunds, and marketplace accounting
- **Open Knowledge Format** — structured domain knowledge for agents and retrieval

## Initial applications

- Public lead-generation and financing education site
- Business-owner financing intake
- Buyer marketplace and lead inventory
- Buyer onboarding, verification, territory and specialty profile
- Admin qualification, pricing, distribution and compliance console
- Atomic CRM synchronization and follow-up workflow

## Repository status

This repository contains the product and engineering foundation. The first implementation milestone is defined in [docs/PRD.md](docs/PRD.md).

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Convex requires a project deployment:

```bash
npx convex dev
```

## Delivery principles

- Consent and purpose limitation are first-class data
- No lead is exposed before buyer authorization is verified
- Personally identifiable information is minimized and access-controlled
- Every assignment, view, reservation, purchase, export, and status change is auditable
- Atomic CRM is the workflow system; Convex is the marketplace system of record

## Documentation

- [Product requirements](docs/PRD.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Claude Code instructions](CLAUDE.md)
- [Implementation backlog](docs/BACKLOG.md)
