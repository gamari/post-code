export const getEditorMode = (filename: string) => {
    if (filename.endsWith('.py')) {
        return 'python';
    } else if (filename.endsWith('.js')) {
        return 'javascript';
    }

    return 'text';
};