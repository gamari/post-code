import React from "react";

import { Typo } from "@/src/components/base/typo";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { CodeCommentList } from "../client/CodeCommentList";

interface Props {}

export const CodeDetailComments = async ({}: Props) => {
  return (
    <Card className="mb-6 mt-6 h-[600px]">
      <CardHeader>
        <Typo text="議論" type="h3" className="text-gray-700" />
      </CardHeader>

      <CardContent>
        <CodeCommentList />
      </CardContent>
    </Card>
  );
};
