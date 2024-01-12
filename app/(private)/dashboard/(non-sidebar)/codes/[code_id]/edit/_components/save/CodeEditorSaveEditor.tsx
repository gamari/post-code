"use client";

import React from "react";

import { cn } from "@/src/libs/utils";
import { Typo } from "@/src/components/atoms/texts/typo";
import { Switch } from "@/src/components/ui/switch";

import { CodeEditorContentDescription } from "../content/CodeEditorContentDescription";
import { CodeEditorSaveEditorLanguages } from "./CodeEditorSaveEditorLanguages";
import { useCodeEditor } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_hooks/useCodeEditor";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { CodeEditorSaveEditorSelectTags } from "./CodeEditorSaveEditorSelectTags";

interface Props {
  className?: string;
}

export const CodeEditorSaveEditor = ({ className }: Props) => {
  const { code, setIsPublic } = useCodeEditor();

  return (
    <div className={cn("", className)}>
      <div className="mb-2 text-gray-500">
        オプションを設定して保存してください
      </div>
      <CodeEditorSaveEditorLanguages />
      <CodeEditorSaveEditorSelectTags />

      <Flex className="my-6" alignItems="center" gap={8}>
        <Typo text="公開設定" className="text-gray-700 font-semibold text-sm" />
        <Switch
          checked={code?.is_public || false}
          onCheckedChange={(value) => {
            setIsPublic(value);
          }}
        />
      </Flex>
    </div>
  );
};
