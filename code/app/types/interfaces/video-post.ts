import type { Media } from "./media";
import type { Post } from "./post";

export interface VideoPost extends Post {
    media?: Media[];
}