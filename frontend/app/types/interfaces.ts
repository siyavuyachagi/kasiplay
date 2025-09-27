import type {
    PlayerPosition,
    TransferType,
    TrainingType,
    FinancialTransactionType,
    TransferStatus,
} from "./enums";



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
