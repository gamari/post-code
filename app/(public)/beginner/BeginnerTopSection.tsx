import { TagBadge } from "@/src/components/atoms/badges/tag-badge";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { Card } from "@/src/components/atoms/containers/card";
import { Section } from "@/src/components/atoms/containers/section";
import { Description } from "@/src/components/atoms/texts/description";
import { Heading } from "@/src/components/atoms/texts/heading";
import { LinkPanel } from "@/src/components/organisms/link-panel";
import React from "react";

export const BeginnerTopSection = () => {
  return (
    <Section className="mb-12">
      <Heading>「ビギナー」ページ</Heading>
      <Card className="my-2">
        <Description className="mb-2">
          経験が浅い方向けのページです。以下のタグが付いた記事をまとめています。
        </Description>
        <Flex alignItems="center" gap={8}>
          <TagBadge
            tag={
              {
                name: "初心者",
              } as any
            }
          />
        </Flex>
      </Card>

      <Heading type="h4" className="mt-4 mb-3">
        オススメ記事
      </Heading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <LinkPanel
          title="はじめてのアウトプット"
          url="https://post-codes.net/codes/38/detail"
        />
      </div>
    </Section>
  );
};
