import type { StaffRole } from "~/types/enums";
import type { ApplicationUser } from "./ApplicationUsers";
import type { Contract } from "./Contract";
import type { Organization } from "./Organization";

export interface Staff extends ApplicationUser {
    role: StaffRole;

    // Organization relationship
    organizationId?: string;
    organization?: Organization;

    departmentId?: string;
    department?: string;

    // Employment
    contractId?: string;
    contract?: Contract;
    startDate?: Date;
    endDate?: Date;

    assignedById: string;
    assignedBy?: ApplicationUser;
    assignedAt: Date;
}