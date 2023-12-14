import React from "react";
import dayjs from "dayjs";

import { Typo } from "@/src/components/base/typo";
import { CodeDetailFileList } from "./code-detail-file-list";
import { actionGetBadCodeById } from "@/src/actions/bad-codes";
import { actionGetFiles } from "@/src/actions/files";
import { FavoriteCodeDetailButton } from "./favorite-code-detail-button";
import { actionGetAuthUser } from "@/src/actions/users";
import { UserIcon } from "../../auth/user-icon";
import { CodeDetailShareButton } from "./client/CodeDetailShareButton";
import { CodeDetailCommentDialogButton } from "./client/CodeDetailCommentDialogButton";

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
        <div className="flex flex-col gap-2">
          {authUser && (
            <>
              <FavoriteCodeDetailButton codeId={badCode.id} />
              <CodeDetailCommentDialogButton code={badCode} />
            </>
          )}
          <CodeDetailShareButton code={badCode} />
        </div>

        <div className="mt-4">
          <Typo
            text={dayjs(badCode?.updated_at).format("更新日: YYYY/MM/DD")}
            type="p"
          />
        </div>
      </div>
    </div>
  );
};
