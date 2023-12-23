"use client";

import React, { useEffect } from "react";

import {
  useCodeDetailContext,
  useCodeDetailSelectedFileContext,
} from "@/src/contexts/CodeDetailProvider";
import { cn } from "@/src/libs/utils";
import { FileViewer } from "@/src/components/organisms/files/FileViewer";

interface Props {
  className?: string;
}

export const CodeDetailFileViewer = ({ className }: Props) => {
  const { selectedFile } = useCodeDetailContext();

  if (!selectedFile)
    return (
      <div
        className={cn(
          "h-[400px] flex items-center justify-center bg-white rounded-md sticky top-10",
          className
        )}
      >
        <p className="text-gray-600 font-bold">
          見たいファイルを選択してください
        </p>
      </div>
    );

  return (
    <FileViewer file={selectedFile} className={cn("h-[400px]", className)} />
  );
};
