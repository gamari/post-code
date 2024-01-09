import { createContext, useContext, useState } from "react";

interface ContextProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  toggleModal: () => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const CodeEditorSaveModalContext = createContext<ContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  toggleModal: () => {},
});

export const useCodeEditorSaveModalContext = () =>
  useContext(CodeEditorSaveModalContext);

export const CodeEditorSaveModalProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <CodeEditorSaveModalContext.Provider
      value={{ isOpen, setIsOpen, toggleModal }}
    >
      {children}
    </CodeEditorSaveModalContext.Provider>
  );
};
