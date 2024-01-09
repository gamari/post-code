import { createContext, useContext, useState } from "react";

interface ContextProps {
  isSaveOpen: boolean;
  setIsSaveOpen: (value: boolean) => void;
  toggleSaveModal: () => void;

  // ファイル作成モーダル
  isNewFileOpen: boolean;
  setIsNewFileOpen: (value: boolean) => void;
  toggleNewFileModal: () => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const CodeEditorModalContext = createContext<ContextProps>({
  isSaveOpen: false,
  setIsSaveOpen: () => {},
  toggleSaveModal: () => {},
  isNewFileOpen: false,
  setIsNewFileOpen: () => {},
  toggleNewFileModal: () => {},
});

export const useCodeEditorModalContext = () =>
  useContext(CodeEditorModalContext);

export const CodeEditorModalProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNewFileOpen, setIsNewFileOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleNewFileModal = () => {
    setIsNewFileOpen(!isNewFileOpen);
  };

  return (
    <CodeEditorModalContext.Provider
      value={{
        isSaveOpen: isOpen,
        setIsSaveOpen: setIsOpen,
        toggleSaveModal: toggleModal,
        isNewFileOpen,
        setIsNewFileOpen,
        toggleNewFileModal,
      }}
    >
      {children}
    </CodeEditorModalContext.Provider>
  );
};
