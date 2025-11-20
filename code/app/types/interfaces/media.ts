import type { MediaType } from "../constants/media-type";

export interface Media {
  id: string;
  type: MediaType;
  url: string;
  filename?: string;
  thumbnailUrl?: string; // optional for videos or files
  size?: number;         // in bytes
}
