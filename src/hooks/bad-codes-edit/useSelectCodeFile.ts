import { File } from "@/src/types";
import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";

export const useSelectCodeFile = () => {
    const { selectedFile, setSelectedFile, updateFile } = useCodeEditor();

    const selectFile = (file: File) => {
        if (selectedFile && !selectedFile?.name) {
            // infoAlert("ファイル名を入力してください");
            // return;
            throw new Error("ファイル名を入力してください");
        }

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