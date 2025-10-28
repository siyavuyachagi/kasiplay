import type { TrainingSessionType } from "~/types/enums";
import type { Coach } from "./Coach";
import type { Player_TrainingSession } from "./Player_TrainingSession";

export interface TrainingSession {
    id: string;
    date: Date;
    startTime: Date;
    endTime: Date;
    type: TrainingSessionType;
    location: string;
    description: string;
    objectives: string[];

    // Staff involved
    coachId: string;
    coach?: Coach;

    // Players attendance and performance (many-to-many)
    playerRecords: Player_TrainingSession[];

    notes?: string;
    createdAt: Date;
    updatedAt: Date;
}