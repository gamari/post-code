import React from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript";

import { cn } from "@/src/libs/utils";
import { NoContent } from "@/src/components/molecules/displays/no-content";
import { getFileType } from "@/src/libs/editors";
import { useGetEditorSelectedFile } from "@/src/hooks/codes/editors/getter/useGetEditorSelectedFile";
import { useSetEditorSelectedFile } from "@/src/hooks/codes/editors/setter/useSetEditorSelectedFile";
import { Typo } from "@/src/components/atoms/texts/typo";

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
    <div className={cn("flex flex-col gap-4 w-full relative", className)}>
      <div className="absolute -top-7 border border-gray-500 left-0 text-sm text-gray-600 px-2 py-1 z-10  bg-yellow-50">
        <Typo className="px-2 py-1" text={selectedFile.name || ""} />
      </div>

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
