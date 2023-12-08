import { BadCode } from "@/libs/types";
import React from "react";
import { CodeCard } from "../code-card/code-card";
import { Card, CardHeader } from "@/components/ui/card";

interface Props {
  codes: BadCode[];
}

export const CodeList = ({ codes }: Props) => {
  if (!codes?.length)
    return (
      <Card>
        <CardHeader>
          <p>作成したコードが存在しません</p>
        </CardHeader>
      </Card>
    );

  return (
    <div>
      {codes?.map((code) => (
        <CodeCard code={code} key={code.id} />
      ))}
    </div>
  );
};
