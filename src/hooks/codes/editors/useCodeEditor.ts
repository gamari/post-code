import { useCodeEditorContext } from "@/src/contexts/editors/CodeEditorProvider"

export const useCodeEditor = () => {
    const { code } = useCodeEditorContext();

    return {
        code
    }
}