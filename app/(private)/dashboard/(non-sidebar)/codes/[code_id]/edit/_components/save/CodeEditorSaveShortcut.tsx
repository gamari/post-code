"use client";

import { useSaveCodeEditor } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_hooks/useSaveCodeEditor";
import { useAlert } from "@/src/hooks/useAlert";
import { useEffect, useRef } from "react";

export const CodeEditorSaveShortcut = () => {
  const { saveEditor } = useSaveCodeEditor();
  const { infoAlert, errorAlert } = useAlert();

  const saveEditorRef = useRef(saveEditor);

  useEffect(() => {
    saveEditorRef.current = saveEditor;
  }, [saveEditor]);

  useEffect(() => {
    const handleKeyDown = async (event: any) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();

        try {
          await saveEditorRef?.current();
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
  }, []);

  return null;
};
