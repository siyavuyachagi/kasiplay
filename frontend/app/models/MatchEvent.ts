import type { InjurySeverity, InjuryType, MatchEventType } from "~/types/enums";
import type { Player } from "./ApplicationUsers";

export interface MatchEvent {
    id: string;
    minute: number;
    type: MatchEventType;
    description?: string;  

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
