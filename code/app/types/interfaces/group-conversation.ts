import type { Conversation } from "./conversation";
import type { GroupConversationMember } from "./group-conversation-member";

export interface GroupConversation extends Conversation {
    name: string;
    description?: string;
    avatarUrl?: string;
    coverImageUrl?: string;
    participants: GroupConversationMember[];
}
