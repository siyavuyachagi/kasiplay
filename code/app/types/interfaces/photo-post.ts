import type { Media } from "./media";
import type { Post } from "./post";

export interface PhotoPost extends Post {
    media?: Media[];
}