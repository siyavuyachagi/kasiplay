export const MATCH_LEGS = {
    SINGLE_LEG: 'single',           // 1 game decides winner
    TWO_LEG: 'two',                 // Home & away (aggregate)
} as const;

export type MatchLegs = typeof MATCH_LEGS[keyof typeof MATCH_LEGS]