"use client";

import React from "react";

import { CiFileOn } from "react-icons/ci";

import { File } from "@/src/types";
import { cn } from "@/src/libs/utils";
import { convertFilenameToFiletype } from "@/src/libs/editors";
import { CodeViewer } from "../codes/CodeViewer";

interface Props {
  file: File;
  className?: string;
}

export const FileViewer = ({ file, className }: Props) => {
  return (
    <div
      className={cn(
        "h-full w-full rounded-lg flex flex-col relative",
        className
      )}
    >
      <CodeViewer
        language={convertFilenameToFiletype(file?.name)}
        content={file.content || ""}
        className="p-4 flex-1"
      />
    </div>
  );
};
