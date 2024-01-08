import React from "react";
import { unstable_noStore } from "next/cache";

import { NextPage } from "next";

import { DetailCodeCommentListProvider } from "@/src/contexts/CodeCommentListProvider";
import { CodeDetailProvider } from "@/src/contexts/CodeDetailProvider";
import { CodeDetail } from "./_components/code-detail";
import { actionGetCodeById } from "@/src/actions/codes";

interface Props {
  params: {
    code_id: number;
  };
}

export const revalidate = 0;

export const generateMetadata = async ({
  params,
}: {
  params: {
    code_id: number;
  };
}) => {
  const code = await actionGetCodeById(params?.code_id);

  return {
    title: `${code.title}`,
    description: code.description,
    openGraph: {
      title: code.title,
      description: code.description,
    },
    twitter: {
      title: code.title,
      card: "summary_large_image",
      description: code.description,
    },
  };
};

const CodeDetailPage: NextPage<Props> = async ({ params: { code_id } }) => {
  unstable_noStore();

  return (
    <DetailCodeCommentListProvider comments={[]}>
      <CodeDetailProvider>
        <CodeDetail codeId={code_id} />
      </CodeDetailProvider>
    </DetailCodeCommentListProvider>
  );
};

export default CodeDetailPage;
