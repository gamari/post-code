"use client";

import React from "react";

import { useSaveCodeEditor } from "@/src/hooks/codes/useSaveCodeEditor";
import { useAlert } from "@/src/hooks/useAlert";
import { SaveButton } from "../../../../../../../../src/components/molecules/buttons/save-button";

export const CodeEditorSaveButton = () => {
  const { loading, saveEditor } = useSaveCodeEditor();
  const { errorAlert, infoAlert } = useAlert();

  const handleOnSave = async () => {
    try {
      await saveEditor();
      infoAlert("保存しました");
    } catch (error) {
      errorAlert("保存に失敗しました", error);
    }
  };

  return <SaveButton label="保存" onClick={handleOnSave} loading={loading} />;
};
