import type { CupRoundBracketSide } from "~/types/enums";
import type { Cup } from "./Cup";

export interface CupRound {
    id: string;
    cupId: string;
    cup?: Cup;
    roundNumber: number;
    roundName: string;

    // Visualization properties
    bracketSide?: CupRoundBracketSide;
    bracketPosition?: number; // Position within the bracket side
    parentMatches?: string[]; // IDs of matches that feed into this one

    isCompleted: boolean;

    //System metadata
    createdAt: Date;
    updatedAt: Date;
}