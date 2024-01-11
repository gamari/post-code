import { useCodeDetailCommentModalContext } from "../_contexts/CodeDetailCommentModalProvider";

export const useCodeDetailCommentModal = () => {
    const { isOpen, setIsOpen } = useCodeDetailCommentModalContext();

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return {
        isOpen,
        toggleModal
    }
}