export const MATCH_STATUS = {
    SCHEDULED: 'scheduled',
    LIVE: 'live',
    COMPLETED: 'completed',
    POSTPONED: 'postponed',
    CANCELLED: 'cancelled',
    ABANDONED: 'abandoned'
} as const;

export type MatchStatus = typeof MATCH_STATUS[keyof typeof MATCH_STATUS]