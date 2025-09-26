import type { OfficialRole, PlayerPosition, PlayerStatus, StaffRole } from '~/types/enums';
import type { Contact } from './Contact';
import type { PhysicalAddress } from './PhysicalAddress';
import type { Contract } from './Contract';

//#region A
export interface ApplicationUser {
    id: string;
    username: string;
    emailAddress: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    nationality: string;
    physicalAddress: PhysicalAddress;
    contact: Contact;
    profileImage?: string;
    //metadata
    createdAt: Date;
    updatedAt: Date;
}
//#endregion





//#region O
export interface Official extends ApplicationUser {
    role: OfficialRole;
    startDate?: Date;
    endDate?: Date;
}
//#endregion





//#region P
export interface Player extends ApplicationUser {
    jerseyNumber: number;
    primaryPosition: PlayerPosition;
    secondaryPositions?: PlayerPosition[];
    status: PlayerStatus;
    contract: Contract;
    marketValue: number;

    // Physical attributes
    height: number; // cm
    weight: number; // kg
    preferredFoot: 'left' | 'right' | 'both';

    // Career information
    previousClubs?: {
        clubName: string;
        startDate: Date;
        endDate: Date;
        appearances: number;
        goals: number;
    }[];

    // Performance data
    matchPerformances: PlayerMatchPerformance[];

    // Medical and fitness
    injuries: Injury[];
    medicalRecords: MedicalRecord[];
    fitnessData: FitnessData[];

    // Development (for youth players)
    youthPlayer?: boolean;
    parentClub?: string;
}
//#endregion





//#region S
export interface Staff extends ApplicationUser {
    role: StaffRole;
    startDate?: Date;
    endDate?: Date;
}

//#endregion