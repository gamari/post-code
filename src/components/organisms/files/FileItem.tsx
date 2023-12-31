"use client";

import React from "react";

import { cn } from "@/src/libs/utils";
import { Typo } from "../../atoms/texts/typo";
import { File } from "@/src/types";
import { FileIcon } from "../../molecules/displays/file-icon";
import { convertFilenameToFiletype } from "@/src/libs/editors";

interface Props {
  className?: string;
  onClick?: (file: File) => void;
  file: File;
}

export const FileItem = ({ file, className, onClick }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center gap-2 rounded-md hover:bg-gray-100 p-2 cursor-pointer select-none text-sm",
        className
      )}
      onClick={() => onClick && onClick(file)}
    >
      <FileIcon fileType={convertFilenameToFiletype(file?.name)} />
      <Typo text={file.name} className="flex-1 whitespace-break-spaces break-words overflow-hidden" />
    </div>
  );
};
