import { useBottomToggleContainerContext } from "../contexts/BottomToggleContainerProvider";

export const useBottomContainer = () => {
    const { isOpen, setIsOpen } = useBottomToggleContainerContext();

    const openContainer = () => {
        setIsOpen(true);
    }

    const toggleContainer = () => {
        setIsOpen(!isOpen);
    }

    return { isOpen, toggleContainer, openContainer };
}