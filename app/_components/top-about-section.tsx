import React from "react";
import Image from "next/image";
import HeroImage from "../hero.jpg";

import { Heading } from "@/src/components/atoms/texts/heading";
import { Description } from "@/src/components/atoms/texts/description";
import { TopSection } from "./top-section";
import { Center } from "@/src/components/atoms/containers/Center";
import { APP_TITLE } from "@/src/libs/constants";
import { Button } from "@/src/components/atoms/buttons/button";
import Link from "next/link";

export const TopAboutSection = () => {
  return (
    <TopSection className="bg-white">
      <div className="flex flex-row">
        <Center className="flex-1">
          <Image alt="image" src={HeroImage} width={300} height={280} />
        </Center>

        <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
          <Heading type="h2">{APP_TITLE}とは？</Heading>
          <Description>
            {APP_TITLE}とは、「コード」をベースとした記事投稿サイトになります。
          </Description>
          <Description>
            コードを元に記事を書き、そのコードをベースに意見交換を行ったり、発信をしたりすることが目的のサイトです。
          </Description>

          <div className="mt-2">
            <Button className="w-[250px]" asChild>
              <Link href="/about">詳しく見る</Link>
            </Button>
          </div>
        </div>
      </div>
    </TopSection>
  );
};
