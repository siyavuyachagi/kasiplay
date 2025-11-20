import type { ConversationType } from "../constants/conversation-type";
import type { ApplicationUser } from "./application-user";
import type { Message } from "./message";

/**
 * Conversation or sometimes refered to as Chat
 */
export interface Conversation {
    id: string;                          // unique conversation ID
    type: ConversationType;

    // Last message info (for previews in chat list)
    messages: Message[];  // all messages in this conversation
    lastMessage: Message;

    unreadMessagesCounter: number;       // number of unread messages
    verified?: boolean;   // if this conversation is verified (optional)

    // metadata
    createdAt: Date;
    updatedAt: Date;
}