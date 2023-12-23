import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";

// TODO useSelectEditorFileで十分じゃない？
export const useSetEditorSelectedFile = () => {
    const { setSelectedFile } = useCodeEditor();
    return { setSelectedFile };
}