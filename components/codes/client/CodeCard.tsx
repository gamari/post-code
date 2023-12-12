"use client";

import React, { FunctionComponent } from "react";
import { useRouter } from "next/navigation";

import { Button } from "../../common/ui/button";
import { BadCode } from "../../../libs/types";
import { CODES_DETAIL_URL, CODES_EDIT_URL } from "../../../libs/constants";
import { cn } from "../../../libs/utils";

interface Props {
  code: BadCode;
  className?: string;
}

export const CodeCard: FunctionComponent<Props> = ({ code, className }) => {
  const router = useRouter();

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

      <div>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            router.push(CODES_EDIT_URL(code.id));
          }}
        >
          編集
        </Button>
      </div>
    </div>
  );
};
