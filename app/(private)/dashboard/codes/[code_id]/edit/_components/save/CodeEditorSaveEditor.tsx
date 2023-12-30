"use client";

import React from "react";

import { cn } from "@/src/libs/utils";
import { Typo } from "@/src/components/atoms/texts/typo";
import { Switch } from "@/src/components/ui/switch";

import { CodeEditorSaveEditorDescription } from "./CodeEditorSaveEditorDescription";
import { CodeEditorSaveEditorLanguages } from "./CodeEditorSaveEditorLanguages";
import { useCodeEditor } from "@/src/hooks/codes/editors/useCodeEditor";
import { useCodeEditorIsPublic } from "@/src/hooks/codes/editors/useCodeEditorIsPublic";

interface Props {
  className?: string;
}

export const CodeEditorSaveEditor = ({ className }: Props) => {
  const { code } = useCodeEditor();
  const { setIsPublic } = useCodeEditorIsPublic();

  return (
    <div className={cn("", className)}>
      <CodeEditorSaveEditorDescription />

      <CodeEditorSaveEditorLanguages />

      <div className="my-6 flex items-center gap-2">
        <Typo text="公開設定" className="text-gray-700 font-semibold text-sm" />
        <Switch
          checked={code?.is_public || false}
          onCheckedChange={(value) => {
            setIsPublic(value);
          }}
        />
      </div>
    </div>
  );
};
