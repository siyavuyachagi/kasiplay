import type { PlayerPosition, PlayerStatus, PlayerType, PreferredFoot } from "~/types/enums";
import type { ApplicationUser } from "./ApplicationUsers";
import type { Contract } from "./Contract";
import type { Club } from "./Club";
import type { PlayerClubRecord } from "./PlayerClubRecord";
import type { PlayerMatchPerformance } from "./PlayerMatchPerformance";
import type { Injury } from "./Injury";
import type { PlayerFitnessRecord } from "./PlayerFitnessRecord";
import type { Player_TrainingSession } from "./Player_TrainingSession";
import type { EmergencyContact } from "./EmergencyContact";


export interface Player extends ApplicationUser {
    jerseyNumber: number;
    primaryPosition: PlayerPosition;
    secondaryPositions?: PlayerPosition[];
    status: PlayerStatus;
    avatar: string;
    marketValue: number;
    type: PlayerType;
    guardianContact?: EmergencyContact;

    // Employment and Contracts
    contract: Contract[];

    // Static physical attributes
    height: number;          // cm
    preferredFoot: PreferredFoot;

    // Career & performance
    clubId?: string;
    club?: Club;
    contracts: Contract[];
    careerHistory?: PlayerClubRecord[];
    matchPerformances: PlayerMatchPerformance[];
    injuries: Injury[];
    fitnessRecords: PlayerFitnessRecord[];

    // Training sessions attended
    trainingRecords?: Player_TrainingSession[];  // many-to-many with TrainingSession
}
