import type { PlayerPosition, PlayerStatus, PreferredFoot } from "~/types/enums";
import type { ApplicationUser } from "./ApplicationUsers";
import type { Contract } from "./Contract";
import type { Club } from "./Club";
import type { PlayerClubRecord } from "./PlayerClubRecord";
import type { PlayerMatchPerformance } from "./PlayerMatchPerformance";
import type { Injury } from "./Injury";
import type { PlayerFitnessRecord } from "./PlayerFitnessRecord";




export interface Player extends ApplicationUser {
    jerseyNumber: number;
    primaryPosition: PlayerPosition;
    secondaryPositions?: PlayerPosition[];
    status: PlayerStatus;
    avatar: string;
    marketValue: number;

    contract: Contract[];

    // Static physical attributes
    height: number;          // cm
    preferredFoot: PreferredFoot;

    // Career info
    clubId?: string;
    club?: Club;
    careerHistory?: PlayerClubRecord[];

    // Performance
    matchPerformances: PlayerMatchPerformance[];

    // Medical and fitness
    injuries: Injury[];
    fitnessRecords: PlayerFitnessRecord[];
}
