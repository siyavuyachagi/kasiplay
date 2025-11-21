import type { ApplicationUser } from "./application-user";

export interface PollPostOption {
    id: string;
    text: string;
    voters?: number | string[] | ApplicationUser[];        // store userIds only if poll is NOT anonymous
    avatarUrl?: string;
}
