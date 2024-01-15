"use client";

import React from "react";

import { cn } from "@/src/libs/utils";
import { MarkdownPreviewer } from "@/src/components/organisms/utils/previewer/MarkdownPreviewer";
import { useCodeDetail } from "../_hooks/useCodeDetail";

interface Props {
  className?: string;
}

export const CodeDetailFileDescription = ({ className = "" }: Props) => {
  const { selectedFile } = useCodeDetail();

  return (
    <div className={cn("overflow-y-auto max-h-[45vh]", className)}>
      <MarkdownPreviewer content={selectedFile?.description || ""} />
    </div>
  );
};
