import React from "react";

import { Flex } from "@/src/components/atoms/containers/Flex";
import { Section } from "@/src/components/atoms/containers/section";
import { Center } from "@/src/components/atoms/containers/Center";

const Page = () => {
  return (
    <div className="pt-20">
      <Section className="max-w-7xl mx-auto bg-white">
        <Flex direction="column" className="w-full bg-yellow-50">
          <Flex justifyContent="between" className="w-full">
            <Center className="h-[200px] flex-1">
                PostCodeとは？
            </Center>
            <Center className="flex-1 h-[200px]">
                <div>コードをベースに投稿するサイトです。</div>
                <div>従来の投稿サイトとは「コード」</div>
            </Center>
          </Flex>
        </Flex>
      </Section>
    </div>
  );
};

export default Page;
