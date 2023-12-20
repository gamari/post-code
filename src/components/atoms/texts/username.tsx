import React from "react";

interface Props {
  value: string;
  className?: string;
}

export const Username = ({ value, className = "" }: Props) => {
  return <span className={className}>{value}</span>;
};
