# Contributing to LeadSniper Marketplace

Thank you for helping build LeadSniper Marketplace. This guide is the operating agreement for human developers and coding agents.

## Read first

Before changing code, read:

1. `README.md`
2. `docs/PRD.md`
3. `docs/ARCHITECTURE.md`
4. `CLAUDE.md`
5. The relevant issue and acceptance criteria

If the implementation conflicts with the PRD, stop and raise a decision issue. Do not silently redefine product behaviour.

## Development setup

```bash
git clone https://github.com/Ksdeng1559/LeadSniperMarketplace.git
cd LeadSniperMarketplace
cp .env.example .env.local
npm install
npx convex dev
npm run dev
```

Never use production credentials or real borrower information in local development, tests, screenshots, fixtures, or pull requests.

## Work selection

- Work from an assigned GitHub issue.
- Prefer one bounded outcome per issue and pull request.
- Comment on the issue before starting.
- Identify dependencies and files likely to change.
- If another active issue overlaps, coordinate before coding.
- Product, privacy, payment, and authorization uncertainties require an Architecture Decision Record or maintainer decision.

## Branches

Create branches from the latest `main`:

- `feature/<issue>-<short-name>`
- `fix/<issue>-<short-name>`
- `docs/<issue>-<short-name>`
- `chore/<issue>-<short-name>`

Do not push feature work directly to `main`.

## Commits

Use focused, imperative commit messages:

- `feat: add buyer approval guard`
- `fix: release expired shared reservation`
- `test: cover exclusive inventory race`
- `docs: record CRM ownership decision`

Do not mix formatting, refactoring, generated files, and product behaviour in one unexplained commit.

## Pull-request workflow

1. Update from `main` and resolve conflicts locally.
2. Run `npm run check`, `npm test`, and `npm run build`.
3. Open a draft PR early for architectural or cross-cutting changes.
4. Complete every section of the PR template.
5. Link the issue with `Closes #<number>`.
6. Include screenshots for interface changes using synthetic data.
7. Request the required reviewers.
8. Address feedback with new commits; avoid rewriting reviewed history.
9. Convert to ready only when CI passes and acceptance criteria are demonstrated.
10. Squash merge after approval unless commit history has deliberate value.

## Required review

At least one maintainer approval is required. Two approvals are required when a change affects:

- authentication or authorization
- consent or direct identifiers
- lead inventory, reservations, pricing or purchases
- payment webhooks, refunds or disputes
- Atomic CRM synchronization
- encryption, logging, exports or retention
- Convex schema migrations

The author cannot be the only person validating a high-risk change.

## Testing expectations

Tests must cover the business invariant, not merely the happy-path interface.

Critical examples:

- an exclusive lead never produces more than one completed purchase
- a shared lead never exceeds its configured cap
- internal leads never enter public inventory
- expired reservations release inventory
- failed or replayed payment events do not duplicate purchases
- unapproved buyers cannot access protected lead data
- consent revocation blocks further distribution
- CRM retries do not create duplicate contacts or opportunities

## Data and security rules

- Use fabricated fixtures only.
- Never log direct identifiers, access tokens, payment secrets, or decrypted owner profiles.
- Prices and inventory are calculated server-side.
- Direct contact data is never included in marketplace previews.
- External webhooks require signature verification and idempotency.
- Report vulnerabilities privately as described in `SECURITY.md`.

## Definition of done

A contribution is complete when:

- acceptance criteria are satisfied
- authorization and validation are implemented
- tests cover success and failure paths
- loading, empty and error states exist where relevant
- material actions generate audit events
- documentation and environment examples are updated
- CI passes
- no real personal or secret data is present
