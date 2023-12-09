"use client";

import React, { FunctionComponent } from "react";

import { Button } from "@/components/ui/button";
import { BadCode } from "@/libs/types";
import { useRouter } from "next/navigation";
import { CODES_EDIT_URL } from "@/libs/constants";

interface Props {
  code: BadCode;
}

export const CodeCard: FunctionComponent<Props> = ({ code }) => {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-between items-center hover:bg-gray-100 p-6">
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
