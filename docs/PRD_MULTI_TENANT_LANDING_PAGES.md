# Multi-Tenant Landing Page Build PRD

## Status

Draft implementation requirement for Claude Code.

## Objective

Build a multi-tenant landing-page platform in Astro so mortgage brokers, business-finance professionals, commercial-finance specialists, and approved referral partners can operate branded lead-generation pages from one shared codebase.

The system must support:

1. Path-based tenant pages
2. Managed tenant subdomains
3. Verified custom domains
4. Shared page templates and components
5. Tenant-specific branding, disclosures, services, locations, forms, attribution, and lead-routing rules
6. Atomic CRM ownership of internal operational records
7. Convex ownership of marketplace and lead-commerce records
8. Server-side tenant validation and strict tenant isolation

---

## 1. Product Model

A tenant may be:

- An individual mortgage broker
- A brokerage
- A commercial-finance specialist
- A business-loan professional
- An accountant or fractional CFO
- A business lawyer
- A group-benefits specialist
- An insurance or wealth advisor
- A referral partner organization

Each tenant receives a configurable website experience while sharing approved components, infrastructure, security controls, analytics conventions, and lead-intake services.

Example tenancy modes:

```text
Path-based:
leadsniper.ca/p/dennis-eng/

Subdomain:
dennis.leadsniper.ca

Custom domain:
mortgagesbydenniseng.ca
```

---

## 2. Recommended Architecture

```text
Visitor request
      ↓
Astro application
      ↓
Hostname and route resolution middleware
      ↓
Server-side tenant lookup
      ↓
Tenant status and domain verification
      ↓
Shared landing-page template
      ↓
Tenant branding, content, disclosures, and forms
      ↓
Secure lead-intake API
      ↓
Atomic CRM / Supabase
      ↓
Internal handling or approved Convex marketplace distribution
```

### Platform responsibilities

**Astro**

- Public tenant pages
- Shared layouts and components
- Static and on-demand rendering
- SEO metadata and structured data
- Tenant-specific content presentation
- React islands for forms and calculators

**Supabase / Atomic CRM**

- Tenant configuration
- Tenant users and roles
- Internal contacts, companies, and opportunities
- Lead ownership and routing
- Tenant operational settings

**Convex**

- Marketplace inventory
- Lead purchasing and access
- Buyer organizations
- Marketplace entitlements
- Distribution outcomes

**Google Cloud**

- Private documents
- Secure processing services
- AI and document analysis

---

## 3. Tenancy Modes

### 3.1 Path-Based Tenancy

Example:

```text
leadsniper.ca/p/tenant-slug/service-page/
```

Use for MVP onboarding, previews, and low-complexity deployments.

Requirements:

- Unique tenant slug
- Reserved-word protection
- Canonical URL generation
- Tenant-specific sitemap rules
- Optional noindex for preview or inactive tenants

### 3.2 Subdomain Tenancy

Example:

```text
tenant-slug.leadsniper.ca
```

Requirements:

- Wildcard DNS support
- Middleware hostname resolution
- Unique subdomain validation
- Automatic TLS through the deployment platform
- Tenant activation and suspension controls

### 3.3 Custom-Domain Tenancy

Example:

```text
mortgagesbydenniseng.ca
```

Requirements:

- Domain ownership verification
- DNS setup instructions
- SSL provisioning
- Domain-to-tenant mapping
- Duplicate-domain prevention
- Verification and activation states
- Canonical domain selection
- Redirect rules between primary and alternate domains

---

## 4. Tenant Data Model

Create the following Supabase tables or equivalent records.

### `tenants`

```text
id
slug
organization_id
display_name
legal_name
tenant_type
status
primary_domain
subdomain
logo_url
primary_colour
secondary_colour
accent_colour
phone
email
licence_number
licence_jurisdiction
service_regions
professional_categories
default_lead_distribution
booking_url
privacy_policy_url
terms_url
created_at
updated_at
```

Tenant statuses:

```text
draft
pending_review
active
suspended
archived
```

### `tenant_domains`

```text
id
tenant_id
domain
domain_type
verification_status
verification_token
is_primary
ssl_status
verified_at
created_at
updated_at
```

Domain types:

```text
platform_path
managed_subdomain
custom_domain
```

### Additional tables

```text
tenant_users
tenant_branding
tenant_pages
tenant_services
tenant_locations
tenant_integrations
tenant_form_settings
tenant_tracking_settings
tenant_disclosures
tenant_testimonials
tenant_navigation
```

---

## 5. Tenant Resolution

Create Astro middleware that resolves the tenant using trusted server-side information.

Resolution priority:

1. Verified custom domain
2. Managed subdomain
3. Path-based tenant slug

The middleware must:

1. Normalize the hostname.
2. Reject unsupported hosts.
3. Resolve the tenant from the database or approved cache.
4. Confirm tenant status is active.
5. Confirm domain verification where required.
6. Load the minimal tenant configuration.
7. Place the resolved tenant in `Astro.locals`.
8. Return a safe 404 or suspended-site response when unresolved.

