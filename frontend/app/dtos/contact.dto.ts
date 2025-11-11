import type { EmergencyContact } from "./emergency-contact.dto";

export interface Contact {
    id: string;
    email?: string;
    supportEmail?: string;
    phone?: string;
    phoneAlt?: string;
    emergencyContact?: EmergencyContact;
}