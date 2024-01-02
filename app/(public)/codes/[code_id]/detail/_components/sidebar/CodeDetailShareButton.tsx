"use client";

import React from "react";

import Link from "next/link";

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
import { Code } from "@/src/types";
import { FaRegShareFromSquare, FaXTwitter } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  code: Code;
}

export const CodeDetailShareButton = ({ code }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const createShareUrl = () => {
    const text = code.title + " | " + code.description;
    // const baseUrl = window.location.origin;
    // const url = baseUrl + pathname
    const url = "http://localhost:3000" + pathname;
    const xUrl =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(text) +
      "&url=" +
      encodeURIComponent(url);

    return xUrl;
  };

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
          <DialogTitle>シェアする</DialogTitle>
          <DialogDescription>
            <div className="w-[200px] mx-auto flex flex-col gap-2">
              <Button variant="outline" asChild>
                <Link
                  href={createShareUrl() || ""}
                  target="_blank"
                  className="flex flex-row gap-2 items-center"
                >
                  <FaXTwitter />
                  Xにシェア
                </Link>
              </Button>
            </div>
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
