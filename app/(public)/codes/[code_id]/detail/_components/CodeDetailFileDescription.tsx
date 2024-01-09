"use client";

import React, { useState } from "react";

import { MarkdownPreviewer } from "@/src/components/molecules/displays/markdown-previewer";
import { useCodeDetailContext } from "@/src/contexts/CodeDetailProvider";
import { cn } from "@/src/libs/utils";
import { Badge } from "@/src/components/atoms/badges/badge";
import { motion } from "framer-motion";
import BottomToggleContainer from "@/src/components/molecules/animation/BottomToggleContainer";

interface Props {
  className?: string;
}

export const CodeDetailFileDescription = ({ className = "" }: Props) => {
  const { selectedFile } = useCodeDetailContext();

  if (!selectedFile?.description) return null;

  return (
    <BottomToggleContainer>
      <div className="overflow-y-auto py-16 px-12 max-h-[45vh]">
        <MarkdownPreviewer content={selectedFile?.description || ""} />
      </div>
    </BottomToggleContainer>
  );
};
