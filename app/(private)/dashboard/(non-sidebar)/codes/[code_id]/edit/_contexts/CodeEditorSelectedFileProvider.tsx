import { createContext, useContext, useState } from "react";
import { File } from "../../../../../../../../src/types";

interface ContextProps {
  selectedFile: File | undefined;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const CodeEditorSelectedFileContext = createContext<ContextProps>({
  selectedFile: undefined,
  setSelectedFile: () => {},
});

export const CodeEditorSelectedFileProvider = ({ children }: ProviderProps) => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  return (
    <CodeEditorSelectedFileContext.Provider
      value={{
        selectedFile,
        setSelectedFile,
      }}
    >
      {children}
    </CodeEditorSelectedFileContext.Provider>
  );
};

export const useCodeEditorSelectedFileContext = () => {
  const context = useContext(CodeEditorSelectedFileContext);
  
  if (!context) throw new Error("CodeEditorSelectedFileProvider内で利用してください。");
  
  return context;
};
