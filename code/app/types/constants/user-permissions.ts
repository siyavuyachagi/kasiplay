export const USER_PERMISSIONS = {
  // OWNER
  CREATE_SYSTEM: 'create:system',
  EDIT_SYSTEM: 'edit:system',
  VIEW_SYSTEM: 'view:system',
  DELETE_SYSTEM: 'delete:system',

  CREATE_USER: 'create:user',
  EDIT_USER: 'edit:user',
  DELETE_USER: 'delete:user',
  VIEW_USER: 'view:user',

  CREATE_FEDERATION: 'create:federation',
  EDIT_FEDERATION: 'edit:federation',
  DELETE_FEDERATION: 'delete:federation',
  VIEW_FEDERATION: 'view:federation',

  CREATE_CLUB: 'create:club',
  EDIT_CLUB: 'edit:club',
  DELETE_CLUB: 'delete:club',
  VIEW_CLUB: 'view:club',

  VIEW_ANALYTICS: 'view:analytics',
  CONFIGURE_SETTINGS: 'edit:settings',

  // ADMINISTRATOR
  APPROVE_CLUB: 'approve:club',
  MODERATE_CONTENT: 'moderate:content',
  MANAGE_USER_ROLES: 'manage:user_roles',

  // OFFICIAL
  OFFICIATE_MATCH: 'officiate:match',  // referee
  COACH_TEAM: 'coach:team',            // coach
  MANAGE_TRAINING: 'manage:training',
  SCOUT_PLAYERS: 'scout:players',
  ASSESS_PLAYER: 'assess:player',
  SCHEDULE_MATCH: 'schedule:match',
  MANAGE_SQUAD: 'manage:squad',

  // PLAYER
  VIEW_PERSONAL_STATS: 'view:personal_stats',
  EDIT_PROFILE: 'edit:profile',
  CREATE_CONTENT: 'create:content',
  JOIN_TEAM: 'join:team',
  VIEW_TEAM_STATS: 'view:team_stats',

  // GENERAL/FAN
  ENGAGE_CONTENT: 'engage:content',
  FOLLOW_TEAMS: 'follow:teams',
  VIEW_PUBLIC_STATS: 'view:public_stats',
} as const;

export type UserPermission = typeof USER_PERMISSIONS[keyof typeof USER_PERMISSIONS];

