"use client";

import React from "react";

import { useCodeDetailContext } from "@/src/components/providers/code-detail-provider/code-detail-provider";
import { CodePreviewer } from "../../client/CodePreviewer";

export const CodeDetailFileViewer = () => {
  const { selectedFile } = useCodeDetailContext();

  if (!selectedFile)
    return (
      <div className="h-[400px] flex items-center justify-center border bg-white rounded-md">
        <p className="text-gray-600 font-bold">
          見たいファイルを選択してください
        </p>
      </div>
    );

  return <CodePreviewer file={selectedFile} className="h-[400px]" />;
};
