"use client";

import { useSaveCodeEditor } from "@/src/hooks/codes/editors/useSaveCodeEditor";
import { useAlert } from "@/src/hooks/useAlert";
import { useEffect } from "react";

export const CodeEditorSaveShortcut = () => {
  const { saveEditor } = useSaveCodeEditor();
  const { infoAlert, errorAlert } = useAlert();

  useEffect(() => {
    const handleKeyDown = async (event: any) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();

        try {
          await saveEditor();
          infoAlert("保存しました");
        } catch (e) {
          errorAlert("エラーが発生しました", e);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [saveEditor]);

  return null;
};
