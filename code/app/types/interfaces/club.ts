import type { Organization } from "./organization";

export interface Club extends Organization {
    id: string;
    nickname?: string;
}