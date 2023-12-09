import { BadCode, BadCodeWithFiles, File } from "@/libs/types";
import { useState } from "react";

export const useBadCodeForm = (initCode?: BadCodeWithFiles) => {
  const [id, setId] = useState<number | undefined>(initCode?.id);
  const [title, setTitle] = useState<string>(initCode?.title || "");
  const [description, setDescription] = useState<string>(
    initCode?.description || ""
  );
  const [files, setFiles] = useState<File[]>(initCode?.files || []);

  const addFile = (file: File) => {
    setFiles([...files, file]);
  };

  const removeFile = (file: File) => {
    const newFiles = files.filter((f) => f.id !== file.id);
    setFiles(newFiles);
  };

  const updateFile = (file: File) => {
    const newFiles = files.map((f) => {
      if (f.id === file.id) {
        return file;
      }
      return f;
    });
    setFiles(newFiles);
  };

  return {
    id,
    title,
    description,
    files,
    setId,
    setTitle,
    setDescription,
    addFile,
    removeFile,
    updateFile,
  };
};
