import React from "react";

import { CodeEditorContentTitle } from "./CodeEditorContentTitle";
import { cn } from "@/src/libs/utils";
import { BaseProps } from "@/src/types/components";
import { CodeEditorContentDescription } from "./CodeEditorContentDescription";
import { CodeEditorContentBottom } from "./CodeEditorContentBottom";

interface Props extends BaseProps {}

export const CodeEditorContent = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <CodeEditorContentTitle />
      <CodeEditorContentDescription className="mt-4" />
      <CodeEditorContentBottom />
    </div>
  );
};
