"use client";

import React from "react";

import { Typo } from "@/components/common/typo";
import { useCodeDetailContext } from "@/components/providers/code-detail-provider/code-detail-provider";
import { File } from "@/libs/types";
import { cn } from "@/libs/utils";
import { FileIcon } from "@radix-ui/react-icons";

interface Props {
  files: File[];
}

export const CodeFileList = ({ files }: Props) => {
  const { selectedFile, setSelectedFile } = useCodeDetailContext();

  const onSelectFile = (file: File) => {
    setSelectedFile && setSelectedFile(file);
  };

  return (
    <div className="mt-2 flex flex-col gap-2">
      {files.map((file) => (
        <div
          key={file.id}
          className={cn(
            "flex flex-row items-center gap-2 rounded-md hover:bg-gray-100 p-2 cursor-pointer select-none",
            selectedFile?.id === file.id && "bg-gray-100"
          )}
          onClick={() => onSelectFile(file)}
        >
          <FileIcon className="w-5 h-5" />
          <Typo text={file.name} />
        </div>
      ))}
    </div>
  );
};
