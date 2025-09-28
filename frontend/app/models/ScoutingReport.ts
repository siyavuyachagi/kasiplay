import type { Player } from "./Player";
import type { Club } from "./Club";
import type { Scout } from "./Scout";

export interface ScoutingReport {
    id: string;

    scoutId: string;
    scout?: Scout;

    playerId: string;
    player?: Player;

    clubId?: string; // optional, if scouting report relates to a player's current club
    club?: Club;

    competition?: string; // optional context (league, tournament)

    reportDate: Date;
    notes: string;           // qualitative feedback
    potentialRating?: number; // 0-100 rating
    positionSuitability?: string; // e.g., “Striker”, “Midfielder”

    status?: "open" | "reviewed" | "rejected" | "approved";

    createdAt: Date;
    updatedAt: Date;
}
