export interface PhysicalAddress {
    id: string;
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    // metadata
    createdAt: Date;
    updatedAt: Date;
}