// PlayerPhysicalAttribute.ts
import type { PlayerBodyType } from "../constants/player-body-type";
import type { PlayerPreferedFoot } from "../constants/player-prefered-foot";
import type { Player } from "./player";

export interface PlayerPhysicalAttribute {
  id: string;

  playerId: string;
  player: Player;

  // Static physical profile
  height?: number;                 // cm
  preferredFoot: PlayerPreferedFoot;
  bodyType?: PlayerBodyType;

  // Innate athletic attributes (not test results)
  pace?: number;                   // rating (0–100)
  acceleration?: number;           // rating
  agility?: number;                // rating
  stamina?: number;                // rating
  balance?: number;                // rating
  jumpingReach?: number;           // rating

  // Medical condition profile
  injuryProneLevel?: number;       // rating (0–100)
  currentInjury?: string | null;
  medicalClearanceStatus?: 'cleared' | 'not_cleared' | 'rehab';

  // Biometric tendencies (not test results)
  restingHeartRate?: number;       // typical RHR
  maxHeartRate?: number;           // estimated (220-age)

  createdAt: Date;
  updatedAt: Date;
}
