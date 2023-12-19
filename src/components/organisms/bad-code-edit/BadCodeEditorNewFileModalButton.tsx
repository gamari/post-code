"use client";

import React from "react";

import { useModal } from "@/src/hooks/useModal";
import { PlusIcon } from "../../atoms/icons/PlusIcon";
import { NewFileModal } from "./NewFileModal";

export const CodeEditorNewFileModalButton = () => {
  const { isOpen, toggleModal } = useModal();

  return (
    <>
      <div className="p-1 rounded-full border hover:bg-gray-100 cursor-pointer">
        <PlusIcon className="h-5 w-5" onClick={toggleModal} />
      </div>

      <NewFileModal isOpen={isOpen} onClose={toggleModal} />
    </>
  );
};
