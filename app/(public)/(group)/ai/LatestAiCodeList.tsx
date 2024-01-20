"use client";

import React from "react";
import { useLatestAiCodeList } from "./useLatestAiCodeList";
import { CodePanelList } from "@/src/components/organisms/codes/panel/code-panel-list";
import { NoContent } from "@/src/components/molecules/displays/no-content";
import { DownIcon } from "@/src/components/atoms/icons/down-icon";
import { Loader } from "@/src/components/molecules/displays/Loader";
import { Center } from "@/src/components/atoms/containers/Center";

export const LatestAiCodeList = () => {
  const { codeList, nextPage, loading, isDone } = useLatestAiCodeList();

  if (!loading && !codeList?.length)
    return <NoContent>記事が存在しません</NoContent>;

  return (
    <div>
      <CodePanelList codes={codeList} />
      <Center>
        {loading ? (
          <Loader />
        ) : (
          <>{!isDone && <DownIcon className="mt-12" onClick={nextPage} />}</>
        )}
      </Center>
    </div>
  );
};
