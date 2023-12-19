import React from "react";

import { Input } from "@/src/components/atoms/forms/input";
import { Textarea } from "@/src/components/atoms/forms/textarea";
import { cn } from "@/src/libs/utils";
import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";
import { NoContent } from "@/src/components/molecules/displays/no-content";

interface Props {
  className?: string;
}

export const CodeFileEditor = ({ className }: Props) => {
  const { selectedFile, setSelectedFile } = useCodeEditor();

  if (!selectedFile)
    return (
      <NoContent text="ファイルを選択してください" className="h-[400px]" />
    );

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <Input
        value={selectedFile?.name || ""}
        onChange={(e) => {
          if (!selectedFile) return;
          setSelectedFile({ ...selectedFile, name: e.target.value });
        }}
      />
      <Textarea
        value={selectedFile?.content || ""}
        onChange={(e) => {
          if (!selectedFile) return;
          setSelectedFile({ ...selectedFile, content: e.target.value });
        }}
        placeholder="コードを入力"
        className="flex-1"
      />
    </div>
  );
};
