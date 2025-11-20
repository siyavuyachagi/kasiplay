export const TEAM_GENDER = {
    MALE: "male",
    FEMALE: "female",
    MIXED: "mixed",
} as const;

export type TeamGender = typeof TEAM_GENDER[keyof typeof TEAM_GENDER];