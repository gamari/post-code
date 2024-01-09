"use client";

import { createContext, useContext, useState } from "react";

interface ContextProps {
  isOpen: boolean;
  toggleModal: () => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const CodeDetailCommentModalContext = createContext<ContextProps>({
  isOpen: false,
  toggleModal: () => {},
});

export const useCodeDetailCommentModalContext = () =>
  useContext(CodeDetailCommentModalContext);

export const CodeDetailCommentModalProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <CodeDetailCommentModalContext.Provider value={{ isOpen, toggleModal }}>
      {children}
    </CodeDetailCommentModalContext.Provider>
  );
};
