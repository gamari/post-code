import React from "react";
import { NextPage } from "next";

import { CodeEditor } from "../../../../../../components/codes/client/CodeEditor";
import { getServerClient } from "@/libs/externals/supabase/admin-client";
import { fetchBadCodeWithFilesById } from "@/libs/externals/supabase/queries/bad-codes";

interface Props {
  params: {
    code_id: number;
  };
}

const CodeEditPage: NextPage<Props> = async ({ params }) => {
  const { code_id } = params;
  const serverClient = await getServerClient();
  const badCode = await fetchBadCodeWithFilesById(code_id, serverClient);

  if (!badCode) return <div>対象のコードがありません。</div>;

  return (
    <div className="p-10">
      {badCode ? (
        <CodeEditor code={badCode} />
      ) : (
        <div>コードが見つかりませんでした</div>
      )}
    </div>
  );
};

export default CodeEditPage;
