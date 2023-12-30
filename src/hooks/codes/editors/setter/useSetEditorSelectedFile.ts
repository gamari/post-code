import { useCodeEditorContext } from "@/src/contexts/editors/CodeEditorProvider";
import { useGetEditorSelectedFile } from "../getter/useGetEditorSelectedFile";

// TODO useSelectEditorFileで十分じゃない？
export const useSetEditorSelectedFile = () => {
    const { selectedFile } = useGetEditorSelectedFile();
    const { setSelectedFile } = useCodeEditorContext();

    const setDescription = (description: string) => {
        if (!selectedFile) return;
        setSelectedFile({
            ...selectedFile,
            description,
        });
    }

    return { setSelectedFile, setDescription };
}