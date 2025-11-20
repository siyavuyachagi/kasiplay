import type { Chat } from "./chat";
import type { GroupChatMember } from "./group-chat-member";

export interface GroupChat extends Chat {
    name: string;
    description?: string;
    avatarUrl?: string;
    coverImageUrl?: string;
    participants: GroupChatMember[];
}
