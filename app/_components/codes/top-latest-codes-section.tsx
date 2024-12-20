import React from "react";

import { TopLatestCodePanelList } from "./top-latest-code-panel-list";
import { Heading } from "@/src/components/atoms/texts/heading";
import { TopSection } from "../top-section";
import { Logo } from "@/src/components/molecules/logo";
import { Typo } from "@/src/components/atoms/texts/typo";
import { MoreButton } from "@/src/components/molecules/forms/buttons/more-button";
import { Center } from "@/src/components/atoms/containers/Center";

export const TopLatestCodesSection = async () => {
  return (
    <TopSection>
      <Heading type="h2" className="flex flex-row items-center gap-2">
        <Logo />
        <Typo text="最新の記事" />
      </Heading>

      <TopLatestCodePanelList className="mt-6" />

      <Center className="mt-20">
        <MoreButton url="/codes/more" />
      </Center>
    </TopSection>
  );
};
