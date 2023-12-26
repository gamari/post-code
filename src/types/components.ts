export interface BaseProps {
    className?: string;
}

export interface IconProps {
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
    onClick?: () => void;
}