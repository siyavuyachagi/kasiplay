import type { PlayerPosition } from "~/types/enums";
import type { Player } from "./ApplicationUsers";
import type { Match } from "./Match";

export interface PlayerMatchPerformance {
    playerId: string;
    player: Player
    matchId: string;
    match: Match;
    position: PlayerPosition;
    minutesPlayed: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    shots: number;
    shotsOnTarget: number;
    passes: number;
    passAccuracy: number;
    tackles: number;
    interceptions: number;
    rating?: number; // 1-10 scale
    manOfTheMatch?: boolean;
    //system metadata
    createdAt: Date,
    updatedAt: Date,
}