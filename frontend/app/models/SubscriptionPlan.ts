import type { Tenant } from "./Tenant";

export interface SubscriptionPlan {
    id: string;

    // Linked tenant
    tenantId: string;
    tenant?: Tenant;

    // Plan information
    name: string;                   // e.g.,"free", "basic", "pro", "enterprise"
    maxSubscribers?: number;        // total subscribing entities (clubs or orgs)

    // Feature flags
    features?: Record<string, boolean>; // enable/disable specific SaaS features

    // Status
    isActive: boolean;
    startDate: Date;
    endDate?: Date;                  // optional subscription end

    // Metadata
    createdAt: Date;
    updatedAt: Date;
}

