import React, { FunctionComponent } from "react";

import { BiShare } from "react-icons/bi";

import { Typo } from "@/components/common/typo";
import { SelectedCodeFileViewer } from "../selected-code-file-viewer";
import { actionGetBadCodeById } from "@/actions/bad-codes";
import { actionGetAuthUser } from "@/actions/users";
import { FavoriteCodeDetailButton } from "./favorite-code-detail-button";
import { Button } from "@/components/common/ui/button";

interface Props {
  id: number;
}

export const CodeDetail: FunctionComponent<Props> = async ({ id }) => {
  const authUser = await actionGetAuthUser();
  const badCode = await actionGetBadCodeById(id);

  return (
    <div>
      <Typo text={badCode?.title} type="h2" className="border-b mb-6" />

      <div className="border-b flex flex-row justify-between gap-4 items-center pb-4">
        <div>
          <Typo text="12/11 11:10" type="h4" />
        </div>

        <div className="flex items-center flex-row gap-2">
          <Typo text="コメント 12" type="h4" />
          {authUser && <FavoriteCodeDetailButton codeId={badCode.id} />}
        </div>
      </div>

      <div className="my-12">
        <Typo text={badCode?.description} />
      </div>

      <div className="mt-6">
        <SelectedCodeFileViewer />
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
