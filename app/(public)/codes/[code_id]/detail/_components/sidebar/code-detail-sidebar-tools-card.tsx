import React from "react";
import { unstable_noStore } from "next/cache";

import { Code } from "@/src/types";
import { CodeDetailShareButton } from "./CodeDetailShareButton";
import { actionCheckFavoriteCode } from "@/src/actions/favorites";
import { FavoriteCodeButton } from "@/src/components/organisms/favorites/FavoriteCodeButton";
import { CodeDetailCommentModalButton } from "../comments/CodeDetailCommentModalButton";

interface Props {
  badCode: Code;
  isLogin: boolean;
}

export const revalidate = 0;

export const CodeDetailSidebarToolsCard = async ({
  badCode,
  isLogin,
}: Props) => {
  unstable_noStore();
  const { is_public } = badCode;
  const isFavorite = await actionCheckFavoriteCode(badCode?.id);

  if (!is_public)
    return (
      <div className="rounded-md bg-white w-full p-5 py-7 font-bold">非公開設定です</div>
    );

  return (
    <div className="rounded-md bg-white w-full p-5 py-7">
      <div className="flex flex-col gap-2">
        {isLogin && (
          <>
            <FavoriteCodeButton codeId={badCode.id} isFavorite={isFavorite} />
            <CodeDetailCommentModalButton />
          </>
        )}
        <CodeDetailShareButton code={badCode} />
      </div>
    </div>
  );
};
