import type { ChatType } from "../constants/chat-type";
import type { Message } from "./message";

/**
 * Chat
 */
export interface Chat {
    id: string;                          // unique conversation ID
    type: ChatType;

    // Last message info (for previews in chat list)
    messages: Message[];  // all messages in this conversation
    lastMessage: Message;

    unreadMessages: number;       // number of unread messages
    verified?: boolean;   // if this conversation is verified (optional)

    // metadata
    createdAt: Date;
    updatedAt: Date;
}