"use client";

import React, { useState } from "react";

import { MarkdownPreviewer } from "@/src/components/molecules/displays/markdown-previewer";
import { useCodeDetailContext } from "@/app/(public)/codes/[code_id]/detail/_contexts/CodeDetailProvider";
import { cn } from "@/src/libs/utils";

interface Props {
  className?: string;
}

export const CodeDetailFileDescription = ({ className = "" }: Props) => {
  const { selectedFile } = useCodeDetailContext();

  return (
    <div className={cn("overflow-y-auto max-h-[45vh]", className)}>
      <MarkdownPreviewer content={selectedFile?.description || ""} />
    </div>
  );
};
