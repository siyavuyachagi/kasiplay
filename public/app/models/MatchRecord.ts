import type { Fixture } from "./Fixture";
import type { ClubMatchPerformance } from "./ClubMatchPerformance";
import type { MatchEvent } from "./MatchEvent";
import type { Club } from "./Club";
import type { MatchResult } from "~/types/enums";
import type { Competition } from "./Competition";

export interface MatchRecord {
    id: string;
    fixtureId: string;
    fixture?: Fixture;

    // Performances (per club)
    homePerformance: ClubMatchPerformance;
    awayPerformance: ClubMatchPerformance;

    // Result (derived properties)
    competitionId: string;
    competition: Competition;
    matchResult: MatchResult;
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
