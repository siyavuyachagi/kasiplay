export const MEDIA_TYPE = {
  IMAGE: 'image',
  VIDEO: 'video',
  AUDIO: 'audio',
  FILE: 'file',
  GIF: 'gif',
  OTHER: 'other'
} as const;

export type MediaType = typeof MEDIA_TYPE[keyof typeof MEDIA_TYPE];
