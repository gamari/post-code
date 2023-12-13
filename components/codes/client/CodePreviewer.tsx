"use client";

import React from "react";

import { File } from "@/libs/types";
import { cn } from "@/libs/utils";

interface Props {
  file: File;
  className?: string;
}

export const CodePreviewer = ({ file, className }: Props) => {
  return (
    <div
      className={cn(
        "border h-full w-full rounded-lg overflow-hidden flex flex-col",
        className
      )}
    >
      <div className="p-2 px-5 bg-gray-200 border-b">{file?.name}</div>
      <div className="overflow-y-scroll p-5 flex-1 whitespace-pre">{file.content}</div>
    </div>
  );
};
