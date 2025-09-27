import type { ApplicationUser } from "./ApplicationUsers";

export interface Official extends ApplicationUser {
    startDate?: Date;
    endDate?: Date;
}