import { File } from "@/src/types";

import { useGetEditorSelectedFile } from "./editors/useGetEditorSelectedFile";
import { useSetEditorSelectedFile } from "./editors/useSetEditorSelectedFile";
import { useUpdateEditorFile } from "./editors/useUpdateEditorFile";

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