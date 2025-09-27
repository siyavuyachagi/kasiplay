import type { SubscriptionPlan } from "./SubscriptionPlan";
import type { Tenant } from "./Tenant";

export interface Subscription {
    id: string;

    tenantId: string;                // who is subscribing
    tenant?: Tenant;

    planId: string;                  // which plan
    plan?: SubscriptionPlan;

    startDate: Date;
    endDate?: Date;                  // optional subscription end
    isActive: boolean;

    createdAt: Date;
    updatedAt: Date;
}