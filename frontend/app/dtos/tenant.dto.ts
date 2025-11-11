import type { ApplicationUser } from "./application-user.dto";
import type { Billing } from "./billing.dto";
import type { Contact } from "./contact.dto";

export interface Tenant {
    id: string;

    // Basic information
    name: string;                  // e.g., "South Africa Football Federation"
    domain?: string;               // optional custom login URL
    contactId: string;
    contact?: Contact;
    billingId: string;
    billing?: Billing;

    // The person who created and pays for this tenant - HAS INITIAL AUTHORITY
    creatorId: string;
    creator?: ApplicationUser;
    subscriptionApplicationId?: string; // Tracks back application

    // Subscription / plan info
    subscriptionPlan?: string;     // e.g., "basic", "pro", "enterprise"
    isActive: boolean;             // active subscription
    startDate: Date;               // subscription start
    endDate?: Date;                // optional subscription end

    // System settings / metadata
    createdAt: Date;
    updatedAt: Date;

    // Users that belong to this tenant (optional for navigation)
    users?: ApplicationUser[];     // link to TypeScript user model

    // Optional additional configuration
    featureFlags?: Record<string, boolean>; // enable/disable SaaS features
}