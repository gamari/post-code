"use client";

import React from "react";

import { PlusIcon } from "../../../../../../../../../src/components/atoms/icons/PlusIcon";
import { useCodeEditorNewFileModal } from "../../_hooks/modal/useCodeEditorNewFileModal";

export const CodeEditorNewFileModalButton = () => {
  const { toggleNewFileModal } = useCodeEditorNewFileModal();

  return (
    <PlusIcon
      className="p-1 rounded-full border h-8 w-8 cursor-pointer hover:bg-gray-100"
      onClick={toggleNewFileModal}
    />
  );
};
