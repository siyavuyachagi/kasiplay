// ================================
// SYSTEM SETUP
// ================================

import type { ApplicationUser } from "~/models/ApplicationUsers";
import type { Tenant } from "~/models/Tenant";
import type { Organization } from "~/models/Organization";
import type { Contact } from "~/models/Contact";
import type { Billing } from "~/models/Billing";
import type { Administrator } from "~/models/Administrator";
import type { Staff } from "~/models/Staff";
import { AdminRole, SocialPlatform, StaffRole } from "~/types/enums";
import { generateRandomUUID } from "~/utilities/generate-random-uuid";

const myUserId = "CHAGI-SYSTEM-USER-ID";
const systemTenantId = "SYSTEM-TENANT";
const systemOrgId = "SYSTEM-ORG";

// System Creator (You)
const systemCreator: ApplicationUser = {
    id: myUserId,
    tenantId: systemTenantId,
    username: "syavuya08@gmail.com",
    emailAddress: "syavuya08@gmail.com",
    phoneNumber: "+27639615361",
    firstName: "Siyavuya",
    lastName: "Chagi",
    dateOfBirth: new Date("2000-01-08"),
    // nationality: "South African",
    physicalAddress: {
        id: generateRandomUUID(),
        street: "Santa, East London, Community Hall",
        city: "East London",
        state: "Eastern Cape",
        country: "South Africa",
        postalCode: "5200",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    createdAt: new Date(),
    updatedAt: new Date()
};

// System Contact
const systemContactId = generateRandomUUID();
const systemContact: Contact = {
    id: systemContactId,
    email: "contact@kasiplay.com",
    supportEmail: "support@kasiplay.com",
    phone: "+27639615361",
    phoneAlt: "+27639615361",
};

// System Billing
const systemBilling: Billing = {
    id: generateRandomUUID(),
    tenantId: systemTenantId,
    billingAddressId: generateRandomUUID(),
    billingEmail: "billing@kasiplay.com",
    billingPhone: "+27639615361",
    taxId: "ZA-TAX-123456789",
    autoPay: false,
    createdAt: new Date(),
    updatedAt: new Date()
};

// Special SYSTEM tenant
const systemTenant: Tenant = {
    id: systemTenantId,
    name: "KasiPlay Platform",
    domain: "web.kasiplay.com",
    creatorId: myUserId,
    contactId: systemContact.id,
    contact: systemContact,
    billingId: systemBilling.id,
    billing: systemBilling,
    subscriptionPlan: "SYSTEM_UNLIMITED",
    isActive: true,
    startDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
};

// System Organization
const systemOrganization: Organization = {
    id: systemOrgId,
    tenantId: systemTenantId,
    tenant: systemTenant,
    name: "KasiPlay System",
    shortName: "KPS",
    nickname: "Platform Management",
    country: "South Africa",
    region: "Global",
    foundedYear: 2024,
    isActive: true,
    establishedDate: new Date("2024-01-01"),
    logoUrl: "/assets/kasiplay-logo.png",
    primaryColor: "#1E40AF", // Blue
    secondaryColor: "#F59E0B", // Gold
    accentColor: "#10B981", // Green
    websiteUrl: "https://kasiplay.com",
    socialLinks: [
        {
            id: generateRandomUUID(),
            linkedEntityId: systemOrgId,
            platform: SocialPlatform.WEBSITE,
            url: "https://kasiplay.com"
        },
        {
            id: generateRandomUUID(),
            linkedEntityId: systemOrgId,
            platform: SocialPlatform.TWITTER,
            url: "https://twitter.com/kasiplay"
        },
        {
            id: generateRandomUUID(),
            linkedEntityId: systemOrgId,
            platform: SocialPlatform.LINKEDIN,
            url: "https://linkedin.com/en/kasiplay"
        },
        {
            id: generateRandomUUID(),
            linkedEntityId: systemOrgId,
            platform: SocialPlatform.INSTAGRAM,
            url: "https://instagram.com/kasiplay"
        }
    ],
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date(),
    officials: []
};

// You as System Founder/Administrator
const systemFounder: Administrator = {
    ...systemCreator,
    organizationId: systemOrgId,
    organization: systemOrganization,
    role: AdminRole.SYSTEM,
    assignedById: myUserId, // Self-appointed
    assignedBy: systemCreator,
    assignedAt: new Date("2024-01-01")
};

// ================================
// SYSTEM TEAM EXAMPLES
// ================================

// Senior System Administrator
const seniorAdmin: Administrator = {
    id: generateRandomUUID(),
    tenantId: systemTenantId,
    tenant: systemTenant,
    role: AdminRole.SYSTEM_ADMIN,
    username: "senior.admin@kasiplay.com",
    emailAddress: "senior.admin@kasiplay.com",
    firstName: "Senior",
    lastName: "Admin",
    dateOfBirth: new Date("1990-05-15"),
    // nationality: "South African",
    physicalAddress: {
        id: generateRandomUUID(),
        street: "123 Admin Street",
        city: "Cape Town",
        state: "Western Cape",
        country: "South Africa",
        postalCode: "8000",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    // contact: {
    //     email: "admin@kasiplay.com",
    //     phone: "+27123456789"
    // },
    organizationId: systemOrgId,
    organization: systemOrganization,
    assignedById: myUserId,
    assignedBy: systemCreator,
    assignedAt: new Date("2024-02-01"),
    createdAt: new Date(),
    updatedAt: new Date()
};

// Platform Developer
const platformDeveloper: Staff = {
    id: generateRandomUUID(),
    tenantId: systemTenantId,
    tenant: systemTenant,
    role: StaffRole.PLATFORM_DEVELOPER,
    username: "dev.platform",
    emailAddress: "dev@kasiplay.com",
    firstName: "Platform",
    lastName: "Developer",
    dateOfBirth: new Date("1995-03-10"),
    // nationality: "South African",
    physicalAddress: {
        id: generateRandomUUID(),
        street: "456 Dev Street",
        city: "Johannesburg",
        state: "Gauteng",
        country: "South Africa",
        postalCode: "2000",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    // contact: {
    //     email: "dev@kasiplay.com",
    //     phone: "+27987654321"
    // },
    organizationId: systemOrgId,
    organization: systemOrganization,
    startDate: new Date("2024-03-01"),
    assignedById: myUserId,
    assignedBy: systemCreator,
    assignedAt: new Date("2024-03-01"),
    createdAt: new Date(),
    updatedAt: new Date()
};

// Customer Success Manager
const customerSuccess: Staff = {
    id: generateRandomUUID(),
    tenantId: systemTenantId,
    tenant: systemTenant,
    role: StaffRole.CUSTOMER_SUCCESS,
    username: "success.customer",
    emailAddress: "success@kasiplay.com",
    firstName: "Customer",
    lastName: "Success",
    dateOfBirth: new Date("1992-07-20"),
    // nationality: "South African",
    physicalAddress: {
        id: generateRandomUUID(),
        street: "789 Success Avenue",
        city: "Durban",
        state: "KwaZulu-Natal",
        country: "South Africa",
        postalCode: "4000",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    // contact: {
    //     email: "success@kasiplay.com",
    //     phone: "+27456789123"
    // },
    organizationId: systemOrgId,
    organization: systemOrganization,
    startDate: new Date("2024-04-01"),
    // salary: 45000,
    assignedById: seniorAdmin.id,
    assignedBy: seniorAdmin,
    assignedAt: new Date("2024-04-01"),
    createdAt: new Date(),
    updatedAt: new Date()
};

// Support Agent
const supportAgent: Staff = {
    id: generateRandomUUID(),
    tenantId: systemTenantId,
    role: StaffRole.SUPPORT_AGENT,
    tenant: systemTenant,
    username: "support.agent",
    emailAddress: "support@kasiplay.com",
    firstName: "Support",
    lastName: "Agent",
    dateOfBirth: new Date("1998-11-12"),
    // nationality: "South African",
    physicalAddress: {
        id: generateRandomUUID(),
        street: "321 Support Road",
        city: "Port Elizabeth",
        state: "Eastern Cape",
        country: "South Africa",
        postalCode: "6000",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    // contact: {
    //     email: "support@kasiplay.com",
    //     phone: "+27789123456"
    // },
    organizationId: systemOrgId,
    organization: systemOrganization,
    startDate: new Date("2024-05-01"),
    // salary: 35000,
    assignedById: customerSuccess.id,
    assignedBy: customerSuccess,
    assignedAt: new Date("2024-05-01"),
    createdAt: new Date(),
    updatedAt: new Date()
};

// ================================
// SYSTEM TEAM ARRAY
// ================================

export const systemTeam = {
    tenant: systemTenant,
    organization: systemOrganization,
    founder: systemFounder,
    administrators: [seniorAdmin],
    staff: [platformDeveloper, customerSuccess, supportAgent]
};

// ================================
// EXPORT FOR USE IN APPLICATION
// ================================

export {
    myUserId,
    systemTenantId,
    systemOrgId,
    systemCreator,
    systemTenant,
    systemOrganization,
    systemFounder
};