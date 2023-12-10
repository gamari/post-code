import React from "react";

import { FileIcon } from "@radix-ui/react-icons";

import { Typo } from "@/components/common/typo";
import { Button } from "@/components/ui/button";
import { getServerClient } from "@/libs/externals/supabase/admin-client";
import { fetchFilesByCodeId } from "@/libs/externals/supabase/queries/files";
import { CodeFileList } from "./code-file-list";

interface Props {
  codeId: number;
}

export const CodeSidebar = async ({ codeId }: Props) => {
  const client = await getServerClient();
  const files = await fetchFilesByCodeId(codeId, client);

  return (
    <div className="h-fit flex flex-col gap-6">
      <div className="border rounded-lg h-[150px] p-5">
        <div>UserPanel</div>
      </div>

      <div className="border rounded-lg w-[240px] p-5">
        <div>
          <Typo text="ファイル一覧" type="h3" className="text-gray-700" />

          <CodeFileList files={files} />
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <Button>コメントする</Button>
        </div>
      </div>
    </div>
  );
};
