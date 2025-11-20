export interface NavigationItem {
    label: string;
    url?: string;
    isActive?: boolean;
    icon?: string;
    counter?: number;
    color?: string;
    action?(): void;
}