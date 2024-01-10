"use client";

import { createContext, useContext, useState } from "react";

interface ContextProps {
  isOpen: boolean;
  toggleOpen: () => void;
  open: () => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const BottomToggleContainerContext = createContext<ContextProps>({
  isOpen: false,
  toggleOpen: () => {},
  open: () => {},
});

export const BottomToggleContainerProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const open = () => {
    setIsOpen(true);
  };

  return (
    <BottomToggleContainerContext.Provider value={{ isOpen, toggleOpen, open }}>
      {children}
    </BottomToggleContainerContext.Provider>
  );
};

export const useBottomToggleContainerContext = () => {
  return useContext(BottomToggleContainerContext);
};
