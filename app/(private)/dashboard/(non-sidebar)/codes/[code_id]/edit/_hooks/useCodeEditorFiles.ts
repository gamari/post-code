import { File } from "@/src/types";
import { useFilesContext } from "@/src/contexts/FilesProvider";

export const useCodeEditorFiles = () => {
    const { files, setFiles } = useFilesContext();

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

    const deleteFile = (target: File) => {
        setFiles(files.filter((file) => file.id !== target.id));
    }


    return {
        files,
        addFile,
        updateFile,
        deleteFile
    }
}