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

const BottomContainerContext = createContext<ContextProps>({
  isOpen: false,
  setIsOpen: () => {},
});

export const BottomContainerProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <BottomContainerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </BottomContainerContext.Provider>
  );
};

export const useBottomContainerContext = () => {
  return useContext(BottomContainerContext);
};
