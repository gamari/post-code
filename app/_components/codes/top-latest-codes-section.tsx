import React from "react";

import { TopLatestCodePanelList } from "./TopLatestCodePanelList";
import { Heading } from "@/src/components/atoms/texts/heading";
import { TopSection } from "../top-section";
import { LinkText } from "@/src/components/molecules/displays/link-text";

export const TopLatestCodesSection = async () => {
  return (
    <TopSection>
      <Heading type="h2">最新のコード</Heading>

      <TopLatestCodePanelList className="mt-6" />

      <div className="flex flex-col items-center justify-center mt-10">
        <LinkText url="/codes/more" label="もっと見る" />
      </div>
    </TopSection>
  );
};
