import { useCodeEditorSelectedFileContext } from "@/src/contexts/editors/CodeEditorSelectedFileProvider";

export const useCodeEditorSelectedFile = () => {
    const { selectedFile, setSelectedFile } = useCodeEditorSelectedFileContext();

    const setDescription = (description: string) => {
        if (!selectedFile) return;
        setSelectedFile({
            ...selectedFile,
            description
        });
    }

    return {
        selectedFile,
        setSelectedFile,
        setDescription
    }
}