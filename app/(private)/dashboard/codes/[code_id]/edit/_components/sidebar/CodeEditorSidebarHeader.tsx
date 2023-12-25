import React from "react";
import { CodeEditorNewFileModalButton } from "../../CodeEditorNewFileModalButton";
import { Heading } from "@/src/components/atoms/texts/heading";
import { cn } from "@/src/libs/utils";

interface Props {
  className?: string;
}

export const CodeEditorSidebarHeader = ({
  className
}: Props) => {
  return (
    <div className={cn("flex flex-row items-center gap-2", className)}>
      <Heading type="h4">ファイル一覧</Heading>
      <CodeEditorNewFileModalButton />
    </div>
  );
};
