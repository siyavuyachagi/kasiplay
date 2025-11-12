import type { Media } from "./media.dto";

export interface Audio extends Media {
  type: "audio";
  duration?: number;
}
