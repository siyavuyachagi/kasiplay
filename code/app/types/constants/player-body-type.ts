export const PLAYER_BODY_TYPE = {
    LEAN: "lean",
    ATHLETIC: "athletic",
    STOCKY: "stocky",
    MUSCULAR: "muscular",
} as const;

export type PlayerBodyType = typeof PLAYER_BODY_TYPE[keyof typeof PLAYER_BODY_TYPE]