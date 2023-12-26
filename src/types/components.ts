export interface BaseProps {
    className?: string;
}

export interface IconProps {
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
    onClick?: () => void;
}

export interface TextProps extends BaseProps {
    text?: string;
    size?: "sm" | "md" | "lg" | "xl";
}

export interface ButtonProps extends BaseProps {
    type?: "button" | "submit" | "reset";
    text?: string;
    size?: "sm" | "md" | "lg" | "xl";
    onClick?: () => void;
}