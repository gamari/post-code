"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { File, CodeDetail } from "@/src/types";
import { useSupabase } from "../SupabaseProvider";

interface ContextProps {
  code?: CodeDetail;
  setCode: (code: CodeDetail | undefined) => void;
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const CodeEditorContext = createContext<ContextProps>({
  code: undefined,
  setCode: () => {},
  files: [],
  setFiles: () => {},
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

  return (
    <CodeEditorContext.Provider
      value={{
        code,
        setCode,
        files,
        setFiles,
      }}
    >
      {children}
    </CodeEditorContext.Provider>
  );
};

export const useCodeEditorContext = () => {
  const context = useContext(CodeEditorContext);
  if (!context) {
    throw new Error("CodeEditorProvider内で利用してください。");
  }
  return context;
};
