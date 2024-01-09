"use client";

import React from "react";
import { PlusIcon } from "../../../../../../../../../src/components/atoms/icons/PlusIcon";
import { useCodeEditorModalContext } from "@/src/contexts/CodeEditorModalProvider";

export const CodeEditorNewFileModalButton = () => {
  const { toggleNewFileModal } = useCodeEditorModalContext();

  return (
    <PlusIcon
      className="p-1 rounded-full border h-8 w-8 cursor-pointer hover:bg-gray-100"
      onClick={toggleNewFileModal}
    />
  );
};
