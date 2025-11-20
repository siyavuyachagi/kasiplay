import type { TeamGender } from "../constants/team-gender";
import type { TeamLevel } from "../constants/team-level";
import type { Club } from "./club";

export interface Team {
    id: string;

    clubId: string;
    club?: Club;
    
    level: TeamLevel;     // "main" | "development" | "youth"
    gender: TeamGender;   // "male" | "female" | "mixed"
}