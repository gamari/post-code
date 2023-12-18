import React, { FunctionComponent } from "react";

import { Typo } from "@/src/components/base/typo";
import { actionGetBadCodeById } from "@/src/actions/bad-codes";

interface Props {
  id: number;
}

export const CodeDetailInfo: FunctionComponent<Props> = async ({ id }) => {
  const badCode = await actionGetBadCodeById(id);

  return (
    <div>
      <div className="p-4 flex flex-col gap-2 bg-white rounded-md">
        <Typo text={badCode?.title} type="h3" className="border-b pb-2" />
        <Typo
          text={badCode?.description || "(説明がありません)"}
          type="p"
          className="m-2"
        />
      </div>
    </div>
  );
};
