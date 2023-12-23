import { File } from "@/src/types";

import { useSetEditorFiles } from "./setter/useSetEditorFiles";
import { useGetEditorFiles } from "./getter/useGetEditorFiles";
import { useUpdateEditorSelectedFile } from "./useUpdateEditorSelectedFile";

/** Filesのファイルを更新 */
export const useUpdateEditorFile = () => {
    const { files } = useGetEditorFiles();
    const { setFiles } = useSetEditorFiles();
    const { updateSelectedFile } = useUpdateEditorSelectedFile();


    function updateFile(file: File) {
        const newFiles = files.map((f) => {
            if (f.id === file.id) {
                return file;
            }
            return f;
        });
        setFiles(newFiles);
        updateSelectedFile(file);
    }

    return {
        updateFile
    }
}