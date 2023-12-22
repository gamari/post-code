"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { File, CodeDetail } from "@/src/types";

interface ContextProps {
  code?: CodeDetail;
  setCode: (code: CodeDetail | undefined) => void;
  selectedFile: File | undefined;
  setSelectedFile: (file: File | undefined) => void;
  files: File[];
  setFiles: (files: File[]) => void;
}

const CodeEditorContext = createContext<ContextProps>({
  code: undefined,
  setCode: () => {},
  files: [],
  setFiles: () => {},
  selectedFile: undefined,
  setSelectedFile: () => {},
});

interface ProviderProps {
  code: CodeDetail;
  children: React.ReactNode;
}

export const CodeEditorProvider = ({
  code: initCode,
  children,
}: ProviderProps) => {
  const [code, setCode] = useState<CodeDetail | undefined>(initCode);
  const [files, setFiles] = useState<File[]>(initCode?.files || []);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  useEffect(() => {
    function init() {
      if (files.length) {
        setSelectedFile(files[0]);
      }
    }

    init();
  }, []);

  return (
    <CodeEditorContext.Provider
      value={{
        code,
        setCode,
        files,
        setFiles,
        selectedFile,
        setSelectedFile,
      }}
    >
      {children}
    </CodeEditorContext.Provider>
  );
};

export const useCodeEditor = () => {
  const context = useContext(CodeEditorContext);
  if (!context) {
    throw new Error("CodeEditorProvider内で利用してください。");
  }
  return context;
};
