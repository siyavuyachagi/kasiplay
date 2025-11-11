import type { EmergencyContact } from "./emergency-contact.dto";
import type { PhysicalAddress } from "./physical-address.dto";
import type { Tenant } from "./tenant.dto";

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