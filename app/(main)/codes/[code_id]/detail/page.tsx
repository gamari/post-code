import React, { Suspense } from "react";

import { CodeSidebar } from "@/components/codes/code-sidebar/code-sidebar";
import { MockBlock } from "@/components/common/mock-block/mock-block";
import { Typo } from "@/components/common/typo/typo";
import { CodeDetail } from "@/components/codes/code-detail/code-detail";
import { NextPage } from "next";

interface Props {
  params: {
    code_id: number;
  };
}

const CodeDetailPage: NextPage<Props> = ({ params: { code_id } }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-10 flex flex-row gap-10">
        <div className="flex-1 w-[650px]">
          <Suspense fallback={null}>
            <CodeDetail id={code_id} />
          </Suspense>

          <div className="mt-20">
            <Typo text="コメント一覧" type="h3" className="text-gray-700" />

            <MockBlock height={300} />
          </div>
        </div>

        <CodeSidebar />
      </div>
    </div>
  );
};

export default CodeDetailPage;