The browser-provided `tenantId` must never be trusted as the source of tenant identity.

Example type:

```ts
interface ResolvedTenant {
  id: string;
  slug: string;
  organizationId: string;
  displayName: string;
  primaryDomain: string;
  status: "active";
  professionalCategories: string[];
  serviceRegions: string[];
  branding: TenantBranding;
  disclosures: TenantDisclosure[];
}
```

---

## 6. Astro Route Structure

Recommended routes:

```text
src/pages/
├── p/[tenant]/index.astro
├── p/[tenant]/[...page].astro
├── [service].astro
├── locations/[location].astro
├── industries/[industry].astro
├── calculators/[calculator].astro
├── api/leads.ts
├── api/tenant-preview.ts
└── tenant-admin/
```

For hostname-based tenants, shared dynamic routes should render using the tenant stored in `Astro.locals`.

Public content pages may be statically generated where tenant and content volume are stable. Custom-domain and frequently changing tenant pages should use on-demand rendering.

---

## 7. Shared Landing-Page Components

Create approved reusable components for:

- Tenant header
- Hero section
- Trust bar
- Financing-service cards
- Eligibility section
- Process steps
- Calculator section
- Lead form
- Testimonials
- FAQ
- Document checklist
- Advisor profile
- Licence and compliance disclosure
- Final call to action
- Tenant footer

Components must accept validated configuration rather than arbitrary executable tenant code.

Tenants may customize:

- Logo
- Approved colours
- Typography selection from an approved set
- Contact details
- Service regions
- Enabled services
- Calls to action
- Booking link
- Approved testimonials
- Localized content
- Disclosures

Tenants may not inject unrestricted scripts, HTML, styles, or server-side code.

---

## 8. Content Model

Support three customization levels.

### Template-based

Tenant selects an approved page template.

### Configuration-based

Tenant changes branding, services, regions, calls to action, testimonials, and disclosures through structured fields.

### Managed content editing

Authorized users may edit approved content sections with versioning and review.

Every publishable content record must support:

```text
status
version
author
reviewer
published_at
updated_at
seo_title
meta_description
canonical_url
indexing_status
```

Content statuses:

```text
draft
pending_review
approved
published
rejected
archived
```

---

## 9. Lead Intake and Attribution

Every tenant form submission must include server-resolved context:

```text
tenant_id
organization_id
resolved_domain
landing_page_id
service_type
location
first_touch_source
latest_touch_source
utm_source
utm_medium
utm_campaign
utm_term
utm_content
gclid
fbclid
consent_version
```

Required workflow:

```text
Tenant page
→ Secure intake endpoint
→ Resolve tenant again server-side
→ Validate tenant permissions and status
→ Validate consent and form data
→ Deduplicate contact
→ Create or update Atomic CRM records
→ Apply tenant-specific routing
→ Retain internally or publish approved opportunity to Convex
```

The intake service must reject mismatches between the request host and submitted tenant metadata.

---

## 10. Tenant Lead-Routing Rules

Support tenant-configurable rules within approved boundaries:

```text
internal_only
internal_first
marketplace_overflow
preferred_partner
exclusive_marketplace
shared_marketplace
manual_review
```

Rules may depend on:

- Service type
- Geography
- Financing amount
- Professional category
- Tenant capacity
- Referral source
- Lead score
- Consent scope

No rule may override consent, jurisdiction, licence, or marketplace eligibility requirements.

---

## 11. Tenant Isolation and Authorization

All tenant-scoped data must include `tenant_id` or `organization_id` and enforce isolation through:

- Supabase row-level security
- Server-side authorization
- Convex organization checks
- Scoped API queries
- Scoped cache keys
- Scoped analytics identifiers

Required roles:

```text
platform_owner
platform_admin
tenant_owner
tenant_admin
tenant_editor
tenant_analyst
tenant_read_only
```

A tenant user must never be able to:

- Read another tenant's leads
- Modify another tenant's branding or domains
- View another tenant's analytics
- Publish pages under another tenant's domain
- Access another tenant's marketplace purchases
- Generate signed document links for another tenant

---

## 12. SEO Requirements

Each tenant page must support:

- Unique title and meta description
- Canonical URL
- Tenant-specific structured data
- Advisor or organization details
- Licence disclosure
- Local service information
- Unique FAQs and testimonials where available
- XML sitemap inclusion rules
- Robots controls
- Redirects for domain or slug changes

The system must not mass-publish thin, nearly identical pages.

Indexable pages require meaningful differentiation through at least one of:

- Geography
- Professional specialization
- Service scope
- Credentials
- Local market information
- Original case studies
- Unique educational content
- Unique FAQs

Preview, duplicate, inactive, and unverified-domain pages must be `noindex`.

---

## 13. Analytics

Support both platform-wide and tenant-specific measurement.

Track:

- Tenant page views
- Service-page conversions
- Form starts and submissions
- Calculator starts and completions
- Booking clicks
- Phone and email clicks
- Lead source
- Lead quality
- Internal versus marketplace routing
- Funded and purchased outcomes

