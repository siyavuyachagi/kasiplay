import type { Club } from "./Club";
import type { Match } from "./Match";
import type { Player } from "./Player";

export interface ClubMatchPerformance {
  clubId: string;
  club?: Club;
  matchId: string;
  match: Match;

  // Team lineup
  lineup: Player[];        // starting XI
  substitutes: Player[];
  formation: string;

  // Score
  score?: number;

  // Team performance stats
  possession?: number;      // 0-100
  shots?: number;
  shotsOnTarget?: number;
  corners?: number;
  fouls?: number;
  yellowCards?: number;
  redCards?: number;
  tackles?: number;
  interceptions?: number;
  passes?: number;
  passAccuracy?: number;    // 0-100
  offsides?: number;

  // System metadata
  createdAt: Date;
  updatedAt: Date;
}
