import React from "react";
import { NoContent } from "../molecules/displays/no-content";

interface Props {
  isHidden: boolean;
  message?: string;
  children: React.ReactNode;
}

export const HiddenContainer = ({ isHidden, message, children }: Props) => {
  if (isHidden) {
    if (message) {
      return <NoContent>{message}</NoContent>;
    }
    return null;
  }

  return <>{children}</>;
};
