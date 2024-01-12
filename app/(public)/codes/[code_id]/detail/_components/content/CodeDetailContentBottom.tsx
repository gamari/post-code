"use client";

import React from "react";

import BottomToggleContainer from "@/src/components/molecules/animation/BottomToggleContainer";
import { CodeDetailFileDescription } from "../CodeDetailFileDescription";
import { CodeDetailContentFileViewer } from "./CodeDetailContentFileViewer";
import { useCodeDetail } from "../../_hooks/useCodeDetail";

export const CodeDetailContentBottom = () => {
  const { selectedFile } = useCodeDetail();

  if (!selectedFile) return null;

  return (
    <BottomToggleContainer
      className="flex flex-row h-[40vh] p-6 gap-4"
      label="説明"
    >
      <CodeDetailContentFileViewer className="flex-1 h-full overflow-auto" />
      <CodeDetailFileDescription className="flex-1 h-full overflow-auto" />
    </BottomToggleContainer>
  );
};
