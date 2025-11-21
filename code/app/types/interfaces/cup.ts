import type { CupBracketStyle } from "../constants/cup-bracket-style";
import type { CupFormat } from "../constants/cup-format";
import type { MatchLegs } from "../constants/match-legs";
import type { Competition } from "./competition";
import type { CupRound } from "./cup-round";
import type { Team } from "./team";

export interface Cup extends Competition {
    teamIds?: string[];
    teams: Team[];

    // Tournament structure & format configuration
    rounds: CupRound[];
    eliminationFormat: CupFormat;
    matchLegs: MatchLegs;

    // Visualization metadata
    bracketStyle?: CupBracketStyle;
}