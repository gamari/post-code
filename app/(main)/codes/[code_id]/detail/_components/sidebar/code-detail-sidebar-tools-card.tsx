import React from "react";

import { actionGetAuthUser } from "@/src/actions/users";
import { Code } from "@/src/types";
import { CodeDetailShareButton } from "../CodeDetailShareButton";
import { LinkButton } from "../../../../../../../src/components/molecules/buttons/link-button";
import { CODES_EDIT_URL } from "@/src/libs/constants/urls";
import { DateString } from "../../../../../../../src/components/atoms/texts/date-string";
import { EditIcon } from "lucide-react";
import { actionCheckFavoriteCode } from "@/src/actions/favorites";
import { FavoriteCodeButton } from "@/src/components/organisms/codes/FavoriteCodeButton";
import { CodeDetailCommentModalButton } from "../CodeDetailCommentModalButton";

interface Props {
  badCode: Code;
}

export const CodeDetailSidebarToolsCard = async ({ badCode }: Props) => {
  const authUser = await actionGetAuthUser();
  const isFavorite = await actionCheckFavoriteCode(badCode?.id);

  return (
    <div className="border rounded-md bg-white w-[240px] p-5">
      <div className="flex flex-col gap-2">
        {authUser && (
          <>
            <FavoriteCodeButton codeId={badCode.id} isFavorite={isFavorite} />
          </>
        )}
        {badCode?.user_id === authUser?.id && (
          <>
            <LinkButton
              url={CODES_EDIT_URL(badCode.id)}
              label="編集"
              Icon={<EditIcon className="h-4 w-4 mr-2 " />}
              className="bg-gray-100 border-none"
            />
          </>
        )}
        <CodeDetailCommentModalButton code={badCode} />
        <CodeDetailShareButton code={badCode} />
      </div>

      <div className="mt-4 text-gray-600 text-sm">
        <span>更新日:</span>
        <DateString value={badCode?.created_at} />
      </div>
    </div>
  );
};
