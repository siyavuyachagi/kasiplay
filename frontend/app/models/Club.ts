import type { Official } from "./ApplicationUsers";
import type { PhysicalAddress } from "./PhysicalAddress";

export interface Club {
    id: string;
    // Basic information
    name: string;
    shortName: string;
    nickname?: string;
    foundedYear: number;

    // Branding and identity
    logoUrl: string;
    primaryColor: string;
    secondaryColor: string;
    banner?: string;
    accentColor?: string;
    merchandiseUrl?: string;

    // Location and facilities
    venue: string;
    address: PhysicalAddress;

    // facilities: Facility[];

    // Organizational structure
    owner?: string;
    president?: string;

    // People
    Officials: Official[]
    players: Player[];

    // Competition and performance
    league: string;
    currentSeason: string;
    matches: Match[];
    seasonStats: {
        played: number;
        won: number;
        drawn: number;
        lost: number;
        goalsFor: number;
        goalsAgainst: number;
        points: number;
        position?: number;
    };

    // Training and development
    trainingSessions: TrainingSession[];
    youthAcademy?: {
        ageGroups: string[];
        facilities: string[];
        coaches: string[];
    };

    // Business operations

    // Transfers and scouting
    transfers: Transfer[];
    scoutingReports: ScoutingReport[];
    transferBudget: number;

    // Equipment and resources
    // equipment: Equipment[];

    // Communication and media
    announcements: Announcement[];
    mediaLibrary: MediaPost[];

    // Social media and marketing
    socialMedia?: SocialLink[];

    // Partnerships and sponsorships
    sponsors?: Sponsorship[];

    // Club culture and values
    motto?: string;
    values?: string[];
    history?: {
        majorAchievements: {
            title: string;
            year: number;
            description?: string;
        }[];
    };

    // System metadata
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
}