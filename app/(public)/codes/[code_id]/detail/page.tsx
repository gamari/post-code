import React from "react";

import { NextPage } from "next";

import { DetailCodeCommentListProvider } from "@/src/contexts/CodeCommentListProvider";
import { CodeDetailProvider } from "@/src/contexts/CodeDetailProvider";
import { CodeDetail } from "./_components/code-detail";
import { actionGetCodeById } from "@/src/actions/codes";
import { CodeDetailCommentModalProvider } from "@/src/contexts/CodeDetailCommentModalProvider";
import { BottomToggleContainerProvider } from "@/src/contexts/BottomToggleContainerProvider";

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
  return (
    <DetailCodeCommentListProvider comments={[]}>
      <CodeDetailProvider>
        <CodeDetailCommentModalProvider>
          <BottomToggleContainerProvider>
            <CodeDetail codeId={code_id} />
          </BottomToggleContainerProvider>
        </CodeDetailCommentModalProvider>
      </CodeDetailProvider>
    </DetailCodeCommentListProvider>
  );
};

export default CodeDetailPage;
