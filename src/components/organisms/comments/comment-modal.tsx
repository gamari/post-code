import React from "react";

import { Modal } from "@/src/components/molecules/displays/Modal";
import { Code } from "@/src/types";
import { CodeCommentForm } from "../../../../app/(public)/codes/[code_id]/detail/_components/CodeDetailCommentForm";

interface Props {
  code: Code;
  isOpen: boolean;
  toggleModal: () => void;
}

export const CommentModal = ({ code, isOpen, toggleModal }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={toggleModal}>
      <div className="pt-6 mb-4">
        <CodeCommentForm codeId={code.id} onSubmit={toggleModal} />
      </div>
    </Modal>
  );
};
