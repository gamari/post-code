import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";

export const useGetEditorSelectedFile = () => {
    const { selectedFile } = useCodeEditor();
    return { selectedFile };
}