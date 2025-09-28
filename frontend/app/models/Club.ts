import type { Achievement } from "./Achievement";
import type { Announcement } from "./Announcement";
import type { Cup } from "./Cup";
import type { GoverningBody_Club } from "./GoverningBody_Club";
import type { League } from "./League";
import type { MatchRecord } from "./MatchRecord";
import type { Organization } from "./Organization";
import type { PhysicalAddress } from "./PhysicalAddress";
import type { Player } from "./Player";
import type { PlayerTransferRecord } from "./PlayerTransferRecord";
import type { Tournament } from "./Tournament";

export interface Club extends Organization {
    id: string;

    // Location and facilities
    venue: string;
    address: PhysicalAddress;

    // Organizational structure / People
    players: Player[];

    // Governance and memberships
    memberships: GoverningBody_Club[];

    // Competition and performance
    leagues: League[];
    tournaments: Tournament[];
    cups: Cup[];
    matchRecords: MatchRecord[];

    // Training and development
    // trainingSessions: TrainingSession[];

    // Transfers and scouting
    transfers: PlayerTransferRecord[];
    // scoutingReports: ScoutingReport[];

    // Communication and media
    announcements: Announcement[];
    // mediaLibrary: MediaPost[];

    // Partnerships and sponsorships

    // Club culture and values
    motto?: string;
    values?: string[];
    achievements?: Achievement[];
}