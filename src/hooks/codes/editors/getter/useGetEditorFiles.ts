import { useCodeEditorContext } from "@/src/contexts/editors/CodeEditorProvider"

export const useGetEditorFiles = () => {
    const { files } = useCodeEditorContext();
    return { files };
}