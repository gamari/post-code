export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

export const getIconSizeClassName = (size: IconSize) => {
    switch (size) {
        case "xs":
            return "w-4 h-4";
        case "sm":
            return "w-6 h-6";
        case "md":
            return "w-8 h-8";
        case "lg":
            return "w-10 h-10";
        case "xl":
            return "w-12 h-12";
        default:
            return "w-8 h-8";
    }
}