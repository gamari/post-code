import React from "react";
import { NextPage } from "next";

import { CodeEditor } from "../../../../../../components/codes/client/CodeEditor";
import { actionGetBadCodeById } from "@/actions/bad-codes";
import { CodeEditorProvider } from "@/components/providers/CodeEditorProvider";

interface Props {
  params: {
    code_id: number;
  };
}

const CodeEditPage: NextPage<Props> = async ({ params }) => {
  const { code_id } = params;
  const badCode = await actionGetBadCodeById(code_id);

  if (!badCode) return <div>対象のコードがありません。</div>;

  return (
    <div className="p-10">
      {badCode ? (
        <CodeEditorProvider badCode={badCode}>
          <CodeEditor />
        </CodeEditorProvider>
      ) : (
        <div>コードが見つかりませんでした</div>
      )}
    </div>
  );
};

export default CodeEditPage;
