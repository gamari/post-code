import { Flex } from "@/src/components/atoms/containers/Flex";
import { Heading } from "@/src/components/atoms/texts/heading";
import { DeleteUserButton } from "@/src/components/organisms/users/DeleteUserButton";
import React from "react";

const Page = () => {
  return (
    <div className="p-10">
      <Heading className="mb-6">その他の操作</Heading>

      <Flex direction="column">
        <DeleteUserButton />
      </Flex>
    </div>
  );
};

export default Page;
