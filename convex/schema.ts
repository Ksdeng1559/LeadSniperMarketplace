import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const distributionMode = v.union(
  v.literal("exclusive"),
  v.literal("shared"),
  v.literal("internal"),
);

export default defineSchema({
  organizations: defineTable({
    name: v.string(),
    type: v.union(v.literal("operator"), v.literal("buyer"), v.literal("partner")),
    status: v.union(v.literal("pending"), v.literal("active"), v.literal("suspended")),
    province: v.optional(v.string()),
    verifiedAt: v.optional(v.number()),
  }).index("by_status", ["status"]),

  users: defineTable({
    authSubject: v.string(),
    organizationId: v.id("organizations"),
    role: v.union(v.literal("admin"), v.literal("qualifier"), v.literal("buyer"), v.literal("auditor")),
    status: v.union(v.literal("invited"), v.literal("active"), v.literal("disabled")),
  })
    .index("by_auth_subject", ["authSubject"])
    .index("by_organization", ["organizationId"]),

  leads: defineTable({
    publicId: v.string(),
    status: v.union(
      v.literal("draft"),
      v.literal("qualified"),
      v.literal("listed"),
      v.literal("reserved"),
      v.literal("sold"),
      v.literal("assigned"),
      v.literal("withdrawn"),
      v.literal("expired"),
    ),
    distributionMode,
    vertical: v.string(),
    province: v.string(),
    region: v.optional(v.string()),
    financingPurpose: v.string(),
    requestedAmountCents: v.optional(v.number()),
    priceCents: v.number(),
    maxPurchases: v.number(),
    purchaseCount: v.number(),
    qualityScore: v.number(),
    summary: v.string(),
    ownerProfileId: v.id("ownerProfiles"),
    consentId: v.id("consents"),
    listedAt: v.optional(v.number()),
    expiresAt: v.optional(v.number()),
  })
    .index("by_status", ["status"])
    .index("by_market", ["status", "province", "vertical"])
    .index("by_public_id", ["publicId"]),

  ownerProfiles: defineTable({
    legalNameEncrypted: v.string(),
    emailEncrypted: v.string(),
    phoneEncrypted: v.optional(v.string()),
    businessNameEncrypted: v.string(),
    industry: v.string(),
  }),

  consents: defineTable({
    purpose: v.string(),
    source: v.string(),
    policyVersion: v.string(),
    permittedChannels: v.array(v.string()),
    grantedAt: v.number(),
    revokedAt: v.optional(v.number()),
    evidenceRef: v.optional(v.string()),
  }),

  reservations: defineTable({
    leadId: v.id("leads"),
    buyerOrganizationId: v.id("organizations"),
    status: v.union(v.literal("active"), v.literal("converted"), v.literal("expired"), v.literal("cancelled")),
    expiresAt: v.number(),
  })
    .index("by_lead_status", ["leadId", "status"])
    .index("by_buyer_status", ["buyerOrganizationId", "status"]),

  purchases: defineTable({
    leadId: v.id("leads"),
    buyerOrganizationId: v.id("organizations"),
    reservationId: v.optional(v.id("reservations")),
    amountCents: v.number(),
    currency: v.literal("CAD"),
    paymentProviderRef: v.optional(v.string()),
    status: v.union(v.literal("pending"), v.literal("paid"), v.literal("refunded"), v.literal("disputed")),
    purchasedAt: v.optional(v.number()),
  })
    .index("by_lead", ["leadId"])
    .index("by_buyer", ["buyerOrganizationId"]),

  crmSyncJobs: defineTable({
    aggregateType: v.string(),
    aggregateId: v.string(),
    eventType: v.string(),
    idempotencyKey: v.string(),
    payload: v.string(),
    status: v.union(v.literal("pending"), v.literal("processing"), v.literal("completed"), v.literal("failed")),
    attempts: v.number(),
    nextAttemptAt: v.optional(v.number()),
    lastError: v.optional(v.string()),
  })
    .index("by_status_next_attempt", ["status", "nextAttemptAt"])
    .index("by_idempotency_key", ["idempotencyKey"]),

  auditEvents: defineTable({
    actorUserId: v.optional(v.id("users")),
    organizationId: v.optional(v.id("organizations")),
    action: v.string(),
    aggregateType: v.string(),
    aggregateId: v.string(),
    metadata: v.optional(v.string()),
    occurredAt: v.number(),
  })
    .index("by_aggregate", ["aggregateType", "aggregateId"])
    .index("by_organization", ["organizationId", "occurredAt"]),
});
