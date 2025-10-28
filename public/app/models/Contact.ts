import type { EmergencyContact } from "./EmergencyContact";

export interface Contact {
    id: string;
    email?: string;
    supportEmail?: string;
    phone?: string;
    phoneAlt?: string;
    emergencyContact?: EmergencyContact;
}