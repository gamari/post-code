"use client";

import React from "react";

import { useLatestBeginnerCodeList } from "./useLatestBeginnerCodeList";
import { NoContent } from "@/src/components/molecules/displays/no-content";
import { CodePanelList } from "@/src/components/organisms/codes/panel/code-panel-list";
import { Center } from "@/src/components/atoms/containers/Center";
import { DownIcon } from "@/src/components/atoms/icons/down-icon";
import { Loader } from "@/src/components/molecules/displays/Loader";
import { MoreIcon } from "@/src/components/molecules/more-icon";

export const LatestBeginnerCodeList = () => {
  const { codeList, loading, nextPage, isDone } = useLatestBeginnerCodeList();

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
