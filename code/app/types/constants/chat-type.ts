export const CHAT_TYPE = {
    DIRECT: 'direct',
    GROUP: 'group',
    CHANNEL: 'channel',   // optional, if you ever support read-only or broadcast
    BROADCAST: 'broadcast', // optional for announcements
    OTHER: 'other'
} as const;

export type ChatType =
    typeof CHAT_TYPE[keyof typeof CHAT_TYPE];

export const CHAT_ICONS: Record<ChatType, string> = {
    direct: 'lucide:user',            // 1-on-1 chat
    group: 'lucide:users',            // group chat
    channel: 'lucide:radio',          // read-only or broadcast channel
    broadcast: 'lucide:megaphone',    // announcements
    other: 'lucide:messages-square',  // fallback generic chat
};