import React from "react";
import { Typo } from "../base/typo";
import { CodeDetailFileList } from "./details/code-detail-file-list";
import { actionGetFiles } from "@/src/actions/files";

interface Props {
  codeId: number;
}

export const CodeFileListCard = async ({ codeId }: Props) => {
  const files = await actionGetFiles(codeId);

  return (
    <div className="border rounded-md bg-white w-[240px] p-5">
      <div>
        <Typo
          text="ファイル一覧"
          type="h3"
          className="text-gray-700 border-b pb-1"
        />

        <CodeDetailFileList files={files} />
      </div>
    </div>
  );
};
