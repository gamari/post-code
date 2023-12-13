import React, { FunctionComponent } from "react";

import { BiShare } from "react-icons/bi";

import { Typo } from "@/components/common/typo";
import { SelectedCodeFileViewer } from "../selected-code-file-viewer";
import { actionGetBadCodeById } from "@/actions/bad-codes";
import { actionGetAuthUser } from "@/actions/users";
import { FavoriteCodeDetailButton } from "./favorite-code-detail-button";
import { Button } from "@/components/common/ui/button";
import dayjs from "dayjs";

interface Props {
  id: number;
}

export const CodeDetail: FunctionComponent<Props> = async ({ id }) => {
  const authUser = await actionGetAuthUser();
  const badCode = await actionGetBadCodeById(id);

  return (
    <div>
      <div className="mt-6">
        <SelectedCodeFileViewer />
      </div>

      <div className="my-6 border p-4 flex flex-col gap-2">
        <Typo text={badCode?.title} type="h3" />
        <Typo text={badCode?.description} type="p" />

        <div className="flex items-center flex-row gap-2">
          <Typo text={dayjs(badCode?.updated_at).format("YYYY/MM/DD mm:hh")} type="p" />
          <Typo text="コメント 12" type="p" />
          {authUser && <FavoriteCodeDetailButton codeId={badCode.id} />}
        </div>
      </div>

      <div className="my-6 flex flex-row-reverse">
        <div>
          <Button className="rounded-full">
            <BiShare />
            Share
          </Button>
          <div></div>
        </div>
      </div>
    </div>
  );
};
