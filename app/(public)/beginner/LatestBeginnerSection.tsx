import { Section } from "@/src/components/atoms/containers/section";
import { Heading } from "@/src/components/atoms/texts/heading";
import React from "react";
import { LatestBeginnerCodeList } from "./LatestBeginnerCodeList";

export const LatestBeginnerSection = () => {
  return (
    <Section className="mb-12">
      <Heading className="mb-6">「ビギナー」記事一覧</Heading>
      <LatestBeginnerCodeList />
    </Section>
  );
};
