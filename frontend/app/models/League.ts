import type { Club } from "./Club";
import type { Competition } from "./Competition";
import type { Fixture } from "./Fixture";

export interface League extends Competition {
    clubs: Club[];
    fixtures: Fixture[];
}