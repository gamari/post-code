import React from "react";

import { SlNote } from "react-icons/sl";

import { Flex } from "@/src/components/atoms/containers/Flex";
import { CodeIcon } from "@/src/components/atoms/icons/code-icon";

export const AboutConcept = () => {
  return (
    <Flex direction="column" alignItems="center" gap={24}>
      <div className="text-sky-600 text-2xl font-bold">コンセプト</div>
      <div className="text-xl text-gray-600">「文字」から「コード」へ</div>

      <Flex gap={64}>
        <ConceptCard
          icon={<SlNote className="h-12 w-12 p-1" />}
          title="従来"
          description="従来の投稿サイトでは「文字」を中心に記事を書いていました。文字は抽象的なことを表現するのには向いていますが、具体的なノウハウに関しては曖昧さが残るという課題があります。"
        />

        <ConceptCard
          icon={<CodeIcon size="xl" />}
          title="PostCode"
          description="PostCodeでは「コード」を中心に記事を書きます。コードは具体的なノウハウを表現するのに向いています。"
        />
      </Flex>
    </Flex>
  );
};

const ConceptCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      className="border shadow-sm rounded-sm p-4 w-[300px] h-[250px]"
      gap={12}
    >
      <div className="text-2xl text-gray-600">{title}</div>
      {icon}

      <div className="text-gray-700 text-sm leading-6">{description}</div>
    </Flex>
  );
};
