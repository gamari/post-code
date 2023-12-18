"use client";

import { File } from "@/src/types";
import { createContext, useContext, useState } from "react";

interface ContextProps {
  selectedFile: File | null;
  setSelectedFile?: (file: File) => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const CodeDetailContext = createContext<ContextProps>({
  selectedFile: null,
  setSelectedFile: () => {},
});

export const CodeDetailProvider = ({ children }: ProviderProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <CodeDetailContext.Provider value={{ selectedFile, setSelectedFile }}>
      {children}
    </CodeDetailContext.Provider>
  );
};

export const useCodeDetailContext = () => {
  return useContext(CodeDetailContext);
};
