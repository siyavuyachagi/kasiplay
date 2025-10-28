export interface PlayerFitnessRecord {
    id: string;
    playerId: string;
    date: Date;

    // Body composition
    weight?: number;              // kg
    bodyFatPercentage?: number;   // %
    muscleMass?: number;          // kg (optional if tracked)

    // Cardiovascular fitness
    vo2Max?: number;              // ml/kg/min
    enduranceTest?: number;       // minutes for endurance run

    // Speed & agility
    speedTest?: number;           // seconds for sprint (e.g. 30m or 100m)
    agilityTest?: number;         // e.g. seconds for shuttle run

    // Strength
    benchPressMax?: number;       // kg
    squatMax?: number;            // kg
    deadliftMax?: number;         // kg
    verticalJump?: number;        // cm

    // Notes/extra
    notes?: string;
}
