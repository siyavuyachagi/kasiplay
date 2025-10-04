import type { InjurySeverity, InjuryType, MatchEventType } from "~/types/enums";
import type { Player } from "./Player";
import type { Club } from "./Club";

export interface MatchEvent {
    id: string;
    minute: number;
    type: MatchEventType;
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

    timestamp: Date;
}
