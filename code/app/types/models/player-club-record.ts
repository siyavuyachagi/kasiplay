import type { Club } from "./club";
import type { Player } from "./player";

export interface PlayerClubRecord {
    id: string;
    playerId: string;
    player?: Player;

    clubId: string;
    club?: Club;

    startDate?: Date;
    endDate?: Date;          // undefined if ongoing

    appearances?: number;
    goals?: number;
    assists?: number;
    isLoan?: boolean;

    // contractId?: string;     // optional link to a Contract
    // contract?: Contract;
}