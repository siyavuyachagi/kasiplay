import type { PollPostOption } from "./poll-option";
import type { Post } from "./post";

export interface PollPost extends Post {
  question: string;
  description?: string;

  options: PollPostOption[];

  createdBy: string;       // userId

  startsAt?: string | Date;
  endsAt?: string | Date;

  isMultipleChoice: boolean;   // allow selecting more than 1 option
  allowAddOptions: boolean;    // allow users to add their own option
  allowComments: boolean;      // optional feature
  isAnonymous: boolean;        // if true, votes are not tied to user IDs

  visibility: "public" | "private" | "unlisted"; // shareable or restricted

  isLocked: boolean;       // no more votes allowed (manually or auto)
  isDeleted?: boolean;
}
