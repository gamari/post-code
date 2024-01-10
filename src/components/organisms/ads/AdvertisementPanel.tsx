import React from "react";
import { Flex } from "../../atoms/containers/Flex";
import { cn } from "@/src/libs/utils";

interface Props {
  className?: string;
}

export const AdvertisementPanel = ({ className }: Props) => {
  return (
    <Flex className={cn("px-6 py-8 rounded-lg bg-white h-[132px]", className)}>
      AdvertisementPanel
    </Flex>
  );
};
