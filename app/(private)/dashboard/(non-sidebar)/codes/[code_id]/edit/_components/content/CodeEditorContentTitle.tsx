"use client";

import React, { memo } from "react";

import { Input } from "@/src/components/atoms/forms/input";
import { useCodeEditor } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_hooks/useCodeEditor";

export const CodeEditorContentTitle = memo(() => {
  const { code, setTitle } = useCodeEditor();

  return (
    <div className="flex flex-row items-center gap-2">
      <Input
        value={code?.title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトル..."
        className="flex-1 max-w-xl"
        maxLength={60}
      />
    </div>
  );
});
