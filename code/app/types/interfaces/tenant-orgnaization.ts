import type { Organization } from "./organization";
import type { Tenant } from "./tenant";

export interface TenantOrganization {
    id: string;
    tenantId: string;
    tenant?: Tenant;
    organizationId: string;
    organization?: Organization;

    // metadata
    createdAt?: Date;
    updatedAt?: Date; 
}