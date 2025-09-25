import type {
    ContractType,
    InjurySeverity,
    InjuryType,
    MatchStatus,
    MatchType,
    PlayerPosition,
    PlayerStatus,
    TransferType,
    TrainingType,
    PaymentFrequency,
    SponsorshipType,
    SocialPlatform,
    FinancialTransactionType,
    TransferStatus,
    MatchOfficialRole,
} from "./enums";






//#region A
// Communication and Media interfaces
export interface Announcement {
    id: string;
    title: string;
    content: string;
    // type: 'general' | 'urgent' | 'training' | 'match' | 'transfer';
    publishDate: Date;
    expiryDate?: Date;
    authorId: string;
    author: ApplicationUser;
    isPublished: boolean;
    attachments?: string[];
    createdAt: Date;
    updatedAt: Date;
}


export interface ApplicationUser {
    id: string;
    username: string;
    emailAddress: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    nationality: string;
    physicalAddress: PhysicalAddress;
    contact: Contact;
    profileImage?: string;
    //metadata
    createdAt: Date;
    updatedAt: Date;
}
//#endregion



//#region B
export interface Branding {
    id: string;
    logoUrl: string;
    banner?: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor?: string;
    merchandiseUrl?: string;
    //metadata
    createdAt: Date;
    updatedAt: Date;
}
//#endregion



//#region C
// Main Team/Club interface
export interface Club {
    id: string;
    // Basic information
    name: string;
    shortName: string;
    nickname?: string;
    foundedYear: number;

    // Branding and identity
    branding: ClubBranding;

    // Location and facilities
    venue: string;
    address: PhysicalAddress;

    // facilities: Facility[];

    // Organizational structure
    owner?: string;
    president?: string;
    management: {
        generalManager?: string;
        sportingDirector?: string;
        headCoach: string;
    };

    // People
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
    finances: {
        budget: Budget;
        transactions: FinancialTransaction[];
        totalRevenue: number;
        totalExpenses: number;
        profitLoss: number;
    };

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
    sponsors?: {
        name: string;
        type: 'main' | 'kit' | 'training' | 'partner';
        contractStart: Date;
        contractEnd: Date;
        value: number;
    }[];

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

export interface ClubBranding extends Branding {
    clubId: string;
    club: Club;
}


export interface Contact {
    email?: string;
    phone?: string;
    phoneAlt?: string;
    emergencyContact?: {
        name: string;
        relationship: string;
        email: string;
        phone: string;
    };
}

// Contract and Financial interfaces
export interface Contract {
    id: string;
    startDate: Date;
    endDate: Date;
    type: ContractType;
    weeklySalary: number;
    signingBonus?: number;
    performanceBonuses?: {
        goals?: number;
        assists?: number;
        cleanSheets?: number;
        appearances?: number;
    };
    releaseClause?: number;
    agentFee?: number;
    isActive: boolean;
    renewalOptions?: {
        clubOption?: number; // years
        playerOption?: number; // years
    };
}
//#endregion




//#region I
export interface Injury {
    id: string;
    playerId: string;
    type: InjuryType;
    severity: InjurySeverity;
    description: string;
    injuryDate: Date;
    expectedRecoveryDate?: Date;
    actualRecoveryDate?: Date;
    treatmentPlan: string;
    isActive: boolean;
    medicalRecords: MedicalRecord[];
    //system metadata
    createdAt: Date,
    updatedAt: Date,
}
//#endregion



//#region L
export interface League {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    country: string;
    division: string;
    season: string;
    clubs: Club[];
    matches: Match[];
    // standings: {
    //     clubId: string;
    //     played: number;
    //     won: number;
    //     drawn: number;
    //     lost: number;
    //     goalsFor: number;
    //     goalsAgainst: number;
    //     points: number;
    //     position: number;
    // }[];
    // topScorers: {
    //     playerId: string;
    //     goals: number;
    //     assists: number;
    //     appearances: number;
    //     clubId: string;
    // }[];
    fixtures: Match[];
    results: Match[];
    //metadata
    createdAt: Date,
    updatedAt: Date,
}

export interface LeagueStanding {
}
//#endregion



//#region M
// Match and Competition interfaces
export interface Match {
    id: string;
    homeTeamId: string;
    homeTeam: Club;
    awayTeamId: string;
    awayTeam: Club;
    competition: string;
    matchType: MatchType;
    status: MatchStatus;

    // Match details
    scheduledDate: Date;
    actualKickoffTime?: Date;
    venue: string;
    referee?: string;
    attendance?: number;

    // Results
    homeScore?: number;
    awayScore?: number;

    // Team lineups
    homeLineup?: {
        starting11: string[]; // player IDs
        substitutes: string[];
        formation: string;
    };
    awayLineup?: {
        starting11: string[];
        substitutes: string[];
        formation: string;
    };

    // Match events
    events?: {
        minute: number;
        type: 'goal' | 'yellow_card' | 'red_card' | 'substitution' | 'penalty' | 'own_goal';
        playerId: string;
        assistPlayerId?: string;
        description?: string;
    }[];

    // Performance data
    // performances: MatchPerformance[];

    // Match analysis
    statistics?: {
        possession: { home: number; away: number };
        shots: { home: number; away: number };
        shotsOnTarget: { home: number; away: number };
        corners: { home: number; away: number };
        fouls: { home: number; away: number };
    };

