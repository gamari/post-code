import React from "react";

import { SlNote } from "react-icons/sl";

import { Flex } from "@/src/components/atoms/containers/Flex";
import { CodeIcon } from "@/src/components/atoms/icons/code-icon";

export const AboutConcept = () => {
  return (
    <Flex direction="column" alignItems="center" gap={24}>
      <div className="text-sky-600 text-2xl font-bold">コンセプト</div>
      <div>「記事」から「コード」へ</div>

      <Flex gap={64}>
        <Flex
          direction="column"
          alignItems="center"
          className="border p-4 w-[300px] h-[250px]"
          gap={12}
        >
          <div className="text-2xl text-gray-600">従来の内容</div>
          <SlNote className="h-12 w-12 p-1" />

          <div className="text-gray-700 text-sm">
            従来は「文章」を中心に書いていました。コードを書きたい場合は、文章の中に入れ込む形で書いていました。
          </div>
        </Flex>

        <Flex
          direction="column"
          alignItems="center"
          className="border p-4 w-[300px] h-[250px]"
          gap={12}
        >
          <div className="text-2xl text-gray-600">PostCodeの内容</div>
          <CodeIcon size="xl" />
          <div className="text-gray-700 text-sm">
            PostCodeでは「コード」中心に記事を書きます。全体の概要はもちろん、コードの説明なども書けます。
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};
