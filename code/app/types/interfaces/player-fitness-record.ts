// PlayerFitnessRecord.ts
import type { Player } from "./player";

export interface PlayerFitnessRecord {
    id: string;

    playerId: string;
    player?: Player;

    // Body composition measurements
    weight?: number;                      // kg
    bodyFatPercentage?: number;           // %
    muscleMass?: number;                  // kg

    // Cardiovascular performance
    vo2Max?: number;                      // ml/kg/min
    enduranceTest?: number;               // minutes (run test)

    // Speed tests
    speedTest30m?: number;                // seconds (30m sprint)
    speedTest100m?: number;               // seconds (100m sprint)

    // Agility tests
    agilityShuttleRun?: number;           // seconds

    // Strength tests
    benchPressMax?: number;               // kg
    squatMax?: number;                    // kg
    deadliftMax?: number;                 // kg
    verticalJump?: number;                // cm

    notes?: string;

    timestamp: Date;                       // WHEN the test happened
}
