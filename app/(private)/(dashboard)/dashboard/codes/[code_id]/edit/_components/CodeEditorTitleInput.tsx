import React from "react";

import { Input } from "@/src/components/atoms/forms/input";
import { useGetEditorCode } from "@/src/hooks/codes/editors/getter/useGetEditorCode";
import { useSetEditorCode } from "@/src/hooks/codes/editors/setter/useSetEditorCode";

export const CodeEditorTitleInput = () => {
  const { code } = useGetEditorCode();
  const { setTitle } = useSetEditorCode();

  return (
    <Input
      value={code?.title || ""}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="タイトル..."
      className="mb-12"
    />
  );
};
