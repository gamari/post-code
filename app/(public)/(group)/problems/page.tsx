import { Container } from "@/src/components/atoms/containers/container";
import React from "react";
import { ProblemTopSection } from "./ProblemTopSection";
import { LatestProblemListSection } from "./LatestProblemListSection";

const Page = () => {
  return (
    <Container className="flex flex-col gap-10">
      <ProblemTopSection />
      <LatestProblemListSection />
    </Container>
  );
};

export default Page;
