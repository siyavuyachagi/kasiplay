import type { CupBracketStyle, CupFormat, MatchLegs } from "~/types/enums";
import type { Club } from "./Club";
import type { Competition } from "./Competition";
import type { CupRound } from "./CupRound";

export interface Cup extends Competition {
    // Tournament structure
    rounds: CupRound[];
    clubs: Club[];

    // Tournament format configuration
    format: CupFormat;
    legs: MatchLegs;

    // Visualization metadata
    bracketStyle?: CupBracketStyle;
}