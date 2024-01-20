import React from "react";

import { Flex } from "@/src/components/atoms/containers/Flex";
import { Section } from "@/src/components/atoms/containers/section";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Button } from "@/src/components/atoms/forms/button";
import { Container } from "@/src/components/atoms/containers/container";

const initPage = "";

const Page = () => {
  return (
    <Container>
      <Section className="mt-6">
        <Heading>はじめに</Heading>
      </Section>

      <Section>
        <Button>質問する</Button>
      </Section>
    </Container>
  );
};

export default Page;
