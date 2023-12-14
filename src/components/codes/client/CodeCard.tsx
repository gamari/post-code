"use client";

import React, { FunctionComponent } from "react";
import { useRouter } from "next/navigation";

import { Button } from "../../ui/button";
import { BadCode } from "../../../types";
import { CODES_DETAIL_URL, CODES_EDIT_URL } from "../../../libs/constants";
import { cn } from "../../../libs/utils";

interface Props {
  code: BadCode;
  className?: string;
}

export const CodeCard: FunctionComponent<Props> = ({ code, className }) => {
  const router = useRouter();

  const handleDelete = () => {
    // TODO
  }

  return (
    <div
      className={cn(
        "flex flex-row justify-between items-center hover:bg-gray-100 p-6 cursor-pointer",
        className
      )}
      onClick={() => {
        router.push(CODES_DETAIL_URL(code.id));
      }}
    >
      <div>{code.title ? code.title : "(タイトルなし)"}</div>

      <div className=" flex flex-row items-center gap-2">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            router.push(CODES_EDIT_URL(code.id));
          }}
        >
          編集
        </Button>

        <Button variant="destructive" onClick={handleDelete}>
          削除
        </Button>
      </div>
    </div>
  );
};
