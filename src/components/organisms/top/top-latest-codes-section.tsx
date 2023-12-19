import React from "react";

import { Typo } from "../../atoms/typo";
import { LatestCodePanelList } from "../shared/latest-code-panel-list";
import { Container } from "../../molecules/container";

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
