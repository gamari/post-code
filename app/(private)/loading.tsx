import React from "react";

import { Skeleton } from "@/src/components/molecules/displays/skeleton";
import { Center } from "@/src/components/atoms/containers/Center";

const Page = () => {
  return (
    <Center className="mt-10 max-w-5xl px-6">
      <Skeleton />
    </Center>
  );
};

export default Page;
