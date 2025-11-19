export const SOCIAL_PLATFORM = {
    FACEBOOK: 'facebook',
    X: 'x',
    INSTAGRAM: 'instagram',
    YOUTUBE: 'youtube',
    TIKTOK: 'tiktok',
    WEBSITE: 'website',
    OTHER: 'other',
} as const;

export type SocialPlatform = typeof SOCIAL_PLATFORM[keyof typeof SOCIAL_PLATFORM];