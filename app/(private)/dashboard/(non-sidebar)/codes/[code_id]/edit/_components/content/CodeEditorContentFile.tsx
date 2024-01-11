"use client";

import React, { useRef } from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-monokai";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-perl";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-scala";
import "ace-builds/src-noconflict/mode-rust";

import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/mode-tsx";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-sql";

import { cn } from "@/src/libs/utils";
import { NoContent } from "@/src/components/molecules/displays/no-content";
import { convertFilenameToFiletype } from "@/src/libs/editors";
import { Typo } from "@/src/components/atoms/texts/typo";
import { useCodeEditorSelectedFile } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_hooks/useCodeEditorSelectedFile";

interface Props {
  className?: string;
}

export const CodeEditorContentFile = ({ className }: Props) => {
  const { selectedFile, setSelectedFile } = useCodeEditorSelectedFile();
  const editorRef = useRef<AceEditor>(null);

  if (!selectedFile)
    return (
      <NoContent className={cn("h-[400px] gap-3", className)}>
        ファイルを作成してください
      </NoContent>
    );

  return (
    <div className={cn("flex flex-col gap-4 w-full relative", className)}>
      <div className="absolute -top-7 border-b-0 border-gray-200 border -left-[1px] text-sm px-2 py-1  bg-[rgb(39,40,34)]">
        <Typo className="px-2 py-1 text-white" text={selectedFile.name || ""} />
      </div>

      <AceEditor
        ref={editorRef}
        mode={convertFilenameToFiletype(selectedFile.name)}
        theme="monokai"
        value={selectedFile?.content || ""}
        onChange={(newValue) => {
          if (!selectedFile) return;
          setSelectedFile({ ...selectedFile, content: newValue });
        }}
        name="codeEditor"
        editorProps={{ $blockScrolling: true }}
        wrapEnabled={true}
        height="100%"
        width="100%"
        fontSize={14}

      />
    </div>
  );
};
