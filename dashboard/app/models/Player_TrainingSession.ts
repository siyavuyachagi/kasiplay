import type { Player } from "./Player";
import type { TrainingSession } from "./TrainingSession";

export interface Player_TrainingSession {
    id: string;

    // Links
    playerId: string;
    player?: Player;

    trainingSessionId: string;
    trainingSession?: TrainingSession;

    // Attendance and performance
    attended: boolean;           // did the player show up
    notes?: string;              // optional feedback or performance notes
    performanceRating?: number;  // e.g., 0-10 or % progress

    // Metadata
    createdAt: Date;
    updatedAt: Date;
}
