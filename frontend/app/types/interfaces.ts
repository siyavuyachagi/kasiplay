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
    ClubDivision,
    FoulMatchEventCard,
    GoalMatchEventType,
    SubstitutionReason,
} from "./enums";






//#region A


//#endregion



//#region B

//#endregion



//#region C
// Main Team/Club interface


export interface ClubBranding extends Branding {
    clubId: string;
    club: Club;
}

// Contract and Financial interfaces

//#endregion


//#region F

//#endregion



//#region G

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
    division: ClubDivision;
    season: string;
    clubs: Club[];
    matches: Match[]; // All
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
    fixtures: Match[]; // scheduled | live | postponed
    results: Match[]; // completed | cancelled
    //metadata
    createdAt: Date,
    updatedAt: Date,
}

export interface LeagueStanding {
}
//#endregion



//#region K
export interface kickoff extends MatchEvent {

}
//#endregion


//#region M
export interface Manager extends ClubOfficial {
  contractLength?: string; // e.g. "2 years"
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


export interface PhysicalAttribute {
    id: string;
}

// Performance and Statistics interfaces

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

export interface Substitution extends MatchEvent {
    playerOut: Player;        // the player being substituted off
    playerIn: Player;         // the player coming onto the pitch
    reason?: SubstitutionReason;          // optional: tactical, injury, etc.
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
