import type { Competition } from "./Competition";
import type { GoverningBody_Club } from "./GoverningBody_Club";
import type { Organization } from "./Organization";

export interface GoverningBody extends Organization {
    // Management/Staff/etc

    // Simple extensions for competition organizers
    jurisdiction?: string;          // "England", "Europe", "Global", etc.

    // What they manage and govern
    competitions: Competition[];     // Competitions they organize/manage
    memberClubs: GoverningBody_Club[];  // Club memberships under this body
}