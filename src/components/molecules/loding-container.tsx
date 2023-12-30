import React from "react";
import { Loader } from "./displays/Loader";
import { Center } from "../atoms/containers/Center";

interface Props {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
}

export const LoadingContainer = ({ isLoading, children, className }: Props) => {
  if (isLoading)
    return (
      <Center className={className}>
        <Loader />
      </Center>
    );

  return <div className={className}>{children}</div>;
};
