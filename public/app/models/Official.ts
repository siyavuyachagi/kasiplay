import type { OfficialRole } from "~/types/enums";
import type { ApplicationUser } from "./ApplicationUsers";

export interface Official extends ApplicationUser {
    role: OfficialRole;
    
    startDate?: Date;
    endDate?: Date;
}