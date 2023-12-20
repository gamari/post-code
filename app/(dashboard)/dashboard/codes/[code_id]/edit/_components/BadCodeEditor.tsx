"use client";

import React, { FunctionComponent } from "react";

import { CodeEditorSidebar } from "./sidebar/BadCodeEditorSidebar";
import { CodeFileEditor } from "./files/BadCodeFileEditor";
import { CodeEditorProvider } from "@/src/contexts/CodeEditorProvider";
import { BadCodeDetailInfoEditor } from "./BadCodeDetailInfoEditor";
import { BadCodeDetail } from "@/src/types";

interface Props {
  badCode: BadCodeDetail;
}

export const BadCodeEditor: FunctionComponent<Props> = ({ badCode }: Props) => {
  return (
    <CodeEditorProvider badCode={badCode}>
      <div className="sticky top-10 flex flex-row gap-4">
        <div className="w-[600px]">
          <CodeFileEditor className="h-[400px]" />
          <BadCodeDetailInfoEditor className="border-t-2 mt-10 pt-4" />
        </div>

        <CodeEditorSidebar />
      </div>
    </CodeEditorProvider>
  );
};
