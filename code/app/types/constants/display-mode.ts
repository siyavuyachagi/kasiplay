export const DISPLAY_MODE = {
    LIST: 'list',
    GRID: 'grid',
    HYBRID: 'hybrid',
} as const;

export type DisplayMode = typeof DISPLAY_MODE[keyof typeof DISPLAY_MODE];