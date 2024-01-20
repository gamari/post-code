import React from "react";

import { Flex } from "@/src/components/atoms/containers/Flex";
import { Section } from "@/src/components/atoms/containers/section";
import { Button } from "@/src/components/atoms/forms/button";
import { Description } from "@/src/components/atoms/texts/description";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Card } from "@/src/components/molecules/displays/card";
import { TagBadge } from "@/src/components/atoms/badges/tag-badge";

export const QaTopSection = () => {
  return (
    <Section>
      <Flex justifyContent="between">
        <Heading>質問ページ</Heading>
        {/* <Button>質問する</Button> */}
      </Flex>
      <Card className="p-4 mt-2">
        <Description>
          質問をまとめたページになります。以下のタグのいずれかがついたものを表示しています。
        </Description>
        <Flex className="mt-2">
          <TagBadge tag={{ name: "質問" } as any} />
        </Flex>
      </Card>
    </Section>
  );
};
