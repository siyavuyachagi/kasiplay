import type { Club } from "./club";
import type { Match } from "./match";
import type { Player } from "./player";

export interface TeamMatchPerfomance {

    teamId: string;
    team?: Club;

    matchId: string;
    match?: Match;

    // Team lineup
    squad: Player[];        // starting XI
    substitutes: Player[];
    formation: string;

    // Score
    score: number;

    // Team performance stats
    possession?: number;      // 0-100
    shots?: number;
    shotsOnTarget?: number;
    corners?: number;
    fouls?: number;
    yellowCards?: number;
    redCards?: number;
    tackles?: number;
    interceptions?: number;
    passes?: number;
    passAccuracy?: number;    // 0-100
    offsides?: number;

    // System metadata
    createdAt: string | Date;
    updatedAt: string | Date;
}