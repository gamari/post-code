"use client";

import React, { FunctionComponent } from "react";

import { CodeEditorSidebar } from "../editor/client/CodeEditorSidebar";
import { CodeFileEditor } from "../editor/client/CodeFileEditor";
import { NoContent } from "@/components/common/no-content";
import { useCodeEditor } from "@/components/providers/CodeEditorProvider";
import { CodeDetailInfoEditor } from "../editor/client/CodeDetailInfoEditor";

interface Props {}

export const CodeEditor: FunctionComponent<Props> = ({}) => {
  const { selectedFile, setSelectedFile } = useCodeEditor();

  return (
    <div className="flex flex-row gap-4">
      <div className="w-[600px]">
        <div>
          {selectedFile ? (
            <CodeFileEditor
              file={selectedFile}
              setFile={setSelectedFile}
              className="h-[400px]"
            />
          ) : (
            <NoContent
              text="ファイルを選択してください"
              className="h-[400px]"
            />
          )}
        </div>

        <CodeDetailInfoEditor className="border-t-2 mt-10 pt-4" />
      </div>

      <CodeEditorSidebar />
    </div>
  );
};