Do not expose one tenant's data to another tenant.

Sensitive personal information must not be sent to public analytics platforms.

---

## 14. Caching and Performance

Cache keys must include the resolved hostname or tenant ID.

The system must prevent tenant-content leakage through shared caches.

Requirements:

- CDN caching for public assets
- Short-lived tenant configuration cache
- Cache invalidation after publish
- Responsive images
- Minimal client JavaScript
- React islands only for interactive features
- Static generation where appropriate
- On-demand rendering for dynamic tenant sites

---

## 15. Claude Code Workspace Integration

Add a workstream:

```text
.workspace/04-workstreams/multi-tenant-sites/
```

Add specialist agents when Phase 0A permits:

```text
.workspace/05-agents/tenant-platform/
.workspace/05-agents/domain-provisioning/
.workspace/05-agents/tenant-security-reviewer/
```

Required ADRs:

```text
ADR-0008-tenant-resolution-model.md
ADR-0009-custom-domain-provisioning.md
ADR-0010-tenant-data-isolation.md
ADR-0011-tenant-content-governance.md
ADR-0012-tenant-cache-isolation.md
```

Use `/goal` to define each tenant-platform milestone and `/loop` only for bounded improvements within an approved task packet.

---

## 16. Implementation Phases

### Phase MT-0 — Architecture and security

- Tenant bounded context
- Data ownership
- Tenant schema
- Resolution strategy
- RLS policies
- Domain-verification design
- Cache-isolation design
- ADRs

### Phase MT-1 — Path-based MVP

- Tenant configuration
- Path-based tenant routes
- Shared layouts
- Branding
- Tenant-specific forms
- Lead attribution
- Tenant admin basics

### Phase MT-2 — Managed subdomains

- Wildcard DNS
- Subdomain mapping
- Middleware resolution
- TLS validation
- Activation controls

### Phase MT-3 — Custom domains

- Domain verification
- DNS instructions
- SSL provisioning
- Primary-domain selection
- Redirects
- Canonical handling

### Phase MT-4 — Content and publishing

- Tenant page editor
- Content review
- Versioning
- Preview workflow
- Publish and rollback
- SEO quality gates

### Phase MT-5 — Advanced routing and reporting

- Tenant routing rules
- Marketplace overflow
- Tenant dashboards
- Conversion reporting
- Funded and purchased outcome reporting

---

## 17. Testing Requirements

### Unit tests

- Hostname normalization
- Tenant resolution
- Slug validation
- Domain verification
- Canonical URL selection
- Routing rules
- Tenant form validation
- Cache-key generation

### Integration tests

- Path-based tenant rendering
- Subdomain rendering
- Custom-domain rendering
- Tenant-specific branding
- Lead creation with correct tenant ownership
- RLS enforcement
- Convex organization isolation
- Domain activation and suspension
- Cache invalidation

### End-to-end tests

1. Create a tenant.
2. Publish a path-based site.
3. Submit a lead and confirm correct tenant ownership.
4. Confirm a second tenant cannot access the lead.
5. Activate a managed subdomain.
6. Verify custom-domain ownership.
7. Publish under the verified domain.
8. Confirm inactive tenants return a safe response.
9. Confirm preview pages are noindex.
10. Confirm cache content never crosses tenants.
11. Confirm host and submitted tenant mismatch is rejected.
12. Confirm tenant routing creates the correct Atomic CRM and Convex outcomes.

### Security tests

- Tenant ID tampering
- Host-header attacks
- Cross-tenant IDOR attempts
- RLS bypass attempts
- Cache poisoning
- Custom-domain takeover
- Unverified-domain activation
- Unauthorized content publication
- Script injection through tenant fields
- Analytics data leakage

---

## 18. Acceptance Criteria

The multi-tenant MVP is complete when:

1. One Astro codebase serves multiple tenant brands.
2. Path-based tenant routes work.
3. Tenant identity is resolved and validated server-side.
4. Tenant branding and disclosures render correctly.
5. Leads are attributed to the correct tenant and organization.
6. Atomic CRM records preserve tenant ownership.
7. Convex marketplace distribution preserves organization boundaries.
8. Tenant users cannot access another tenant's data.
9. Cache isolation tests pass.
10. Tenant previews contain no protected information.
11. Inactive tenants cannot receive leads.
12. SEO canonical and noindex rules work.
13. Required audit events are recorded.
14. Security and integration tests pass.
15. Custom domains remain disabled until domain verification is complete.

---

## 19. Initial Claude Code Goal

```text
/goal Implement Phase MT-0 only.

Define the multi-tenant bounded context, tenant data model, tenant resolution
strategy, authorization boundaries, row-level security requirements, custom
domain verification design, cache-isolation rules, and required ADRs.

Create task packets and assign the product architect, tenant-platform agent,
Atomic CRM/Supabase agent, Convex marketplace agent, and security reviewer.

Do not implement tenant routes, domain provisioning, database migrations, or
production infrastructure until the Phase MT-0 architecture and security
review is approved.
```
