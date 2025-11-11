import type { PhysicalAddress } from "./physical-address.dto";

export interface Billing {
    id: string;

    // Linked entity
    tenantId?: string;            // if billing is for tenant
    organizationId?: string;      // if billing is for a specific organization
    userId?: string;              // if billing is for a specific user

    // Billing address
    billingAddressId: string;
    billingAddress?: PhysicalAddress;

    // Payment information
    taxId?: string;               // VAT/Tax number
    billingEmail: string;         // where invoices are sent
    billingPhone?: string;

    // Optional payment method references
    cardLast4?: string;           // last 4 digits if using card
    cardBrand?: string;           // Visa, MasterCard, etc.
    paymentProvider?: string;     // Stripe, PayPal, etc.
    autoPay?: boolean;            // auto-billing enabled

    // Metadata
    createdAt: Date;
    updatedAt: Date;
}
