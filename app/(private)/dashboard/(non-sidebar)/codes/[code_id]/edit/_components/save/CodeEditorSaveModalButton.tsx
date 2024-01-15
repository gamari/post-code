"use client";

import React from "react";

import { SaveButton } from "../../../../../../../../../src/components/molecules/forms/buttons/save-button";
import { useCodeEditorSaveModal } from "../../_hooks/modal/useCodeEditorSaveModal";

export const CodeEditorSaveModalButton = () => {
  const { toggleSaveModal } = useCodeEditorSaveModal();

  const onClick = () => {
    toggleSaveModal();
  };

  return <SaveButton label="保存" onClick={onClick} />;
};
