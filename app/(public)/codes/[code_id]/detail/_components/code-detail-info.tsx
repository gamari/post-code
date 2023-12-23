import React, { FunctionComponent } from "react";

import { actionGetBadCodeById } from "@/src/actions/codes";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Description } from "@/src/components/atoms/texts/description";
import { Badge } from "@/src/components/atoms/badges/badge";

interface Props {
  id: number;
}

export const CodeDetailInfo: FunctionComponent<Props> = async ({ id }) => {
  const badCode = await actionGetBadCodeById(id);

  if (!badCode) throw new Error("コードが見つかりません");

  return (
    <div>
      <div className="p-4 flex flex-col gap-2 bg-white rounded-md">
        <div className="flex flex-row items-center gap-2 border-b pb-2">
          {!badCode?.is_public && (
            <Badge className="bg-gray-600 text-white">非公開</Badge>
          )}
          <Heading type="h3">{badCode?.title}</Heading>
        </div>

        <Description className="p-2">
          {badCode?.description || "(説明がありません)"}
        </Description>
      </div>
    </div>
  );
};
