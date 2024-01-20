"use client";

import React from "react";
import { useLatestAiCodeList } from "./useLatestAiCodeList";
import { CodePanelList } from "@/src/components/organisms/codes/panel/code-panel-list";
import { NoContent } from "@/src/components/molecules/displays/no-content";
import { Loader } from "@/src/components/molecules/displays/Loader";
import { Center } from "@/src/components/atoms/containers/Center";
import { MoreIcon } from "@/src/components/molecules/more-icon";

export const LatestAiCodeList = () => {
  const { codeList, nextPage, loading, isDone } = useLatestAiCodeList();

  if (!loading && !codeList?.length)
    return <NoContent>記事が存在しません</NoContent>;

  return (
    <div>
      <CodePanelList codes={codeList} />
      <Center className="mt-12">
        {loading ? (
          <Loader />
        ) : (
          <>{!isDone && <MoreIcon onClick={nextPage} />}</>
        )}
      </Center>
    </div>
  );
};
