import React from "react";

import { Container } from "@/src/components/atoms/containers/container";
import { QaTopSection } from "./QaTopSection";
import { LatestQaListSection } from "./LatestQaListSection";

const initPage = "";

const Page = () => {
  return (
    <Container>
      <QaTopSection />
      <LatestQaListSection />
    </Container>
  );
};

export default Page;
