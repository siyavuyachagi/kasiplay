import type { ApplicationUser } from "./ApplicationUsers";

export interface Fan extends ApplicationUser {
        // Which teams they support
    supportedClubs: string[]; // Club IDs
    
    // Fan engagement
    // membershipType?: FanMembershipType;
    seasonTicketHolder?: boolean;
    
    // Social features
    favoritePlayer?: string; // Player ID
    fanClubMember?: boolean;
}