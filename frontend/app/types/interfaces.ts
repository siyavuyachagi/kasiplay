import type {
    PlayerPosition,
    FinancialTransactionType,
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



//#endregion


// Financial interfaces



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
