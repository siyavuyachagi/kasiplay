import type { Club } from "./club";
import type { Competition } from "./competition";
import type { Fixture } from "./fixture";
import type { MatchEvent } from "./match-event";

export interface MatchRecord {
    id: string;
    fixtureId: string;
    fixture?: Fixture;

    // Performances (per club)
    homePerformance: ClubMatchPerformance;
    awayPerformance: ClubMatchPerformance;

    // Result (derived properties)
    competitionId: string;
    competition?: Competition;
    // matchResult: MatchResult;
    homeScore: number;
    awayScore: number;
    winnerClubId?: string;  // undefined if draw
    winnerClub?: Club;

    // Timeline of key events
    events: MatchEvent[];

    // System metadata
    createdAt: Date;
    updatedAt: Date;
}