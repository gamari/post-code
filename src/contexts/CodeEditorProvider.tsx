"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { File, CodeDetail, Language } from "@/src/types";
import { useSupabase } from "./SupabaseProvider";
import { fetchLanguageList } from "../libs/externals/supabase/queries/languages";

interface ContextProps {
  code?: CodeDetail;
  setCode: (code: CodeDetail | undefined) => void;
  selectedFile: File | undefined;
  setSelectedFile: (file: File | undefined) => void;
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
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
  const { client } = useSupabase();
  const [code, setCode] = useState<CodeDetail | undefined>(initCode);
  const [files, setFiles] = useState<File[]>(initCode?.files || []);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  useEffect(() => {
    async function init() {
      if (!client) return;
      if (files.length) {
        setSelectedFile(files[0]);
      }
    }

    init();
  }, [client]);

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
