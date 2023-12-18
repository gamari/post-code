import React from "react";
import { CodeDetailCommentDialogButton } from "./client/CodeDetailCommentDialogButton";
import { FavoriteCodeDetailButton } from "./favorite-code-detail-button";
import { actionGetAuthUser } from "@/src/actions/users";
import { BadCode } from "@/src/types";
import { CodeDetailShareButton } from "./client/CodeDetailShareButton";
import { Typo } from "../../base/typo";
import dayjs from "dayjs";

interface Props {
  badCode: BadCode;
}

export const CodeDetailToolCard = async ({ badCode }: Props) => {
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
        <CodeDetailShareButton code={badCode} />
      </div>

      <div className="mt-4">
        <Typo
          text={dayjs(badCode?.updated_at).format("更新日: YYYY/MM/DD")}
          type="p"
        />
      </div>
    </div>
  );
};
