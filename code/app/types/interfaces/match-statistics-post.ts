import type { MatchRecord } from "./match-record";
import type { Post } from "./post";

export interface MatchStatisticsPost extends Post {
    statistics: MatchRecord;
}