import type { FinancialTransactionStatus, FinancialTransactionType } from "~/types/enums";
import type { Club } from "./Club";
import type { Player } from "./Player";
import type { Tenant } from "./Tenant";

export interface FinancialTransactionRecord {
    id: string;

    // Linked entities (polymorphic)
    tenantId?: string;
    tenant?: Tenant;

    clubId?: string;
    club?: Club;

    playerId?: string;
    player?: Player;

    // Transaction details
    type: FinancialTransactionType;
    amount: number;
    currency: string;        // e.g., "USD", "ZAR"
    description?: string;    // optional description of the transaction

    // Status
    status: FinancialTransactionStatus;
    transactionDate: Date;   // when the transaction occurred
    processedByUserId?: string;  // optional reference to who processed it

    // Metadata
    createdAt: Date;
    updatedAt: Date;
}