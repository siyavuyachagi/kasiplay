import type { OfficialRole, StaffRole } from '~/types/enums';
import type { Contact } from './Contact';
import type { PhysicalAddress } from './PhysicalAddress';

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
    profileImage?: string; //Personal account profile image
    //metadata
    createdAt: Date;
    updatedAt: Date;
}
//#endregion



//#region S
export interface Staff extends ApplicationUser {
    role: StaffRole;
    startDate?: Date;
    endDate?: Date;
}

//#endregion