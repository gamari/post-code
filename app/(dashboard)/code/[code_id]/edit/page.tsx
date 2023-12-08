import React from "react";
import { NextPage } from "next";

import { CodeEditor } from "../../../../../components/codes/code-editor/code-editor";
import { fetchBadCodeById } from "@/libs/supabase/admin-queries";

interface Props {
  params: {
    code_id: string;
  };
}

const CodeEditPage: NextPage<Props> = async ({ params }) => {
  console.log(params);
  const { code_id } = params;
  const badCode = await fetchBadCodeById(code_id);

  console.log(code_id);
  console.log(badCode);

  return (
    <div>
      {badCode ? (
        <CodeEditor code={badCode} />
      ) : (
        <div>コードが見つかりませんでした</div>
      )}
    </div>
  );
};

export default CodeEditPage;
