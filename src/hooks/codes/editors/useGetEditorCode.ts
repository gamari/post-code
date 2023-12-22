import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";

export const useGetEditorCode = () => {
    const { code } = useCodeEditor();
    return { code };
}