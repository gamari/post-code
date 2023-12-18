import React from "react";

import { File } from "@/src/types";
import { FileItem } from "./client/FileItem";
import { cn } from "@/src/libs/utils";

interface Props {
  files: File[];
  className?: string;
  onClick?: (file: File) => void;
  selectedFile?: File | null;
}

export const FileItemList = ({
  className,
  files,
  onClick,
  selectedFile,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {files
        .sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        })
        .map((file) => (
          <FileItem
            key={file.id}
            className={cn(
              "",
              selectedFile?.id === file.id ? "bg-slate-200" : "",
              className
            )}
            file={file}
            onClick={onClick}
          />
        ))}
    </div>
  );
};
