import type { Club } from "./Club";
import type { GoverningBody } from "./GoverningBody";
import type { MatchRecord } from "./MatchRecord";

export interface Competition {
    id: string;
    governingBodyId: string;
    governingBody?: GoverningBody;
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