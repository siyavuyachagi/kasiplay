import type { Gender } from "../constants/gender";
import type { UserRole } from "../constants/user-role";
import type { PhysicalAddress } from "./physical-address";
import type { SocialLink } from "./social-link";

export interface ApplicationUser {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  gender?: Gender;

  isActive?: boolean;
  roles?: UserRole[];
  permissions?: string[];

  // Presence
  isOnline?: boolean;
  presenceUpdatedAt?: string;

  // Contact
  phoneNumber?: string;
  emailConfirmed?: boolean;
  phoneConfirmed?: boolean;

  // Profile
  bio?: string;
  physicalAddress?: PhysicalAddress;
  socialLinks?: SocialLink[]

  // App-specific
  preferences?: Record<string, any>;

  // Metadata
  createdAt?: string;
  updatedAt?: string;
  lastLoginAt?: string;
  deletedAt?: string | null;
}
