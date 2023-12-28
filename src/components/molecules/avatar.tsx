import React from "react";
import Image from "next/image";
import PandaImage from "@/app/_images/panda.png";
import RabbitImage from "@/app/_images/rabbit.png";
import CatImage from "@/app/_images/cat.png";

import { AccountIcon } from "../atoms/icons/account-icon";
import { IconProps } from "@/src/types/components";
import { cn } from "@/src/libs/utils";

interface Props extends IconProps {
  src?: string | null;
  className?: string;
  iconType?: string | "panda" | "rabbit" | "cat" | null | "";
}

export const Avatar = ({
  src,
  size = "md",
  className = "",
  iconType,
}: Props) => {
  // TODO リファクタリングする
  if (iconType) {
    let width = 40;
    let height = 40;
    if (size == "sm") width = 20;
    if (size == "sm") height = 20;

    if (iconType == "panda")
      return (
        <Image src={PandaImage} width={width} height={width} alt="image" />
      );
    if (iconType == "rabbit")
      return (
        <Image src={RabbitImage} width={width} height={width} alt="image" />
      );
    if (iconType == "cat")
      return <Image src={CatImage} width={width} height={width} alt="image" />;
  }

  if (!src)
    return (
      <AccountIcon
        className={cn(
          "text-gray-600",
          size == "sm" && "h-5 w-5",
          size == "md" && "h-10 w-10",
          size == "lg" && "h-12 w-12",
          className
        )}
      />
    );

  return <Image src={src} alt="avatar" width={40} height={40} />;
};
