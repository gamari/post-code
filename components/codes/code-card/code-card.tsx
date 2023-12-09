import { Button } from "@/components/ui/button";
import { BadCode } from "@/libs/types";
import Link from "next/link";
import React, { FunctionComponent } from "react";

interface Props {
  code: BadCode;
}

export const CodeCard: FunctionComponent<Props> = ({ code }) => {
  return (
    <div className="flex flex-row">
      <div>{code.title ? code.title : "(タイトルなし)"}</div>

      <div>
        <Button asChild>
          <Link href={`/code/${code.id}/edit`}>編集</Link>
        </Button>
      </div>
    </div>
  );
};
