import React from "react";

import { TagBadge } from "@/src/components/atoms/badges/tag-badge";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { Container } from "@/src/components/atoms/containers/container";
import { Section } from "@/src/components/atoms/containers/section";
import { Description } from "@/src/components/atoms/texts/description";
import { Heading } from "@/src/components/atoms/texts/heading";
import { LinkPanel } from "@/src/components/organisms/link-panel";
import { LatestBeginnerCodeList } from "./LatestBeginnerCodeList";
import { LatestBeginnerSection } from "./LatestBeginnerSection";
import { BeginnerTopSection } from "./BeginnerTopSection";

const Page = () => {
  return (
    <Container>
      <BeginnerTopSection />
      <LatestBeginnerSection />
    </Container>
  );
};

export default Page;
