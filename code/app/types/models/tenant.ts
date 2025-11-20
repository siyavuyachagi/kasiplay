export interface Tenant {
  id: string;                      // Unique tenant ID
  name: string;                    // Tenant display name
  slug?: string;                   // URL-friendly identifier
  description?: string;            // Optional description

  // Branding & customization
  logoUrl?: string;
  bannerUrl?: string;
  primaryColor?: string;           // Hex or Tailwind color
  secondaryColor?: string;
  theme?: 'light' | 'dark' | 'custom';

  // Contact & admin info
  email?: string;
  phoneNumber?: string;
  websiteUrl?: string;

  // Configuration & settings
  isActive: boolean;         // active or suspended
  allowRegistrations?: boolean; // allow user signups
  defaultRoles?: string[];   // default roles assigned to new users
  features?: Record<string, boolean>; // feature flags

  // Metadata
  createdAt: string;         // ISO string
  updatedAt: string;
  deletedAt?: string | null;

  // Multi-tenant relations
  ownerId?: string;          // the user who owns this tenant
  adminIds?: string[];       // tenant-level admins
}
