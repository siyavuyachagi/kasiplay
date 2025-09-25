export const MAX_ATTACHMENT_SIZE = 5000000; // 5MB

export const USER_ROLE = {
    ADMIN: 'admin',
    USER: 'user',
    GUEST: 'guest'
} as const;

USER_ROLE.ADMIN;