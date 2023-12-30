import { File } from "@/src/types";

import { useCodeEditorContext } from "@/src/contexts/editors/CodeEditorProvider";

/** 選択中のファイルを更新する。 */
export const useUpdateEditorSelectedFile = () => {
    const { setSelectedFile } = useCodeEditorContext();

    function updateSelectedFile(file: File) {
        setSelectedFile(file);
    }

    return {
        updateSelectedFile
    }
}