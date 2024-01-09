"use client";

import React from "react";

import { SaveButton } from "../../../../../../../../../src/components/molecules/buttons/save-button";
import { useCodeEditorSaveModalContext } from "@/src/contexts/CodeEditorSaveModalProvider";

// TODO save buttonを抜き出す
export const CodeEditorSaveModalButton = () => {
  const { setIsOpen } = useCodeEditorSaveModalContext();

  const onClick = () => {
    setIsOpen(true);
  };

  return <SaveButton label="保存" onClick={onClick} />;
};
