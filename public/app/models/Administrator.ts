import type { AdminRole } from "~/types/enums";
import type { ApplicationUser } from "./ApplicationUsers";
import type { Organization } from "./Organization";

export interface Administrator extends ApplicationUser {
    role: AdminRole;
    
    organizationId: string;
    organization?: Organization;

    assignedById: string;
    assignedBy?: ApplicationUser;
    assignedAt: Date;
}