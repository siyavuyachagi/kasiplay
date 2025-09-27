import type { GoverningBodyMembershipStatus, GoverningBodyMembershipType } from "~/types/enums";
import type { Club } from "./Club";
import type { GoverningBody } from "./GoverningBody";
import type { Official } from "./Official";

export interface GoverningBodyMembershipApplication {
    id: string;

    // What and where
    clubId: string;
    club?: Club;
    governingBodyId: string;
    governingBody?: GoverningBody;

    // Application workflow
    status: GoverningBodyMembershipStatus;

    // Review process  
    reviewedById?: string;         // ID of reviewing official
    reviewedBy?: Official;         // Reviewing official
    reviewedAt?: Date;             // When reviewed (matches createdAt/updatedAt pattern)
    reviewComments?: string;       // Review feedback/notes

    // Requested membership details
    requestedMembershipType: GoverningBodyMembershipType;
    justification?: string;     // Why they want to join

    // System metadata
    createdAt: Date;
    updatedAt: Date;
}