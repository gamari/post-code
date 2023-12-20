import React from "react";

import { LatestCodePanelList } from "../../src/components/organisms/bad-codes/code-panel/latest-code-panel-list";
import { Container } from "../../src/components/molecules/container";
import { Heading } from "@/src/components/atoms/texts/heading";

export const TopLatestCodesSection = () => {
  return (
    <section className="bg-sky-50 py-12">
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
