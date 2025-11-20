export const PLAYER_PREFERED_FOOT = {
    LEFT: "left",
    RIGHT: "right",
    BOTH: "both"
} as const;

export type PlayerPreferedFoot = typeof PLAYER_PREFERED_FOOT[keyof typeof PLAYER_PREFERED_FOOT]