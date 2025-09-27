import type { League } from "./League";
import type { Cup } from "./Cup";
import type { Competition } from "./Competition";

export interface Tournament extends Competition {
    // Group stages: optional, only if you want preliminary round-robin(s)
    groups?: League[];   // Each group is essentially a League with standings
    // Knockout stages: optional, can exist standalone
    knockouts?: Cup[];   // Each knockout stage is a Cup (with rounds)
}
