"use client";

import React from "react";

import { SaveButton } from "../../../../../../../../../src/components/molecules/buttons/save-button";
import { useCodeEditorModalContext } from "@/src/contexts/CodeEditorModalProvider";

// TODO save buttonを抜き出す
export const CodeEditorSaveModalButton = () => {
  const { setIsSaveOpen: setIsOpen } = useCodeEditorModalContext();

  const onClick = () => {
    setIsOpen(true);
  };

  return <SaveButton label="保存" onClick={onClick} />;
};
