import type { Club } from "./Club";
import type { Player } from "./Player";
import type { Contract } from "./Contract";
import type { PlayerTransferType } from "~/types/enums";

export interface PlayerTransferRecord {
    id: string;

    // Player and clubs involved
    playerId: string;
    player?: Player;

    fromClubId?: string;   // optional for first-ever registration
    fromClub?: Club;

    toClubId: string;
    toClub?: Club;

    // Transfer details
    transferType: PlayerTransferType;
    transferFee?: number;       // if applicable
    contractId?: string;        // new contract at destination
    contract?: Contract;
    startDate: Date;
    endDate?: Date;             // for loans

    // Metadata
    createdAt: Date;
    updatedAt: Date;
}
