"use client";

import React from "react";

import { useCodeDetailContext } from "@/src/contexts/CodeDetailProvider";
import { CodePreviewer } from "../../client/CodePreviewer";
import { cn } from "@/src/libs/utils";

interface Props {
  className?: string;
}

export const CodeDetailFileViewer = ({ className }: Props) => {
  const { selectedFile } = useCodeDetailContext();

  if (!selectedFile)
    return (
      <div
        className={cn(
          "h-[400px] flex items-center justify-center bg-white rounded-md",
          className
        )}
      >
        <p className="text-gray-600 font-bold">
          見たいファイルを選択してください
        </p>
      </div>
    );

  return (
    <CodePreviewer file={selectedFile} className={cn("h-[400px]", className)} />
  );
};
