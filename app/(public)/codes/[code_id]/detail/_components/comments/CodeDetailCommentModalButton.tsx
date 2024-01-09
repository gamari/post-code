"use client";

import React from "react";

import { Button } from "@/src/components/atoms/buttons/button";
import { FaRegComment } from "react-icons/fa6";
import { useCodeDetailCommentModalContext } from "@/src/contexts/CodeDetailCommentModalProvider";

export const CodeDetailCommentModalButton = () => {
  const { toggleModal } = useCodeDetailCommentModalContext();

  return (
    <Button variant="secondary" onClick={toggleModal}>
      <FaRegComment className="h-4 w-4 mr-2" />
      コメントする
    </Button>
  );
};
