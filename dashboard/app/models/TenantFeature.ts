export type FeatureKey =
    | "chat"
    | "analytics"
    | "billing"
    | "multiTenancy"
    | "sso"
    | "developerMode"

export interface TenantFeatureTyped {
    tenantId: string;
    featureKey: FeatureKey;
    enabled: boolean;
    rollout?: number;
    since?: string;
    note?: string;
}
