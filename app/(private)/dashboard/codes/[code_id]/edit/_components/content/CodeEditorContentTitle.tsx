"use client";

import React from "react";

import { Input } from "@/src/components/atoms/forms/input";
import { useGetEditorCode } from "@/src/hooks/codes/editors/getter/useGetEditorCode";
import { useSetEditorCode } from "@/src/hooks/codes/editors/setter/useSetEditorCode";
import { Heading } from "@/src/components/atoms/texts/heading";

export const CodeEditorContentTitle = () => {
  const { title } = useGetEditorCode();
  const { setTitle } = useSetEditorCode();

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
};
