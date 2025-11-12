import type { Media } from "./media.dto";

export interface Document extends Media {
  type: "document";
  pageCount?: number;
}