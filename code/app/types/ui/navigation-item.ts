export interface NavigationItem {
    key?: string | number;
    label: string;
    url?: string;
    isActive?: boolean;
    icon?: string;
    counter?: number;
    color?: string;
    action?(): void;
}