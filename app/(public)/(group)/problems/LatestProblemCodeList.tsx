"use client";

import React from "react";
import { useLatestProblemCodeList } from "./useLatestProblemCodeList";
import { CodePanelList } from "@/src/components/organisms/codes/panel/code-panel-list";
import { Center } from "@/src/components/atoms/containers/Center";
import { Loader } from "@/src/components/molecules/displays/Loader";
import { MoreIcon } from "@/src/components/molecules/more-icon";
import { NoContent } from "@/src/components/molecules/displays/no-content";

export const LatestProblemCodeList = () => {
  const { codeList, loading, nextPage, isDone } = useLatestProblemCodeList();

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
