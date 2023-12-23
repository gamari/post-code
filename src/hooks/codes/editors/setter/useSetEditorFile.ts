import { File } from "@/src/types";
import { useSetEditorFiles } from "./useSetEditorFiles";
import { useGetEditorFiles } from "../getter/useGetEditorFiles";

export const useSetEditorFile = () => {
    const { files } = useGetEditorFiles();
    const { setFiles } = useSetEditorFiles();

    function setFile(file?: File) {
        if (!file) return;
        const newFiles = files.map((f) => {
            if (f.id === file.id) {
                return file;
            }
            return f;
        });
        setFiles(newFiles);
    }

    return {
        setFile
    }
}