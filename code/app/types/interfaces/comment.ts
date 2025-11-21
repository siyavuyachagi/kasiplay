import type { ApplicationUser } from "./application-user";
import type { Club } from "./club";
import type { Federation } from "./federation";
import type { Post } from "./post";

export interface Comment {
    id: string;

    // FK's
    postId: string;
    post?: Post;

    author: Federation | Club | ApplicationUser;
    content: string;

    // metadata
    createdAt: string | Date;
    updatedAt: string | Date;
}