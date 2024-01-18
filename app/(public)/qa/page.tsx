import React from "react";

import { Flex } from "@/src/components/atoms/containers/Flex";
import { Section } from "@/src/components/atoms/containers/section";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Button } from "@/src/components/atoms/forms/button";

const Page = () => {
  return (
    <Flex direction="column" gap={64}>
      <Section className="mt-6">
        <Heading>質問</Heading>
        <Heading type="h4">初めに読む記事</Heading>
      </Section>

      <Section>
        <Button>質問する</Button>
      </Section>
    </Flex>
  );
};

export default Page;
