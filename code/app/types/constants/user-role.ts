import { USER_PERMISSIONS, type UserPermission } from "./user-permissions";


export const USER_ROLES = {
    OWNER: 'owner',
    ADMINISTRATOR: 'administrator',
    OFFICIAL: 'official',
    PLAYER: 'player',
    GENERAL: 'general', // Regular users
} as const;

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES];

export const ROLE_DEFAULT_PERMISSIONS: Record<UserRole, UserPermission[]> = {
    owner: [
        // SYSTEM
        USER_PERMISSIONS.CREATE_SYSTEM,
        USER_PERMISSIONS.READ_SYSTEM,
        USER_PERMISSIONS.UPDATE_SYSTEM,
        USER_PERMISSIONS.DELETE_SYSTEM,

        // USER
        USER_PERMISSIONS.CREATE_USER,
        USER_PERMISSIONS.READ_USER,
        USER_PERMISSIONS.UPDATE_USER,
        USER_PERMISSIONS.DELETE_USER,

        // FEDERATION
        USER_PERMISSIONS.CREATE_FEDERATION,
        USER_PERMISSIONS.READ_FEDERATION,
        USER_PERMISSIONS.UPDATE_FEDERATION,
        USER_PERMISSIONS.DELETE_FEDERATION,

        // COMPETITION
        USER_PERMISSIONS.CREATE_COMPETITION,
        USER_PERMISSIONS.READ_COMPETITION,
        USER_PERMISSIONS.UPDATE_COMPETITION,
        USER_PERMISSIONS.DELETE_COMPETITION,

        // CLUB
        USER_PERMISSIONS.CREATE_CLUB,
        USER_PERMISSIONS.READ_CLUB,
        USER_PERMISSIONS.UPDATE_CLUB,
        USER_PERMISSIONS.DELETE_CLUB,

        // TEAM
        USER_PERMISSIONS.CREATE_TEAM,
        USER_PERMISSIONS.READ_TEAM,
        USER_PERMISSIONS.UPDATE_TEAM,
        USER_PERMISSIONS.DELETE_TEAM,

        // MATCH
        USER_PERMISSIONS.CREATE_MATCH,
        USER_PERMISSIONS.READ_MATCH,
        USER_PERMISSIONS.UPDATE_MATCH,
        USER_PERMISSIONS.DELETE_MATCH,

        // CONTENT
        USER_PERMISSIONS.CREATE_CONTENT,
        USER_PERMISSIONS.READ_CONTENT,
        USER_PERMISSIONS.UPDATE_CONTENT,
        USER_PERMISSIONS.DELETE_CONTENT,
    ],

    administrator: [
        // USERS (limited)
        USER_PERMISSIONS.READ_USER,
        USER_PERMISSIONS.UPDATE_USER,

        // FEDERATION
        USER_PERMISSIONS.CREATE_FEDERATION,
        USER_PERMISSIONS.READ_FEDERATION,
        USER_PERMISSIONS.UPDATE_FEDERATION,

        // COMPETITION
        USER_PERMISSIONS.CREATE_COMPETITION,
        USER_PERMISSIONS.READ_COMPETITION,
        USER_PERMISSIONS.UPDATE_COMPETITION,

        // CLUB
        USER_PERMISSIONS.CREATE_CLUB,
        USER_PERMISSIONS.READ_CLUB,
        USER_PERMISSIONS.UPDATE_CLUB,

        // TEAM
        USER_PERMISSIONS.CREATE_TEAM,
        USER_PERMISSIONS.READ_TEAM,
        USER_PERMISSIONS.UPDATE_TEAM,

        // MATCH (management but not deletion)
        USER_PERMISSIONS.CREATE_MATCH,
        USER_PERMISSIONS.READ_MATCH,
        USER_PERMISSIONS.UPDATE_MATCH,

        // CONTENT moderation
        USER_PERMISSIONS.READ_CONTENT,
        USER_PERMISSIONS.UPDATE_CONTENT,
        USER_PERMISSIONS.DELETE_CONTENT,
    ],

    official: [
        // TEAM operations (lineups, training)
        USER_PERMISSIONS.READ_TEAM,
        USER_PERMISSIONS.UPDATE_TEAM,

        // MATCH operations (referees/coaches/scouts)
        USER_PERMISSIONS.READ_MATCH,
        USER_PERMISSIONS.UPDATE_MATCH,

        // CONTENT (post match reports, announcements)
        USER_PERMISSIONS.CREATE_CONTENT,
        USER_PERMISSIONS.READ_CONTENT,
    ],

    player: [
        // TEAM visibility
        USER_PERMISSIONS.READ_TEAM,

        // PLAYER PROFILE
        USER_PERMISSIONS.READ_USER,
        USER_PERMISSIONS.UPDATE_USER,

        // MATCH participation
        USER_PERMISSIONS.READ_MATCH,

        // CONTENT
        USER_PERMISSIONS.CREATE_CONTENT,
        USER_PERMISSIONS.READ_CONTENT,
    ],

    general: [
        // BASIC READ ACCESS
        USER_PERMISSIONS.READ_CLUB,
        USER_PERMISSIONS.READ_TEAM,
        USER_PERMISSIONS.READ_COMPETITION,
        USER_PERMISSIONS.READ_MATCH,
        USER_PERMISSIONS.READ_CONTENT,

        // CAN POST & INTERACT
        USER_PERMISSIONS.CREATE_CONTENT,
    ],
};

export const ROLE_BADGES: Record<UserRole, { bg: string; text: string }> = {
    owner: { bg: 'bg-gray-100', text: 'text-gray-800' },          // top-level admin
    administrator: { bg: 'bg-blue-100', text: 'text-blue-700' },  // manages federations/clubs
    official: { bg: 'bg-yellow-100', text: 'text-yellow-700' },   // referee, coach, etc.
    player: { bg: 'bg-green-100', text: 'text-green-600' },       // athletes
    general: { bg: 'bg-orange-100', text: 'text-orange-600' },    // fans / general users
};