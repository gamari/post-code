import React from "react";

import { Container } from "@/src/components/atoms/containers/container";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Toggle } from "@/src/components/ui/toggle";
import { actionGetUserById } from "@/src/actions/users";
import { UserInfoCard } from "@/src/components/organisms/users/user-info-card";
import { actionGetCodeListByUser } from "@/src/actions/codes";
import { CodePanelList } from "@/src/components/organisms/codes/panel/code-panel-list";

interface Props {
  params: {
    user_id: string;
  };
}

const Page = async ({ params: { user_id } }: Props) => {
  const user = await actionGetUserById(user_id);
  const codes = await actionGetCodeListByUser(user_id);
  console.log(user);

  return (
    <Container className="pt-10">
      <Flex gap={48}>
        <UserInfoCard user={user} className="w-[260px]" />
        <div className="flex-1">
          <Heading type="h2">作成した記事</Heading>
          <Flex className="my-4">
            <Toggle pressed className="cursor-text">
              最新
            </Toggle>
          </Flex>

          <CodePanelList codes={codes} className="mb-32" />
        </div>
      </Flex>
    </Container>
  );
};

export default Page;
