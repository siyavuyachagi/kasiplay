import type { ContractStatus, ContractType } from "~/types/enums";

//#region C
export interface Contract {
    id: string;                     // Unique identifier
    title?: string;
    type: ContractType;              // Contract type (player, staff, official, loan, etc.)
    status: ContractStatus;          // Current contract state (active, expired, terminated)
    startDate: Date;                 // Contract start date
    endDate?: Date;                  // Optional end date (open-ended contracts)
    from: string;                    // Issuer of the contract (e.g., Club/League)
    to: string;                      // Recipient of the contract (e.g., Player, Official, Staff)
    viewLink: string;                // Secure link to view the contract online (no download)
    downloadLink?: string;           // Authorized download link (optional, permission-based)
    createdAt?: Date;                // Timestamp for record creation
    updatedAt?: Date;                // Timestamp for last update
}
//#endregion