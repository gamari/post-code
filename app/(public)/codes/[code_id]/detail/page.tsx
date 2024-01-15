import React from "react";

import { NextPage } from "next";

import { CodeDetailCommentListProvider } from "@/app/(public)/codes/[code_id]/detail/_contexts/CodeDetailCommentListProvider";
import { CodeDetailProvider } from "@/app/(public)/codes/[code_id]/detail/_contexts/CodeDetailProvider";
import { CodeDetail } from "./_components/code-detail";
import { actionGetCodeById } from "@/src/actions/codes";
import { CodeDetailCommentModalProvider } from "@/app/(public)/codes/[code_id]/detail/_contexts/CodeDetailCommentModalProvider";
import { BottomContainerProvider } from "@/src/contexts/BottomContainerProvider";
import { FilesProvider } from "@/src/contexts/FilesProvider";

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
    <CodeDetailCommentListProvider comments={[]}>
      <CodeDetailProvider>
        <CodeDetailCommentModalProvider>
          <FilesProvider codeId={code_id}>
            <BottomContainerProvider>
              <CodeDetail codeId={code_id} />
            </BottomContainerProvider>
          </FilesProvider>
        </CodeDetailCommentModalProvider>
      </CodeDetailProvider>
    </CodeDetailCommentListProvider>
  );
};

export default CodeDetailPage;
