import React from "react";

import { Flex } from "@/src/components/atoms/containers/Flex";
import { BsCollection, BsMegaphone } from "react-icons/bs";
import { Center } from "@/src/components/atoms/containers/Center";
import { MdOutlineColorLens } from "react-icons/md";

export const AboutResolve = () => {
  return (
    <Flex direction="column" alignItems="center" gap={12}>
      <div className="text-sky-600 font-bold text-2xl">目指す場所</div>

      <div className="text-xl mb-4">
        PostCodeでは次のようなサイトを目指しています。
      </div>

      <Flex direction="column" alignItems="stretch" gap={64}>
        <ResolveCard
          icon={<BsCollection className="h-12 w-12 p-1" />}
          title="具体的なノウハウを蓄積する場所へ"
          description="「具体的な内容」を蓄積し、すぐにアクセスできる場所を目指していきます。"
        />

        <ResolveCard
          icon={<MdOutlineColorLens className="h-12 w-12 p-1" />}
          title="多くのパターンを残す場所へ"
          description="ファイル機能を使い、複数パターンを皆でシェアすることを目指していきます。"
          isReverse
        />

        <ResolveCard
          icon={<BsMegaphone className="h-12 w-12 p-1" />}
          title="アウトプットの場所へ"
          description="抽象的な説明を冒頭でし、そのアウトプットができるかを試せる場所を目指していきます。"
        />
      </Flex>
    </Flex>
  );
};

export const ResolveCard = ({
  icon,
  title,
  description,
  isReverse = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isReverse?: boolean;
}) => {
  return (
    <Flex
      direction={isReverse ? "row-reverse" : "row"}
      alignItems="center"
      gap={12}
    >
      <Flex direction="column" className="flex-1">
        <div className="text-lg text-sky-600 mb-6">{title}</div>
        <div className="text-gray-700 text-sm leading-6">{description}</div>
      </Flex>

      <Center className="flex-1">{icon}</Center>
    </Flex>
  );
};
