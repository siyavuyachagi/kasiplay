import type { UserPermission } from "../constants/user-permissions";
import type { UserRole } from "../constants/user-role";
import type { ApplicationUser } from "./application-user";
import type { Tenant } from "./tenant";

export interface TenantUser {
    id: string;                     // Unique ID for this association
    tenantId: string;               // ID of the tenant
    tenant?: Tenant
    userId: string;                 // ID of the user
    user?: ApplicationUser;         // Optional full user object

    role: UserRole;                 // Role of the user within this tenant
    permissions?: UserPermission[]; // Optional override or extra permissions

    // Presence & activity
    isActive: boolean;              // Is the user active in this tenant?
    joinedAt: string;               // ISO string of when the user joined
    lastLoginAt?: string;

    // Metadata
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
}
