"use client";

import React from "react";

import { Input } from "@/src/components/atoms/forms/input";
import { Textarea } from "@/src/components/atoms/forms/textarea";
import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";
import { cn } from "@/src/libs/utils";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useGetEditorCode } from "@/src/hooks/codes/editors/getter/useGetEditorCode";
import { useSetEditorCode } from "@/src/hooks/codes/editors/setter/useSetEditorCode";
import { Typo } from "@/src/components/atoms/texts/typo";
import { Switch } from "@/src/components/ui/switch";

interface Props {
  className?: string;
}

export const CodeDetailInfoEditor = ({ className }: Props) => {
  const { code } = useGetEditorCode();
  const { setDescription, setIsPublic } = useSetEditorCode();

  return (
    <div className={cn("", className)}>
      <Heading type="h4" className="mb-3">
        全体説明
      </Heading>

      <div className="mt-6">
        <Textarea
          value={code?.description || ""}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="全体を通したコードの解説を書いてください。"
          rows={8}
        />
      </div>

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
