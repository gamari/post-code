import React, { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";

import { NextPage } from "next";
import { CodeDetail } from "@/src/components/organisms/bad-code-detail/code-detail";

interface Props {
  params: {
    code_id: number;
  };
}

const CodeDetailPage: NextPage<Props> = async ({ params: { code_id } }) => {
  noStore();

  return <CodeDetail codeId={code_id} />;
};

export default CodeDetailPage;
