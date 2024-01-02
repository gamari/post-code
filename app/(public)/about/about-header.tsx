import { Flex } from "@/src/components/atoms/containers/Flex";
import React from "react";

export const AboutHeader = () => {
  return (
    <Flex direction="column" alignItems="center" gap={12}>
      <div className="text-3xl text-gray-600">PostCodeとは</div>
      <div>
        <div>コードをベースに投稿するエンジニア向けノウハウサイトです。</div>
      </div>
    </Flex>
  );
};
