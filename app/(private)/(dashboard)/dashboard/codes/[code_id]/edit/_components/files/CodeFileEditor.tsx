import React from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript";

import { cn } from "@/src/libs/utils";
import { NoContent } from "@/src/components/molecules/displays/no-content";
import { getFileType } from "@/src/libs/editors";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useGetEditorSelectedFile } from "@/src/hooks/codes/editors/getter/useGetEditorSelectedFile";
import { useSetEditorSelectedFile } from "@/src/hooks/codes/editors/setter/useSetEditorSelectedFile";

interface Props {
  className?: string;
}

export const CodeFileEditor = ({ className }: Props) => {
  const { selectedFile } = useGetEditorSelectedFile();
  const { setSelectedFile } = useSetEditorSelectedFile();

  if (!selectedFile)
    return (
      <NoContent text="ファイルを選択してください" className="h-[400px]" />
    );

  return (
    <div className={cn("flex flex-col gap-4 w-full", className)}>
      <AceEditor
        mode={getFileType(selectedFile.name)}
        theme="monokai"
        value={selectedFile?.content || ""}
        onChange={(newValue) => {
          if (!selectedFile) return;
          setSelectedFile({ ...selectedFile, content: newValue });
        }}
        name="codeEditor"
        editorProps={{ $blockScrolling: true }}
        height="100%"
        width="100%"
        fontSize={16}
      />
    </div>
  );
};
