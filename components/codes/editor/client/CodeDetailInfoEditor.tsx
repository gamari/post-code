"use client";

import React from "react";

import { Typo } from "@/components/common/typo";
import { Input } from "@/components/common/ui/input";
import { Textarea } from "@/components/common/ui/textarea";
import { useCodeEditor } from "@/components/providers/CodeEditorProvider";
import { cn } from "@/libs/utils";

interface Props {
    className?: string;
}

export const CodeDetailInfoEditor = ({
    className
}: Props) => {
  const { badCode, setTitle, setDescription } = useCodeEditor();

  return (
    <div className={cn("", className)}>
      <Typo type="h4" text="詳細情報" />

      <div>
        <Input
          type="text"
          placeholder="タイトル"
          value={badCode?.title || ""}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mt-6">
        <Textarea
          value={badCode?.description || ""}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="コードの悪い部分を説明してください……"
          rows={8}
        />
      </div>
    </div>
  );
};
