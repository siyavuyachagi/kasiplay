import { USER_PERMISSIONS, type UserPermission } from "./user-permissions";

export const USER_ROLES = {
    Owner: 'Owner',
    Administrator: 'Administrator',
    Official: 'Official',
    Player: 'Player',
    General: 'General', // Regular users
} as const;

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES];

export const ROLE_DEFAULT_PERMISSIONS: Record<UserRole, UserPermission[]> = {
    Owner: [
        USER_PERMISSIONS.MANAGE_SYSTEM,
        USER_PERMISSIONS.MANAGE_USERS,
        USER_PERMISSIONS.MANAGE_FEDERATIONS,
        USER_PERMISSIONS.MANAGE_CLUBS,
        USER_PERMISSIONS.VIEW_ANALYTICS,
        USER_PERMISSIONS.CONFIGURE_SETTINGS,
    ],

    Administrator: [
        USER_PERMISSIONS.APPROVE_CLUBS,
        USER_PERMISSIONS.MANAGE_ORGANIZATIONS,
        USER_PERMISSIONS.MODERATE_CONTENT,
        USER_PERMISSIONS.MANAGE_USER_ROLES,
    ],

    Official: [
        USER_PERMISSIONS.OFFICIATE_MATCH,
        USER_PERMISSIONS.COACH_TEAM,
        USER_PERMISSIONS.MANAGE_TRAINING,
        USER_PERMISSIONS.SCOUT_PLAYERS,
        USER_PERMISSIONS.ASSESS_PLAYER,
        USER_PERMISSIONS.SCHEDULE_MATCH,
        USER_PERMISSIONS.MANAGE_SQUAD,
    ],

    Player: [
        USER_PERMISSIONS.VIEW_PERSONAL_STATS,
        USER_PERMISSIONS.EDIT_PROFILE,
        USER_PERMISSIONS.CREATE_CONTENT,
        USER_PERMISSIONS.JOIN_TEAM,
        USER_PERMISSIONS.VIEW_TEAM_STATS,
    ],

    General: [
        USER_PERMISSIONS.ENGAGE_CONTENT,
        USER_PERMISSIONS.FOLLOW_TEAMS,
        USER_PERMISSIONS.VIEW_PUBLIC_STATS,
    ],
};

export const ROLE_BADGES: Record<UserRole, { bg: string; text: string }> = {
    Owner: { bg: 'bg-gray-100', text: 'text-gray-800' },          // top-level admin
    Administrator: { bg: 'bg-blue-100', text: 'text-blue-700' },  // manages federations/clubs
    Official: { bg: 'bg-yellow-100', text: 'text-yellow-700' },   // referee, coach, etc.
    Player: { bg: 'bg-green-100', text: 'text-green-600' },       // athletes
    General: { bg: 'bg-orange-100', text: 'text-orange-600' },    // fans / general users
};
