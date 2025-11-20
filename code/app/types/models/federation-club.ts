import type { FederationMembershipStatus } from "../constants/federation-membership-status";
import type { Club } from "./club";
import type { Federation } from "./federation";
import type { FederationMembershipApplication } from "./federation-membership-application";

export interface FederationClub {
    id: string;

    // Foreign keys
    federationId: string;
    federation?: Federation;
    clubId: string;
    club?: Club;

    // Membership details
    membershipType?: GoverningBodyMembershipType;
    status: FederationMembershipStatus;
    joinedAt: Date;
    expiresAt?: Date;

    // Application workflow record
    applicationId: string;
    application?: FederationMembershipApplication;

    // System metadata
    createdAt: Date;
    updatedAt: Date;
}