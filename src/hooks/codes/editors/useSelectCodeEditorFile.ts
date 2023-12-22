import { File } from "@/src/types";

import { useGetEditorSelectedFile } from "./useGetEditorSelectedFile";
import { useSetEditorSelectedFile } from "./useSetEditorSelectedFile";
import { useUpdateEditorFile } from "./useUpdateEditorFile";

export const useSelectCodeFile = () => {
    const { selectedFile } = useGetEditorSelectedFile();
    const { setSelectedFile } = useSetEditorSelectedFile();
    const { updateFile } = useUpdateEditorFile();

    const selectFile = (file: File) => {
        if (selectedFile && !selectedFile?.name) throw new Error("ファイル名を入力してください");

        if (selectedFile?.id === file.id) return;
        if (selectedFile?.id !== file.id && selectedFile?.content) {
            updateFile(selectedFile);
        }
        setSelectedFile(file);
    };

    return {
        selectFile
    };
}