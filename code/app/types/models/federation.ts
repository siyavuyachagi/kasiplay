import type { Competition } from "./competition";
import type { FederationClub } from "./federation-club";
import type { Organization } from "./organization";

export interface Federation extends Organization {
    // Simple extensions for competition organizers
    jurisdiction?: string;                     // "England", "Europe", "Global", etc.

    // What they manage and govern
    competitions: Competition[];               // Competitions they organize/manage
    memberClubs: FederationClub[];         // Club memberships under this body
}