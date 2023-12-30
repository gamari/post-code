import { File } from "@/src/types";
import { useCodeEditorFilesContext } from "@/src/contexts/editors/CodeEditorFilesProvider"

export const useCodeEditorFiles = () => {
    const { files, setFiles } = useCodeEditorFilesContext();

    const addFile = (file: File) => {
        setFiles((prev) => {
            return [...prev, file];
        });
    }

    const updateFile = (file: File) => {
        setFiles((prev) => {
            const index = prev.findIndex((f) => f.id === file.id);
            if (index === -1)
                return prev;
            prev[index] = file;
            return [...prev];
        });
    }

    return {
        files,
        addFile,
        updateFile
    }
}