"use client";

import { Section } from "@/src/components/atoms/containers/section";
import { Heading } from "@/src/components/atoms/texts/heading";
import React from "react";
import { useLatestQaCodeList } from "./useLatestQaCodeList";
import { CodePanelList } from "@/src/components/organisms/codes/panel/code-panel-list";
import { Center } from "@/src/components/atoms/containers/Center";
import { Loader } from "@/src/components/molecules/displays/Loader";
import { MoreIcon } from "@/src/components/molecules/more-icon";

export const LatestQaListSection = () => {
  const { codeList, loading, nextPage, isDone } = useLatestQaCodeList();
  return (
    <Section className="mt-10">
      <Heading className="mb-3">最新質問一覧</Heading>
      <CodePanelList codes={codeList} />
      <Center className="mt-12">
        {loading ? (
          <Loader />
        ) : (
          <>{!isDone && <MoreIcon onClick={nextPage} />}</>
        )}
      </Center>
    </Section>
  );
};
