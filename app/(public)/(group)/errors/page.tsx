import { Flex } from "@/src/components/atoms/containers/Flex";
import { Container } from "@/src/components/atoms/containers/container";
import { Section } from "@/src/components/atoms/containers/section";
import { Description } from "@/src/components/atoms/texts/description";
import { Heading } from "@/src/components/atoms/texts/heading";
import React from "react";

const Page = () => {
  return (
    <Container className="flex flex-col gap-10">
      <Section>
        <Flex justifyContent="between">
          <Heading>エラー記事</Heading>
        </Flex>
        <Description className="p-2">
          エラーと解決策に関する記事をまとめています。解決したものには「解決済み」をつけてください。
        </Description>
      </Section>
    </Container>
  );
};

export default Page;
