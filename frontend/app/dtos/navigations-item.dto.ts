export interface NavigationItem {
    name: string;
    route?: string;
    description?: string;
    icon?: string;
    badge?: string;
    authRequired?: boolean;
    isAuthorized?: boolean;
}