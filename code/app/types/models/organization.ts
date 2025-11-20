import type { SocialLink } from "./social-link";
import type { Tenant } from "./tenant";
import type { TenantUser } from "./tenant-user";

export interface Organization {
    id: string;

    //Tenant reference
    tenantId: string;
    tenant?: Tenant;

    // Basic information
    name: string;               // "Union of European Football Associations"
    shortName: string;          // "UEFA"
    country?: string;
    region?: string;
    foundedYear: number;
    isActive: boolean;
    establishedDate?: Date;

    tenantUserIds: string[];
    tenantUsers?: TenantUser[]

    // Branding and identity
    logoUrl: string;
    primaryColor: string;
    secondaryColor: string;
    banner?: string;
    accentColor?: string;
    merchandiseUrl?: string;
    socialLinks: SocialLink[];

    // System metadata
    createdAt: Date;
    updatedAt: Date;
}