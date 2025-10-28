import type { Club } from "./Club";
import type { Player } from "./Player";
import type { Contract } from "./Contract";
import type { PlayerTransferType, TransferNegotiationStatus } from "~/types/enums";
import type { ScoutingReport } from "./ScoutingReport";

export interface PlayerTransferNegotiation {
    id: string;

    // Player being negotiated
    playerId: string;
    player?: Player;

    // Clubs involved
    fromClubId?: string;
    fromClub?: Club;

    toClubId: string;
    toClub?: Club;

    // Proposed transfer details
    transferType: PlayerTransferType;
    proposedFee?: number;
    proposedContractId?: string;  // optional new contract at destination
    proposedContract?: Contract;
    negotiationStartDate: Date;
    negotiationEndDate?: Date;

    // Negotiation status
    status: TransferNegotiationStatus; // e.g., pending, accepted, rejected, countered

    // Optional notes
    notes?: string;  // e.g., offer history, comments from clubs

    // Scout report
    scoutingReportId?: string;
    scoutingReport?: ScoutingReport;


    // Metadata
    createdAt: Date;
    updatedAt: Date;
}
