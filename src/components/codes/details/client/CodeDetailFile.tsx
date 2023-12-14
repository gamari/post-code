"use client";

import React from "react";
import { MdOutlineInsertDriveFile } from "react-icons/md";

import { File } from "@/src/types";
import { cn } from "@/src/libs/utils";
import { Typo } from "@/src/components/base/typo";

interface Props {
  file: File;
  className?: string;
  onClick?: (file: File) => void;
}

export const CodeDetailFile = ({ file, className, onClick }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center gap-2 rounded-md hover:bg-gray-100 p-2 cursor-pointer select-none text-sm",
        className
      )}
      onClick={() => onClick && onClick(file)}
    >
      <MdOutlineInsertDriveFile className="h-4 w-4" />
      <Typo text={file.name} />
    </div>
  );
};
