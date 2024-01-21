import React from "react";

import { Flex } from "@/src/components/atoms/containers/Flex";
import { Section } from "@/src/components/atoms/containers/section";
import { Description } from "@/src/components/atoms/texts/description";
import { Heading } from "@/src/components/atoms/texts/heading";
import { LatestToolsSection } from "./LatestToolsSection";
import { Button } from "@/src/components/atoms/forms/button";
import { Container } from "@/src/components/atoms/containers/container";

const Page = () => {
  return (
    <Container className="flex flex-col gap-10">
      <Section>
        <Flex justifyContent="between">
          <Heading>ツール記事</Heading>
          <div>
            {/* TODO ログイン判定をする */}
            <Button>ツール記事を作成</Button>
          </div>
        </Flex>
        <Description className="p-2">
          ツールに関する記事をまとめたページです。以下のタグがついたものをまとめています。
        </Description>
      </Section>

      <LatestToolsSection />
    </Container>
  );
};

export default Page;
