import type { ApplicationUser } from "./application-user.dto";


export interface Activity {
    id: string;
    initiatorType: "user" | "system";
    initiatorId?: string;
    initiator?: ApplicationUser
    name: string;
    description: string;
    timestamp: Date;
}