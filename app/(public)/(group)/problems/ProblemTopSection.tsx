import { TagBadge } from "@/src/components/atoms/badges/tag-badge";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { Section } from "@/src/components/atoms/containers/section";
import { Description } from "@/src/components/atoms/texts/description";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Card } from "@/src/components/molecules/displays/card";
import React from "react";

export const ProblemTopSection = () => {
  return (
    <Section>
      <Flex justifyContent="between">
        <Heading>「問題」ページ</Heading>
        {/* <Button>質問する</Button> */}
      </Flex>
      <Card className="p-4 mt-2">
        <Description>
          問題をまとめたページになります。以下のタグをつけたものをまとめています。
        </Description>
        <Flex className="mt-2" gap={8}>
          <TagBadge tag={{ name: "問題" } as any} />
          <TagBadge tag={{ name: "クイズ" } as any} />
        </Flex>
      </Card>
    </Section>
  );
};
