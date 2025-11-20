export const CONVERSATION_TYPE = {
    DIRECT: 'direct',
    GROUP: 'group',
    CHANNEL: 'channel',   // optional, if you ever support read-only or broadcast
    BROADCAST: 'broadcast', // optional for announcements
    OTHER: 'other'
} as const;

export type ConversationType =
    typeof CONVERSATION_TYPE[keyof typeof CONVERSATION_TYPE];

export const CONVERSATION_ICONS: Record<ConversationType, string> = {
    direct: 'lucide:user',            // 1-on-1 chat
    group: 'lucide:users',            // group chat
    channel: 'lucide:radio',          // read-only or broadcast channel
    broadcast: 'lucide:megaphone',    // announcements
    other: 'lucide:messages-square',  // fallback generic chat
};