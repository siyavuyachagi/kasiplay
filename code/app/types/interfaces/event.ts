import type { PhysicalAddress } from "./physical-address";

export interface Event {
  id: string;

  eventName: string;
  description: string;
  shortDescription?: string;

  location: PhysicalAddress;
  venue: string;
  latitude?: number;
  longitude?: number;

  startsAt: string | Date;
  endsAt: string | Date;

  bannerUrl?: string;
  thumbnailUrl?: string;
  gallery?: string[];

  category?: string;
  tags?: string[];

  organizerId: string;
  organizerName: string;
  organizerContactEmail?: string;
  organizerPhone?: string;

  capacity?: number;
  availableSlots?: number;
  isRegistrationRequired?: boolean;
  registrationUrl?: string;

  isFree: boolean;
  price?: number;
  currency?: string;

  isPublished: boolean;
  isCancelled?: boolean;

  createdAt: string | Date;
  updatedAt: string | Date;
}
