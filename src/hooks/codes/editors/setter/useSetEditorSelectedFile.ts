import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";
import { useGetEditorSelectedFile } from "../getter/useGetEditorSelectedFile";

// TODO useSelectEditorFileで十分じゃない？
export const useSetEditorSelectedFile = () => {
    const { selectedFile } = useGetEditorSelectedFile();
    const { setSelectedFile } = useCodeEditor();

    const setDescription = (description: string) => {
        if (!selectedFile) return;
        setSelectedFile({
            ...selectedFile,
            description,
        });
    }

    return { setSelectedFile, setDescription };
}