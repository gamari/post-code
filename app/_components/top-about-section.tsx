import React from "react";
import { Container } from "../../src/components/molecules/container";
import { MockBlock } from "../../src/components/molecules/displays/mock-block";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Description } from "@/src/components/atoms/texts/description";
import { TopSection } from "./top-section";

export const TopAboutSection = () => {
  return (
    <TopSection className="bg-white">
      <div className="flex flex-row">
        <div className="flex-1">
          <MockBlock height={300} />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
          <Heading type="h2">BadCodesとは？</Heading>
          <Description>
            「アンチパターン」や「リファクタリングすべきコード」を題材に、それに関して解決策を出したり、議論し合うためのサイトです。
          </Description>
        </div>
      </div>
    </TopSection>
  );
};
