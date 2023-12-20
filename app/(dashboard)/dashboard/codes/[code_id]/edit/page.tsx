import React from "react";
import { NextPage } from "next";

import { BadCodeEditor } from "./_components/BadCodeEditor";
import { actionGetBadCodeById } from "@/src/actions/bad-codes";
import { NoContent } from "@/src/components/molecules/displays/no-content";

interface Props {
  params: {
    code_id: number;
  };
}

const CodeEditPage: NextPage<Props> = async ({ params }) => {
  const { code_id } = params;
  const badCode = await actionGetBadCodeById(code_id);

  if (!code_id || !badCode)
    return <NoContent text="コードが見つかりませんでした" />;

  return (
    <div className="p-10">
      <BadCodeEditor badCode={badCode} />
    </div>
  );
};

export default CodeEditPage;
