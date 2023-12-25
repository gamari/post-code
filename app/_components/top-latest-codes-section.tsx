import React from "react";

import { LatestCodePanelList } from "../../src/components/organisms/codes/panel/latest-code-panel-list";
import { Heading } from "@/src/components/atoms/texts/heading";
import { TopSection } from "./top-section";

export const TopLatestCodesSection = () => {
  return (
    <TopSection>
      <Heading type="h2">最新のコード</Heading>

      <LatestCodePanelList className="mt-6" />

      <div className="flex items-center justify-center mt-4">
        <Heading type="h4">もっと見る</Heading>
      </div>
    </TopSection>
  );
};
