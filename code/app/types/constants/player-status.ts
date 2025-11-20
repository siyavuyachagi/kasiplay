export const PLAYER_STATUS = {
    ACTIVE: 'active',
    INJURED: 'injured',
    SUSPENDED: 'suspended',
    LOANED_OUT: 'loaned_out',
    RETIRED: 'retired',
    RELEASED: 'released'
} as const;

export type PlayerStatus = typeof PLAYER_STATUS[keyof typeof PLAYER_STATUS]