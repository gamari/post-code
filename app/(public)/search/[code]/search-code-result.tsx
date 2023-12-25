import React from "react";
import { unstable_noStore } from "next/cache";

import { actionGetCodeListByFileCode } from "@/src/actions/codes";
import { SearchCodeResultList } from "./SearchCodeResultList";
import { Heading } from "@/src/components/atoms/texts/heading";

interface Props {
  code: string;
}

export const SearchCodeResult = async ({ code }: Props) => {
  unstable_noStore();
  const codeList = await actionGetCodeListByFileCode(code);

  return (
    <div>
      <Heading className="mb-6">検索: {code}</Heading>

      <SearchCodeResultList codes={codeList} query={code} />
    </div>
  );
};