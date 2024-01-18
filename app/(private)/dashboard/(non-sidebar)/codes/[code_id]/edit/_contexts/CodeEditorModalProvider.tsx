import { File } from "../../../../../../../../src/types";
import { createContext, useContext, useState } from "react";

interface ContextProps {
  isSaveOpen: boolean;
  setIsSaveOpen: (value: boolean) => void;
  toggleSaveModal: () => void;

  // ファイル作成モーダル
  isNewFileOpen: boolean;
  setIsNewFileOpen: (value: boolean) => void;
  toggleNewFileModal: () => void;

  // Rename
  isRenameOpen: boolean;
  setIsRenameOpen: (value: boolean) => void;
  toggleRenameModal: () => void;
  targetFile: File | null;
  setTargetFile: (value: File | null) => void;

  // AIモーダル
  isAiOpen: boolean;
  setIsAiOpen: (value: boolean) => void;
  toggleAiModal: () => void;
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
  isRenameOpen: false,
  setIsRenameOpen: () => {},
  toggleRenameModal: () => {},
  targetFile: null,
  setTargetFile: () => {},
  isAiOpen: false,
  setIsAiOpen: () => {},
  toggleAiModal: () => {},
});

export const useCodeEditorModalContext = () =>
  useContext(CodeEditorModalContext);

export const CodeEditorModalProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNewFileOpen, setIsNewFileOpen] = useState(false);
  const [isRenameOpen, setIsRenameOpen] = useState(false);
  const [targetFile, setTargetFile] = useState<File | null>(null);
  const [isAiOpen, setIsAiOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleNewFileModal = () => {
    setIsNewFileOpen(!isNewFileOpen);
  };

  const toggleRenameModal = () => {
    setIsRenameOpen(!isRenameOpen);
  };

  const toggleAiModal = () => {
    setIsAiOpen(!isAiOpen);
  }

  return (
    <CodeEditorModalContext.Provider
      value={{
        isSaveOpen: isOpen,
        setIsSaveOpen: setIsOpen,
        toggleSaveModal: toggleModal,
        isNewFileOpen,
        setIsNewFileOpen,
        toggleNewFileModal,
        isRenameOpen,
        setIsRenameOpen,
        toggleRenameModal,
        targetFile,
        setTargetFile,
        isAiOpen,
        setIsAiOpen,
        toggleAiModal
      }}
    >
      {children}
    </CodeEditorModalContext.Provider>
  );
};
