"use client";

import { createContext, useContext, useState } from "react";

interface ContextProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const CodeDetailCommentModalContext = createContext<ContextProps>({
  isOpen: false,
  setIsOpen: () => {},
});

export const useCodeDetailCommentModalContext = () =>
  useContext(CodeDetailCommentModalContext);

export const CodeDetailCommentModalProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CodeDetailCommentModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CodeDetailCommentModalContext.Provider>
  );
};
