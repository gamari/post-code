import { Section } from "@/src/components/atoms/containers/section";
import { Description } from "@/src/components/atoms/texts/description";
import { Heading } from "@/src/components/atoms/texts/heading";
import React from "react";

export const LatestToolsSection = () => {
  return (
    <Section>
      <Heading>最新ツール記事</Heading>
      <Description className="p-2">
        最新のツール記事に関してです。下記のタグがついたものをまとめています。
      </Description>
    </Section>
  );
};
