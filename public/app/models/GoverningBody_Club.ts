import type { GoverningBodyMembershipStatus, GoverningBodyMembershipType } from "~/types/enums";
import type { Club } from "./Club";
import type { GoverningBody } from "./GoverningBody";
import type { GoverningBodyMembershipApplication } from "./GoverningBodyMembershipApplication";

export interface GoverningBody_Club {
    id: string;

    // Foreign keys
    governingBodyId: string;
    governingBody?: GoverningBody;
    clubId: string;
    club?: Club;

    // Membership details
    membershipType?: GoverningBodyMembershipType;
    status: GoverningBodyMembershipStatus;
    joinedAt: Date;
    expiresAt?: Date;

    // Application workflow
    applicationId: string;
    application?: GoverningBodyMembershipApplication;

    // System metadata
    createdAt: Date;
    updatedAt: Date;
}