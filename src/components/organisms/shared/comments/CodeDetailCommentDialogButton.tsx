"use client";

import React, { useState } from "react";

import { Button } from "@/src/components/atoms/buttons/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { FaRegComment } from "react-icons/fa6";
import { CodeCommentForm } from "./CodeCommentForm";
import { BadCode } from "@/src/types";

interface Props {
  code: BadCode;
}

export const CodeDetailCommentDialogButton = ({ code }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <FaRegComment className="h-4 w-4 mr-2" />
          コメントする
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>コメントする</DialogTitle>
          <DialogDescription>
            <CodeCommentForm codeId={code?.id} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
