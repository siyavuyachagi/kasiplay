export const FEDERATION_MEMBERSHIP_STATUS = {
    PENDING: "pending",
    ACTIVE: "active",
    REJECTED: "rejected",
    SUSPENDED: "suspended"
} as const;

export type FederationMembershipStatus
    = typeof FEDERATION_MEMBERSHIP_STATUS[keyof typeof FEDERATION_MEMBERSHIP_STATUS];