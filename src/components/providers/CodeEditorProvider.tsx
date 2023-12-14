"use client";

import { createContext, useContext, useState } from "react";

import { File, BadCodeDetail, BadCode } from "@/src/types";

interface ContextProps {
  badCode?: BadCode;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  selectedFile: File | undefined;
  setSelectedFile: (file: File) => void;
  files: File[];
  addFile: (file: File) => void;
  deleteFile: (file: File) => void;
  updateFile: (file: File) => void;
}

const CodeEditorContext = createContext<ContextProps>({
  badCode: undefined,
  setTitle: () => {},
  setDescription: () => {},
  files: [],
  selectedFile: undefined,
  setSelectedFile: () => {},
  addFile: () => {},
  deleteFile: () => {},
  updateFile: () => {},
});

interface ProviderProps {
  badCode: BadCodeDetail;
  children: React.ReactNode;
}

export const CodeEditorProvider = ({
  badCode: initBadCode,
  children,
}: ProviderProps) => {
  const [badCode, setBadCode] = useState<BadCode | undefined>(initBadCode);
  const [files, setFiles] = useState<File[]>(initBadCode?.files || []);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  function setTitle(title: string) {
    if (!badCode) return;
    setBadCode({ ...badCode, title });
  }

  function setDescription(description: string) {
    if (!badCode) return;
    setBadCode({ ...badCode, description });
  }

  function addFile(file: File) {
    setFiles([...files, file]);
  }

  function deleteFile(file: File) {
    const newFiles = files.filter((f) => f.id !== file.id);
    setFiles(newFiles);
  }

  function updateFile(file: File) {
    const newFiles = files.map((f) => {
      if (f.id === file.id) {
        return file;
      }
      return f;
    });
    setFiles(newFiles);
  }

  return (
    <CodeEditorContext.Provider
      value={{
        badCode,
        setTitle,
        setDescription,
        files,
        selectedFile,
        setSelectedFile,
        addFile,
        deleteFile,
        updateFile
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
