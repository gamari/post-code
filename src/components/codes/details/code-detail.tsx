import React, { FunctionComponent } from "react";

import { BiShare } from "react-icons/bi";

import { Typo } from "@/src/components/base/typo";
import { CodeDetailFileViewer } from "./client/CodeDetailFileViewer";
import { actionGetBadCodeById } from "@/src/actions/bad-codes";
import { Button } from "@/src/components/ui/button";

interface Props {
  id: number;
}

export const CodeDetail: FunctionComponent<Props> = async ({ id }) => {
  const badCode = await actionGetBadCodeById(id);

  return (
    <div>
      <div className="border p-4 flex flex-col gap-2 bg-white rounded-md">
        <Typo text={badCode?.title} type="h3" className="border-b pb-2" />
        {badCode?.description ? (
          <Typo text={badCode?.description} type="p" className="m-2" />
        ) : (
          <Typo text="(説明がありません)" type="p" className="m-2" />
        )}
      </div>

      <div className="mt-6">
        <CodeDetailFileViewer />
      </div>
    </div>
  );
};
