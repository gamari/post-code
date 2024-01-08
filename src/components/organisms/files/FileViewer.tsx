"use client";

import React from "react";

import { CiFileOn } from "react-icons/ci";

import { File } from "@/src/types";
import { cn } from "@/src/libs/utils";
import {
  convertFilenameToFiletype,
} from "@/src/libs/editors";
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
      <div className="absolute -top-4 left-1 shadow-md z-[2] text-sm p-1 px-2 flex flex-row items-center font-bold bg-slate-50 rounded-lg">
        <CiFileOn className="cursor-pointer hover:opacity-70" />
        <span>{file?.name}</span>
      </div>

      <CodeViewer
        language={convertFilenameToFiletype(file?.name)}
        content={file.content || ""}
        className="p-4 flex-1"
      />
    </div>
  );
};
