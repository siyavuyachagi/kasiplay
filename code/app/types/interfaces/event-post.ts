import type { Event } from "./event";
import type { Post } from "./post";

export interface EventPost extends Post {
    event: Event;
}