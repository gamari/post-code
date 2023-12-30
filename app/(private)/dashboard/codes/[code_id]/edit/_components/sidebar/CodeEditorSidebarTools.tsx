import React from "react";

import { CodeEditorSaveModalButton } from "../save/CodeEditorSaveModalButton";
import { LinkButton } from "@/src/components/molecules/buttons/link-button";
import { useCodeEditor } from "@/src/hooks/codes/editors/useCodeEditor";

export const CodeEditorSidebarTools = () => {
  const { code } = useCodeEditor();

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
