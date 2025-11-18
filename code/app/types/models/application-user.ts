export interface ApplicationUser {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    isActive: boolean;
    roles: string[];
    // Metadata fields
    createdAt: string;
    updatedAt: string;
}