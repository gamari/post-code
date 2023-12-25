"use client";

import React from "react";

import { useModal } from "@/src/hooks/useModal";
import { PlusIcon } from "../../../../../../src/components/atoms/icons/PlusIcon";
import { CodeEditorNewFileModal } from "./CodeEditorNewFileModal";

export const CodeEditorNewFileModalButton = () => {
  const { isOpen, toggleModal } = useModal();

  return (
    <>
      <PlusIcon
        className="p-1 rounded-full border h-8 w-8 cursor-pointer hover:bg-gray-100"
        onClick={toggleModal}
      />
      <CodeEditorNewFileModal isOpen={isOpen} onClose={toggleModal} />
    </>
  );
};
