import React from "react";

import { Flex } from "@/src/components/atoms/containers/Flex";
import { Section } from "@/src/components/atoms/containers/section";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Button } from "@/src/components/atoms/forms/button";

const initPage = "";

const Page = () => {
  return (
    <Flex direction="column" gap={64}>
      <Section className="mt-6">
        <Heading>はじめに</Heading>
      </Section>

      <Section>
        <Button>質問する</Button>
      </Section>
    </Flex>
  );
};

export default Page;
