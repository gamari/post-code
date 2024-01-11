import { useCodeEditorModalContext } from "../../_contexts/CodeEditorModalProvider"

export const useCodeEditorNewFileModal = () => {
    const { isNewFileOpen, setIsNewFileOpen } = useCodeEditorModalContext();

    const toggleNewFileModal = () => {
        setIsNewFileOpen(!isNewFileOpen);
    }

    return {
        isNewFileOpen,
        toggleNewFileModal
    }
}