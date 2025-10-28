import type { Official } from "./Official";
import type { SocialLink } from "./SocialLink";
import type { Tenant } from "./Tenant";

export interface Organization {
    id: string;

    //Tenant reference
    tenantId: string;
    tenant?: Tenant;

    // Basic information
    name: string;           // "Union of European Football Associations"
    shortName: string;          // "UEFA"
    nickname?: string;
    country?: string;
    region?: string;
    foundedYear: number;
    isActive: boolean;
    establishedDate?: Date;

    // Officials
    officials: Official[];

    // Branding and identity
    logoUrl: string;
    primaryColor: string;
    secondaryColor: string;
    banner?: string;
    accentColor?: string;
    merchandiseUrl?: string;
    websiteUrl?: string;
    socialLinks: SocialLink[];

    // System metadata
    createdAt: Date;
    updatedAt: Date;
}