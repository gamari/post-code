"use client";

import React, { useState } from "react";

import { useSaveCodeEditor } from "@/src/hooks/codes/useSaveCodeEditor";
import { useAlert } from "@/src/hooks/useAlert";
import { SaveButton } from "../../../../../../../../src/components/molecules/buttons/save-button";

export const CodeEditorSaveButton = () => {
  const { errorAlert, infoAlert } = useAlert();
  const { saveEditor } = useSaveCodeEditor();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSave = async () => {
    try {
      setIsLoading(true);
      await saveEditor();
      infoAlert("保存しました");
    } catch (error) {
      errorAlert("保存に失敗しました", error);
    } finally {
      setIsLoading(false);
    }
  };

  return <SaveButton label="保存" onClick={handleOnSave} loading={isLoading} />;
};
