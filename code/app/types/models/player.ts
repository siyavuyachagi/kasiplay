import type { PlayerPosition } from "../constants/player-position";
import type { PlayerStatus } from "../constants/player-status";
import type { ApplicationUser } from "./application-user";
import type { Club } from "./club";
import type { PlayerClubRecord } from "./player-club-record";
import type { PlayerFitnessRecord } from "./player-fitness-record";
import type { PlayerPhysicalAttribute } from "./player-physical-attribute";

export interface Player extends ApplicationUser {
    jerseyNumber: number;
    primaryPosition: PlayerPosition;
    secondaryPositions?: PlayerPosition[];
    status: PlayerStatus;
    marketValue: number;
    // type: PlayerType;

    // physical attributes
    physicalAttributeId?: string;
    physicalAttribute?: PlayerPhysicalAttribute;

    // Career & performance
    currentClubId?: string;
    currentClub?: Club;
    careerHistory?: PlayerClubRecord[];
    fitnessRecords: PlayerFitnessRecord[];
}