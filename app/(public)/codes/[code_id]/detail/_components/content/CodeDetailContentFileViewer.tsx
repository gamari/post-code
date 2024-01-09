"use client";

import React from "react";

import { useCodeDetailContext } from "@/src/contexts/CodeDetailProvider";
import { cn } from "@/src/libs/utils";
import { FileViewer } from "@/src/components/organisms/files/FileViewer";
import { Flex } from "@/src/components/atoms/containers/Flex";

interface Props {
  className?: string;
}

export const CodeDetailContentFileViewer = ({ className }: Props) => {
  const { selectedFile } = useCodeDetailContext();

  if (!selectedFile) return null;

  return (
    <Flex direction="column" alignItems="stretch" className={cn("", className)}>
      <FileViewer file={selectedFile} className={cn("h-[450px]", className)} />
    </Flex>
  );
};
