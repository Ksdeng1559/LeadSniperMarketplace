import { describe, expect, it } from "vitest";
import {
  createFundingWorkflow,
  InvalidFundingWorkflowTransition,
  transitionFundingWorkflow,
} from "./fundingWorkflow";

describe("business funding workflow", () => {
  it("advances a qualified lead through advisor-ready status", () => {
    let record = createFundingWorkflow();

    record = transitionFundingWorkflow(record, "assessment_submitted", {
      assessmentComplete: true,
    });
    record = transitionFundingWorkflow(record, "consent_verified", {
      contactConsentGranted: true,
    });
    record = transitionFundingWorkflow(record, "initially_qualified");
    record = transitionFundingWorkflow(record, "discovery_scheduled");
    record = transitionFundingWorkflow(record, "voice_verified", {
      contactVerified: true,
      discoveryComplete: true,
    });

    expect(record.tier).toBe("voice_verified_lead");

    record = transitionFundingWorkflow(record, "intelligence_complete");
    record = transitionFundingWorkflow(record, "human_review_pending", {
      intelligenceSummaryComplete: true,
    });
    record = transitionFundingWorkflow(record, "advisor_ready", {
      humanApproved: true,
    });

    expect(record.stage).toBe("advisor_ready");
    expect(record.tier).toBe("advisor_ready_opportunity");
  });

  it("blocks listing without distribution consent", () => {
    let record = createFundingWorkflow();
    record = transitionFundingWorkflow(record, "assessment_submitted", {
      assessmentComplete: true,
    });
    record = transitionFundingWorkflow(record, "consent_verified", {
      contactConsentGranted: true,
    });
    record = transitionFundingWorkflow(record, "initially_qualified");
    record = transitionFundingWorkflow(record, "discovery_scheduled");
    record = transitionFundingWorkflow(record, "voice_verified", {
      contactVerified: true,
      discoveryComplete: true,
    });
    record = transitionFundingWorkflow(record, "intelligence_complete");
    record = transitionFundingWorkflow(record, "human_review_pending", {
      intelligenceSummaryComplete: true,
    });
    record = transitionFundingWorkflow(record, "advisor_ready", {
      humanApproved: true,
    });

    expect(() => transitionFundingWorkflow(record, "listed")).toThrow(
      "Distribution consent is required before listing.",
    );
  });

  it("blocks purchase without payment confirmation", () => {
    const record = {
      ...createFundingWorkflow(),
      stage: "reserved" as const,
      tier: "advisor_ready_opportunity" as const,
      evidence: {
        ...createFundingWorkflow().evidence,
        assessmentComplete: true,
        contactConsentGranted: true,
        distributionConsentGranted: true,
        contactVerified: true,
        discoveryComplete: true,
        intelligenceSummaryComplete: true,
        humanApproved: true,
      },
    };

    expect(() => transitionFundingWorkflow(record, "purchased")).toThrow(
      "Authoritative payment confirmation is required.",
    );
  });

  it("rejects stage skipping", () => {
    const record = createFundingWorkflow();

    expect(() => transitionFundingWorkflow(record, "advisor_ready")).toThrow(
      InvalidFundingWorkflowTransition,
    );
  });

  it("promotes substantially documented cases to application-ready", () => {
    const record = {
      ...createFundingWorkflow(),
      stage: "documents_requested" as const,
      tier: "advisor_ready_opportunity" as const,
      evidence: {
        ...createFundingWorkflow().evidence,
        assessmentComplete: true,
        contactConsentGranted: true,
        distributionConsentGranted: true,
        contactVerified: true,
        discoveryComplete: true,
        intelligenceSummaryComplete: true,
        humanApproved: true,
        paymentConfirmed: true,
      },
    };

    const next = transitionFundingWorkflow(record, "application_ready", {
      documentsSubstantiallyComplete: true,
    });

    expect(next.tier).toBe("application_ready_opportunity");
  });
});
