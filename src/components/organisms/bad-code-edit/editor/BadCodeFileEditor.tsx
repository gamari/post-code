import React from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";

import { Input } from "@/src/components/atoms/forms/input";
import { cn } from "@/src/libs/utils";
import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";
import { NoContent } from "@/src/components/molecules/displays/no-content";
import { getFileType } from "@/src/libs/editors";

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
        placeholder="ファイル名..."
      />
      <AceEditor
        mode={getFileType(selectedFile.name)}
        theme="github"
        value={selectedFile?.content || ""}
        onChange={(newValue) => {
          if (!selectedFile) return;
          setSelectedFile({ ...selectedFile, content: newValue });
        }}
        name="codeEditor"
        editorProps={{ $blockScrolling: true }}
        className="flex-1"
      />
    </div>
  );
};
