export const fundingWorkflowStages = [
  "assessment_started",
  "assessment_submitted",
  "consent_verified",
  "initially_qualified",
  "discovery_scheduled",
  "voice_verified",
  "intelligence_complete",
  "human_review_pending",
  "advisor_ready",
  "listed",
  "reserved",
  "purchased",
  "advisor_contacted",
  "documents_requested",
  "application_ready",
  "application_submitted",
  "conditionally_approved",
  "approved",
  "funded",
  "declined",
  "nurture",
  "withdrawn",
] as const;

export type FundingWorkflowStage = (typeof fundingWorkflowStages)[number];

export const fundingOpportunityTiers = [
  "assessment_lead",
  "voice_verified_lead",
  "advisor_ready_opportunity",
  "application_ready_opportunity",
] as const;

export type FundingOpportunityTier = (typeof fundingOpportunityTiers)[number];

export interface FundingWorkflowEvidence {
  assessmentComplete: boolean;
  contactConsentGranted: boolean;
  distributionConsentGranted: boolean;
  contactVerified: boolean;
  discoveryComplete: boolean;
  intelligenceSummaryComplete: boolean;
  humanApproved: boolean;
  documentsSubstantiallyComplete: boolean;
  paymentConfirmed: boolean;
}

export interface FundingWorkflowRecord {
  stage: FundingWorkflowStage;
  tier: FundingOpportunityTier;
  evidence: FundingWorkflowEvidence;
}

export class InvalidFundingWorkflowTransition extends Error {
  constructor(
    public readonly from: FundingWorkflowStage,
    public readonly to: FundingWorkflowStage,
    message: string,
  ) {
    super(message);
    this.name = "InvalidFundingWorkflowTransition";
  }
}

const allowedTransitions: Record<FundingWorkflowStage, readonly FundingWorkflowStage[]> = {
  assessment_started: ["assessment_submitted", "withdrawn"],
  assessment_submitted: ["consent_verified", "nurture", "withdrawn"],
  consent_verified: ["initially_qualified", "nurture", "withdrawn"],
  initially_qualified: ["discovery_scheduled", "nurture", "withdrawn"],
  discovery_scheduled: ["voice_verified", "nurture", "withdrawn"],
  voice_verified: ["intelligence_complete", "nurture", "withdrawn"],
  intelligence_complete: ["human_review_pending", "nurture", "withdrawn"],
  human_review_pending: ["advisor_ready", "nurture", "withdrawn"],
  advisor_ready: ["listed", "documents_requested", "withdrawn"],
  listed: ["reserved", "withdrawn"],
  reserved: ["purchased", "listed", "withdrawn"],
  purchased: ["advisor_contacted", "withdrawn"],
  advisor_contacted: ["documents_requested", "declined", "nurture", "withdrawn"],
  documents_requested: ["application_ready", "declined", "nurture", "withdrawn"],
  application_ready: ["application_submitted", "declined", "withdrawn"],
  application_submitted: ["conditionally_approved", "approved", "declined", "withdrawn"],
  conditionally_approved: ["approved", "declined", "withdrawn"],
  approved: ["funded", "declined", "withdrawn"],
  funded: [],
  declined: ["nurture"],
  nurture: ["initially_qualified", "discovery_scheduled", "documents_requested", "withdrawn"],
  withdrawn: [],
};

function assertEvidenceForStage(
  stage: FundingWorkflowStage,
  evidence: FundingWorkflowEvidence,
): void {
  const require = (condition: boolean, message: string): void => {
    if (!condition) throw new Error(message);
  };

  if (stage === "assessment_submitted") {
    require(evidence.assessmentComplete, "A completed assessment is required.");
  }

  if (stage === "consent_verified") {
    require(evidence.contactConsentGranted, "Contact consent is required.");
  }

  if (["voice_verified", "intelligence_complete", "human_review_pending", "advisor_ready", "listed"].includes(stage)) {
    require(evidence.contactVerified, "Verified contact evidence is required.");
    require(evidence.discoveryComplete, "A completed discovery interview is required.");
  }

  if (["human_review_pending", "advisor_ready", "listed"].includes(stage)) {
    require(evidence.intelligenceSummaryComplete, "An intelligence summary is required.");
  }

  if (["advisor_ready", "listed"].includes(stage)) {
    require(evidence.humanApproved, "Human quality approval is required.");
  }

  if (stage === "listed") {
    require(evidence.distributionConsentGranted, "Distribution consent is required before listing.");
  }

  if (stage === "purchased") {
    require(evidence.paymentConfirmed, "Authoritative payment confirmation is required.");
  }

  if (["application_ready", "application_submitted", "conditionally_approved", "approved", "funded"].includes(stage)) {
    require(
      evidence.documentsSubstantiallyComplete,
      "Substantially complete application documents are required.",
    );
  }
}

export function deriveFundingOpportunityTier(
  stage: FundingWorkflowStage,
  evidence: FundingWorkflowEvidence,
): FundingOpportunityTier {
  if (
    evidence.documentsSubstantiallyComplete &&
    ["application_ready", "application_submitted", "conditionally_approved", "approved", "funded"].includes(stage)
  ) {
    return "application_ready_opportunity";
  }

  if (
    evidence.humanApproved &&
    ["advisor_ready", "listed", "reserved", "purchased", "advisor_contacted", "documents_requested"].includes(stage)
  ) {
    return "advisor_ready_opportunity";
  }

  if (
    evidence.contactVerified &&
    evidence.discoveryComplete &&
    ["voice_verified", "intelligence_complete", "human_review_pending"].includes(stage)
  ) {
    return "voice_verified_lead";
  }

  return "assessment_lead";
}

export function transitionFundingWorkflow(
  record: FundingWorkflowRecord,
  to: FundingWorkflowStage,
  evidencePatch: Partial<FundingWorkflowEvidence> = {},
): FundingWorkflowRecord {
  if (!allowedTransitions[record.stage].includes(to)) {
    throw new InvalidFundingWorkflowTransition(
      record.stage,
      to,
      `Transition from ${record.stage} to ${to} is not allowed.`,
    );
  }

  const evidence = { ...record.evidence, ...evidencePatch };

  try {
    assertEvidenceForStage(to, evidence);
  } catch (error) {
    throw new InvalidFundingWorkflowTransition(
      record.stage,
      to,
      error instanceof Error ? error.message : "Required workflow evidence is missing.",
    );
  }

  return {
    stage: to,
    evidence,
    tier: deriveFundingOpportunityTier(to, evidence),
  };
}

export function createFundingWorkflow(): FundingWorkflowRecord {
  return {
    stage: "assessment_started",
    tier: "assessment_lead",
    evidence: {
      assessmentComplete: false,
      contactConsentGranted: false,
      distributionConsentGranted: false,
      contactVerified: false,
      discoveryComplete: false,
      intelligenceSummaryComplete: false,
      humanApproved: false,
      documentsSubstantiallyComplete: false,
      paymentConfirmed: false,
    },
  };
}
