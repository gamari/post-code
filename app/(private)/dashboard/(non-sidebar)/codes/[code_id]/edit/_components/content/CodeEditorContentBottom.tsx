import React from "react";

import { CodeEditorContentFile } from "./CodeEditorContentFile";
import { CodeEditorContentFileDescription } from "./CodeEditorContentFileDescription";
import { Badge } from "@/src/components/atoms/badges/badge";
import BottomToggleContainer from "@/src/components/molecules/animation/BottomToggleContainer";

export const CodeEditorContentBottom = () => {
  return (
    <BottomToggleContainer className="flex flex-row gap-4 p-6">
      <Badge className="absolute -top-2 left-2 bg-sky-500">ファイル編集</Badge>
      <CodeEditorContentFile className="mt-12 h-[300px] flex-1" />
      <CodeEditorContentFileDescription className="flex-1" />
    </BottomToggleContainer>
  );
};
