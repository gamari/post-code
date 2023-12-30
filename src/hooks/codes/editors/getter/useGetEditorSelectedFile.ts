import { useCodeEditorContext } from "@/src/contexts/editors/CodeEditorProvider";

export const useGetEditorSelectedFile = () => {
    const { selectedFile } = useCodeEditorContext();
    return { selectedFile };
}