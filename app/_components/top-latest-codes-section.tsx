import React from "react";

import { Typo } from "../../src/components/atoms/texts/typo";
import { LatestCodePanelList } from "../../src/components/organisms/bad-codes/code-panel/latest-code-panel-list";
import { Container } from "../../src/components/molecules/container";

export const TopLatestCodesSection = () => {
  return (
    <section className="bg-sky-50 py-12">
      <Container>
        <Typo type="h1" text="最新" />

        <LatestCodePanelList className="mt-6" />

        <Typo type="h4" text="もっと見る" className="text-center mt-6" />
      </Container>
    </section>
  );
};
