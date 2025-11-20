import type { Club } from "./club";
import type { Competition } from "./competition";

export interface Fixture {
    id: string;
    
    competitionId: string;
    competition?: Competition;

    homeClubId: string;
    homeClub?: Club;

    awayClubId: string;
    awayClub?: Club;

    date: Date;
    venue?: string;

    // Context info
    matchday?: number;   // useful in leagues (e.g. Matchday 1)
    cupRoundId?: string;      // useful in cups/tournaments (e.g. "Quarterfinal")

    // System metadata
    createdAt: Date;
    updatedAt: Date;
}