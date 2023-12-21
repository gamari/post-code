import React from "react";
import { NextPage } from "next";

import { CodeEditor } from "./_components/CodeEditor";
import { actionGetBadCodeById } from "@/src/actions/codes";
import { NoContent } from "@/src/components/molecules/displays/no-content";

interface Props {
  params: {
    code_id: number;
  };
}

const CodeEditPage: NextPage<Props> = async ({ params }) => {
  const { code_id } = params;
  const code = await actionGetBadCodeById(code_id);

  if (!code_id || !code)
    return <NoContent text="コードが見つかりませんでした" />;

  return (
    <div className="p-10">
      <CodeEditor code={code} />
    </div>
  );
};

export default CodeEditPage;
