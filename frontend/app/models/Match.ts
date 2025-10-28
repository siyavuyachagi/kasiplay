import type { MatchResult, MatchStatus, MatchType } from "~/types/enums";
import type { ClubMatchPerformance } from "./ClubMatchPerformance";
import type { MatchEvent } from "./MatchEvent";
import type { Official } from "./Official";

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
