"use client";

import React, { useState } from "react";
import Link from "next/link";

import { TopSection } from "./top-section";
import { SearchIcon } from "@/src/components/atoms/icons/search-icon";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useLanguageList } from "@/src/hooks/languages/useLanguageList";
import { FileIcon } from "@/src/components/molecules/displays/file-icon";
import { FileType } from "@/src/libs/editors";
import { Typo } from "@/src/components/atoms/texts/typo";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { Center } from "@/src/components/atoms/containers/Center";

export const TopLanguageSearchSection = () => {
  const [isShow, setIsShow] = useState(false);
  const { languageList } = useLanguageList();
  return (
    <TopSection className="bg-sky-100">
      <div className="flex flex-row items-center gap-2 mb-6">
        <SearchIcon />
        <Heading type="h2">言語検索</Heading>
      </div>

      <div className="grid grid-cols-4 gap-4 gap-y-12">
        {languageList.slice(0, 8).map((language) => (
          <div key={language.display}>
            <Link href={`/search/language/${language.name}`}>
              <Flex
                alignItems="center"
                gap={8}
                className="bg-white p-6 rounded-md hover:bg-gray-100"
              >
                <FileIcon
                  fileType={language?.name as FileType}
                  className="h-8 w-8"
                />
                <Typo text={language.display} size="lg" />
              </Flex>
            </Link>
          </div>
        ))}

        {/* TODO もっと見る機能を実装する */}
      </div>
      <Center className="mt-6">
        <div className="inline-block px-10 py-3 text-lg font-semibold border-2 rounded-lg border-gray-500">
          その他の言語は準備中です
        </div>
      </Center>
    </TopSection>
  );
};
