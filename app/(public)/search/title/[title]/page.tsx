import React from "react";
import { unstable_noStore } from "next/cache";

import { SearchSection } from "../../search-section";
import { CodePanelList } from "@/src/components/organisms/codes/panel/code-panel-list";
import { Heading } from "@/src/components/atoms/texts/heading";
import {
  actionGetCodeListByFileCode,
  actionGetCodeListByTitle,
} from "@/src/actions/codes";
import { SearchTitleResultList } from "./SearchTitleResultList";

interface Props {
  params: {
    title: string;
  };
}

const Page = async ({ params: { title } }: Props) => {
  unstable_noStore();
  const decodedTitle = decodeURIComponent(title);
  const codeList = await actionGetCodeListByTitle(decodedTitle);

  return (
    <SearchSection className="max-w-4xl">
      <Heading className="mb-6">タイトル検索: {decodedTitle}</Heading>

      {codeList.length === 0 && (
        <div className="bg-white p-6 rounded-md">見つかりませんでした</div>
      )}

      <SearchTitleResultList title={decodedTitle} codes={codeList} />
    </SearchSection>
  );
};

export default Page;
