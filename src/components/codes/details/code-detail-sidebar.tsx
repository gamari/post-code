import React from "react";

import { Typo } from "@/src/components/base/typo";
import { CodeDetailFileList } from "./code-detail-file-list";
import { actionGetBadCodeById } from "@/src/actions/bad-codes";
import { actionGetFiles } from "@/src/actions/files";
import { MockBlock } from "../../base/mock-block";
import { Button } from "../../ui/button";
import { FavoriteCodeDetailButton } from "./favorite-code-detail-button";
import { actionGetAuthUser } from "@/src/actions/users";
import { UserIcon } from "../../auth/user-icon";
import dayjs from "dayjs";

interface Props {
  codeId: number;
}

export const CodeDetailSidebar = async ({ codeId }: Props) => {
  const authUser = await actionGetAuthUser();
  const badCode = await actionGetBadCodeById(codeId);
  const files = await actionGetFiles(codeId);

  return (
    <div className="sticky top-10 h-fit flex flex-col gap-6">
      <div className="border rounded-md bg-white p-5">
        <div className="flex flex-row gap-2 items-center">
          <UserIcon />
          <div>
            <div>{badCode.user.username}</div>
          </div>
        </div>

        <div className="mt-2 border-t py-2">{badCode.user.description}</div>
      </div>

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

      <div className="border rounded-md bg-white w-[240px] p-5">
        <div className="flex items-center gap-2">
          <Button>コメントする</Button>
          {authUser && <FavoriteCodeDetailButton codeId={badCode.id} />}
        </div>

        <div className="mt-4">
          <Typo
            text={dayjs(badCode?.updated_at).format("YYYY/MM/DD mm:hh")}
            type="p"
          />
          {/* <Typo text="コメント 12" type="p" /> */}
        </div>
      </div>
    </div>
  );
};
