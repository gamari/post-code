"use client";

import React from "react";

import { Button } from "@/src/components/atoms/buttons/button";
import { FaRegComment } from "react-icons/fa6";
import { Code } from "@/src/types";
import { useModal } from "@/src/hooks/useModal";
import { CommentModal } from "../../../../../../../src/components/organisms/comments/comment-modal";

interface Props {
  code: Code;
}

export const CodeDetailCommentModalButton = ({ code }: Props) => {
  const { isOpen, toggleModal } = useModal();

  return (
    <>
      <Button variant="secondary" onClick={toggleModal}>
        <FaRegComment className="h-4 w-4 mr-2" />
        コメントする
      </Button>

      <CommentModal
        code={code}
        isOpen={isOpen}
        toggleModal={toggleModal}
      />
    </>
  );
};
