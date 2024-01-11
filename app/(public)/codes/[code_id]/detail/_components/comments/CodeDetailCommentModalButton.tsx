"use client";

import React from "react";

import { Button } from "@/src/components/atoms/buttons/button";
import { FaRegComment } from "react-icons/fa6";
import { useCodeDetailCommentModal } from "../../_hooks/useCodeDetailCommentModal";

export const CodeDetailCommentModalButton = () => {
  const { toggleModal } = useCodeDetailCommentModal();

  return (
    <Button variant="secondary" onClick={toggleModal}>
      <FaRegComment className="h-4 w-4 mr-2" />
      コメントする
    </Button>
  );
};
