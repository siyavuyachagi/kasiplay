import type { ApplicationUser } from "./ApplicationUsers";
import type { Organization } from "./Organization";

export interface Achievement {
    id: string;

    // Linked entity (optional navigation)
    userId?: string;
    user?: ApplicationUser
    organizationId?: string;
    organization?: Organization

    // Achievement details
    title: string;             // e.g., "Top Scorer 2025"
    description?: string;      // optional details about the achievement
    date: Date;                // when it was achieved
    category?: string;         // e.g., "Individual", "Team", "Award"

    // Optional reference to competition or event
    competitionId?: string;    // e.g., league, cup, or tournament
    event?: string;            // e.g., "Premier League Final"

    // System metadata
    createdAt: Date;
    updatedAt: Date;
}
