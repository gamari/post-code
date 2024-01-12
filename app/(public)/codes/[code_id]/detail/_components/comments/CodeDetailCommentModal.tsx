"use client";

import React from "react";

import { Code } from "@/src/types";
import { Modal } from "@/src/components/molecules/displays/Modal";
import { CodeCommentForm } from "./CodeDetailCommentForm";
import { useCodeDetailCommentModal } from "../../_hooks/useCodeDetailCommentModal";

interface Props {
  code: Code;
}

export const CodeDetailCommentModal = ({ code }: Props) => {
  const { isOpen, toggleModal } = useCodeDetailCommentModal();
  return (
    <Modal isOpen={isOpen} onClose={toggleModal} className="w-[600px]">
      <div className="pt-6 mb-4">
        <CodeCommentForm codeId={code.id} onSubmit={toggleModal} />
      </div>
    </Modal>
  );
};
