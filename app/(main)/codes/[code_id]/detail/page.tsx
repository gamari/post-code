import React, { Suspense } from "react";

import { CodeSidebar } from "@/components/codes/code-sidebar";
import { MockBlock } from "@/components/common/mock-block";
import { Typo } from "@/components/common/typo";
import { CodeDetail } from "@/components/codes/code-detail";
import { NextPage } from "next";
import { Card, CardHeader } from "@/components/common/ui/card";
import { CodeDetailProvider } from "@/components/providers/code-detail-provider/code-detail-provider";

interface Props {
  params: {
    code_id: number;
  };
}

const CodeDetailPage: NextPage<Props> = ({ params: { code_id } }) => {
  return (
    <CodeDetailProvider>
      <div className="flex flex-col items-center">
        <div className="p-10 flex flex-row gap-10">
          <div className="flex-1 w-[650px]">
            <Suspense fallback={null}>
              <CodeDetail id={code_id} />
            </Suspense>

            <div className="mt-12">
              <Typo text="議論" type="h3" className="text-gray-700" />
              <Card className="mb-6 mt-6">
                <CardHeader>
                  <Typo type="p" text="上記のコードについて議論できます。" />
                </CardHeader>
              </Card>
              <MockBlock height={300} text="コメント一覧を降順で並べる" />
            </div>
          </div>

          <CodeSidebar codeId={code_id} />
        </div>
      </div>
    </CodeDetailProvider>
  );
};

export default CodeDetailPage;
