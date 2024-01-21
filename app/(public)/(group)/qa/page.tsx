import React from "react";

import { Container } from "@/src/components/atoms/containers/container";
import { QaTopSection } from "./QaTopSection";
import { LatestQaListSection } from "./LatestQaListSection";

const initPage = "";

const Page = () => {
  return (
    <Container className="flex flex-col gap-10">
      <QaTopSection />
      <LatestQaListSection />
    </Container>
  );
};

export default Page;
