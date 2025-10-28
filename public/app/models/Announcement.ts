import type { AnnouncementAudience, AnnouncementType } from "~/types/enums";
import type { ApplicationUser } from "./ApplicationUsers";

export interface Announcement {
    id: string;
    title: string;
    body: string;
    type: AnnouncementType;
    audience: AnnouncementAudience;
    targetUsers?: ApplicationUser[]; // Optional: for SPECIFIC_PERSON audience, can contain 1 or more users
    authorId?: string;
    author?: ApplicationUser;
    readBy?: ApplicationUser[]; // Optional list of userIds who have read this

    // System metadata
    createdAt: Date;
    updatedAt: Date;
}
