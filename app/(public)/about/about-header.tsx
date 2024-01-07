import { Flex } from "@/src/components/atoms/containers/Flex";
import React from "react";

export const AboutHeader = () => {
  return (
    <Flex direction="column" alignItems="center" gap={12}>
      <div className="text-3xl text-gray-600 font-bold">PostCodeとは</div>
      <div className="mt-3 text-lg">
        <div>コードベースのエンジニア向け記事投稿サイトです。</div>
      </div>
    </Flex>
  );
};
