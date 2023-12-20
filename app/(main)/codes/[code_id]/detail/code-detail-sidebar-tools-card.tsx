import React from "react";

import { CodeDetailCommentDialogButton } from "../../../../../src/components/organisms/shared/comments/CodeDetailCommentDialogButton";
import { FavoriteCodeDetailButton } from "./favorite-code-detail-button";
import { actionGetAuthUser } from "@/src/actions/users";
import { BadCode } from "@/src/types";
import { CodeDetailShareButton } from "../../../../../src/components/organisms/shared/bad-codes/CodeDetailShareButton";
import { LinkButton } from "../../../../../src/components/molecules/buttons/link-button";
import { CODES_EDIT_URL } from "@/src/libs/constants";
import { DateString } from "../../../../../src/components/atoms/texts/date-string";
import { EditIcon } from "lucide-react";

interface Props {
  badCode: BadCode;
}

export const CodeDetailSidebarToolsCard = async ({ badCode }: Props) => {
  const authUser = await actionGetAuthUser();

  return (
    <div className="border rounded-md bg-white w-[240px] p-5">
      <div className="flex flex-col gap-2">
        {authUser && (
          <>
            <FavoriteCodeDetailButton codeId={badCode.id} />
            <CodeDetailCommentDialogButton code={badCode} />
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
        <CodeDetailShareButton code={badCode} />
      </div>

      <div className="mt-4 text-gray-600 text-sm">
        <span>更新日:</span>
        <DateString value={badCode?.created_at} />
      </div>
    </div>
  );
};
