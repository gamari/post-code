import React from "react";
import { CodeEditorSaveModalButton } from "../save/CodeEditorSaveModalButton";
import { useGetEditorCode } from "@/src/hooks/codes/editors/getter/useGetEditorCode";
import { LinkButton } from "@/src/components/molecules/buttons/link-button";

export const CodeEditorSidebarTools = () => {
  const { code } = useGetEditorCode();

  return (
    <div className="flex flex-col gap-2">
      <CodeEditorSaveModalButton />

      <LinkButton
        url={`/codes/${code?.id}/detail`}
        label="詳細画面へ"
        target="_blank"
      />
    </div>
  );
};
