import type { SocialPlatform } from "~/types/enums";

export interface SocialLink {
    id: string;
    linkedEntityId: string;    // FK to whatever entity owns it
    platform: SocialPlatform;
    url: string;
}