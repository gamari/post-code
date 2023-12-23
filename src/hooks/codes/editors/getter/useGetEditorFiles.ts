import { useCodeEditor } from "@/src/contexts/CodeEditorProvider"

export const useGetEditorFiles = () => {
    const { files } = useCodeEditor();
    return { files };
}