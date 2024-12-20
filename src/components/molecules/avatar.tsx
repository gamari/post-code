import React from "react";
import Image from "next/image";
import PandaImage from "@/app/_images/panda.png";
import RabbitImage from "@/app/_images/rabbit.png";
import CatImage from "@/app/_images/cat.png";
import WolfImage from "@/app/_images/wolf.png";

import { AccountIcon } from "../atoms/icons/account-icon";
import { IconProps } from "@/src/types/components";
import { cn } from "@/src/libs/utils";

interface Props extends IconProps {
  src?: string | null;
  className?: string;
  iconType?: string | "panda" | "rabbit" | "cat" | "walf" | null | "";
  avatarUrl?: string | null;
}

export const Avatar = ({
  src,
  size = "md",
  className = "",
  iconType,
  avatarUrl,
}: Props) => {
  // TODO リファクタリングする

  if (avatarUrl) {
    return (
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt="avatar"
        className={cn(
          "rounded-full",
          size == "sm" && "h-5 w-5",
          size == "md" && "h-9 w-9",
          size == "lg" && "h-12 w-12",
          className
        )}
      />
    );
  }

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

    if (iconType == "wolf")
      return <Image src={WolfImage} width={width} height={width} alt="image" />;
  }

  if (!src)
    return (
      <AccountIcon
        className={cn(
          "text-gray-600",
          size == "sm" && "h-5 w-5",
          size == "md" && "h-9 w-9",
          size == "lg" && "h-12 w-12",
          className
        )}
      />
    );

  return <Image src={src} alt="avatar" width={40} height={40} />;
};
