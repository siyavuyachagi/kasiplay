import type { Media } from "./media.dto";

export interface Image extends Media {
    type: "image";
    width?: number;
    height?: number;
}
