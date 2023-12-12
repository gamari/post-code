import React from "react";

import { MockBlock } from "@/components/common/mock-block";
import { Typo } from "@/components/common/typo";
import { Card, CardContent, CardHeader } from "@/components/common/ui/card";
import { CodeCommentForm } from "../client/CodeCommentForm";
import { CodeCommentList } from "../client/CodeCommentList";
import { actionGetCommentsByCodeId } from "@/actions/comments";

interface Props {
  codeId: number;
}

export const CodeDetailComments = async ({ codeId }: Props) => {
  const comments = await actionGetCommentsByCodeId(codeId);

  return (
    <Card className="mb-6 mt-6">
      <CardHeader>
        <Typo text="議論" type="h3" className="text-gray-700" />
        <CodeCommentForm codeId={codeId} />
      </CardHeader>

      <CardContent>
        <CodeCommentList comments={comments} />
      </CardContent>
    </Card>
  );
};
