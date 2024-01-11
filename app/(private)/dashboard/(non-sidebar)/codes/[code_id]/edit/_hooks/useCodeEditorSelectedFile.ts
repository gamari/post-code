import { useCodeEditorSelectedFileContext } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_contexts/CodeEditorSelectedFileProvider";

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