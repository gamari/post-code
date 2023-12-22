import { File } from "@/src/types";

import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";

/** 選択中のファイルを更新する。 */
export const useUpdateEditorSelectedFile = () => {
    const { setSelectedFile } = useCodeEditor();

    function updateSelectedFile(file: File) {
        setSelectedFile(file);
    }

    return {
        updateSelectedFile
    }
}