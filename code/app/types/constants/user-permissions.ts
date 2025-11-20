export const USER_PERMISSIONS = {
  // SYSTEM
  CREATE_SYSTEM: 'create:system',
  READ_SYSTEM: 'read:system',
  UPDATE_SYSTEM: 'update:system',
  DELETE_SYSTEM: 'delete:system',

  // USER
  CREATE_USER: 'create:user',
  READ_USER: 'read:user',
  UPDATE_USER: 'update:user',
  DELETE_USER: 'delete:user',

  // FEDEERATION
  CREATE_FEDERATION: 'create:federation',
  READ_FEDERATION: 'read:federation',
  UPDATE_FEDERATION: 'update:federation',
  DELETE_FEDERATION: 'delete:federation',

  // COMPETITION 
  CREATE_COMPETITION: 'create:competition',
  READ_COMPETITION: 'read:competition',
  UPDATE_COMPETITION: 'update:competition',
  DELETE_COMPETITION: 'delete:competition',

  // CLUB 
  CREATE_CLUB: 'create:club',
  READ_CLUB: 'read:club',
  UPDATE_CLUB: 'update:club',
  DELETE_CLUB: 'delete:club',

  // TEAM 
  CREATE_TEAM: 'create:team',
  READ_TEAM: 'read:team',
  UPDATE_TEAM: 'update:team',
  DELETE_TEAM: 'delete:team',

  // MATCH 
  CREATE_MATCH: 'create:match',
  READ_MATCH: 'read:match',
  UPDATE_MATCH: 'update:match',
  DELETE_MATCH: 'delete:match',

  // CONTENT 
  CREATE_CONTENT: 'create:content',
  READ_CONTENT: 'read:content',
  UPDATE_CONTENT: 'update:content',
  DELETE_CONTENT: 'delete:content',

  // OTHER
} as const;

export type UserPermission = typeof USER_PERMISSIONS[keyof typeof USER_PERMISSIONS];
