import type { Media } from "./media.dto";

export interface Video extends Media {
  type: "video";
  duration?: number;
  thumbnailUrl?: string;
}
