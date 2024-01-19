import React from "react";

import { Flex } from "@/src/components/atoms/containers/Flex";
import { Section } from "@/src/components/atoms/containers/section";
import { AiToolsSection } from "./AiToolsSection";
import { Button } from "@/src/components/atoms/forms/button";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Container } from "@/src/components/atoms/containers/container";
import { Description } from "@/src/components/atoms/texts/description";

const Page = () => {
  return (
    <Container className="flex flex-col gap-10">
      <Section>
        <Flex justifyContent="between">
          <Heading>AI記事</Heading>
          <div>
            {/* TODO ログイン判定をする */}
            <Button>AI記事を作成</Button>
          </div>
        </Flex>
        <Description className="p-2">
          AIに関する記事をまとめたページです。以下のタグがついたものをまとめています。
        </Description>
      </Section>

      <AiToolsSection />
    </Container>
  );
};

export default Page;
