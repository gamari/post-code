import { Code, File } from "@/src/types";
import { createContext, useContext, useEffect, useState } from "react";
import { useSupabase } from "../SupabaseProvider";
import { fetchFilesByCodeId } from "@/src/libs/externals/supabase/queries/files";

interface ContextProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

interface ProviderProps {
  code: Code;
  children: React.ReactNode;
}

export const CodeEditorFilesContext = createContext<ContextProps>({
  files: [],
  setFiles: () => {},
});

export const CodeEditorFilesProvider = ({ code, children }: ProviderProps) => {
  const { client } = useSupabase();
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    async function init() {
      if (!client) return;
      if (!code?.id) return;
      const files = await fetchFilesByCodeId(code.id, client);
      setFiles(files);
    }

    init();
  }, [code, client]);

  return (
    <CodeEditorFilesContext.Provider
      value={{
        files,
        setFiles,
      }}
    >
      {children}
    </CodeEditorFilesContext.Provider>
  );
};

export const useCodeEditorFilesContext = () => {
  const context = useContext(CodeEditorFilesContext);

  if (!context)
    throw new Error("CodeEditorFilesProvider内で利用してください。");

  return context;
};
