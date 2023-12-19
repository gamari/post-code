export type FileType = "python" | "javascript" | "text";

export const getFileType = (filename: string) => {
    if (filename.endsWith('.py')) {
        return 'python';
    } else if (filename.endsWith('.js')) {
        return 'javascript';
    }

    return 'text';
};