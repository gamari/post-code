import React from "react";

import { BsThreeDots } from "react-icons/bs";

interface Props {
  className?: string;
}

export const HDotIcon = ({ className = "" }: Props) => {
  return <BsThreeDots className={className} />;
};
