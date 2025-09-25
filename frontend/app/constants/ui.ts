// UI-only constants (like colors, page titles, menu items) go here

import { MatchStatus } from "~/types/enums";

// System Constants
// /constants/system.ts
export const SYSTEM_CONSTANTS = {
    NAME: "KasiPlay Manager",
    SHORT_NAME: "KPM",
    DESCRIPTION: "A football management platform.",

    VERSION: "1.0.0",
    RELEASE_DATE: "2025-09-25", // keep track of build release date
    BUILD: "stable", // could be 'dev', 'beta', 'stable'

    AUTHOR: "NetSolutions",
    WEBSITE: "https://kasiplay.com",
    SUPPORT_EMAIL: "support@kasiplay.com",
    CONTACT_EMAIL: "contact@kasiplay.com",
    PRIVACY_POLICY_URL: "https://kasiplay.com/privacy",
    TERMS_URL: "https://kasiplay.com/terms",

    SOCIALS: {
        FACEBOOK: "https://facebook.com/kasiplay",
        TWITTER: "https://twitter.com/kasiplay",
        INSTAGRAM: "https://instagram.com/kasiplay",
        YOUTUBE: "https://youtube.com/@kasiplay",
    },

    // UI defaults
    DEFAULT_LANGUAGE: "en",
    SUPPORTED_LANGUAGES: ["en", "xh"],

    // Branding
    LOGO_URL: "/assets/logo.png",
    FAVICON_URL: "/favicon.png",
    // THEME_COLOR: "#FF6B00",
};



export const statusColors: Record<MatchStatus, string> = {
    [MatchStatus.SCHEDULED]: "gray",
    [MatchStatus.LIVE]: "green",
    [MatchStatus.COMPLETED]: "blue",
    [MatchStatus.POSTPONED]: "orange",
    [MatchStatus.CANCELLED]: "red",
};