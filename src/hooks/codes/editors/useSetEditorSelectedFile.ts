import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";

export const useSetEditorSelectedFile = () => {
    const { setSelectedFile } = useCodeEditor();
    return { setSelectedFile };
}