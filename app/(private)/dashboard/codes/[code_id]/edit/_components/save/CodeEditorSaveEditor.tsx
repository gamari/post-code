"use client";

import React from "react";

import { cn } from "@/src/libs/utils";
import { useGetEditorCode } from "@/src/hooks/codes/editors/getter/useGetEditorCode";
import { useSetEditorCode } from "@/src/hooks/codes/editors/setter/useSetEditorCode";
import { Typo } from "@/src/components/atoms/texts/typo";
import { Switch } from "@/src/components/ui/switch";

import { CodeEditorSaveEditorDescription } from "./CodeEditorSaveEditorDescription";
import { CodeEditorSaveEditorLanguages } from "./CodeEditorSaveEditorLanguages";

interface Props {
  className?: string;
}

export const CodeDetailInfoEditor = ({ className }: Props) => {
  const { code } = useGetEditorCode();
  const { setIsPublic } = useSetEditorCode();

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
