import React from "react";

import { CodeEditorContentTitle } from "./CodeEditorContentTitle";
import { CodeEditorContentFile } from "./CodeEditorContentFile";
import { CodeEditorContentDescription } from "./CodeEditorContentDescription";
import { cn } from "@/src/libs/utils";
import { BaseProps } from "@/src/types/components";

interface Props extends BaseProps {}

export const CodeEditorContent = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <CodeEditorContentTitle />
      <CodeEditorContentFile className="mt-12 h-[400px]" />
      <CodeEditorContentDescription />
    </div>
  );
};
