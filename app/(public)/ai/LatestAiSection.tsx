import React from "react";

import { TagBadge } from "@/src/components/atoms/badges/tag-badge";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { Section } from "@/src/components/atoms/containers/section";
import { Description } from "@/src/components/atoms/texts/description";
import { Heading } from "@/src/components/atoms/texts/heading";
import { LatestAiCodeList } from "./LatestAiCodeList";

export const LatestAiSection = () => {
  return (
    <Section>
      <Heading className="mb-3">最新AI記事</Heading>
      <LatestAiCodeList />
    </Section>
  );
};
