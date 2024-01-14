import React from "react";

import { Heading } from "@/src/components/atoms/texts/heading";
import { SearchSection } from "../../search-section";
import { LanguageSearchResultCodeList } from "./LanguageSearchResultCodeList";
import {
  actionGetCodeListByLanguage,
} from "@/src/actions/codes";

interface Props {
  params: {
    language: string;
  };
}

const Page = async ({ params: { language } }: Props) => {
  const codeList = await actionGetCodeListByLanguage(language);
  return (
    <SearchSection className="max-w-7xl">
      <Heading className="mb-6">言語検索: {language}</Heading>

      <LanguageSearchResultCodeList codes={codeList} />
    </SearchSection>
  );
};

export default Page;
