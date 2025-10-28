import type { PhysicalAddress } from './PhysicalAddress';
import type { Tenant } from './Tenant';
import type { EmergencyContact } from './EmergencyContact';


/**\
 * SYSTEM CREATOR
 * System role - Has access to everything
 */
export interface ApplicationUser {
    id: string;

    tenantId: string;
    tenant?: Tenant;

    // subscriptionApplicationId?: string; // Audit trail

    // Basic info
    username: string;
    emailAddress: string;
    phoneNumber?: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    physicalAddress: PhysicalAddress;
    profileImage?: string; //Personal account profile image
    emergencyContact?: EmergencyContact;

    // System metadata
    createdAt: Date;
    updatedAt: Date;
}