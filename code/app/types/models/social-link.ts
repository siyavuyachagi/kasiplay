import type { SocialPlatform } from "../constants/social-platform";
import type { ApplicationUser } from "./application-user";
import type { Organization } from "./organization";

export interface SocialLink {
    id: string;
    platform: SocialPlatform;
    handler: string;
    domainUrl?: string;
    url?: string;  // computed on server or frontend

    // parent entity
    parentEntityId: string;
    parentEntity?: ApplicationUser | Organization;

    // metadata
    createdAt?: string;
    updatedAt?: string;
}
