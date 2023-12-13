"use client";

import React from "react";

import { MockBlock } from "@/components/common/mock-block";
import { Typo } from "@/components/common/typo";
import { useCodeDetailContext } from "@/components/providers/code-detail-provider/code-detail-provider";
import { Card, CardHeader } from "@/components/common/ui/card";
import { CodePreviewer } from "./client/CodePreviewer";

export const SelectedCodeFileViewer = () => {
  const { selectedFile } = useCodeDetailContext();

  if (!selectedFile)
    return (
      <div className="h-[350px] flex items-center justify-center border">
        <p className="text-gray-600 font-bold">
          見たいファイルを選択してください
        </p>
      </div>
    );

  return <CodePreviewer file={selectedFile} className="h-[350px]" />;
};
