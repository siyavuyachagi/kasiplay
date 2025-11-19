import type { SocialPlatform } from "../constants/social-platform";

export interface SocialLink {
    platform: SocialPlatform;
    handler: string;
    domainUrl?: string;
    icon?: string;
}