import type { FederationMembershipStatus } from "../constants/federation-membership-status";
import type { Club } from "./club";
import type { Federation } from "./federation";
import type { Official } from "./official";

export interface FederationMembershipApplication {
    id: string;

    // What and where
    clubId: string;
    club?: Club;
    federationId: string;
    federation?: Federation;

    // Application workflow
    status: FederationMembershipStatus;

    // Review process  
    reviewedById?: string;         // ID of reviewing official
    reviewedBy?: Official;         // Reviewing official
    reviewedAt?: Date;             // When reviewed (matches createdAt/updatedAt pattern)
    reviewComments?: string;       // Review feedback/notes

    // Requested membership details
    // requestedMembershipType: GoverningBodyMembershipType;
    justification?: string;     // Why they want to join

    // System metadata
    createdAt: Date;
    updatedAt: Date;
}