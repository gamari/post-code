"use client";

import React, { memo } from "react";

import { Input } from "@/src/components/atoms/forms/input";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useCodeEditorTitle } from "@/src/hooks/codes/editors/useCodeEditorTitle";

export const CodeEditorContentTitle = memo(() => {
  const { title, setTitle } = useCodeEditorTitle();

  return (
    <div className="flex flex-row items-center gap-2">
      <Heading type="h4">タイトル</Heading>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトル..."
        className="flex-1"
        maxLength={60}
      />
    </div>
  );
});
