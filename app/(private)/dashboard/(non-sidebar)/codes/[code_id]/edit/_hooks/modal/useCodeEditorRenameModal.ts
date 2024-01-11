import { useCodeEditorModalContext } from "../../_contexts/CodeEditorModalProvider";

export const useCodeEditorRenameModal = () => {
    const { isRenameOpen, setIsRenameOpen, targetFile, setTargetFile } = useCodeEditorModalContext();

    const toggleRenameModal = () => {
        setIsRenameOpen(!isRenameOpen);
    }

    return {
        isRenameOpen,
        toggleRenameModal,
        targetFile,
        setTargetFile
    }
}