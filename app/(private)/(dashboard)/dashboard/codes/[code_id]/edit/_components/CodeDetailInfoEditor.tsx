"use client";

import React from "react";

import { Input } from "@/src/components/atoms/forms/input";
import { Textarea } from "@/src/components/atoms/forms/textarea";
import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";
import { cn } from "@/src/libs/utils";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useGetEditorCode } from "@/src/hooks/codes/editors/useGetEditorCode";
import { useSetEditorCode } from "@/src/hooks/codes/editors/useSetEditorCode";

interface Props {
  className?: string;
}

export const CodeDetailInfoEditor = ({ className }: Props) => {
  const { code } = useGetEditorCode();
  const { setTitle, setDescription } = useSetEditorCode();

  return (
    <div className={cn("", className)}>
      <Heading type="h4" className="mb-3">
        タイトル
      </Heading>

      <div>
        <Input
          type="text"
          placeholder="タイトル"
          value={code?.title || ""}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[66%]"
        />
      </div>

      <Heading type="h4" className="mb-3">
        説明
      </Heading>

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
