import type { MatchResult, MatchStatus, MatchType } from "~/types/enums";
import type { ClubMatchPerformance } from "./ClubMatchPerformance";
import type { Official } from "./ApplicationUsers";
import type { MatchEvent } from "./MatchEvent";

export interface Match {
    id: string;
    matchType: MatchType;
    status: MatchStatus;
    result?: MatchResult; // Optional until match COMPLETE

    teams: ClubMatchPerformance[]; // All participating teams

    // Match officials
    matchOfficials?: Official[];

    // Match logistics
    scheduledDate: Date;
    actualKickoffTime?: Date;
    venue: string;

    // Match events
    events?: MatchEvent[];

    // System metadata
    createdAt: Date;
    updatedAt: Date;
}
