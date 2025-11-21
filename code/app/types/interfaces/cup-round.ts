import type { CupRoundBracketSide } from "../constants/cup-bracket-side";
import type { Cup } from "./cup";
import type { Match } from "./match";

export interface CupRound {
    id: string;
    cupId: string;
    cup?: Cup;
    roundNumber: number;
    roundName: string;

    // Visualization properties
    bracketSide?: CupRoundBracketSide;
    bracketPosition?: number; // Position within the bracket side
    parentMatchIds?: string[]; // IDs of matches that feed into this one
    parentMatches?: Match[];

    isCompleted: boolean;

    //System metadata
    createdAt: string | Date;
    updatedAt: string | Date;
}