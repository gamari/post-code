import { File } from "@/src/types";

import { useSetEditorFiles } from "./setter/useSetEditorFiles";
import { useGetEditorFiles } from "./getter/useGetEditorFiles";

export const useUpdateEditorFile = () => {
    const { files } = useGetEditorFiles();
    const { setFiles } = useSetEditorFiles();


    function updateFile(file: File) {
        const newFiles = files.map((f) => {
            if (f.id === file.id) {
                return file;
            }
            return f;
        });
        setFiles(newFiles);
    }

    return {
        updateFile
    }
}