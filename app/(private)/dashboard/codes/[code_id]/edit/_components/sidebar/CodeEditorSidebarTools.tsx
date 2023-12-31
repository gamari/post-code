import React from "react";

import { CodeEditorSaveModalButton } from "../save/CodeEditorSaveModalButton";

export const CodeEditorSidebarTools = () => {
  return (
    <div className="flex flex-col gap-2">
      <CodeEditorSaveModalButton />
    </div>
  );
};
