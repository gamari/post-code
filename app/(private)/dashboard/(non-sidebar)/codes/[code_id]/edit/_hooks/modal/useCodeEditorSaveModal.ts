import { useCodeEditorModalContext } from "../../_contexts/CodeEditorModalProvider";

export const useCodeEditorSaveModal = () => {
    const { isSaveOpen, setIsSaveOpen } = useCodeEditorModalContext();

    const toggleSaveModal = () => {
        setIsSaveOpen(!isSaveOpen);
    }

    return {
        isSaveOpen,
        toggleSaveModal
    }
}