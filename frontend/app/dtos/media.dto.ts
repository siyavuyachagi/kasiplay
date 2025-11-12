export interface Media {
    id: string;
    url: string;
    title: string;
    description?: string;
    mimeType: string;
    size: number;
    type: "image" | "video" | "document" | "audio";
    visibility?: "public" | "private" | "restricted";
    storageProvider?: "local" | "s3" | "azure" | "gcs";
    tags?: string[];
    createdAt: Date;
    updatedAt: Date;
    uploadedById?: string;
}
