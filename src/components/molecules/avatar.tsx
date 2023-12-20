import React from "react";
import { PersonIcon } from "../atoms/icons/person-icon";
import Image from "next/image";

interface Props {
  src?: string;
  className?: string;
}

export const Avatar = ({ src, className = "" }: Props) => {
  if (!src) return <PersonIcon />;

  return <Image src={src} alt="avatar" width={40} height={40} />;
};
