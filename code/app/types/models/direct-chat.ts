import type { ApplicationUser } from "./application-user";
import type { Chat } from "./chat";

export interface DirectChat extends Chat {
    initiatorId: string;
    initiator?: ApplicationUser;

    peerId: string;
    peer?: ApplicationUser;
}

