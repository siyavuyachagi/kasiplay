import type { ReportType } from "~/types/enums";

export interface Report {
    id: string;

    tenantId?: string;
    clubId?: string;
    playerId?: string;

    title: string;
    description?: string;

    // Optional type — can be left undefined for custom/ad-hoc reports
    type?: ReportType;

    periodStart?: Date;
    periodEnd?: Date;

    data?: Record<string, any>; // JSON structure for dynamic report content
    fileUrl?: string;           // if exported

    generatedByUserId?: string;
    generatedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}