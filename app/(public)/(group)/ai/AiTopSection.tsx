import React from "react";

import { TagBadge } from "@/src/components/atoms/badges/tag-badge";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { Section } from "@/src/components/atoms/containers/section";
import { Description } from "@/src/components/atoms/texts/description";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Card } from "@/src/components/molecules/displays/card";

export const AiTopSection = () => {
  return (
    <Section>
      <Flex alignItems="center" justifyContent="between" className="mb-3">
        <Heading>「AI」ページ</Heading>
        <div>
          {/* TODO ログイン判定をする */}
          {/* <Button>AI記事を作成</Button> */}
        </div>
      </Flex>

      <Card className="p-6">
        <Description className="p-2">
          AIに関する記事をまとめたページです。以下のタグがついたものをまとめています。
        </Description>
        <Flex>
          <TagBadge
            tag={
              {
                name: "AI",
              } as any
            }
          />
        </Flex>
      </Card>
    </Section>
  );
};
