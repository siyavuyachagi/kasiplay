import type { MatchEventType } from "../constants/match-event-type";
import type { Club } from "./club";
import type { Player } from "./player";

export interface MatchEvent {
    id: string;

    type: MatchEventType;
    minutes: number;
    description?: string;

    // Team context
    teamId?: string;         // the team this event belongs to (for/against)
    team?: Club;

    // Players involved
    playerId?: string;
    player?: Player;
    assistingPlayerId?: string;
    assistingPlayer?: Player;
    foulerId?: string;
    fouler?: Player;
    fouledId?: string;
    fouled?: Player;
    substituteInId?: string;
    substituteIn?: Player;
    substituteOutId?: string;
    substituteOut?: Player;

    // Injuries
    injuryId?: string;
    injuryType?: InjuryType;
    injurySeverity?: InjurySeverity;

    // metadata
    timestamp: Date;
}