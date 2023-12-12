import React from "react";

import { MockBlock } from "@/components/common/mock-block";
import { Typo } from "@/components/common/typo";
import { Card, CardHeader } from "@/components/common/ui/card";

export const CodeDetailComments = () => {
  return (
    <div className="mt-12">
      <Typo text="議論" type="h3" className="text-gray-700" />
      <Card className="mb-6 mt-6">
        <CardHeader>
          <Typo type="p" text="上記のコードについて議論できます。" />
        </CardHeader>
      </Card>
      <MockBlock height={300} text="コメント一覧を降順で並べる" />
    </div>
  );
};