    createdAt: Date;
    updatedAt: Date;
}


export interface MatchOfficial {
    id: string;
    Official: ApplicationUser;
    role: MatchOfficialRole;
}

// Medical and Fitness interfaces
export interface MedicalRecord {
    id: string;
    date: Date;
    type: 'injury' | 'illness' | 'checkup' | 'treatment';
    description: string;
    treatedBy: string;
    followUpRequired?: boolean;
    nextCheckupDate?: Date;
}
//#region 






export interface FitnessData {
    id: string;
    playerId: string;
    date: Date;
    weight: number;
    bodyFatPercentage?: number;
    vo2Max?: number;
    speedTest?: number; // seconds for sprint
    enduranceTest?: number; // minutes for endurance run
    strengthTests?: {
        benchPress?: number;
        squat?: number;
        deadlift?: number;
    };
    notes?: string;
}

//#region P
export interface PhysicalAddress {
    id: string;
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
}

export interface PhysicalAttribute {
    id: string;
}

export interface Player extends ApplicationUser {
    jerseyNumber: number;
    primaryPosition: PlayerPosition;
    secondaryPositions?: PlayerPosition[];
    status: PlayerStatus;
    contract: Contract;
    marketValue: number;

    // Physical attributes
    height: number; // cm
    weight: number; // kg
    preferredFoot: 'left' | 'right' | 'both';

    // Career information
    previousClubs?: {
        clubName: string;
        startDate: Date;
        endDate: Date;
        appearances: number;
        goals: number;
    }[];

    // Performance data
    matchPerformances: PlayerMatchPerformance[];

    // Medical and fitness
    injuries: Injury[];
    medicalRecords: MedicalRecord[];
    fitnessData: FitnessData[];

    // Development (for youth players)
    youthPlayer?: boolean;
    parentClub?: string;
}
// Performance and Statistics interfaces
export interface PlayerMatchPerformance {
    playerId: string;
    matchId: string;
    position: PlayerPosition;
    minutesPlayed: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    shots: number;
    shotsOnTarget: number;
    passes: number;
    passAccuracy: number;
    tackles: number;
    interceptions: number;
    rating?: number; // 1-10 scale
    manOfTheMatch?: boolean;
    //system metadata
    createdAt: Date,
    updatedAt: Date,
}
//#endregion





//#region R
export interface Report {
    id: string;
    name?: string;
    fileUrl: string;
    //metadata
    createdAt: Date,
    updatedAt: Date,
}
//#endregion




//#region S
export interface Salary {
    id: string;
    userId: string;
    amount: number;
    frequency: PaymentFrequency;
}



export interface ScoutingReport {
    id: string;
    playerName: string;
    currentClub: string;
    position: PlayerPosition;
    age: number;
    nationality: string;

    // Scouting details
    scoutedBy: string; // staff ID
    scoutingDate: Date;
    matchWatched?: string;

    // Player evaluation
    technicalRating: number; // 1-10
    physicalRating: number;
    mentalRating: number;
    potentialRating: number;
    overallRating: number;

    // Detailed assessment
    strengths: string[];
    weaknesses: string[];

    // Recommendation
    recommendation: 'highly_recommend' | 'recommend' | 'maybe' | 'not_recommend';
    estimatedMarketValue: number;
    notes: string;

    createdAt: Date;
    updatedAt: Date;
}

export interface SocialLink {
    id: string;
    parentEntityId: string; // e.g., Club ID, Player ID, Sponsor ID
    platform: SocialPlatform;
    url: string;
}

export interface Sponsorship {
    id: string;
    name: string;
    type: SponsorshipType;
    contract: Contract;
    value: number;
    logoUrl?: string;
    website?: string;
    // metadata
    createdAt: Date;
    updatedAt: Date;
}

// export interface StartingXI {
//     id: string;
//     clubId: string;
//     club: Club;
//     players: Player[]
// }

//#endregion








//#region T
// Training interfaces
export interface TrainingSession {
    id: string;
    date: Date;
    startTime: Date;
    endTime: Date;
    type: TrainingType;
    location: string;
    description: string;
    objectives: string[];

    // Staff involved

    // Players involved
    playersAttended: Player[];
    playersAbsent?: Player[];

    notes?: string;
    createdAt: Date;
    updatedAt: Date;
}


// Transfer and Scouting interfaces
export interface Transfer {
    id: string;
    playerId: string;
    player: Player;
    type: TransferType;
    fromClubId: string;
    toClubId: string;
    transferDate: Date;
    fee?: number;
    loanDuration?: number; // months, if applicable
    buyBackClause?: number;
    sellOnClause?: number; // percentage
    status: TransferStatus;
    negotiations?: TransferNegotiation[];
    //metadata
    createdAt: Date;
    updatedAt: Date;
}

export interface TransferNegotiation {
    id: string;
    transferId: string;
    date: Date;
    notes: string;
    proposedFee?: number;
    //metadata
    createdAt: Date;
    updatedAt: Date;
}
//#endregion


// Financial interfaces
export interface FinancialTransaction {
    id: string;
    type: FinancialTransactionType;
    amount: number;
    description: string;
    reference?: string; // invoice number, etc.
    paymentMethod?: string;
    approvedBy?: string;
    timestamp: Date;
    createdAt: Date;
    updatedAt: Date;
}



export interface MediaPost {
    id: string;
    title: string;
    type: "text" | 'photo' | 'video' | 'document';
    url: string;
    description?: string;
    tags: string[];
    uploadDate: Date;
    uploadedBy: string;
    matchId?: string;
    playerId?: string;
    isPublic: boolean;
    createdAt: Date;
    updatedAt: Date;
}
