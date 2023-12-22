import { File } from "@/src/types";

import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";

export const useUpdateEditorSelectedFile = () => {
    const { setSelectedFile } = useCodeEditor();

    function updateSelectedFile(file: File) {
        setSelectedFile(file);
    }

    return {
        updateSelectedFile
    }
}