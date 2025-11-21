
export const CUP_ROUND_BRACKET_SIDE = {
    RIGHT: "right",
    LEFT: "left",
    CENTER: "center"
} as const;

export type CupRoundBracketSide = typeof CUP_ROUND_BRACKET_SIDE[keyof typeof CUP_ROUND_BRACKET_SIDE]