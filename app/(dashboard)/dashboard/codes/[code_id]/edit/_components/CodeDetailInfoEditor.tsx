"use client";

import React from "react";

import { Input } from "@/src/components/atoms/forms/input";
import { Textarea } from "@/src/components/atoms/forms/textarea";
import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";
import { cn } from "@/src/libs/utils";
import { Heading } from "@/src/components/atoms/texts/heading";

interface Props {
  className?: string;
}

export const CodeDetailInfoEditor = ({ className }: Props) => {
  const { code, setTitle, setDescription } = useCodeEditor();

  return (
    <div className={cn("", className)}>
      <Heading type="h4">詳細情報</Heading>

      <div>
        <Input
          type="text"
          placeholder="タイトル"
          value={code?.title || ""}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mt-6">
        <Textarea
          value={code?.description || ""}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="コードの悪い部分を説明してください……"
          rows={8}
        />
      </div>
    </div>
  );
};
