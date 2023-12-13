"use client";

import React from "react";

import { File } from "@/libs/types";
import { cn } from "@/libs/utils";
import { CiFileOn } from "react-icons/ci";

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
      <div className="p-2 px-5 bg-gray-100 border-b flex flex-row items-center gap-1">
        <CiFileOn className="h-5 w-5 cursor-pointer hover:opacity-70" />
        {file?.name}
      </div>
      <div className="overflow-y-scroll py-6 px-12 flex-1 whitespace-pre">
        {file.content}
      </div>
    </div>
  );
};
