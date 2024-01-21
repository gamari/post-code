import React from "react";

import { LatestAiSection } from "./LatestAiSection";
import { Container } from "@/src/components/atoms/containers/container";
import { AiTopSection } from "./AiTopSection";

const Page = () => {
  return (
    <Container className="flex flex-col gap-10">
      <AiTopSection />
      <LatestAiSection />
    </Container>
  );
};

export default Page;
