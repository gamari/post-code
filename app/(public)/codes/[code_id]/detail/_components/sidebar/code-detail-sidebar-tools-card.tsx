import React from "react";

import { Code } from "@/src/types";
import { CodeDetailShareButton } from "./CodeDetailShareButton";
import { DateString } from "../../../../../../../src/components/atoms/texts/date-string";
import { actionCheckFavoriteCode } from "@/src/actions/favorites";
import { FavoriteCodeButton } from "@/src/components/organisms/codes/FavoriteCodeButton";
import { CodeDetailCommentModalButton } from "../comments/CodeDetailCommentModalButton";

interface Props {
  badCode: Code;
  isLogin: boolean;
}

export const CodeDetailSidebarToolsCard = async ({
  badCode,
  isLogin,
}: Props) => {
  const isFavorite = await actionCheckFavoriteCode(badCode?.id);

  return (
    <div className="rounded-md bg-white w-full p-5">
      <div className="flex flex-col gap-2">
        {isLogin && (
          <>
            <FavoriteCodeButton codeId={badCode.id} isFavorite={isFavorite} />
            <CodeDetailCommentModalButton code={badCode} />
          </>
        )}
        <CodeDetailShareButton code={badCode} />
      </div>

      <div className="mt-4 text-gray-600 text-sm">
        <span>更新日:</span>
        <DateString value={badCode?.created_at} />
      </div>
    </div>
  );
};
