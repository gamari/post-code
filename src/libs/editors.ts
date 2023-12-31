// 拡張子側
export type Extension =
    "js" | "ts" |
    "py" |
    "java" | "kt" | "scala" |
    "go" |
    "rs" |
    "hs" |
    "c" | "cpp" |
    "php" | "rb" | "html" | "css" | "md" | "sql" |
    "jsx" | "tsx" |
    "go" | "pl" |
    ""
    ;

// ファイルの種類
export type FileType =
    "javascript" | "typescript" |
    "python" |
    "java" | "kotlin" | "scala" |
    "rust" |
    "haskell" |

    "c_cpp" | "c" | "php" | "ruby" |
    "ruby" |
    "golang" |
    "tsx" | "jsx" |
    "html" | "css" |
    "text" | "markdown" | "sql" | "perl"
    ;


export const convertFilenameToExtension: (filename: string) => Extension = (filename?: string) => {
    if (!filename) return '';
    return filename.split('.').pop() as Extension;
}

//　拡張子からファイルの種類を判定する
export const convertFilenameToFiletype: (filename: string) => FileType = (filename?: string) => {
    if (!filename) return 'text';
    const extension = convertFilenameToExtension(filename);

    switch (extension) {
        case 'js':
            return 'javascript';
        case 'ts':
            return 'typescript';
        case 'java':
            return 'java';
        case 'kt':
            return 'kotlin';
        case 'py':
            return 'python';
        case 'cpp':
        case 'c':
            return 'c_cpp';
        case 'rb':
            return 'ruby';
        case "go":
            return "golang";
        case 'php':
            return 'php';
        case "pl":
            return "perl";
        case 'rs':
            return 'rust';
        case 'hs':
            return 'haskell';
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


        default:
            return 'text';
    }
};