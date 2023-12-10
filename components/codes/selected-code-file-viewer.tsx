"use client";

import { MockBlock } from "@/components/common/mock-block/mock-block";
import { Typo } from "@/components/common/typo/typo";
import { useCodeDetailContext } from "@/components/providers/code-detail-provider/code-detail-provider";
import { Card, CardHeader } from "@/components/ui/card";
import React from "react";

export const SelectedCodeFileViewer = () => {
  const { selectedFile } = useCodeDetailContext();

  if (!selectedFile)
    return (
      <Card className="h-[300px]">
        <CardHeader>
          <Typo
            type="p"
            text="右側のファイル一覧から見たいファイルを選択してください"
          />
        </CardHeader>
      </Card>
    );

  return (
    <div className="h-[300px]">
      <MockBlock height={300} />
    </div>
  );
};
