import type { ApplicationUser } from "./application-user";
import type { Media } from "./media";

export interface Message {
    id: string;
    senderId: string;           // user ID
    sender?: ApplicationUser;   // actual user entity
    text: string;
    timestamp: string;          // timestamp or formatted time
    readerIds?: string[];       // array of user IDs who have read this message
    readers?: ApplicationUser[];
    media?: Media[];            // optional attachments
    // metadata
    createdAt?: Date;
    updatedAt?: Date;
}