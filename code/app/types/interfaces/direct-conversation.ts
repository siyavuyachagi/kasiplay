import type { ApplicationUser } from "./application-user";
import type { Conversation } from "./conversation";

export interface DirectConversation extends Conversation {
    initiatorId: string;
    initiator?: ApplicationUser;

    peerId: string;
    peer?: ApplicationUser;
}

