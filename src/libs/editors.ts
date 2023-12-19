export type FileType = "python" | "javascript" | "typescript" | "text" | "tsx" | "jsx";

export const getFileType = (filename: string) => {
    if (filename.endsWith('.py')) {
        return 'python';
    } else if (filename.endsWith('.js')) {
        return 'javascript';
    } else if (filename.endsWith('.tsx') || filename.endsWith('.jsx')) {
        return "tsx"
    }

    return 'text';
};