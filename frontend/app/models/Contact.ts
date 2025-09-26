import type { EmergencyContact } from "./EmergencyContact";

export interface Contact {
    email?: string;
    phone?: string;
    phoneAlt?: string;
    emergencyContact?: EmergencyContact;
}