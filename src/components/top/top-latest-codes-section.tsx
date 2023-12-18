import React from "react";

import { Typo } from "../base/typo";
import { CodeLatestList } from "../codes/code-latest-list";
import { Container } from "../base/container";

export const TopLatestCodesSection = () => {
  return (
    <section className="bg-sky-50 py-12">
      <Container>
        <Typo type="h1" text="最新" />

        <CodeLatestList className="mt-6" />

        <Typo type="h4" text="もっと見る" className="text-center mt-6" />
      </Container>
    </section>
  );
};
