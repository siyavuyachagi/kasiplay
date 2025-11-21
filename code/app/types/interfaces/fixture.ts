import type { Club } from "./club";
import type { Competition } from "./competition";
import type { CupRound } from "./cup-round";
import type { Team } from "./team";

export interface Fixture {
    id: string;
    
    competitionId: string;
    competition?: Competition;

    homeTeamId: string;
    homeTeam?: Team;

    awayTeamId: string;
    awayTeam?: Team;

    matchDate: string | Date;
    venue?: string;

    // Context info
    matchday?: number;   // useful in leagues (e.g. Matchday 1)
    cupRoundId?: string;      // useful in cups/tournaments (e.g. "Quarterfinal")
    cupRound?: CupRound

    // System metadata
    createdAt: Date;
    updatedAt: Date;
}