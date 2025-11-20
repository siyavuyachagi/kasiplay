import type { ApplicationUser } from "./application-user";

export interface GroupConversationMember {
    id: string;
    role: "admin" | "general";
    memberId: string;
    member?: ApplicationUser

    //ui
    firstName?: string;
    lastName?: string;
}