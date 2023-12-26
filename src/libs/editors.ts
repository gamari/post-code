export type Extension =
    "js" | "ts" | "jsx" | "tsx" |
    "py" |
    "java" |
    "go" |
    "c" | "cpp" |
    "php" | "rb" | "html" | "css" | "md" | "sql"
    ;

export type FileType =
    "javascript" | "typescript" | "tsx" | "jsx" |
    "python" |
    "java" | "c_cpp" | "c" | "php" | "ruby" |
    "go" |
    "html" | "css" |
    "text" | "markdown" | "sql"
    ;


export const getFileExtensionType: (filename: string) => FileType = (filename?: string) => {
    if (!filename) return 'text';
    const extension = filename.split('.').pop() as Extension;

    switch (extension) {
        case 'js':
            return 'javascript';
        case 'java':
            return 'java';
        case 'cpp':
        case 'c':
            return 'c_cpp';
        case 'php':
            return 'php';
        case 'rb':
            return 'ruby';
        case 'ts':
            return 'typescript';
        case 'html':
            return 'html';
        case 'css':
            return 'css';
        case 'md':
            return 'markdown';
        case 'jsx':
            return 'jsx';
        case 'tsx':
            return 'tsx';
        case 'sql':
            return 'sql';
        case 'py':
            return 'python';
        case "go":
            return "go";
        default:
            return 'text';
    }
};