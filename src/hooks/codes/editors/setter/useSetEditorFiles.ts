import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";

export const useSetEditorFiles = () => {
    const { setFiles } = useCodeEditor();
    return { setFiles }
}