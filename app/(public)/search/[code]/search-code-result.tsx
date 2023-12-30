import React from "react";

import { actionGetCodeListByFileCode } from "@/src/actions/codes";
import { SearchCodeResultList } from "./SearchCodeResultList";
import { Heading } from "@/src/components/atoms/texts/heading";

interface Props {
  code: string;
}

export const SearchCodeResult = async ({ code }: Props) => {
  const codeList = await actionGetCodeListByFileCode(code);

  return (
    <div>
      <Heading className="mb-6">コード検索: {code}</Heading>

      {codeList.length === 0 && (
        <div className="bg-white p-6 rounded-md">見つかりませんでした</div>
      )}

      <SearchCodeResultList codes={codeList} query={code} />
    </div>
  );
};
