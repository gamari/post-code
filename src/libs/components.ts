export const getIconSizeClassName = (size: string) => {
    switch (size) {
        case "sm":
            return "w-4 h-4";
        case "md":
            return "w-6 h-6";
        case "lg":
            return "w-8 h-8";
        case "xl":
            return "w-12 h-12";
        default:
            return "w-6 h-6";
    }

}