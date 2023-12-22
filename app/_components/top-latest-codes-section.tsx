import React, { Suspense } from "react";

import { LatestCodePanelList } from "../../src/components/organisms/codes/panel/latest-code-panel-list";
import { Container } from "../../src/components/molecules/container";
import { Heading } from "@/src/components/atoms/texts/heading";

export const TopLatestCodesSection = () => {
  return (
    <section className="bg-sky-100 py-12 w-full">
      <Container>
        <Heading type="h2">最新</Heading>

        <LatestCodePanelList className="mt-6" />

        <div className="flex items-center justify-center mt-4">
          <Heading type="h4">もっと見る</Heading>
        </div>
      </Container>
    </section>
  );
};
