"use client";

import React from "react";

import { useFetchLatestCodeList } from "@/src/hooks/codes/useFetchLatestCodeList";
import { CodePanelList } from "@/src/components/organisms/codes/panel/code-panel-list";
import { Heading } from "@/src/components/atoms/texts/heading";
import { DownIcon } from "@/src/components/atoms/icons/down-icon";
import { Center } from "@/src/components/atoms/containers/Center";
import { LoadingContainer } from "@/src/components/molecules/loding-container";

export const MorePage = () => {
  const { codeList, fetchMoreCodeList, loading, isDone } =
    useFetchLatestCodeList();

  return (
    <div className="max-w-5xl w-full mx-auto px-10 lg:px-0 py-24 lg:py-16">
      <Heading type="h2" className="mb-6">
        最新コード一覧
      </Heading>

      <CodePanelList codes={codeList} />

      {!isDone && (
        <LoadingContainer isLoading={loading} className="mt-20">
          <Center>
            <DownIcon
              onClick={fetchMoreCodeList}
              size="lg"
              className="rounded-full border-2 border-gray-500 cursor-pointer hover:text-sky-500"
            />
          </Center>
        </LoadingContainer>
      )}
    </div>
  );
};
