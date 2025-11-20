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

export const SOCIAL_PLATFORM_META: Record<SocialPlatform, { icon: string; colorClass: string }> = {
    facebook: { icon: "lucide:facebook", colorClass: "text-blue-600" },
    x: { icon: "lucide:x", colorClass: "text-black" },            // X/Twitter
    instagram: { icon: "lucide:instagram", colorClass: "text-pink-500" },
    youtube: { icon: "lucide:youtube", colorClass: "text-red-600" },
    tiktok: { icon: "lucide:tiktok", colorClass: "text-black" },
    website: { icon: "lucide:globe", colorClass: "text-gray-500" },
    other: { icon: "lucide:link", colorClass: "text-gray-400" },
};
