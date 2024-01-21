import React from "react";

import { Container } from "@/src/components/atoms/containers/container";
import { LatestBeginnerSection } from "./LatestBeginnerSection";
import { BeginnerTopSection } from "./BeginnerTopSection";

const Page = () => {
  return (
    <Container>
      <BeginnerTopSection />
      <LatestBeginnerSection />
    </Container>
  );
};

export default Page;
