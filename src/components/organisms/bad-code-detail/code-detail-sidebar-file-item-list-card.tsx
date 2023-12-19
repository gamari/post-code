import React from "react";
import { Typo } from "../../atoms/texts/typo";
import { DetailFileItemList } from "./detail-file-item-list";
import { actionGetFiles } from "@/src/actions/files";

interface Props {
  codeId: number;
}

export const CodeDetailSidebarFileItemListCard = async ({ codeId }: Props) => {
  const files = await actionGetFiles(codeId);

  return (
    <div className="border rounded-md bg-white w-[240px] p-5">
      <div>
        <Typo
          text="ファイル一覧"
          type="h3"
          className="text-gray-700 border-b pb-1"
        />

        <DetailFileItemList files={files} />
      </div>
    </div>
  );
};