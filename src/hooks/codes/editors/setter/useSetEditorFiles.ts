import { useCodeEditorContext } from "@/src/contexts/editors/CodeEditorProvider";

export const useSetEditorFiles = () => {
    const { setFiles } = useCodeEditorContext();
    return { setFiles }
}