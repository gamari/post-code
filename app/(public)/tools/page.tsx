import { Flex } from "@/src/components/atoms/containers/Flex";
import { Section } from "@/src/components/atoms/containers/section";
import { Description } from "@/src/components/atoms/texts/description";
import { Heading } from "@/src/components/atoms/texts/heading";
import React from "react";
import { LatestToolsCodePanelList } from "./LatestToolsCodePanelList";

const Page = () => {
  return (
    <Flex direction="column" gap={64}>
      <Section>
        <Heading>ツール記事</Heading>
        <Description className="p-2">
          ツールに関する記事をまとめたページです。
        </Description>

        <LatestToolsCodePanelList />
      </Section>

      <Section>
        <Heading>AIツール</Heading>
        <Description className="p-2">
          タグに「ツール」「AI」がついたものを表示しています。
        </Description>
      </Section>
    </Flex>
  );
};

export default Page;
