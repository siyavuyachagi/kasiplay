export const CUP_BRACKET_STYLE = {
    TRADITIONAL: 'traditional',         // Vertical progression
    MIRRORED: 'mirrored',               // Left/right converging to center
    LADDER: 'ladder'                    // Step-ladder format
} as const;

export type CupBracketStyle = typeof CUP_BRACKET_STYLE[keyof typeof CUP_BRACKET_STYLE]