import type { Club } from "./club";
import type { Federation } from "./federation";
import type { MatchRecord } from "./match-record";

export interface Competition {
    id: string;
    federationId: string;
    federation?: Federation;
    name: string;
    season: string;
    start: Date;
    end?: Date;
    matchRecords: MatchRecord[];
    winnerClubId?: string;
    winnerClub?: Club;
    
    // System metadata 
    createdAt: Date;
    updatedAt: Date;
}