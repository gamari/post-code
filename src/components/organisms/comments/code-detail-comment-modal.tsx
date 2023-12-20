import { Button } from "@/src/components/atoms/buttons/button";
import { Modal } from "@/src/components/molecules/displays/Modal";
import { BadCode } from "@/src/types";
import React from "react";
import { CodeCommentForm } from "../../../../app/(main)/codes/[code_id]/detail/_components/CodeDetailCommentForm";

interface Props {
  code: BadCode;
  isOpen: boolean;
  toggleModal: () => void;
}

export const CodeDetailCommentModal = ({
  code,
  isOpen,
  toggleModal,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={toggleModal}>
      <div className="pt-6 mb-4">
        <CodeCommentForm codeId={code.id} onSubmit={toggleModal} />
      </div>
    </Modal>
  );
};
