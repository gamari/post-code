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
      <Card className="h-[300px]">
        <CardHeader>
          <Typo type="p" text="ファイルを選択してください" />
        </CardHeader>
      </Card>
    );

  return (
    <div className="h-[300px]">
      <CodePreviewer code={selectedFile?.content || ""} />
    </div>
  );
};
