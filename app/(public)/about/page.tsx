import React from "react";

import { Flex } from "@/src/components/atoms/containers/Flex";
import { Section } from "@/src/components/atoms/containers/section";
import { AboutHeader } from "./about-header";
import { AboutConcept } from "./about-concept";
import { AboutResolve } from "./about-resolve";
import { TopFooter } from "@/app/_components/top-footer";

const Page = () => {
  return (
    <div className="pt-20">
      <Section className="max-w-7xl mx-auto bg-white rounded-lg p-12  mb-32">
        <Flex
          direction="column"
          alignItems="center"
          className="w-full"
          gap={128}
        >
          <AboutHeader />
          <AboutConcept />
          <AboutResolve />
        </Flex>
      </Section>

      <TopFooter />
    </div>
  );
};

export default Page;
