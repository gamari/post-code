import React from "react";
import Image from "next/image";
import HeroImage from "../hero.jpg";

import { Heading } from "@/src/components/atoms/texts/heading";
import { Description } from "@/src/components/atoms/texts/description";
import { TopSection } from "./top-section";
import { Center } from "@/src/components/atoms/containers/Center";

export const TopAboutSection = () => {
  return (
    <TopSection className="bg-white">
      <div className="flex flex-row">
        <Center className="flex-1">
          <Image alt="image" src={HeroImage} width={300} height={280} />
        </Center>

        <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
          <Heading type="h2">BadCodesとは？</Heading>
          <Description>
            BadCodesとは、「コード」をベースとした記事投稿サイトになります。
          </Description>
          <Description>
            コードを元に記事を書き、そのコードをベースに意見交換を行ったり、発信をしたりすることが目的のサイトです。
          </Description>
        </div>
      </div>
    </TopSection>
  );
};
