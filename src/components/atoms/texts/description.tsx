import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Description = ({ children, className }: Props) => {
  return <p className={className}>{children}</p>;
};
