import type { InjurySeverity, InjuryType } from "~/types/enums";

export interface Injury {
    id: string;
    playerId: string;
    type: InjuryType;
    severity: InjurySeverity;
    description: string;
    injuryDate: Date;
    expectedRecoveryDate?: Date;
    actualRecoveryDate?: Date;
    treatmentPlan: string;
    isActive: boolean;
    //system metadata
    createdAt: Date,
    updatedAt: Date,
}