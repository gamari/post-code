"use client";

import React, { FunctionComponent } from "react";

import { CodeEditorSidebar } from "./sidebar/CodeEditorSidebar";
import { CodeFileEditor } from "./files/CodeFileEditor";
import { CodeEditorProvider } from "@/src/contexts/CodeEditorProvider";
import { CodeDetailInfoEditor } from "./CodeDetailInfoEditor";
import { CodeDetail } from "@/src/types";

interface Props {
  code: CodeDetail;
}

export const CodeEditor: FunctionComponent<Props> = ({ code }: Props) => {
  return (
    <CodeEditorProvider code={code}>
      <div className="sticky top-10 flex flex-row gap-4">
        <div className="w-[600px]">
          <CodeFileEditor className="h-[400px]" />
          <CodeDetailInfoEditor className="border-t-2 mt-10 pt-4" />
        </div>

        <CodeEditorSidebar />
      </div>
    </CodeEditorProvider>
  );
};