export const CUP_FORMAT = {
    SINGLE: "single",
    DOUBLE: "double",
} as const;

export type CupFormat = typeof CUP_FORMAT[keyof typeof CUP_FORMAT]