import { Button } from "@/src/components/ui/button";
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
import { BadCode } from "@/src/types";
import React from "react";
import { FaRegShareFromSquare } from "react-icons/fa6";

interface Props {
  code: BadCode;
}

export const CodeDetailShareButton = ({ code }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <FaRegShareFromSquare className="h-4 w-4 mr-2" />
          シェアする
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>シャアする</DialogTitle>
          <DialogDescription>
            <div>X</div>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">閉じる</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
