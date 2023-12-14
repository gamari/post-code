import React from "react";

import { Typo } from "@/src/components/base/typo";
import { CodeFileList } from "./code-file-list";
import { actionGetBadCodeById } from "@/src/actions/bad-codes";
import { actionGetFiles } from "@/src/actions/files";
import { MockBlock } from "../base/mock-block";

interface Props {
  codeId: number;
}

export const CodeSidebar = async ({ codeId }: Props) => {
  const badCode = await actionGetBadCodeById(codeId);
  const files = await actionGetFiles(codeId);

  return (
    <div className="h-fit flex flex-col gap-6">
      <div className="border rounded-lg p-5">
        <div className="flex flex-row gap-2 items-center">
          <MockBlock width={30} height={30} className="rounded-full" />
          <div>
            <div>{badCode.user.username}</div>
          </div>
        </div>

        <div className="mt-2 border-t py-2">{badCode.user.description}</div>
      </div>

      <div className="border rounded-lg w-[240px] p-5">
        <div>
          <Typo text="ファイル一覧" type="h3" className="text-gray-700 border-b pb-1" />

          <CodeFileList files={files} />
        </div>
      </div>
    </div>
  );
};
