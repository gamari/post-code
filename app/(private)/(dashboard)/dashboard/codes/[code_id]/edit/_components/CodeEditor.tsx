"use client";

import React, { FunctionComponent, Suspense } from "react";

import { CodeEditorSidebar } from "./sidebar/CodeEditorSidebar";
import { CodeFileEditor } from "./files/CodeFileEditor";
import { CodeEditorProvider } from "@/src/contexts/CodeEditorProvider";
import { CodeDetail } from "@/src/types";
import { Skeleton } from "@/src/components/molecules/displays/skeleton";

interface Props {
  code: CodeDetail;
}

export const CodeEditor: FunctionComponent<Props> = ({ code }: Props) => {
  return (
    <CodeEditorProvider code={code}>
      <div className="sticky top-10 flex flex-row gap-4">
        <div className="w-[600px]">
          <CodeFileEditor className="h-[600px]" />
        </div>

        <Suspense fallback={<Skeleton className="w-[250px]" />}>
          <div className="w-[250px]">
            <CodeEditorSidebar />
          </div>
        </Suspense>
      </div>
    </CodeEditorProvider>
  );
};
