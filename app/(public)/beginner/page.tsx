import React from "react";

import { TagBadge } from "@/src/components/atoms/badges/tag-badge";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { Container } from "@/src/components/atoms/containers/container";
import { Section } from "@/src/components/atoms/containers/section";
import { Description } from "@/src/components/atoms/texts/description";
import { Heading } from "@/src/components/atoms/texts/heading";
import { LinkPanel } from "@/src/components/organisms/link-panel";
import { LatestBeginnerCodeList } from "./LatestBeginnerCodeList";

const Page = () => {
  return (
    <Container>
      <Section className="mb-12">
        <Heading>「ビギナー」ページ</Heading>
        <Description>
          「初心者専用」のページです。以下のタグを含む記事が表示されます。
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
      </Section>

      <Section className="mb-12">
        <Heading>はじめに</Heading>
        <Description>
          はじめてアウトプットをする際にオススメの記事です。
        </Description>

        <Flex>
          <LinkPanel title="はじめてのアウトプット" url="https://post-codes.net/codes/38/detail" />
        </Flex>
      </Section>

      <Section className="mb-12">
        <Heading>「初心者」向け記事一覧</Heading>
        <LatestBeginnerCodeList />
      </Section>
    </Container>
  );
};

export default Page;
