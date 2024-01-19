import React from "react";

import { TagBadge } from "@/src/components/atoms/badges/tag-badge";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { Section } from "@/src/components/atoms/containers/section";
import { Description } from "@/src/components/atoms/texts/description";
import { Heading } from "@/src/components/atoms/texts/heading";
import { AiToolCodeList } from "./AiToolCodeList";

export const AiToolsSection = () => {
  return (
    <Section>
      <Heading>AIツール記事</Heading>
      <Description>
        AIに関するツール記事をまとめています。以下のタグがついたものが対象です。
      </Description>

      <Flex>
        <TagBadge
          tag={
            {
              name: "ツール",
            } as any
          }
        />
        <TagBadge
          tag={
            {
              name: "AI",
            } as any
          }
        />
      </Flex>

      <AiToolCodeList />
    </Section>
  );
};
