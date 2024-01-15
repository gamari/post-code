"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { File } from "../types";
import { useSupabase } from "./SupabaseProvider";
import { fetchFilesByCodeId } from "../libs/externals/supabase/queries/files";

interface ContextProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

interface ProviderProps {
  codeId?: number;
  children: React.ReactNode;
}

export const FilesContext = createContext<ContextProps>({
  files: [],
  setFiles: () => {},
});

export const FilesProvider = ({ children, codeId }: ProviderProps) => {
  const { client } = useSupabase();
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    async function init() {
      if (!client) return;
      if (!codeId) return;
      const files = await fetchFilesByCodeId(codeId, client);
      setFiles(files);
    }

    init();
  }, [codeId, client]);

  return (
    <FilesContext.Provider
      value={{
        files,
        setFiles,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
};

export const useFilesContext = () => useContext(FilesContext);
