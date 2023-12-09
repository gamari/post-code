import React from "react";
import { NextPage } from "next";

import { CodeEditor } from "../../../../../components/codes/code-editor/code-editor";
import { getServerClient } from "@/libs/externals/supabase/admin-client";
import { fetchBadCodeById } from "@/libs/externals/supabase/admin-queries";

interface Props {
  params: {
    code_id: string;
  };
}

const CodeEditPage: NextPage<Props> = async ({ params }) => {
  const { code_id } = params;
  const serverClient = await getServerClient();
  const badCode = await fetchBadCodeById(code_id, serverClient);

  if (!badCode) return <div>対象のコードがありません。</div>;

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
