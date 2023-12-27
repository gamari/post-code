"use client";

import React from "react";

import { useFetchLatestCodeList } from "@/src/hooks/codes/useFetchLatestCodeList";
import { CodePanelList } from "@/src/components/organisms/codes/panel/code-panel-list";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Loader } from "@/src/components/molecules/displays/Loader";

export const MorePage = () => {
  const { codeList, fetchMoreCodeList, loading } = useFetchLatestCodeList();

  return (
    <div className="max-w-5xl w-full mx-auto pt-12 pb-32">
      <Heading type="h2" className="mb-6">
        最新コード一覧
      </Heading>

      <CodePanelList codes={codeList} />

      {loading && <Loader />}

      <div className="mt-10 p-4  flex items-center justify-center">
        <div
          className="hover:text-sky-500 cursor-pointer"
          onClick={fetchMoreCodeList}
        >
          もっと見る
        </div>
      </div>
    </div>
  );
};
