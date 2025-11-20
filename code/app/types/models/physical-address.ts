import type { ApplicationUser } from "./application-user";

export interface PhysicalAddress {
    id: string;
    street: string;
    city?: string;
    suburb?: string;
    zipCode?: string;
    country?: string;

    userIds?: string[];
    users?: ApplicationUser[];

    // metadata
    createdAt?: Date;
    updatedAt?: Date;
}