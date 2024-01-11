"use client";

import { createContext, useContext, useState } from "react";

// TODO isOpenとsetIsOpenだけにする

interface ContextProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const BottomToggleContainerContext = createContext<ContextProps>({
  isOpen: false,
  setIsOpen: () => {},
});

export const BottomToggleContainerProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <BottomToggleContainerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </BottomToggleContainerContext.Provider>
  );
};

export const useBottomToggleContainerContext = () => {
  return useContext(BottomToggleContainerContext);
};
