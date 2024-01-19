import React from "react";

import { cn } from "@/src/libs/utils";
import { Flex } from "../atoms/containers/Flex";
import { Typo } from "../atoms/texts/typo";
import { CodeIcon } from "../atoms/icons/code-icon";
import Link from "next/link";

interface Props {
  title: string;
  url: string;
  className?: string;
}

export const LinkPanel = ({ url, title, className }: Props) => {
  return (
    <Link href={url}>
      <Flex
        alignItems="center"
        gap={20}
        className={cn("px-6 py-8 rounded-lg bg-white ", className)}
      >
        <CodeIcon size="lg" />

        <div className="flex flex-col justify-between gap-2 h-full w-full">
          <Typo text={title} size="lg" isBold />
        </div>
      </Flex>
    </Link>
  );
};
