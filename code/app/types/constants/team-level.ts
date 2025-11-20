export const TEAM_LEVEL = {
    MAIN: "main",
    DEVELOPMENT: "development",
    YOUTH: "youth",
} as const;

export type TeamLevel = typeof TEAM_LEVEL[keyof typeof TEAM_LEVEL];
