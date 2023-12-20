import React, { FunctionComponent } from "react";

import { Typo } from "@/src/components/atoms/texts/typo";
import { actionGetBadCodeById } from "@/src/actions/bad-codes";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Description } from "@/src/components/atoms/texts/description";

interface Props {
  id: number;
}

export const CodeDetailInfo: FunctionComponent<Props> = async ({ id }) => {
  const badCode = await actionGetBadCodeById(id);

  if (!badCode) throw new Error("コードが見つかりません");

  return (
    <div>
      <div className="p-4 flex flex-col gap-2 bg-white rounded-md">
        <Heading type="h3" className="border-b pb-2">
          {badCode?.title}
        </Heading>

        <Description className="p-2">
          {badCode?.description || "(説明がありません)"}
        </Description>
      </div>
    </div>
  );
};
