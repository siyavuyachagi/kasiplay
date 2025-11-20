# Roles and Permissions

# **Roles & Permissions**

This document defines the Role-Based Access Control (RBAC) system used across the platform.
Each role maps to a predefined set of permissions. Permissions follow the format:

```
<action>:<resource>
```

Examples:

* `create:club`
* `read:competition`
* `update:user`

This ensures consistency, clarity, and simple permission checking.

---

## **User Roles**

```ts
export const USER_ROLES = {
  OWNER: 'owner',
  ADMINISTRATOR: 'administrator',
  OFFICIAL: 'official',
  PLAYER: 'player',
  GENERAL: 'general',
} as const;
```

### **Role Summary**

| Role              | Description                                                                    |
| ----------------- | ------------------------------------------------------------------------------ |
| **Owner**         | Full system authority. No restrictions. Highest level access.                  |
| **Administrator** | Manages organizations, competitions, clubs, content moderation, and approvals. |
| **Official**      | Match-related operations (referees, coaches, scouts, trainers).                |
| **Player**        | Athlete-specific access.                                                       |
| **General**       | Regular user/fan. Basic interaction privileges.                                |

---

## **Permissions**

```ts
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

  // FEDERATION
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
} as const;
```

---

# **Default Role Permissions**

Here’s your **complete**, consistent, production-ready mapping:

```ts
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
```
