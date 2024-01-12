import { useBottomContainerContext } from "../contexts/BottomContainerProvider";

export const useBottomContainer = () => {
    const { isOpen, setIsOpen } = useBottomContainerContext();

    const openContainer = () => {
        setIsOpen(true);
    }

    const toggleContainer = () => {
        setIsOpen(!isOpen);
    }

    return { isOpen, toggleContainer, openContainer };
}