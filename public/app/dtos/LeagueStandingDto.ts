import type { Club } from "~/models/Club";
import type { League } from "~/models/League";

export interface LeagueStandingDto {
    leagueId: string;
    league?: League;

    clubId: string;
    club?: Club;

    played: number;
    wins: number;
    draws: number;
    losses: number;

    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
    points: number;
    position: number;  // computed rank in the league
}