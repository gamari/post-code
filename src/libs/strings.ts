export const length = (str?: string | null) => {
    if (!str) return 0;
    return str.length;
}

export const limitString = (str: string, limit: number) => {
    if (length(str) <= limit) return str;
    return str.slice(0, limit) + '...';
}