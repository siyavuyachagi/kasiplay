import type { Team } from "./team";

export interface Match {
    id: string;

    homeTeamId: string;
    homeTeam?: Team;
    
    awayTeamId: string;
    awayTeam?: Team;
}