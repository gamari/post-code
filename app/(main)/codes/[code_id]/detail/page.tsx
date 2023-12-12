import React, { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";

import { CodeSidebar } from "@/components/codes/code-sidebar";
import { CodeDetail } from "@/components/codes/details/code-detail";
import { NextPage } from "next";
import { CodeDetailProvider } from "@/components/providers/code-detail-provider/code-detail-provider";
import { CodeDetailComments } from "@/components/codes/details/code-detail-comments";

interface Props {
  params: {
    code_id: number;
  };
}

const CodeDetailPage: NextPage<Props> = ({ params: { code_id } }) => {
  noStore();
  return (
    <CodeDetailProvider>
      <div className="flex flex-col items-center">
        <div className="p-10 flex flex-row gap-10">
          <div className="flex-1 w-[650px]">
            <Suspense fallback={null}>
              <CodeDetail id={code_id} />
            </Suspense>

            <CodeDetailComments />
          </div>

          <CodeSidebar codeId={code_id} />
        </div>
      </div>
    </CodeDetailProvider>
  );
};

export default CodeDetailPage;
