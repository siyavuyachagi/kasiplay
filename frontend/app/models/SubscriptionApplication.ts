import type { Administrator } from "./Administrator";
import type { PhysicalAddress } from "./PhysicalAddress";
import type { SubscriptionPlan } from "./SubscriptionPlan";

export interface SubscriptionApplication {
    id: string;
    type: SubscriptionApplicationType;  // GOVERNING_BODY | CLUB

    // Business info
    organizationName: string;
    contactPerson: string;
    emailAddress: string;
    phoneNumber: string;
    address: PhysicalAddress;

    // Subscription choice
    subscriptionPlanId: string;
    subscriptionPlan?: SubscriptionPlan

    // Application status
    status: SubscriptionApplicationStatus;  // PENDING | APPROVED | REJECTED

    // Review process
    reviewedById?: string;      // Your admin who reviewed it
    reviewedBy?: Administrator;
    reviewNotes?: string;
    updatedAt?: Date;

    createdAt: Date;
}

export enum SubscriptionApplicationType {
    GOVERNING_BODY = "governing_body",
    CLUB = "club"
}

export enum SubscriptionApplicationStatus {
    PENDING = "pending",
    APPROVED = "approved",
    REJECTED = "rejected"
}