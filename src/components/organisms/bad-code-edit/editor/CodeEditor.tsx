"use client";

import React, { FunctionComponent } from "react";

import { CodeEditorSidebar } from "./CodeEditorSidebar";
import { CodeFileEditor } from "./CodeFileEditor";
import { CodeEditorProvider } from "@/src/contexts/CodeEditorProvider";
import { CodeDetailInfoEditor } from "../../bad-code-detail/CodeDetailInfoEditor";
import { BadCodeDetail } from "@/src/types";

interface Props {
  badCode: BadCodeDetail;
}

export const CodeEditor: FunctionComponent<Props> = ({ badCode }: Props) => {
  return (
    <CodeEditorProvider badCode={badCode}>
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
